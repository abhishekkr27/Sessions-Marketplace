from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Booking
from .serializers import BookingSerializer

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def book(request):
    data = request.data
    data['user'] = request.user.id

    serializer = BookingSerializer(data=data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=400)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_bookings(request):
    bookings = Booking.objects.filter(user=request.user)
    return Response(BookingSerializer(bookings, many=True).data)