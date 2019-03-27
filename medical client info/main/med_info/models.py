from django.db import models

class Client(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    arrived = models.DateTimeField(null=True)
    symptoms = models.TextField(null=True)
    diagnos = models.TextField(null=True)
