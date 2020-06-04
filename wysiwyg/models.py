from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField
from django.conf import settings
from django.db import models
from django.utils import timezone
from rest_framework import serializers


class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    text = RichTextUploadingField(blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

    def __unicode__(self):
        return self.text

    class Meta:
        verbose_name_plural = "Post"


class PostSerializer(serializers.Serializer):
    author = serializers.CharField(max_length=30)
    title = serializers.CharField(max_length=30)
    text = serializers.CharField(max_length=20)
