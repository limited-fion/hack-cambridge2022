from django.urls import path
from .views import index

app_name = 'frontend'

urlpatterns = [
    path('', index, name=''),
    #path('join', index),
    #path('create', index),
    #path('room/<str:roomCode>', index)
    path('volunteer',index),
    path('help',index),
    path('food',index),
    path('medical',index),
    path('transportation',index),
    path('emotion',index),
    path('entertainment',index),
    path('others',index),
]
