from rest_framework import serializers
from .models import Product, ProductReview, Seller

class ProductReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductReview
        fields = '__all__'

class SellerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seller
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    reviews = ProductReviewSerializer(many=True, read_only=True)
    seller = SellerSerializer(read_only=True)

    class Meta:
        model = Product
        fields = '__all__'
