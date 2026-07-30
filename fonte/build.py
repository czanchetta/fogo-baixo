#!/usr/bin/env python3
"""Gera index.html injetando fonte/dados.js dentro de fonte/template.html."""
import pathlib
raiz = pathlib.Path(__file__).resolve().parent.parent
tpl = (raiz / "fonte" / "template.html").read_text(encoding="utf-8")
dados = (raiz / "fonte" / "dados.js").read_text(encoding="utf-8")
(raiz / "index.html").write_text(tpl.replace("/*DADOS*/", dados), encoding="utf-8")
print("index.html gerado")
