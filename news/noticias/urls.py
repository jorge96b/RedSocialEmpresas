from django.conf.urls import url
from noticias import views


urlpatterns = [
    url(r'^noticias/$', views.NoticiasList.as_view()),
    url(r'^noticiasDestacadas/$', views.NoticiasDestacadas.as_view()),
    url(r'^noticiasCategoria/$', views.NoticiasCategoria.as_view()),
    url(r'^noticias/(?P<pk>[0-9]+)/$', views.NoticiasDetail.as_view()),
]