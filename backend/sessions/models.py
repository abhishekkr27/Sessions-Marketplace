from django.db import models
from users.models import User

class Session(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.IntegerField()
    creator = models.ForeignKey(User, on_delete=models.CASCADE)