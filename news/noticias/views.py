from django.shortcuts import render
from noticias.models import Noticias
from rest_framework import generics
from noticias.serializers import NoticiasSerializer
from django_filters.rest_framework import DjangoFilterBackend

class NoticiasList(generics.ListCreateAPIView):
    serializer_class = NoticiasSerializer
    queryset = Noticias.objects.all()


class NoticiasDestacadas(generics.ListCreateAPIView):
    serializer_class = NoticiasSerializer
    queryset = Noticias.objects.filter(destacado=True)

class NoticiasCategoria(generics.ListCreateAPIView):
    serializer_class = NoticiasSerializer
    queryset = Noticias.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('categoria',)

class NoticiasDetail(generics.RetrieveUpdateDestroyAPIView):

    serializer_class = NoticiasSerializer
    queryset = Noticias.objects.all()
