from django.contrib import admin
from wysiwyg.models import Post
from leaflet.admin import LeafletGeoAdmin


class PostAdmin(LeafletGeoAdmin):
    list_display = ('author', 'title', 'text')


admin.site.register(Post, PostAdmin)
