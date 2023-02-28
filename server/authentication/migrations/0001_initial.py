# Generated by Django 4.1.7 on 2023-02-26 18:46

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="User",
            fields=[
                ("password", models.CharField(max_length=128, verbose_name="password")),
                (
                    "id",
                    models.CharField(
                        default=uuid.uuid4,
                        editable=False,
                        max_length=36,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("company_id", models.CharField(max_length=255)),
                ("group_id", models.CharField(max_length=255)),
                ("company_name", models.CharField(max_length=255)),
                ("name", models.CharField(max_length=255)),
                (
                    "email",
                    models.EmailField(
                        max_length=255, unique=True, verbose_name="email address"
                    ),
                ),
                ("address_first_line", models.CharField(max_length=255)),
                ("address_second_line", models.CharField(max_length=255)),
                ("address_town_city", models.CharField(max_length=255)),
                ("address_country_code", models.CharField(max_length=255)),
                ("address_country", models.CharField(max_length=255)),
                ("is_active", models.BooleanField(default=True)),
                ("is_admin", models.BooleanField(default=False)),
                ("role", models.CharField(default="Company", max_length=255)),
                ("image", models.CharField(max_length=255)),
                ("last_login", models.DateTimeField(auto_now=True)),
                ("created_at", models.DateTimeField(auto_now=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={
                "abstract": False,
            },
        ),
    ]