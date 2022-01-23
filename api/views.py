from django.shortcuts import render
from rest_framework import generics, status
from .serializers import PostSerializer, CreatePostSerializer
from .models import Post
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse

# Create your views here.

class CreatePost(APIView):
    serializer_class = CreatePostSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            tag = serializer.data.get('tag')
            content = serializer.data.get('content')
            post = Post( tag=tag, content=content)
            post.save()
            self.request.session['code'] = post.code
            return Response(PostSerializer(post).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


# class RoomView(generics.ListAPIView):
#     queryset = Room.objects.all()
#     serializer_class = RoomSerializer


class GetTag(APIView):
    serializer_class = PostSerializer
    lookup_url_kwarg = 'tag'

    def get(self, request, format=None):
        tag = request.GET.get(self.lookup_url_kwarg)
        print(request)
        print("abab", tag)
        if tag != None:
            post = Post.objects.filter(tag=tag)
            if len(post) > 0:
                data = []
                for i in range(0, len(post)):
                    data.append( PostSerializer(post[i]).data)
                print("length is equal to",len(data))
                for i in range(len(data)):
                    print("hellonihao",data[i])
                #data = RoomSerializer(post[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Post Not Found': 'Invalid Tag'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class Classify(APIView):
    #serializer_class = PostSerializer
    #input: converted text from speech; output: tag, collected_data
    def post(self, request, format=None):
        phrase = request.data.get('content')
        print("hihimpmp",phrase)
        category = 'others'
        data = []

        food_or_drinks_keywords = ['hungry', 'food', 'drink',
                                'thirsty', 'eating', 'eat', 'drinking', 'craving']
        transport_keywords = ['fetch', 'uber',
                            'taxi', 'bus', 'appointment', 'get to']
        medical_keywords = ['medicine', 'pain', 'hurt', 'paracetamol',
                            'doctor', 'pharmacy', 'nurse', 'medical examination']
        entertainment_keywords = ['fun', 'play', 'game', 'joke']
        emotion_keywords = ['happy', 'sad', 'angry',
                            'frustrated', 'cry', 'emotional', 'depressed']

        if any(i in phrase for i in food_or_drinks_keywords):
            category = 'food'

        elif any(i in phrase for i in transport_keywords):
            category = 'transport'

        elif any(i in phrase for i in entertainment_keywords):
            category = 'entertainment'

        elif any(i in phrase for i in emotion_keywords):
            category = 'emotion'

        elif any(i in phrase for i in medical_keywords):
            category = 'medical'

        if (category == 'others'):
            data.append(phrase)

        return Response(category, status=status.HTTP_200_OK)

