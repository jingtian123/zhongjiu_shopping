# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-01-18 12:38
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('zhongjiuApp', '0013_order_ordergoods'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='order',
            table='zhongjiu__order',
        ),
        migrations.AlterModelTable(
            name='ordergoods',
            table='zhongjiu__ordergoods',
        ),
    ]