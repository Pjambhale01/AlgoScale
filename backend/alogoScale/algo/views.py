from django.shortcuts import render
from rest_framework import response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . models import Contactinfo
from .Serializer import ContactSerlize
# from django.views.decorators.csrf import csrf_exempt
# Create your views here.


@api_view(['POST'])
def Contact(request):
    data = request.data
    serilizer = ContactSerlize(data = data)
    if serilizer.is_valid():
        serilizer.save()
        return Response(data=serilizer.data,status=201)
    return Response(data=serilizer.errors,status=400)    


@api_view(["GET"])
def Allinfo(request):
    data = Contactinfo.objects.all()
    serilizer = ContactSerlize(data,many=True)
    print(serilizer,'serilizer')
    return Response(data=serilizer.data, status=200)


@api_view(["post"])
def filterdate(request):
    startdate = request.data["startdate"]
    enddate = request.data["enddate"]
    alldata = Contactinfo.objects.filter(created_at__range=[startdate,enddate])
    serilize = ContactSerlize(alldata,many=True)
    return Response(data = serilize.data , status=200)