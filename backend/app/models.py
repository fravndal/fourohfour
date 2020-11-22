from django.db import models


class UserModel(models.Model):
    name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

class MapModel(models.Model):
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
