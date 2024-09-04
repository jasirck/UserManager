from django.urls import path
from .views import download_video

urlpatterns = [
    path('download/', download_video.as_view(), name='download_video'),
]
