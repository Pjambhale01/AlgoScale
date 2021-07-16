from django.db import models

# Create your models here.


class Contactinfo(models.Model):
    first_name = models.TextField(null=True,blank=True,max_length=50)
    last_name = models.TextField(null=True,blank=True,max_length=50)
    email = models.EmailField(unique=True,blank=True)
    message = models.TextField(null=True,blank=True,max_length=500)
    created_at=models.DateField(auto_now=False, auto_now_add=True, blank=True)