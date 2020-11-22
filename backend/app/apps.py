from django.apps import AppConfig
from django.conf import settings
from django.db.models.signals import post_migrate
from django.contrib.auth.apps import AuthConfig

class AppConfig(AppConfig):
    name = 'app'


USERNAME = "admin"
PASSWORD = "admin"


def create_admin_user(sender, **kwargs):
    if not settings.DEBUG:
        return
    if not isinstance(sender, AuthConfig):
        return
    from django.contrib.auth.models import User
    manager = User.objects
    try:
        manager.get(username=USERNAME)
    except User.DoesNotExist:
        manager.create_superuser(USERNAME, 'admin@admin.com', PASSWORD)


class UserAppConfig(AppConfig):
    name = __package__

    def ready(self):
        post_migrate.connect(create_admin_user)
