from django.contrib.auth import authenticate, login, logout
from django.core.serializers import serialize
from django.forms import forms
from django.http import HttpResponse
from django.shortcuts import render_to_response, redirect, render
from django.template.context_processors import csrf
from django.utils import timezone

from accounts.forms import UserRegisterForm, GlobalUserRegisterForm, UserLoginForm
from accounts.models import Tradesperson
from searching.models import TradespersonSerializer
from django.db.models import Q


def main_base_view(request):
    dictionary = dict(request=request)
    dictionary.update(csrf(request))
    return render_to_response('index.html', dictionary)


def getAllTradespeople(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all()
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def getAllLatestTradespeople(request):
    listLatest = list()
    tradespeople = Tradesperson.objects.all().order_by('id')
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listLatest.append(ser.data)
    import json
    return HttpResponse(json.dumps(listLatest))


def getAllPremiumTradespeople(request):
    listPremiumPlumbers = list()
    premiumTradespeople = Tradesperson.objects.all().filter(premium=True)
    plumber_data(request)

    for people in premiumTradespeople:
        ser = TradespersonSerializer(people)
        listPremiumPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPremiumPlumbers))


def builder_data(request):
    listPainters = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Builder')
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPainters.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPainters))


def builder_data_website_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Builder').exclude(website_url__isnull=True) \
        .filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def builder_data_website(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Builder').exclude(website_url__isnull=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def builder_data_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Builder').filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def carpenter_data(request):
    listPainters = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Carpenter')
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPainters.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPainters))


def carpenter_data_website_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Carpenter').exclude(website_url__isnull=True) \
        .filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def carpenter_data_website(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Carpenter').exclude(website_url__isnull=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def carpenter_data_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Carpenter').filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def electrician_data(request):
    listElectricians = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Electrician')
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listElectricians.append(ser.data)
    import json
    return HttpResponse(json.dumps(listElectricians))


def electrician_data_website_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Electrician').exclude(website_url__isnull=True) \
        .filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def electrician_data_website(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Electrician').exclude(website_url__isnull=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def electrician_data_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Electrician').filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def engineer_data(request):
    listPainters = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Engineer')
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPainters.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPainters))


def engineer_data_website_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Engineer').exclude(website_url__isnull=True) \
        .filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def engineer_data_website(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Engineer').exclude(website_url__isnull=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def engineer_data_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Engineer').filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def heatingContractor_data(request):
    listPainters = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Heating Contractor')
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPainters.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPainters))


def heatingContractor_data_website_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Heating Contractor').exclude(website_url__isnull=True) \
        .filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def heatingContractor_data_website(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Heating Contractor').exclude(website_url__isnull=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def heatingContractor_data_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Heating Contractor').filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def kitchenFitter_data(request):
    listPainters = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Kitchen Fitter')
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPainters.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPainters))


def kitchenFitter_data_website_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Kitchen Fitter').exclude(website_url__isnull=True) \
        .filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def kitchenFitter_data_website(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Kitchen Fitter').exclude(website_url__isnull=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def kitchenFitter_data_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Kitchen Fitter').filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def painter_data(request):
    listPainters = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Painter')
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPainters.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPainters))


def painter_data_website_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Painter').exclude(website_url__isnull=True) \
        .filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def painter_data_website(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Painter').exclude(website_url__isnull=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def painter_data_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Painter').filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def plasterer_data(request):
    listPainters = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Plasterer')
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPainters.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPainters))


def plasterer_data_website_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Plasterer').exclude(website_url__isnull=True) \
        .filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def plasterer_data_website(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Plasterer').exclude(website_url__isnull=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def plasterer_data_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Plasterer').filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def plumber_data(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Plumber')
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def plumber_data_website_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Plumber').exclude(website_url__isnull=True) \
        .filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def plumber_data_website(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Plumber').exclude(website_url__isnull=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def plumber_data_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Plumber').filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def stoneWorker_data(request):
    listPainters = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Stone Worker')
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPainters.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPainters))


def stoneWorker_data_website_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Stone Worker').exclude(website_url__isnull=True) \
        .filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def stoneWorker_data_website(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Stone Worker').exclude(website_url__isnull=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def stoneWorker_data_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Stone Worker').filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def tiler_data(request):
    listPainters = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Tiler')
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPainters.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPainters))


def tiler_data_website_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Tiler').exclude(website_url__isnull=True) \
        .filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def tiler_data_website(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Tiler').exclude(website_url__isnull=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def tiler_data_premium(request):
    listPlumbers = list()
    tradespeople = Tradesperson.objects.all().filter(occupation='Tiler').filter(premium=True)
    for people in tradespeople:
        ser = TradespersonSerializer(people)
        listPlumbers.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPlumbers))


def search(request):
    queryList = Tradesperson.objects.all()
    query = request.GET.get('q')
    queryList = queryList.filter(
        Q(occupation__iexact=query) |
        Q(firstname__iexact=query) |
        Q(lastname__iexact=query) |
        Q(town__iexact=query) |
        Q(county__iexact=query) |
        Q(company_name__iexact=query)
    ).distinct()

    return render(request, "search.html", {"queryList": queryList})



