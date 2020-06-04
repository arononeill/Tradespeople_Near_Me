from django.test import SimpleTestCase
from django.urls import reverse, resolve

from accounts.views import tradesperson_data


class TestUrls(SimpleTestCase):

    def test_all_tradespeople_url_is_resolved(self):
        url = reverse('tradesperson')
        self.assertEquals(resolve(url).func, tradesperson_data)
