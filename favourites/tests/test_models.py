from unittest import TestCase
from favourites.models import Favourites


class TestModels(TestCase):
    def test_tradesperson(self):
        self.favourite1 = Favourites.objects.create(
            username='tradesperson1',
            firstname='John',
            lastname='Doe',
            email='johndoe@gmail.com',
            phone_no='082 392 1124',
            company_name='John Doe Electrics',
            occupation='Electrician',
            town='Glaslough',
            county='Monaghan',
        )
