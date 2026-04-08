from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

@api_view(['POST'])
def login(request):
    user = authenticate(
        username=request.data.get('username'),
        password=request.data.get('password')
    )

    if not user:
        return Response({"error": "Invalid credentials"}, status=400)

    token = RefreshToken.for_user(user)

    return Response({
        "access": str(token.access_token),
        "role": user.role
    })