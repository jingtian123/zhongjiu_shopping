from django.conf.urls import url

from zhongjiuApp import views

urlpatterns = [
    url(r'^$',views.index,name='index'),
    url(r'^login/$',views.login,name='login'),
    url(r'^register/$', views.register, name='register'),
    url(r'^cheakphone/$', views.cheakphone, name='cheakphone'),
    url(r'^logout/$',views.logout,name='logout'),
    url(r'^detail/$',views.detail,name='detail'),
    url(r'^cart/$', views.cart, name='cart'),

]