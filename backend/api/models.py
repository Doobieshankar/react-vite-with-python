from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

class Product(models.Model):
    CATEGORY_CHOICES = [
        ('Electronics', 'Electronics'),
        ('Mobile Phones', 'Mobile Phones'),
        ('Laptops', 'Laptops'),
        ('Accessories', 'Accessories'),
        ('Headphones', 'Headphones'),
        ('Food', 'Food'),
        ('Books', 'Books'),
        ('Clothes/Shoes', 'Clothes/Shoes'),
        ('Beauty/Health', 'Beauty/Health'),
        ('Sports', 'Sports'),
        ('Outdoor', 'Outdoor'),
        ('Home', 'Home'),
    ]

    name = models.CharField(max_length=100, blank=False)
    price = models.FloatField(default=0.0)
    description = models.TextField(blank=False)
    ratings = models.FloatField(default=0)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    seller = models.CharField(max_length=255, blank=False)
    stock = models.PositiveIntegerField()
    num_of_reviews = models.PositiveIntegerField(default=0)
    """ user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True) """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='product_images/')
    
    def __str__(self):
        return f"Image for {self.product.name}"

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews')
    """ user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True) """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)

    rating = models.FloatField()
    comment = models.TextField()

    def __str__(self):
        return f"Review by {self.user.username if self.user else 'Unknown'} on {self.product.name}"
'''
Key Points:
ForeignKeys link reviews and images to products (just like Mongoose refs).

Category is handled with Django's choices.

ProductImage is a separate model because Django doesn't allow lists inside fields directly like MongoDB — relational databases work differently.

Rating is a float, assuming partial ratings like 4.5 are allowed.

ImageField is used for storing images (you'll need to configure MEDIA_ROOT and MEDIA_URL for uploads).
'''