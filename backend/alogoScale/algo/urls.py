from django.contrib import admin
from django.urls import path,include
from rest_framework import views
from .views import Contact,Allinfo, filterdate

urlpatterns = [
    path('register/',Contact,name='register'),
    path('allinfo/',Allinfo,name='allinfo'),
    path('filterd/',filterdate,name="filterd")
    
]
