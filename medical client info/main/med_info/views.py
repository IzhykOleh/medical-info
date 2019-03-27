from django.shortcuts import render
from rest_framework import generics
from med_info.models import Client
from med_info.serializers import ClientSerializer

class ClientListCreate(generics.ListCreateAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
