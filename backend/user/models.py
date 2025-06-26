from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone
import jwt
import datetime
import hashlib
import secrets
from django.conf import settings


class UserManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError("Users must have an email")
        email = self.normalize_email(email)
        user = self.model(email=email, name=name)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, name, password):
        user = self.create_user(email, name, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    role = models.CharField(max_length=20, default='user')
    reset_password_token = models.CharField(max_length=128, blank=True, null=True)
    reset_password_token_expire = models.DateTimeField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=timezone.now)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email

    def generate_jwt_token(self):
        expiry = datetime.datetime.utcnow() + datetime.timedelta(days=7)
        token = jwt.encode(
            {'id': self.id, 'exp': expiry},
            settings.SECRET_KEY,
            algorithm='HS256'
        )
        return token

    def generate_reset_token(self):
        token = secrets.token_hex(20)
        self.reset_password_token = hashlib.sha256(token.encode()).hexdigest()
        self.reset_password_token_expire = timezone.now() + datetime.timedelta(minutes=30)
        self.save()
        return token
