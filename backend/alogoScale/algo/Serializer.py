from django.db.models.base import Model, ModelBase
from rest_framework import serializers
from .models import Contactinfo
from rest_framework.validators import UniqueValidator


class ContactSerlize(serializers.ModelSerializer):
    first_name = serializers.CharField(validators =[
        UniqueValidator(queryset=Contactinfo.objects.all(), message="first_name aready exist")])
    last_name = serializers.CharField(validators =[
        UniqueValidator(queryset=Contactinfo.objects.all(), message="last_name aready exist")])    
    email = serializers.EmailField(validators=[
        UniqueValidator(queryset=Contactinfo.objects.all(), message="email aready exist")])  
    message = serializers.CharField()
    
    class Meta:
        model = Contactinfo
        fields = ['id','first_name','last_name','email','message','created_at']


