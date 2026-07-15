from rest_framework_mongoengine.serializers import DocumentSerializer
from rest_framework import serializers
from .models import Product


class ProductSerializer(DocumentSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=100)
    password = serializers.CharField(max_length=100, write_only=True)