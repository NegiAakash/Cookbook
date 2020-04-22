from django.db import models

# Create your models here.

class User(models.Model):

    name = models.CharField(max_length=255, null=False)

    email = models.CharField(max_length=255, null=False)

    password = models.CharField(max_length=255, null=False)

    def __str__(self):
        return "{} - {}".format(self.name, self.email)