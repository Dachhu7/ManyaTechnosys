import os
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'socialhub.settings')

application = get_asgi_application()
git remote set-url origin https://github.com/Dachhu7/ManyaTechnosys.git