import hashlib
import random
import time
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from zhongjiuApp.models import Banner, User, Goods

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
             request.session.set_expiry(30)

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
def detail(request):


    # token
    token = request.session.get('token')
    users = User.objects.filter(token=token)
    if users.count():
        user = users.first()
        phone = user.phone
    else:
        phone = None

    data={
        'phone': phone,
    }
    return render(request, 'detail.html',context=data)

# 购物车
def cart(request):



    # token
    token = request.session.get('token')
    users = User.objects.filter(token=token)
    if users.count():
        user = users.first()
        phone = user.phone
    else:
        phone = None

    data = {
        'phone': phone,
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
        return JsonResponse({'msg':'恭喜,可用的手机号!','status':1})
