# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-01-18 17:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zhongjiuApp', '0002_auto_20190118_1722'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goods',
            name='price',
            field=models.CharField(max_length=50),
        ),
    ]
