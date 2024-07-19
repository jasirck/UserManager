
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('defaultadmin/', admin.site.urls),
    path('api/', include('users.urls')),
]
