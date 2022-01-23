from django.db import models
import string
import random


def generate_unique_code():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Post.objects.filter(code=code).count() == 0:
            break

    return code


class Post(models.Model):
    code = models.CharField(max_length=8, default=generate_unique_code, unique=True)
    tag = models.CharField(max_length=50)
    content = models.TextField()
    #guest_can_pause = models.BooleanField(null=False, default=False)
    #votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)
