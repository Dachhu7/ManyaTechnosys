# products/admin.py
from django.contrib import admin
from .models import Product, Seller, ProductReview

class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'original_price', 'offer_price', 'seller')
    search_fields = ('title', 'seller__name')

class SellerAdmin(admin.ModelAdmin):
    list_display = ('name', 'rating', 'warranty_offer')
    search_fields = ('name',)

class ProductReviewAdmin(admin.ModelAdmin):
    list_display = ('title', 'short_description')
    search_fields = ('title',)

admin.site.register(Product, ProductAdmin)
admin.site.register(Seller, SellerAdmin)
admin.site.register(ProductReview, ProductReviewAdmin)
