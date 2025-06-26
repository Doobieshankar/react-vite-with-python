from rest_framework import viewsets
from .models import Product,ProductImage
from .serializers import ProductSerializer
from rest_framework.permissions import AllowAny
##############################
# for image upload # third step for image upload
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
#############################
#gets all products
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()[:3]
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]  # Later you can change to IsAuthenticated etc.

######################################
# fourth step for image upload
@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def upload_product_image(request, pk):
    try:
        product = Product.objects.get(id=pk)
    except Product.DoesNotExist:
        return Response({"detail": "Product not found."}, status=404)
    
    if 'image' not in request.FILES:
        return Response({"detail": "No image file provided."}, status=400)

    image = request.FILES['image']
    ProductImage.objects.create(product=product, image=image)
    
    return Response({"detail": "Image uploaded successfully."})
########################################