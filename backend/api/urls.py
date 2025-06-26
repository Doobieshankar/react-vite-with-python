from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet , upload_product_image

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')

urlpatterns = [
    path('', include(router.urls)),
    ############## fifth step for image upload
    path('products/<int:pk>/upload_image/', upload_product_image, name='upload-product-image'),
    ###########################################
]
