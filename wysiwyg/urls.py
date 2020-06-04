from django.conf.urls import include, url
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache
from ckeditor_uploader import views as ckeditor_views
from django.urls import path
from . import views

urlpatterns = [
    path(r'', views.main_base_view, name='base_layout'),
    url(r'^postEdit.html/$', views.post_edit, name='post_edit'),
    url(r'^getPortfolio/$', views.getPortfolio, name='getPortfolio'),
    url(r'^ckeditor/upload/', login_required(ckeditor_views.upload), name='ckeditor_upload'),
    url(r'^ckeditor/browse/', never_cache(login_required(ckeditor_views.browse)), name='ckeditor_browse'),
]
