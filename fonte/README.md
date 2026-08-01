# Fonte

- `src/*.js` — o conteúdo, dividido por capítulo. É aqui que se edita.
- `dados.js` — concatenação de `src/*.js` na ordem alfabética. Gerado, não edite.
- `template.html` — layout, estilos e comportamento do site.
- `build.py` — injeta `dados.js` em `template.html` e escreve `../index.html`.
- `build-pdf.js` — gera os três PDFs a partir do mesmo `dados.js`.

```bash
cat src/*.js > dados.js      # depois de editar src/
python3 build.py             # regenera index.html
node build-pdf.js            # regenera os PDFs (precisa de playwright)
```
