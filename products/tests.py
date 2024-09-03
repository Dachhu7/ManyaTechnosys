# products/tests.py

from django.test import TestCase
from .models import Product

class ProductModelTest(TestCase):

    def setUp(self):
        self.product = Product.objects.create(
            title="Test Product",
            original_price=100.0,
            offer_price=80.0,
            seller_name="Test Seller",
            seller_logo="test-logo.png",
            rating=4
        )

    def test_product_creation(self):
        product = Product.objects.get(title="Test Product")
        self.assertEqual(product.title, "Test Product")
        self.assertEqual(product.original_price, 100.0)
        self.assertEqual(product.offer_price, 80.0)
        self.assertEqual(product.seller_name, "Test Seller")
        self.assertEqual(product.rating, 4)
