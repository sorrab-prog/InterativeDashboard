from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import GetUserAdminSerializer
from rest_framework.permissions import AllowAny
from rest_framework.exceptions import AuthenticationFailed
from .models import UserAdmin
import jwt, datetime
from django.conf import settings

"""
Do the user login with JWT authentication
"""
class LoginView(APIView):
    """
    Permissions are allow any because the form of authentication to perform methods such as GET, POST, among others, will be through the JWT token (which the user will only get if he is logged in)
    """
    permission_classes = [AllowAny]
    
    def post(self, request):
        username = request.data['username']
        password = request.data ['password']
        
        """
        With the username we will find the user
        Username is unique and we will only get the first and unique user that appear with that username
        """
        user = UserAdmin.objects.filter(username=username).first()
        
        if user is None:
            raise AuthenticationFailed("Usuário não encontrado")
        
        # This function is providade by Django and compare the passwords even if its hasheds
        if not user.check_password(password):
            raise AuthenticationFailed("Senha Incorreta")
        
        # JWT Token Configurations
        payload = {
            'id': user.id,
            # Token Time Expiration
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            # Date that token was created
            'iat': datetime.datetime.utcnow()
        }
        
        # Creating JWT Token
        token = jwt.encode(payload, 'secret', algorithm='HS256')
        
        response = Response()
        
        response.set_cookie(key='jwt', value = token, httponly=True)
        
        response.data = {
            'Message': 'Token Created Successfully',
        }
        
        return response
    
class UserAdminView(APIView):
    permission_classes = [AllowAny]
    
    def get(self, request, format='json'):
        # Getting the token from the cookies
        token = request.COOKIES.get('jwt')
        
        # IF the token is not set
        if not token:
            raise AuthenticationFailed("Unauthenticated")
        
        # Decoding the jwt token
        try:
            payload = jwt.decode(token, 'secret', algorithms = ["HS256"])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Expired Token")
        
        # Filtering the user through the cookies   
        user = UserAdmin.objects.filter(id=payload['id']).first()
        
        # Serializing the user to the JSON Object
        serializer = GetUserAdminSerializer(user)
        
        return Response(serializer.data)