from django.test import SimpleTestCase
from django.urls import reverse, resolve
from searching.views import getAllTradespeople, getAllLatestTradespeople, getAllPremiumTradespeople


class TestUrls(SimpleTestCase):

    def test_all_tradespeople_url_is_resolved(self):
        url = reverse('getAllTradespeople')
        self.assertEquals(resolve(url).func, getAllTradespeople)

    def test_latest_tradespeople_url_is_resolved(self):
        url = reverse('getAllLatestTradespeople')
        self.assertEquals(resolve(url).func, getAllLatestTradespeople)

    def test_premium_tradespeople_url_is_resolved(self):
        url = reverse('getAllPremiumTradespeople')
        self.assertEquals(resolve(url).func, getAllPremiumTradespeople)


