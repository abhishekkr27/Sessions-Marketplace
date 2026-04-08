from django.urls import path
from users.views import login
from sessions.views import get_sessions, create_session
from bookings.views import book, my_bookings
from payments.views import create_order

urlpatterns = [
    path('auth/login/', login),

    path('sessions/', get_sessions),
    path('sessions/create/', create_session),

    path('book/', book),
    path('my-bookings/', my_bookings),

    path('payment/create/', create_order),
]