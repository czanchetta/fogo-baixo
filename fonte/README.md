# Fonte

- `src/*.js` — o conteúdo, dividido por capítulo. É aqui que se edita.
- `dados.js` — concatenação de `src/*.js` na ordem alfabética. Gerado, não edite.
- `template.html` — layout, estilos e comportamento do site.
- `build.py` — injeta `dados.js` em `template.html` e escreve `../index.html`.
- `build-pdf.js` — gera os três PDFs a partir do mesmo `dados.js`.
- `safari/` — fonte da página `../safari/index.html` (só português, fora dos PDFs): `safari.json` (paradas, situação de cada uma e roteiros), `distritos.json` (limites dos distritos, GeoSampa via codigourbano/distritos-sp, simplificados), `template.html` e `build.py`. Os pares com receitas do caderno são os mesmos de `src/95-darua.js`.

```bash
cat src/*.js > dados.js      # depois de editar src/
python3 build.py             # regenera index.html
node build-pdf.js            # regenera os PDFs (precisa de playwright)
```
