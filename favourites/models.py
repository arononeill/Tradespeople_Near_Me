from __future__ import unicode_literals
from django.contrib.gis.db import models
from rest_framework import serializers


class Favourites(models.Model):
    username = models.CharField(max_length=25)
    firstname = models.CharField(max_length=20)
    lastname = models.CharField(max_length=20)
    email = models.CharField(max_length=30)
    phone_no = models.CharField(max_length=20)
    company_name = models.CharField(max_length=20)
    occupation = models.CharField(max_length=25)
    town = models.CharField(max_length=25)
    county = models.CharField(max_length=25)
    image = models.ImageField(upload_to='profile_image', blank=True, null=True)

    def __unicode__(self):
        return self.username

    class Meta:
        verbose_name_plural = "Favourites"
