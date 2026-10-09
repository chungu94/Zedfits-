from django.http import HttpResponse
from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent

def home(request):
    for p in [BASE_DIR / 'zedfits.html', BASE_DIR / 'Zedfits.html', BASE_DIR / 'zedfits' / 'zedfits.html', BASE_DIR / 'zedfits' / 'Zedfits.html', BASE_DIR / 'templates' / 'zedfits.html']:
        if p.exists():
            return HttpResponse(p.read_text(encoding='utf-8', errors='ignore'))
    return HttpResponse("<h1>Zedfits- running but zedfits.html not found</h1><p>Checked: " + str(BASE_DIR) + "</p>")
PYcat > zedfits/urls.py << 'PY'
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.BASE_DIR)
    urlpatterns += static('/Images/', document_root=settings.BASE_DIR / 'Images')
    urlpatterns += static('/zedfits/Images/', document_root=settings.BASE_DIR / 'zedfits' / 'Images')
