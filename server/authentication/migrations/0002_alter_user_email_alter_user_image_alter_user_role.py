# Generated by Django 4.1.7 on 2023-02-28 07:16

import authentication.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("authentication", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="email",
            field=models.EmailField(max_length=255, unique=True, verbose_name="email"),
        ),
        migrations.AlterField(
            model_name="user",
            name="image",
            field=models.ImageField(
                default="profile/placeholder.jpg",
                upload_to=authentication.models.upload_to,
                verbose_name="Image",
            ),
        ),
        migrations.AlterField(
            model_name="user",
            name="role",
            field=models.CharField(
                choices=[
                    ("Admin", "Admin"),
                    ("Company", "Company"),
                    ("Client", "Client"),
                    ("Team", "Team"),
                ],
                default="Company",
                max_length=255,
            ),
        ),
    ]
