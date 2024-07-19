# users/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    phone = models.CharField(max_length=20, blank=True)
    profile_image = models.ImageField(upload_to='profile_images/', blank=True)

    def __str__(self):
        return self.username
