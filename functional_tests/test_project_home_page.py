import geocoder
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.contrib.gis.geos import Point
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from django.test import Client
from selenium import webdriver
from django.urls import reverse
import time

from accounts.models import Tradesperson
from favourites.models import Favourites


class TestProjectHomePage(StaticLiveServerTestCase):

    def setUp(self):
        self.browser = webdriver.Chrome('functional_tests/chromedriver.exe')

    def tearDown(self):
        self.browser.close()

    def test_no_project_alert_is_displayed(self):
        self.browser.get(self.live_server_url)

        # When the user first requests the home page
        alert = self.browser.find_element_by_class_name('listings')
        self.assertEquals(
            alert.find_element_by_tag_name('h2').text,
            'Premium Listings'
        )

    def test_no_project_alert_button_redirects_to_favourites_page(self):
        self.browser.get(self.live_server_url)

        # When the user clicks the favourite link
        favourites_url = self.live_server_url + reverse('favourites_template')
        self.browser.find_element_by_id('hover1').click()
        self.assertEquals(
            self.browser.current_url,
            favourites_url
        )

    def test_consumer_sees_tradespeople(self):
        g = geocoder.ip('me')
        Tradesperson.objects.create(
            username='tradesperson1', password='tradesperson1',
            firstname='John', lastname='Doe', email='johndoe@gmail.com',
            working_hours='9am - 6pm', travel_distance=40,
            phone_no='082 392 1124', website_url='johndoe@gmail.com',
            company_name='John Doe Electrics', occupation='Electrician',
            premium='False', town='Glaslough', county='Monaghan',
            image='j', location=Point(x=g.lng, y=g.lat)
        )
        self.browser.get(self.live_server_url)
        time.sleep(3)
        self.assertEquals(
            self.browser.find_element_by_class_name('service-heading').text,
            'John Doe Electrics'
        )

    def test_consumer_can_login(self):
        user = User.objects.create(username='testuser')
        user.set_password('12345')
        user.save()

        c = Client()
        c.login(username='testuser', password='12345')
