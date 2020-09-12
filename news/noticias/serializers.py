from rest_framework import serializers
from noticias.models import Noticias
from drf_extra_fields.fields import Base64ImageField

class NoticiasSerializer(serializers.ModelSerializer):

    imagen = Base64ImageField()

    class Meta:
        model = Noticias
        fields = '__all__'