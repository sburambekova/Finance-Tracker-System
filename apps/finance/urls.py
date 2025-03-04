from django.urls import path
from . import views

urlpatterns = [
    path('project-list/', views.project_list, name='list'),  # Correct URL pattern
    path('project-detail/<slug:project_slug>/', views.project_detail, name='detail'),
]

