from django.conf.urls import include, url
from django.urls import path
from . import views

urlpatterns = [
    path(r'', views.main_base_view, name='base_layout'),
    url(r'^getAllTradespeople/$', views.getAllTradespeople, name='getAllTradespeople'),
    url(r'^getAllLatestTradespeople/$', views.getAllLatestTradespeople, name='getAllLatestTradespeople'),
    url(r'^getAllPremiumTradespeople/$', views.getAllPremiumTradespeople, name='getAllPremiumTradespeople'),
    url(r'^search/$', views.search, name='search'),

    url(r'^builder_data/$', views.builder_data, name='builders'),
    url(r'^builder_data_website_premium/$', views.builder_data_website_premium, name='builder_data_website_premium'),
    url(r'^builder_data_premium/$', views.builder_data_premium, name='builder_data_premium'),
    url(r'^builder_data_website/$', views.builder_data_website, name='builder_data_website'),

    url(r'^carpenter_data/$', views.carpenter_data, name='carpenters'),
    url(r'^carpenter_data_website_premium/$', views.carpenter_data_website_premium, name='carpenter_data_website_premium'),
    url(r'^carpenter_data_premium/$', views.carpenter_data_premium, name='carpenter_data_premium'),
    url(r'^carpenter_data_website/$', views.carpenter_data_website, name='carpenter_data_website'),

    url(r'^electrician_data/$', views.electrician_data, name='electricians'),
    url(r'^electrician_data_website_premium/$', views.electrician_data_website_premium, name='electrician_data_website_premium'),
    url(r'^electrician_data_premium/$', views.electrician_data_premium, name='electrician_data_premium'),
    url(r'^electrician_data_website/$', views.electrician_data_website, name='electrician_data_website'),

    url(r'^engineer_data/$', views.engineer_data, name='engineers'),
    url(r'^engineer_data_website_premium/$', views.engineer_data_website_premium, name='engineer_data_website_premium'),
    url(r'^engineer_data_premium/$', views.engineer_data_premium, name='engineer_data_premium'),
    url(r'^engineer_data_website/$', views.engineer_data_website, name='engineer_data_website'),

    url(r'^heatingContractor_data/$', views.heatingContractor_data, name='heatingContractors'),
    url(r'^heatingContractor_data_website_premium/$', views.heatingContractor_data_website_premium, name='heatingContractor_data_website_premium'),
    url(r'^heatingContractor_data_premium/$', views.heatingContractor_data_premium, name='heatingContractor_data_premium'),
    url(r'^heatingContractor_data_website/$', views.heatingContractor_data_website, name='heatingContractor_data_website'),

    url(r'^kitchenFitter_data/$', views.kitchenFitter_data, name='kitchenFitters'),
    url(r'^kitchenFitter_data_website_premium/$', views.kitchenFitter_data_website_premium, name='kitchenFitter_data_website_premium'),
    url(r'^kitchenFitter_data_premium/$', views.kitchenFitter_data_premium, name='kitchenFitter_data_premium'),
    url(r'^kitchenFitter_data_website/$', views.kitchenFitter_data_website, name='kitchenFitter_data_website'),

    url(r'^plumber_data/$', views.plumber_data, name='plumbers'),
    url(r'^plumber_data_website_premium/$', views.plumber_data_website_premium, name='plumber_data_website_premium'),
    url(r'^plumber_data_premium/$', views.plumber_data_premium, name='plumber_data_premium'),
    url(r'^plumber_data_website/$', views.plumber_data_website, name='plumber_data_website'),

    url(r'^plasterer_data/$', views.plasterer_data, name='plasterers'),
    url(r'^plasterer_data_website_premium/$', views.plasterer_data_website_premium, name='plasterer_data_website_premium'),
    url(r'^plasterer_data_premium/$', views.plasterer_data_premium, name='plasterer_data_premium'),
    url(r'^plasterer_data_website/$', views.plasterer_data_website, name='plasterer_data_website'),

    url(r'^painter_data/$', views.painter_data, name='painters'),
    url(r'^painter_data_website_premium/$', views.painter_data_website_premium, name='painter_data_website_premium'),
    url(r'^painter_data_premium/$', views.painter_data_premium, name='painter_data_premium'),
    url(r'^painter_data_website/$', views.painter_data_website, name='painter_data_website'),

    url(r'^stoneWorker_data/$', views.stoneWorker_data, name='stoneWorkers'),
    url(r'^stoneWorker_data_website_premium/$', views.stoneWorker_data_website_premium, name='stoneWorker_data_website_premium'),
    url(r'^stoneWorker_data_premium/$', views.stoneWorker_data_premium, name='stoneWorker_data_premium'),
    url(r'^stoneWorker_data_website/$', views.stoneWorker_data_website, name='stoneWorker_data_website'),

    url(r'^tiler_data/$', views.tiler_data, name='tilers'),
    url(r'^tiler_data_website_premium/$', views.tiler_data_website_premium, name='tiler_data_website_premium'),
    url(r'^tiler_data_premium/$', views.tiler_data_premium, name='tiler_data_premium'),
    url(r'^tiler_data_website/$', views.tiler_data_website, name='tiler_data_website'),
]
