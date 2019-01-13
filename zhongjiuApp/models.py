from django.db import models

# Create your models here.


class Banner(models.Model):
    img = models.CharField(max_length=255)

    class Meta:
        db_table = 'zhongjiu_wheel'


# 用户模型类
class User(models.Model):
    password = models.CharField(max_length=255)
    phone = models.CharField(max_length=11)
    token = models.CharField(max_length=255)


# 商品
class Goods(models.Model):
    type = models.CharField(max_length=10,default=0)
    img = models.CharField(max_length=100)
    price = models.CharField(max_length=20)
    title = models.CharField(max_length=100)
    bigimg = models.CharField(max_length=100,default='')
    smallimg1 = models.CharField(max_length=100,default='')
    smallimg2 = models.CharField(max_length=100,default='')
    smallimg3 = models.CharField(max_length=100,default='')
    smallimg4 = models.CharField(max_length=100,default='')



