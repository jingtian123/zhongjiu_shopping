# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-01-18 11:20
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('zhongjiuApp', '0012_cart_isselect'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.IntegerField(default=0)),
                ('createtime', models.DateTimeField(auto_now_add=True)),
                ('indentifier', models.CharField(max_length=256)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='zhongjiuApp.User')),
            ],
            options={
                'db_table': 'zj_order',
            },
        ),
        migrations.CreateModel(
            name='OrderGoods',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.IntegerField()),
                ('goods', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='zhongjiuApp.Goods')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='zhongjiuApp.Order')),
            ],
            options={
                'db_table': 'zj_ordergoods',
            },
        ),
    ]
