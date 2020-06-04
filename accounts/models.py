from __future__ import unicode_literals
from django.contrib.gis.db import models
from django.db.models import Manager as GeoManager


class Tradesperson(models.Model):
    username = models.CharField(max_length=25)
    password = models.CharField(max_length=20)
    firstname = models.CharField(max_length=20)
    lastname = models.CharField(max_length=20)
    email = models.CharField(max_length=30)
    working_hours = models.CharField(max_length=30)
    travel_distance = models.CharField(max_length=20)
    phone_no = models.CharField(max_length=20)
    website_url = models.CharField(max_length=20, blank=True, null=True)
    company_name = models.CharField(max_length=20)
    occupation = models.CharField(max_length=25)
    premium = models.BooleanField(default=False)
    town = models.CharField(max_length=25)
    county = models.CharField(max_length=25)
    image = models.ImageField(upload_to='profile_image', blank=True, null=True)
    location = models.PointField(srid=4326)
    objects = GeoManager()

    def __unicode__(self):
        return self.username

    class Meta:
        verbose_name_plural = "Tradesperson"

