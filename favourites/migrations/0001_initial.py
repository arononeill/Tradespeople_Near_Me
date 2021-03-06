# Generated by Django 2.2.6 on 2020-03-25 00:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Favourites',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=25)),
                ('firstname', models.CharField(max_length=20)),
                ('lastname', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=30)),
                ('phone_no', models.CharField(max_length=20)),
                ('company_name', models.CharField(max_length=20)),
                ('occupation', models.CharField(max_length=25)),
                ('town', models.CharField(max_length=25)),
                ('county', models.CharField(max_length=25)),
                ('image', models.ImageField(blank=True, null=True, upload_to='profile_image')),
            ],
            options={
                'verbose_name_plural': 'Favourites',
            },
        ),
    ]
