from django.contrib import admin
from leaflet.admin import LeafletGeoAdmin

from favourites.models import Favourites


class FavouritesAdmin(LeafletGeoAdmin):
    list_display = ('username', 'firstname', 'lastname', 'occupation')


admin.site.register(Favourites, FavouritesAdmin)
