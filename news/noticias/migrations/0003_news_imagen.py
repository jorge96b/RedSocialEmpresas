# Generated by Django 2.1 on 2020-09-04 23:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('noticias', '0002_auto_20200904_2302'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='imagen',
            field=models.ImageField(blank=True, null=True, upload_to='news/'),
        ),
    ]
