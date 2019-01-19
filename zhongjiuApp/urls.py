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
    # ajax 购物车减操作
    url(r'^subcart/$', views.subcart, name='subcart'),

    # 修改购物车记录选中状态
    url(r'^changecartstatus/$', views.changecartstatus, name='changecartstatus'),
    # 全选状态
    url(r'^changecartall/$', views.changecartall, name='changecartall'),

    # 下单
    url(r'^generateorder/$',views.generateorder,name='generateorder'),
    # 订单详情
    url(r'^orderdetail/$', views.orderdetail, name='orderdetail'),
    # 订单列表
    # url(r'^orderlist/(\d+)/$', views.orderlist, name='orderlist'),

    # 支付完成后(服务器)
    url(r'^appnotify/$',views.appnotify,name='appnotify'),
    # 买家支付完成后回到AXF哪个页面(客户端)
    url(r'^returnview/$',views.returnview,name='returnview'),

    url(r'^pay/$',views.pay,name='pay'),

    url(r'^returnview/$',views.returnview,name='returnview'),


]