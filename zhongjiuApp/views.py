from django.http import HttpResponse
from django.shortcuts import render, redirect

# Create your views here.
from zhongjiuApp.models import Banner, User,Goods


def index(request):
    # 轮播
    lunbos=Banner.objects.all()

    phone=request.COOKIES.get('phone')

    # 白酒
    bais = Goods.objects.filter(type='baijiu')
    # 红酒
    redwines = Goods.objects.filter(type='red')
    # 洋酒
    yangs = Goods.objects.filter(type='yang')
    # 其他
    others = Goods.objects.filter(type='other')

    data ={
        'lunbos':lunbos,
        'phone':phone,
        'bais':bais,
        'redwines':redwines,
        'yangs':yangs,
        'others':others,



    }


    return render(request,'index.html',context=data)


def login(request):
    if request.method == 'GET':
        return render(request,'login.html')
    elif request.method == 'POST':
        phone = request.POST.get('phone')
        password = request.POST.get('password')

        users = User.objects.filter(phone=phone).filter(password=password)
        if users.count():
            response = redirect('zj:index')

            # cookie
            response.set_cookie('phone',phone)
            return response


def register(request):
    if request.method == 'GET':
        return render(request,'register.html')
    elif request.method == 'POST':
        user = User()
        user.password = request.POST.get('password')
        user.phone = request.POST.get('phone')
        print(user.username,user.phone,user.password)

        user.save()
        # cookie
        response = redirect('zj:index')
        response.set_cookie('phone',user.phone)
        return response



def logout(request):
    response = redirect('zj:index')
    # cookie
    response.delete_cookie('phone')
    return response


def detail(request):
    return render(request, 'detail.html')



def cart(request):
    return render(request, 'cart.html')


def cheakphone(request):
    return None