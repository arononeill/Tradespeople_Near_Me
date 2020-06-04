from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib.auth.views import PasswordResetView, PasswordResetDoneView, PasswordResetConfirmView
from django.urls import path
from django.views.generic import TemplateView

from accounts import views

urlpatterns = [
    path(r'', views.main_base_view, name='index'),
    path(r'', views.base_layout, name='base_layout'),
    url(r'^accounts/login/$', views.login_view, name='login'),
    url(r'^logout/$', views.logout_view, name='logout'),
    url(r'^tradespersonSignUp.html/$', views.tradesperson_register_view, name='register'),
    url(r'^update_location/', views.update_tradesperson_location, name='update_location'),
    url(r'^profile_edit/$', views.edit_profile, name='edit_profile'),
    url(r'^userSignUp.html/$', views.user_register_view, name='userSignUp'),
    url(r'^tradesperson_data/$', views.tradesperson_data, name='tradesperson'),
    url(r'^change_password/$', views.change_password, name='change_password'),
    url(r'^reset-password$', PasswordResetView.as_view(), name='reset_password'),
    url(r'^reset-password/done/$', PasswordResetDoneView, name='reset_password_done'),
    url(r'^reset-password/confirm/(?P<uidb64>[0-9A-Za-z]+)-(?P<token>,+)/$', PasswordResetConfirmView, name='reset_password_confirm'),
    url(r'^tradesperson_edit_profile.html/$', views.tradesperson_edit_profile, name='tradesperson_edit_profile'),
    url(r'^about/$', views.about, name='about'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
