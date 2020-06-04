from django.test import TestCase, Client
from django.urls import reverse


class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.base_url = reverse('base_layout')
        self.favourites_url = reverse('favourites_template')

    def test_main_base_view_GET(self):
        response = self.client.get(self.base_url)
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'index.html')

    def test_favourites_view_GET(self):
        response = self.client.get(self.favourites_url)
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'favourites.html')

