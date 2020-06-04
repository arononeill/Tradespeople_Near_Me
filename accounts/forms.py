from django import forms
from django.contrib.auth.forms import UserChangeForm
from django.contrib.auth import (
    get_user_model,
    authenticate, login)
from leaflet.forms.nogeos import GEOSGeometry
from pip._vendor import requests
from requests import request
from accounts.models import models, Tradesperson
Tradesperson1 = Tradesperson
User = get_user_model()


class UserLoginForm(forms.Form):
    username = forms.CharField(label='Username')
    password = forms.CharField(widget=forms.PasswordInput, label='Password')

    def clean(self, *args, **kwargs):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        if username and password:
            user = authenticate(username=username, password=password)
            # email_qs = User.objects.filter(username=username, password=password)
            if not user:
                raise forms.ValidationError('This user does not exist')
            if not user.check_password(password):
                raise forms.ValidationError('Incorrect password')
            if not user.is_active:
                raise forms.ValidationError('This user is not active')
        return super(UserLoginForm, self).clean(*args, **kwargs)


occupation = (
    ('', 'Choose...'),
    ('Builder', 'Builder'),
    ('Carpenter', 'Carpenter'),
    ('Electrician', 'Electrician'),
    ('Engineer', 'Engineer'),
    ('Heating Contractor', 'Heating Contractor'),
    ('Kitten Fitter', 'Kitten Fitter'),
    ('Painter', 'Painter'),
    ('Plasterer', 'Plasterer'),
    ('Plumber', 'Plumber'),
    ('Stone Worker', 'Stone Worker'),
    ('Tiler', 'Tiler')
)

county = (
    ('', 'Choose...'),
    ('Antrim', 'Antrim'),
    ('Armagh', 'Armagh'),
    ('Carlow', 'Carlow'),
    ('Clare', 'Clare'),
    ('Cork', 'Cork'),
    ('Derry', 'Derry'),
    ('Donegal', 'Donegal'),
    ('Down', 'Down'),
    ('Dublin', 'Dublin'),
    ('Fermanagh', 'Fermanagh'),
    ('Galway', 'Galway'),
    ('Kerry', 'Kerry'),
    ('Kildare', 'Kildare'),
    ('Kilkenny', 'Kilkenny'),
    ('Laois', 'Laois'),
    ('Leitrim', 'Leitrim'),
    ('Limerick', 'Limerick'),
    ('Longford', 'Longford'),
    ('Louth', 'Louth'),
    ('Mayo', 'Mayo'),
    ('Meath', 'Meath'),
    ('Monaghan', 'Monaghan'),
    ('Offaly', 'Offaly'),
    ('Roscommon', 'Roscommon'),
    ('Sligo', 'Sligo'),
    ('Tipperary', 'Tipperary'),
    ('Tyrone', 'Tyrone'),
    ('Waterford', 'Waterford'),
    ('Westmeath', 'Westmeath'),
    ('Wexford', 'Wexford'),
    ('Wicklow', 'Wicklow'),
)

workingHours = (
    ('', 'Choose...'),
    ('9am - 2pm', '9am - 2pm'),
    ('9am - 3pm', '9am - 3pm'),
    ('9am - 4pm', '9am - 4pm'),
    ('9am - 5pm', '9am - 5pm'),
    ('9am - 6pm', '9am - 6pm'),
    ('9am - 7pm', '9am - 7pm'),
    ('10am - 2pm', '10am - 2pm'),
    ('10am - 3pm', '10am - 3pm'),
    ('10am - 4pm', '10am - 4pm'),
    ('10am - 5pm', '10am - 5pm'),
    ('10am - 6pm', '10am - 6pm'),
    ('10am - 7pm', '10am - 7pm'),
    ('11am - 2pm', '11am - 2pm'),
    ('11am - 3pm', '11am - 3pm'),
    ('11am - 4pm', '11am - 4pm'),
    ('11am - 5pm', '11am - 5pm'),
    ('11am - 6pm', '11am - 6pm'),
    ('11am - 7pm', '11am - 7pm'),
    ('12pm - 2pm', '12pm - 2pm'),
    ('12pm - 3pm', '12pm - 3pm'),
    ('12pm - 4pm', '12pm - 4pm'),
    ('12pm - 5pm', '12pm - 5pm'),
    ('12pm - 6pm', '12pm - 6pm'),
    ('12pm - 7pm', '12pm - 7pm'),
    ('1pm - 3pm', '1pm - 3pm'),
    ('1pm - 4pm', '1pm - 4pm'),
    ('1pm - 5pm', '1pm - 5pm'),
    ('1pm - 6pm', '1pm - 6pm'),
    ('1pm - 7pm', '1pm - 7pm'),
    ('1pm - 8pm', '1pm - 8pm')
)


class UserRegisterForm(forms.ModelForm):
    username = forms.CharField(label='Username')
    password = forms.CharField(widget=forms.PasswordInput, label='Password')
    password2 = forms.CharField(widget=forms.PasswordInput, label='Confirm Password')
    firstname = forms.CharField(label="Firstname")
    lastname = forms.CharField(label="Lastname")
    email = forms.EmailField(label="Email")
    email2 = forms.EmailField(label="Confirm Email")
    working_hours = forms.ChoiceField(label="Working hours", choices=workingHours)
    travel_distance = forms.IntegerField(label="Maximum travel distance (km)")
    phone_no = forms.CharField(label="Phone number")
    website_url = forms.CharField(label="Website", required=False)
    company_name = forms.CharField(label="Company name", required=False)
    occupation = forms.ChoiceField(label="Occupation", choices=occupation)
    town = forms.CharField(label="Town")
    county = forms.ChoiceField(label="County", choices=county)
    image = forms.ImageField(label="Upload Profile Image")

    class Meta:
        model = Tradesperson
        fields = [
            'username',
            'password',
            'password2',
            'firstname',
            'lastname',
            'email',
            'email2',
            'working_hours',
            'travel_distance',
            'phone_no',
            'website_url',
            'company_name',
            'occupation',
            'town',
            'county',
            'image',
        ]

    def clean(self, *args, **kwargs):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        email_qs = Tradesperson1.objects.filter(username=username)
        if email_qs.exists():
            raise forms.ValidationError(
                "This user already exists")
        return super(UserRegisterForm, self).clean(*args, **kwargs)


class GlobalUserRegisterForm(forms.ModelForm):
    username = forms.CharField(label='Username')
    password = forms.CharField(widget=forms.PasswordInput, label='Password')
    password2 = forms.CharField(widget=forms.PasswordInput, label='Confirm Password')
    first_name = forms.CharField(label="Firstname")
    last_name = forms.CharField(label="Lastname")
    email = forms.EmailField(label="Email")
    email2 = forms.EmailField(label="Confirm Email")

    class Meta:
        model = User
        fields = [
            'username',
            'password',
            'password2',
            'first_name',
            'last_name',
            'email',
            'email2',
        ]

    def clean(self, *args, **kwargs):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        email_qs = User.objects.filter(username=username)
        if email_qs.exists():
            raise forms.ValidationError(
                "This username is already being used")
        return super(GlobalUserRegisterForm, self).clean(*args, **kwargs)


class EditProfileForm(UserChangeForm):
    email2 = forms.EmailField(label="Confirm Email")

    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'first_name',
            'last_name',
            'password'
        ]
        help_texts = {
            'username': None,
            'email': None,
        }


class TradespersonEditProfileForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput, label='Enter Password')
    password2 = forms.CharField(widget=forms.PasswordInput, label='Confirm Password')
    email2 = forms.EmailField(label="Confirm Email")
    occupation = forms.ChoiceField(label="Occupation", choices=occupation)
    working_hours = forms.ChoiceField(label="Working hours", choices=workingHours)
    county = forms.ChoiceField(label="County", choices=county)

    class Meta:
        model = Tradesperson
        fields = [
            'username',
            'password',
            'password2',
            'firstname',
            'lastname',
            'email',
            'email2',
            'working_hours',
            'travel_distance',
            'phone_no',
            'website_url',
            'company_name',
            'occupation',
            'town',
            'county',
            'image',
        ]
