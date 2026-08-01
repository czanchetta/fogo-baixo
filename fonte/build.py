#!/usr/bin/env python3
"""Concatena fonte/src/*.js em fonte/dados.js e injeta em template.html -> index.html."""
import pathlib
raiz = pathlib.Path(__file__).resolve().parent.parent
fonte = raiz / "fonte"
partes = sorted((fonte / "src").glob("*.js"))
if partes:
    (fonte / "dados.js").write_text("".join(p.read_text(encoding="utf-8") for p in partes), encoding="utf-8")
    print(f"dados.js montado a partir de {len(partes)} arquivos em src/")
tpl = (fonte / "template.html").read_text(encoding="utf-8")
dados = (fonte / "dados.js").read_text(encoding="utf-8")
(raiz / "index.html").write_text(tpl.replace("/*DADOS*/", dados), encoding="utf-8")
print("index.html gerado")
