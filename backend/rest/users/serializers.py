# users/serializers.py

from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'phone', 'profile_image', 'is_active', 'is_staff', 'is_superuser')

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'phone', 'password')

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            phone=validated_data['phone'],
            password=validated_data['password']
        )
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=250)
    password = serializers.CharField()
    

    def validate(self, data):
        email = data.get('email', None)
        password = data.get('password', None)

        if email is None or password is None:
            raise serializers.ValidationError('Must include "email" and "password".')

        user = User.objects.filter(email=email).first()

        if user is None:
            raise serializers.ValidationError('A user with this email address is not found.')

        if not user.check_password(password):
            raise serializers.ValidationError('Incorrect password.')

        return {
            'user': user
        }

class AdminLoginSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=250)
    password = serializers.CharField()

    def validate(self, data):
        email = data.get('email', None)
        password = data.get('password', None)

        if email is None or password is None:
            raise serializers.ValidationError('Must include "email" and "password".')

        user = User.objects.filter(email=email).first()

        if user is None:
            raise serializers.ValidationError('A user with this email address is not found.')

        if not user.check_password(password):
            raise serializers.ValidationError('Incorrect password.')

        if not user.is_superuser:
            raise serializers.ValidationError('You do not have permission to access this resource.')

        return {
            'user': user
        }
