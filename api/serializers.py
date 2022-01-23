from rest_framework import serializers
from .models import Post


# class RoomSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Room
#         fields = ('id', 'code', 'host', 'guest_can_pause',
#                   'votes_to_skip', 'created_at')


# class CreateRoomSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Room
#         fields = ('guest_can_pause', 'votes_to_skip')


# class UpdateRoomSerializer(serializers.ModelSerializer):
#     code = serializers.CharField(validators=[])

#     class Meta:
#         model = Room
#         fields = ('guest_can_pause', 'votes_to_skip', 'code')


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('code', 'tag', 'content','created_at')


class CreatePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('tag', 'content')

