# from django.shortcuts import render

# def project_list(request):
#     return render(request, 'finance/project-list.js')

# def project_detail(request, project_slug):
#     return render(request, 'finance/project-detail.js')


from django.http import JsonResponse

def project_list(request):
    # Example data to return as JSON
    data = [
        {"id": 1, "title": "Project 1", "description": "Description of Project 1"},
        {"id": 2, "title": "Project 2", "description": "Description of Project 2"},
    ]
    return JsonResponse(data, safe=False)

def project_detail(request, project_slug):
    # Example detailed data
    data = {
        "title": f"Project {project_slug}",
        "description": "Detailed description of the project",
        "status": "active",
    }
    return JsonResponse(data)



# Create your views here.

