# products/models.py
from django.db import models

class Seller(models.Model):
    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='logos/')
    rating = models.FloatField(default=0.0)
    warranty_offer = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name

class ProductReview(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='reviews/')
    short_description = models.TextField()

    def __str__(self):
        return self.title

class Product(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='products/')
    description = models.TextField()
    original_price = models.DecimalField(max_digits=10, decimal_places=2)
    offer_price = models.DecimalField(max_digits=10, decimal_places=2)
    reviews = models.ManyToManyField(ProductReview, blank=True)
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
