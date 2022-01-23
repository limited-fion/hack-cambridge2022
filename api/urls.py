from django.urls import path
from .views import GetTag, CreatePost, Classify

urlpatterns = [
    # path('room', RoomView.as_view()),
    # path('create-room', CreateRoomView.as_view()),
    # path('get-room', GetRoom.as_view()),
    # path('join-room', JoinRoom.as_view()),
    # path('user-in-room', UserInRoom.as_view()),
    # path('leave-room', LeaveRoom.as_view()),
    # path('update-room', UpdateRoom.as_view()),
    path('post', CreatePost.as_view()),
    path('get-tag',GetTag.as_view()),
    path('classification', Classify.as_view())
]
