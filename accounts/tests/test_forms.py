from unittest import TestCase

from django.test import SimpleTestCase

from accounts.forms import GlobalUserRegisterForm, UserRegisterForm, workingHours, occupation, county


class TestForms(TestCase):
    def test_user_register_form_valid_data(self):
        form = GlobalUserRegisterForm(data={
            'username': 'Johndoe20',
            'password': 'Johndoe2020',
            'password2': 'Johndoe2020',
            'firstname': 'John',
            'lastname': 'Doe',
            'email': 'johndoe@gmail.com',
            'email2': 'johndoe@gmail.com',
        })
        self.assertTrue(form.is_valid())

    def test_user_register_form_no_data(self):
        form = GlobalUserRegisterForm(data={})
        self.assertFalse(form.is_valid())
        self.assertEquals(len(form.errors), 7)

