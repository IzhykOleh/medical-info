from django.urls import path
from . import views

urlpatterns = [
        path('api/client/', views.ClientListCreate.as_view()),
    ]
