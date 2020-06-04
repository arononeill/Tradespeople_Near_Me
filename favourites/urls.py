from django.conf.urls import include, url
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache
from ckeditor_uploader import views as ckeditor_views
from django.urls import path
from . import views

urlpatterns = [
    path(r'', views.main_base_view, name='base_layout'),
    url(r'^favourites_template/$', views.favourites_template, name='favourites_template'),
    url(r'^edit_favorites/', views.favourites, name='edit_favorites'),
    url(r'^remove_favorite/', views.remove_favorite, name='remove_favorite'),
]
