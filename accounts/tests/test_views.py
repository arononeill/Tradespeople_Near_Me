import geocoder
from django.contrib.auth.models import User
from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.gis.geos import Point

from accounts.models import Tradesperson


class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.base_url = reverse('base_layout')
        self.register_url = reverse('register')

    def test_main_base_view_GET(self):
        response = self.client.get(self.base_url)

        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'index.html')

    def test_register_view_GET(self):
        response = self.client.get(self.register_url)

        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'tradespersonSignUp.html')

    def test_project_detail_POST_adds_new_tradesperson(self):
        g = geocoder.ip('me')
        response = self.client.post(self.register_url, {
            'username': 'tradesperson1',
            'password': 'tradesperson1',
            'firstname': 'John',
            'lastname': 'Doe',
            'email': 'johndoe@gmail.com',
            'working_hours': '9am - 6pm',
            'travel_distance': 40,
            'phone_no': 1823921124,
            'website_url': 'johndoe@gmail.com',
            'company_name': 'John Doe Electrics',
            'occupation': 'Electrician',
            'premium': False,
            'town': 'Glaslough',
            'county': 'Monaghan',
            'image': 'null',
            'location': Point(x=g.lng, y=g.lat)
        })

        self.assertEquals(response.status_code, 200)
