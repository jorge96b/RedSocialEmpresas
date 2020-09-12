from django.db import models

# Create your models here.

class Noticias(models.Model):

    CAT = (
        (0, 'Corredores de Seguros'),
        (1, 'Bancoomeva'),
        (2, 'FiduCoomeva'),
        (3, 'Medicina Prepagada'),
        (4, 'Christus sinergia'),
        (5, 'Fundacion'),
        (6, 'Turismo Agencia de viajes'),
        (7, 'Lake House'),
        (8, 'Fecoomeva'),
    )

    categoria = models.IntegerField(default=0, choices=CAT)
    nombre = models.CharField(max_length=200)
    editor = models.CharField(max_length=200)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    destacado = models.BooleanField(default=False)
    tags = models.CharField(max_length=200)
    likes = models.IntegerField()
    dislikes = models.IntegerField()
    resumen = models.CharField(max_length=250)
    detalle = models.CharField(max_length=900)
    imagen = models.ImageField(upload_to='news/', blank=True, null=True)

    def __str__(self):
        return self.nombre