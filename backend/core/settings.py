INSTALLED_APPS = [
'django.contrib.admin','django.contrib.auth','django.contrib.contenttypes',
'django.contrib.sessions','django.contrib.messages','django.contrib.staticfiles',

'rest_framework','corsheaders','social_django',

'users','sessions','bookings','payments'
]

AUTH_USER_MODEL = 'users.User'

AUTHENTICATION_BACKENDS = (
    'social_core.backends.google.GoogleOAuth2',
    'django.contrib.auth.backends.ModelBackend',
)

SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = "YOUR_GOOGLE_CLIENT_ID"
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = "YOUR_SECRET"

REST_FRAMEWORK = {
'DEFAULT_AUTHENTICATION_CLASSES': (
'rest_framework_simplejwt.authentication.JWTAuthentication',
)
}

CORS_ALLOW_ALL_ORIGINS = True

RAZORPAY_KEY = "your_key"
RAZORPAY_SECRET = "your_secret"