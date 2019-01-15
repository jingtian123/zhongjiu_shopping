from django.conf.urls import url

from zhongjiuApp import views

urlpatterns = [
    # 首页
    url(r'^$',views.index,name='index'),

    # 登录
    url(r'^login/$',views.login,name='login'),
    # 注册
    url(r'^register/$', views.register, name='register'),
    # ajax 校验号码
    url(r'^cheakphone/$', views.cheakphone, name='cheakphone'),
    # 退出登录
    url(r'^logout/$',views.logout,name='logout'),

    # 商品详情
    url(r'^detail/(\d+)/$',views.detail,name='detail'),

    # 购物车
    url(r'^cart/$', views.cart, name='cart'),
    # ajax 添加购物车
    url(r'^addcart/$', views.addcart, name='addcart'),
    # 购物车减操作
    url(r'^subcart/$', views.subcart, name='subcart'),



]