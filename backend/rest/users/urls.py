from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('adminlogin/', views.AdminLoginView.as_view(), name='login'),
    path('admin/', views.admin_page, name='admin'),
    path('admin/<int:id>/', views.admin_page, name='user_detail'), 
    path('profile/', views.UserProfileView.as_view(), name='profile'),
]