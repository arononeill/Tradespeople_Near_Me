# Generated by Django 2.2.6 on 2020-02-29 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_auto_20200229_1732'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tradesperson',
            name='image',
            field=models.ImageField(blank=True, default='../Tradesperson/media/profile_image/LinkedInPic.png', upload_to='profile_image'),
        ),
    ]
