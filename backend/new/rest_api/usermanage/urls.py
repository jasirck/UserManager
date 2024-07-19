# project_name/urls.py
from django.urls import path, include
from usermanage.views import CustomUserCreate

urlpatterns = [
    path('api/users/', CustomUserCreate.as_view(), name='user-create'),
    # Add other API endpoints as needed
]
