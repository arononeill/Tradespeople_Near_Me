# Generated by Django 2.2.6 on 2020-02-21 11:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20200219_1835'),
    ]

    operations = [
        migrations.AddField(
            model_name='tradesperson',
            name='occupation',
            field=models.CharField(default='Plumber', max_length=25),
            preserve_default=False,
        ),
    ]
