from django.contrib.gis.forms import PointField
from django.db import models

# Create your models here.
from postgis import Point
from rest_framework import serializers

from accounts.models import Tradesperson


class TradespersonSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=20)
    password = serializers.CharField(max_length=20)
    firstname = serializers.CharField(max_length=20)
    lastname = serializers.CharField(max_length=20)
    email = serializers.CharField(max_length=20)
    working_hours = serializers.CharField(max_length=20)
    travel_distance = serializers.CharField(max_length=20)
    phone_no = serializers.CharField(max_length=20)
    website_url = serializers.CharField(max_length=20)
    company_name = serializers.CharField(max_length=20)
    occupation = serializers.CharField(max_length=20)
    premium = serializers.BooleanField(default=False)
    town = serializers.CharField(max_length=25)
    county = serializers.CharField(max_length=25)
    image = serializers.ImageField()


