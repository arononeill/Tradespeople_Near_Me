from django.http import HttpResponse
from django.shortcuts import render_to_response, redirect, render
from django.template.context_processors import csrf

from wysiwyg.forms import PostEditForm
from wysiwyg.models import Post, PostSerializer


def main_base_view(request):
    dictionary = dict(request=request)
    dictionary.update(csrf(request))
    return render_to_response('index.html', dictionary)



def post_edit(request):
    data = Post.objects.get(author=request.user)
    if request.method == "POST":
        form = PostEditForm(request.POST, instance=data)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect('/')

    else:
        form = PostEditForm(instance=data)
        context = {
            'form': form
        }
        return render(request, 'postEdit.html', context)


def getPortfolio(request):
    listPortfolio = list()
    posts = Post.objects.all()
    for post in posts:
        ser = PostSerializer(post)
        listPortfolio.append(ser.data)
    import json
    return HttpResponse(json.dumps(listPortfolio))

