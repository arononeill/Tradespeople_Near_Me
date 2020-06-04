import json
import re

import geocoder
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.gis.geos import Point
from django.core.serializers import serialize
from django.http import HttpResponse
from django.shortcuts import render_to_response, redirect, render
from django.template.context_processors import csrf
from django.views.decorators.csrf import csrf_exempt
from accounts.models import Tradesperson
from wysiwyg.forms import PostForm
from accounts.forms import UserRegisterForm, GlobalUserRegisterForm, UserLoginForm, EditProfileForm, \
    TradespersonEditProfileForm


def base_layout(request):
    template = 'base.html'
    return render(request, template)


def main_base_view(request):
    dictionary = dict(request=request)
    dictionary.update(csrf(request))
    return render_to_response('index.html', dictionary)


def login_view(request):
    next = request.GET.get('next')
    form = UserLoginForm(request.POST or None)
    if form.is_valid():
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password')
        user = authenticate(username=username, password=password)
        login(request, user)
        if next:
            return redirect(next)
        return redirect('/')

    context = {
        'form': form
    }

    return render(request, "login.html", context)


def tradesperson_register_view(request):
    next = request.GET.get('next')
    form = UserRegisterForm(request.POST, request.FILES)
    global_user_form = GlobalUserRegisterForm(request.POST or None)
    post_form = PostForm(request.POST, request.FILES)
    if form.is_valid():
        if global_user_form.is_valid():
            if post_form.is_valid():

                password = form.cleaned_data.get('password')
                password2 = form.cleaned_data.get('password2')
                email = form.cleaned_data.get('email')
                email2 = form.cleaned_data.get('email2')
                phone = form.cleaned_data.get('phone_no')

                if password == password2:
                    if len(password) < 6:
                        messages.info(request, 'Make sure your password is at least 6 characters!')
                    elif re.search('[0-9]', password) is None:
                        messages.info(request, 'Make sure your password contains a number!')
                    elif re.search('[A-Z]', password) is None:
                        messages.info(request, 'Make sure your password contains a captial letter!')
                    else:
                        if email == email2:
                            if len(phone) > 7:
                                Tradesperson1 = form.save(commit=False)
                                Tradesperson1.password = password
                                g = geocoder.ip('me')
                                lat = g.lat
                                long = g.lng
                                print(lat, long)
                                point = Point(x=long, y=lat)
                                Tradesperson1.location = point

                                User = global_user_form.save(commit=False)
                                password = global_user_form.cleaned_data.get('password')
                                User.set_password(password)

                                Post = post_form.save(commit=False)
                                User.save()
                                Tradesperson1.save()
                                login(request, User)
                                Post.author = request.user
                                Post.save()
                                first_login = True
                                return render(request, 'index.html', {"first_login": first_login})

                            else:
                                messages.info(request, 'Your phone number is too short!')
                        else:
                            messages.info(request, 'Your emails do not match!')
                else:
                    messages.info(request, 'Your passwords do not match!')

    context = {
        'form': form,
        'form2': post_form
    }

    return render(request, 'tradespersonSignUp.html', context)


@csrf_exempt
def update_tradesperson_location(request):
    if request.is_ajax():
        json_data = json.loads(request.body)
        tradesperson_location = json_data['data']

        lat = tradesperson_location[0]
        lng = tradesperson_location[1]
        point = Point(x=lng, y=lat)

        current_tradesperson = Tradesperson.objects.get(username=request.user)
        current_tradesperson.location = point
        current_tradesperson.save()
        message = "Yes, AJAX!"
    else:
        message = "Not Ajax"
    return HttpResponse(message)


def user_register_view(request):
    next = request.GET.get('next')
    global_user_form = GlobalUserRegisterForm(request.POST or None)
    if global_user_form.is_valid():
        password = global_user_form.cleaned_data.get('password')
        password2 = global_user_form.cleaned_data.get('password2')
        email = global_user_form.cleaned_data.get('email')
        email2 = global_user_form.cleaned_data.get('email2')

        if password == password2:
            if len(password) < 6:
                messages.info(request, 'Make sure your password is at least 6 characters!')
            elif re.search('[0-9]', password) is None:
                messages.info(request, 'Make sure your password contains a number!')
            elif re.search('[A-Z]', password) is None:
                messages.info(request, 'Make sure your password contains a captial letter!')
            else:
                if email == email2:
                    User = global_user_form.save(commit=False)
                    password = global_user_form.cleaned_data.get('password')
                    User.set_password(password)
                    User.save()
                    login(request, User)
                    return redirect('/')

                else:
                    messages.info(request, 'Your emails do not match!')
        else:
            messages.info(request, 'Your passwords do not match!')

    context = {
        'form': global_user_form
    }

    return render(request, 'UserSignUp.html', context)


def logout_view(request):
    logout(request)
    return redirect('/')


def tradesperson_data(request):
    tradespeople = serialize('geojson', Tradesperson.objects.all())
    return HttpResponse(tradespeople, content_type='json')


def edit_profile(request):
    if request.method == "POST":
        form = EditProfileForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            return redirect('base_layout')

    else:
        form = EditProfileForm(instance=request.user)
        context = {
            'form': form
        }
        return render(request, 'edit_profile.html', context)


def tradesperson_edit_profile(request):
    data = Tradesperson.objects.get(username=request.user)

    if request.method == "POST":
        tradesperson_form = TradespersonEditProfileForm(request.POST, instance=data)
        user_form = EditProfileForm(request.POST, instance=request.user)

        if tradesperson_form.is_valid():
            if user_form.is_valid():
                password = tradesperson_form.cleaned_data.get('password')
                password2 = tradesperson_form.cleaned_data.get('password2')
                email = tradesperson_form.cleaned_data.get('email')
                email2 = tradesperson_form.cleaned_data.get('email2')
                phone = tradesperson_form.cleaned_data.get('phone_no')

                if password == password2:
                    if len(password) < 6:
                        messages.info(request, 'Make sure your password is at least 6 characters!')
                    elif re.search('[0-9]', password) is None:
                        messages.info(request, 'Make sure your password contains a number!')
                    elif re.search('[A-Z]', password) is None:
                        messages.info(request, 'Make sure your password contains a captial letter!')
                    else:
                        if email == email2:
                            if len(phone) > 7:
                                Tradesperson1 = tradesperson_form.save(commit=False)
                                Tradesperson1.password = password
                                g = geocoder.ip('me')
                                lat = g.lat
                                long = g.lng
                                point = Point(x=long, y=lat)
                                Tradesperson1.location = point

                                User = user_form.save(commit=False)
                                password = user_form.cleaned_data.get('password')
                                User.set_password(password)

                                User.save()
                                Tradesperson1.save()
                                login(request, User)
                                return redirect('/')

                            else:
                                messages.info(request, 'Your phone number is too short!')
                        else:
                            messages.info(request, 'Your emails do not match!')
                else:
                    messages.info(request, 'Your passwords do not match!')
    else:
        tradesperson_form = TradespersonEditProfileForm(instance=data)
        context = {
            'form': tradesperson_form
        }
        return render(request, 'tradesperson_edit_profile.html', context)


def change_password(request):
    if request.method == "POST":
        form = PasswordChangeForm(data=request.POST, user=request.user)
        if form.is_valid():
            form.save()
            update_session_auth_hash(request, form.user)
            login(request, form.user)
            return redirect('/')

    else:
        form = PasswordChangeForm(user=request.user)
        context = {
            'form': form
        }
        return render(request, 'change_password.html', context)


def about(request):
    dictionary = dict(request=request)
    dictionary.update(csrf(request))
    return render_to_response('about.html', dictionary)
