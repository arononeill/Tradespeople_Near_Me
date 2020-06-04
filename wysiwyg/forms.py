from ckeditor.widgets import CKEditorWidget
from ckeditor_uploader.fields import RichTextUploadingField
from django.contrib.auth.forms import UserChangeForm
from django.forms import ModelForm

from wysiwyg.models import Post
from django import forms


class PostEditForm(ModelForm):

    class Meta:
        model = Post
        fields = ['text']


class PostForm(forms.ModelForm):
    text = RichTextUploadingField()

    class Meta:
        model = Post
        fields = [
            'text',
        ]

    def clean(self, *args, **kwargs):
        username = self.cleaned_data.get('username')
        email_qs = Post.objects.filter(author=username)
        if email_qs.exists():
            raise forms.ValidationError(
                "This user already exists")
        return super(PostForm, self).clean(*args, **kwargs)


class EditPostForm(UserChangeForm):

    class Meta:
        model = Post
        fields = [
            'text'
        ]
