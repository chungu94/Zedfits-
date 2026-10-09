from django.http import HttpResponse
from pathlib import Path

def home(request):
    # Find your zedfits.html file
    file_path = Path(__file__).resolve().parent.parent / 'zedfits.html'
    if file_path.exists():
        html = file_path.read_text()
        return HttpResponse(html)
    else:
        return HttpResponse("<h1>Zedfits - file not found</h1><p>Put zedfits.html in the main folder</p>")