# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-01-10 05:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zhongjiuApp', '0002_auto_20190109_0925'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=20)),
                ('password', models.CharField(max_length=255)),
                ('phone', models.CharField(max_length=11)),
                ('tokon', models.CharField(max_length=255)),
            ],
        ),
    ]
