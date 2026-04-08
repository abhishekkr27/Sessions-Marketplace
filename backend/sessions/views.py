from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from users.permissions import IsCreator
from .models import Session
from .serializers import SessionSerializer

@api_view(['GET'])
def get_sessions(request):
    sessions = Session.objects.all()
    return Response(SessionSerializer(sessions, many=True).data)

@api_view(['POST'])
@permission_classes([IsAuthenticated, IsCreator])
def create_session(request):
    serializer = SessionSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save(creator=request.user)
        return Response(serializer.data)

    return Response(serializer.errors, status=400)