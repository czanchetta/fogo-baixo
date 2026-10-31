"""Gera safari/index.html a partir de fonte/safari/{template.html, safari.json, distritos.json}.

Rodar da raiz do repositório:  python3 fonte/safari/build.py
"""
import json
import os

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.dirname(os.path.dirname(AQUI))


def le(nome):
    with open(os.path.join(AQUI, nome), encoding="utf-8") as f:
        return f.read()


dados = json.loads(le("safari.json"))
mapa = json.loads(le("distritos.json"))
html = le("template.html")
seguro = lambda o: json.dumps(o, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")
for marca in ("/*__DADOS__*/", "/*__MAPA__*/"):
    assert marca in html, marca
html = html.replace("/*__DADOS__*/", seguro(dados)).replace("/*__MAPA__*/", seguro(mapa))
saida = os.path.join(RAIZ, "safari", "index.html")
os.makedirs(os.path.dirname(saida), exist_ok=True)
with open(saida, "w", encoding="utf-8") as f:
    f.write(html)
print(saida, len(html) // 1024, "KB,", len(dados["itens"]), "paradas")
