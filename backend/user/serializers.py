from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate,get_user_model

User = get_user_model()

"""
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            name=validated_data['name'],
            password=validated_data['password']
        )
        return user 
"""
class RegisterSerializer(serializers.ModelSerializer):
    avatar = serializers.ImageField(required=False, allow_null=True)  # Add this

    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password', 'avatar']  # Include avatar
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        avatar = validated_data.pop('avatar', None)
        user = User.objects.create_user(
            email=validated_data['email'],
            name=validated_data['name'],
            password=validated_data['password']
        )
        if avatar:
            user.avatar = avatar
            user.save()
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(**data)
        if not user:
            raise serializers.ValidationError("Invalid login credentials")
        return {
            'user': user,
            'token': user.generate_jwt_token()
        }

class UserSerializer(serializers.ModelSerializer):
    avatar = serializers.ImageField()  # Ensure avatar is included in response

    class Meta:
        model = User
        #fields = ['id', 'name', 'email', 'avatar']  # Include avatar
        #fields = ['id', 'name', 'email', 'avatar', 'role', 'created_at']
        fields = '__all__'
'''
id(pin):15
avatar(pin):"/media/avatars/pexels-aj4xo-31401787.jpg"
password(pin):"pbkdf2_sha256$1000000$pQCiEGebV2HN3GfnRW7pBy$JgivJtmZISrUiPQAZTdRQBXVsLFJNJJ8Rjj5so/WToA="
last_login(pin):null
is_superuser(pin):false
name(pin):"shanks"
email(pin):"sshan@gmail.com"
role(pin):"user"
reset_password_token(pin):null
reset_password_token_expire(pin):null
is_active(pin):true
is_staff(pin):false
created_at(pin):"2025-05-07T11:25:23.634844Z"
groups(pin):
user_permissions(pin):

'''