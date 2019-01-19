import hashlib
import random
import time
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from zhongjiuApp.alipay import alipay
from zhongjiuApp.models import Banner, User, Goods, Cart, Order, OrderGoods


# 首页
def index(request):
    # 轮播
    lunbos = Banner.objects.all()

    phone = request.COOKIES.get('phone')

    # 白酒
    bais = Goods.objects.filter(type='baijiu')
    # 红酒
    redwines = Goods.objects.filter(type='red')
    # 洋酒
    yangs = Goods.objects.filter(type='yang')
    # 其他
    others = Goods.objects.filter(type='other')
    # 限时抢购
    times = Goods.objects.filter(type='time')

    # token
    token = request.session.get('token')
    users = User.objects.filter(token=token)
    if users.count():
        user = users.first()
        phone = user.phone
    else:
        phone = None

    data = {
        'lunbos': lunbos,
        'phone': phone,
        'bais': bais,
        'redwines': redwines,
        'yangs': yangs,
        'others': others,
        'times': times,

    }

    return render(request, 'index.html', context=data)




# 自定义生成token令牌
def generate_token():
    token = str(time.time()) + str(random.random())
    md5 = hashlib.md5()
    md5.update(token.encode('utf-8'))

    return md5.hexdigest()


# 密码sha加密
def generate_password(password):
    #
    # password = str(time.time()) + str(random.random())
    # md5 = hashlib.md5()
    # md5.update(password.encode('utf-8'))
    #
    sha = hashlib.sha256()
    sha.update(password.encode('utf-8'))
    return sha.hexdigest()



# 注册
def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        user = User()
        # 密码加密
        user.password = generate_password(request.POST.get('password'))
        user.phone = request.POST.get('phone')
        print('手机'+ user.phone, '密码' + user.password)

        # 生成token
        user.token = generate_token()
        print(user.token)
        user.save()

        response = redirect('zj:index')
        request.session['token'] = user.token

        return response


# 登录
def login(request):
    if request.method == 'GET':
         return render(request, 'login.html')
    elif request.method == 'POST':
         phone = request.POST.get('phone')
         password = generate_password(request.POST.get('password'))
         print(phone,password)
         users = User.objects.filter(phone=phone).filter(password=password)
         if users.count():
             response = redirect('zj:index')

             # token
             user = users.first()
             user.token = generate_token()
             user.save()
             request.session['token'] = user.token
             request.session.set_expiry(60*60*24*7)

             return response
         else:
             return render(request,'login.html',context={'err':'用户名或密码错误!请重试!'})



# 退出登录
def logout(request):
    response = redirect('zj:index')
    # token
    request.session.flush()

    return response

# 商品详情
def detail(request,googsid):
    goods = Goods.objects.get(pk=googsid)
    # print('地址'+ goods.bigimg,goods.smallimg1,goods.smallimg2,goods.smallimg3,goods.smallimg4)



    # token
    token = request.session.get('token')
    users = User.objects.filter(token=token)
    if users.count():
        user = users.first()
        phone = user.phone
    else:
        phone = None

    # 获取购物车信息
    token = request.session.get('token')
    carts = []
    if token:
       use = User.objects.get(token=token)
       carts = Cart.objects.filter(user=use)

    data={
        'phone': phone,
        'goods':goods,
        'carts':carts
    }
    return render(request, 'detail.html',context=data)

# 购物车
def cart(request):
    # token
    token = request.session.get('token')
    users = User.objects.filter(token=token)
    carts = Cart.objects.filter(user=users).exclude(number=0)



    if users.count():
        user = users.first()
        phone = user.phone
    else:
        phone = None


    data = {
        'phone': phone,
        'carts':carts
    }


    return render(request, 'cart.html',context=data)



# ajax 检测号码是否可用
def cheakphone(request):

    # 手机号码
    phone = request.GET.get('phone')
    users = User.objects.filter(phone=phone)
    if users.exists():
        return JsonResponse({'msg':'胸弟,手机被占用了!','status':0})
    else:
        return JsonResponse({'msg':'可用的手机号!','status':1})

# 加购物车
def addcart(request):
    print('添加购物车请求')
    # 获取token
    token = request.session.get('token')
    data = {}
    if token:     # 有登录
        # 获取用户
        user = User.objects.get(token=token)
        print(user.phone)
        # 获取商品id
        goodsid = request.GET.get('goodsid')
        goods = Goods.objects.get(pk=goodsid)
        print(goodsid)

        # 判断该商品是否存在
        carts = Cart.objects.filter(user=user).filter(goods=goods)
        if carts.exists():  #存在
            cart = carts.first()
            cart.number = cart.number+1
            cart.save()
        else:   # 添加一条记录
            cart = Cart()
            cart.user = user
            cart.goods = goods
            cart.number = 1
            cart.save()

        # pricesum = 0
        # for temp in carts:
        #     pricesum += int(temp.number) * float(temp.goods.price)
        # print('总价：',pricesum)
        return JsonResponse(
                {'msg': '{}-添加购物车成功!'.format(goods.title), 'status': 1, 'number': cart.number})

    else:
        data['msg'] = '请登录后操作'
        data['status'] = 0
        return JsonResponse({'msg': '请登录后操作!', 'status': 0})


# 购物车减操作
def subcart(request):
    token = request.session.get('token')
    user = User.objects.get(token=token)
    print(user.phone)

    goodsid = request.GET.get('goodsid')
    print(goodsid)
    goods = Goods.objects.get(pk=goodsid)


    cart = Cart.objects.filter(user=user).filter(goods=goods).first()
    cart.number = cart.number - 1
    cart.save()

    responseData = {
        'msg':'{}-商品删减成功'.format(goods.title),
        'status':1,
        'number': cart.number
    }

    return JsonResponse(responseData)

# 改变商品状态
def changecartstatus(request):
    cartid = request.GET.get('cartid')
    cart = Cart.objects.get(pk=cartid)
    cart.isselect = not cart.isselect
    cart.save()

    data = {
        'msg':'状态修改成功',
        'status': 1,
        'isselect': cart.isselect
    }
    return JsonResponse(data)

# 全选
def changecartall(request):
    token = request.session.get('token')
    user = User.objects.get(token=token)


    # True/flase 处理
    isall = request.GET.get('isall')
    if isall == 'true':
        isall = True
    else:
        isall = False
    carts = Cart.objects.filter(user=user).update(isselect=isall)

    data = {
        'msg': '状态修改成功',
        'status': 1,

    }
    return JsonResponse(data)


# 生成订单号
def generate_identifier():
    tempstr = str(int(time.time())) + str(random.random())
    return tempstr

# 下单
def generateorder(request):
    token = request.session.get('token')
    user = User.objects.get(token=token)
    print('令牌',token)
    # print('用户'+user)

    # 订单
    order = Order()
    order.user = user
    order.identifier = generate_identifier()
    order.save()

    # 订单商品
    carts = Cart.objects.filter(user=user).filter(isselect=True).exclude(number=0)

    # 只有选中的商品，才是添加到订单中，从购物车中删除
    for cart in carts:
        orderGoods = OrderGoods()
        orderGoods.order = order
        orderGoods.goods = cart.goods
        orderGoods.number = cart.number
        orderGoods.save()

        # 从购物车删除
        cart.delete()
    data = {
        'msg':'下单成功',
        'status':1,
        'identifier': order.identifier
    }
    return JsonResponse(data)


# 订单详情
def orderdetail(request):

    token = request.session.get('token')
    users = User.objects.filter(token=token)
    if users.count():
        user = users.first()
        phone = user.phone
    else:
        phone = None

    identifier= request.GET.get('identifier')
    print('订单号',identifier)
    order = Order.objects.get(identifier=identifier)

    return render(request,'orderdetail.html',context={'order':order,'phone':phone})

@csrf_exempt
def appnotify(request):
    # 获取订单号
    if request.method == 'POST':
        from urllib.parse import parse_qs
        body_str = request.body.decode('utf-8')
        post_data = parse_qs(body_str)
        post_dir = {}

        print(body_str)
        print(post_data)
        print(post_data.items())
        for key, value in post_data.items():
            post_dir[key] = value[0]

        out_trade_no = post_dir['out_trade_no']
        print(out_trade_no)

        # 更新状态
        Order.objects.filter(identifier=out_trade_no).update(status=1)
        print('支付完成')
        return JsonResponse({'msg':'success'})


def returnview(request):
    return redirect('zj:index')


# def orderlist(request, status):
#     orders = Order.objects.filter(status=status)
#     return render(request, 'orderlist.html', context={'orders': orders})


def pay(request):
    identifier = request.GET.get('identifier')
    print('订单号',identifier)
    order = Order.objects.get(identifier=identifier)
    sum = 0
    for orderGoods in order.ordergoods_set.all():
        sum += int(orderGoods.goods.price) * int(orderGoods.number)

    # 支付地址
    url = alipay.direct_pay(
        subject='茅台-500ml',  # 支付宝页面显示的标题
        out_trade_no=identifier,  # 订单编号
        total_amount=str(sum),  # 订单金额
        return_url='http://47.107.77.202/returnview/'
    )

    # 拼接上支付网关
    alipayurl = 'https://openapi.alipaydev.com/gateway.do?{data}'.format(data=url)

    return JsonResponse({'alipayurl': alipayurl, 'status': 1})
