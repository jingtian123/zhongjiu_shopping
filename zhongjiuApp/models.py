from django.db import models

# Create your models here.


class Banner(models.Model):
    img = models.CharField(max_length=255)

    class Meta:
        db_table = 'zhongjiu_wheel'


# 用户
class User(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=255)
    phone = models.CharField(max_length=11)
    tokon = models.CharField(max_length=255)


# 商品
class Goods(models.Model):
    type = models.CharField(max_length=10,default=0)
    img = models.CharField(max_length=100)
    price = models.CharField(max_length=20)
    title = models.CharField(max_length=100)


