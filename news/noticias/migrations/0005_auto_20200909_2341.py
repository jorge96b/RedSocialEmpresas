# Generated by Django 2.1 on 2020-09-09 23:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('noticias', '0004_auto_20200905_1814'),
    ]

    operations = [
        migrations.AlterField(
            model_name='noticias',
            name='categoria',
            field=models.IntegerField(choices=[(0, 'Corredores de Seguros'), (1, 'Bancoomeva'), (2, 'FiduCoomeva'), (3, 'Medicina Prepagada'), (4, 'Christus sinergia'), (5, 'Fundacion'), (6, 'Turismo Agencia de viajes'), (7, 'Lake House'), (8, 'Fecoomeva')], default=0),
        ),
    ]