# usermanage/models.py

from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    phone = models.CharField(max_length=15, blank=True, null=True)
    profile_image = models.ImageField(upload_to="media/user_dp/", default="media/user_dp/user.jpeg")

    def __str__(self):
        return self.username


    