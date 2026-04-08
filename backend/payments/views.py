import razorpay
from django.conf import settings
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

client = razorpay.Client(auth=(settings.RAZORPAY_KEY, settings.RAZORPAY_SECRET))

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_order(request):
    amount = request.data.get('amount')

    if not amount:
        return Response({"error":"Amount required"}, status=400)

    order = client.order.create({
        "amount": int(amount) * 100,
        "currency": "INR",
    })

    return Response(order)