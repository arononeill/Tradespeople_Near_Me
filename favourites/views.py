from django.http import HttpResponse
from django.shortcuts import render_to_response, render, redirect
from django.template.context_processors import csrf
from django.views.decorators.csrf import csrf_exempt

from favourites.models import Favourites


def main_base_view(request):
    dictionary = dict(request=request)
    dictionary.update(csrf(request))
    return render_to_response('index.html', dictionary)


@csrf_exempt
def favourites(request):
    if request.is_ajax():
        t = request.POST.getlist('tradesperson')
        print(t)
        try:
            Favourites.objects.get(username=request.user, firstname=t[0], lastname=t[1])
        except Favourites.DoesNotExist:
            t = Favourites(username=request.user, firstname=t[0], lastname=t[1],
                           email=t[2], phone_no=t[3], company_name=t[4],
                           occupation=t[5], town=t[6], county=t[7], image=t[8])
            t.save()
        message = "Yes, AJAX!"
    else:
        message = "Not Ajax"
    return HttpResponse(message)


@csrf_exempt
def remove_favorite(request):
    if request.is_ajax():
        t = request.POST.getlist('remove_tradesperson')
        Favourites.objects.get(username=request.user, firstname=t[0], lastname=t[1]).delete()
        message = "Removing favourite using AJAX successful"
    else:
        message = "Not Ajax"
    return HttpResponse(message)


def favourites_template(request):
    favouriteList = Favourites.objects.all()
    favouriteList = favouriteList.filter(username=request.user)

    return render(request, "favourites.html", {"favouriteList": favouriteList})
