from unittest import TestCase
import geocoder
from django.contrib.auth.models import User
from django.contrib.gis.geos import Point
from accounts.models import Tradesperson


class TestModels(TestCase):
    def test_tradesperson(self):
        g = geocoder.ip('me')
        self.tradesperson1 = Tradesperson.objects.create(
            username='tradesperson1',
            password='tradesperson1',
            firstname='John',
            lastname='Doe',
            email='johndoe@gmail.com',
            working_hours='9am - 6pm',
            travel_distance=40,
            phone_no='082 392 1124',
            website_url='johndoe@gmail.com',
            company_name='John Doe Electrics',
            occupation='Electrician',
            premium='False',
            town='Glaslough',
            county='Monaghan',
            image='j',
            location=Point(x=g.lng, y=g.lat)
        )

    def test_user(self):
        self.user1 = User.objects.create(
            username='user1',
            password='user1',
            first_name='John',
            last_name='Doe',
            email='johndoe@gmail.com',
        )
