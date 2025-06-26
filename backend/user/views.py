from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer, LoginSerializer,UserSerializer
from rest_framework.parsers import MultiPartParser, FormParser

""" class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token = user.generate_jwt_token()
            user_data = UserSerializer(user).data#this line is used to get the user
            return Response({'token': token,'user':user_data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) """

class RegisterView(APIView):
    parser_classes = [MultiPartParser, FormParser]  # Add this

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            print("user validated")
            user = serializer.save()
            token = user.generate_jwt_token()
            user_data = UserSerializer(user).data
            print("actual user data",user_data)
            return Response({'token': token, 'user': user_data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
'''
class LoginView(APIView): 
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_datap['user']
            token = serializer.validated_data['token']

            user_data = UserSerializer(user).data
            #return Response(serializer.validated_data, status=status.HTTP_200_OK)
            return Response({'user':user_data,'token': token},status = status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
'''
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token = serializer.validated_data['token']
            
            user_data = UserSerializer(user).data
            return Response({
                'user': user_data,
                'token': token
            }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)