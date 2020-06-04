from django.contrib import admin
from .models import Tradesperson
from leaflet.admin import LeafletGeoAdmin

class TradesoersonAdmin(LeafletGeoAdmin):
    list_display = ('username', 'location', 'occupation')


admin.site.register(Tradesperson, TradesoersonAdmin)
