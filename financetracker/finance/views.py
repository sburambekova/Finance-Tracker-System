from django.shortcuts import render

def project_list(request):
    return render(request, 'finance/project-list.html')

def project_detail(request, project_slug):
    return render(request, 'finance/project-detail.html')


# Create your views here.
