# Fogo Baixo

**Um caderno pessoal de cozinha, de Celso Zanchetta.**

→ **[czanchetta.github.io/fogo-baixo](https://czanchetta.github.io/fogo-baixo/)**

Técnicas e receitas testadas em casa, anotadas com os porquês: por que a frigideira começa fria, por que o sal entra no fim, por que o arroz do fried rice tem que ser o de ontem.

Não é publicação editorial nem consultoria gastronômica. É um arquivo próprio, aberto porque não custa nada deixar aberto.

## Quatro formatos para a mesma receita

| Formato | Para quê |
|---|---|
| **Tradicional** | Ingredientes em lista, preparo numerado. Para ler antes. |
| **Tabela de cozimento** | A receita inteira de uma vez, no formato do [Cooking for Engineers](https://www.cookingforengineers.com/). A melhor forma de enxergar o que acontece em paralelo. |
| **Interativo** | A mesma tabela, com porções e unidades recalculadas ao vivo. |
| **Modo cozinha** | Tela grande, um passo por vez, timers nas etapas cronometradas. Para usar com as mãos sujas. |

## Conteúdo

**Técnicas** — o princípio da pele crocante · a disciplina do sal · ponto de carne sem termômetro · chapa, panela e a boca de 4,5 kW · fermentar em salmoura sem medo

**Receitas** — sobrecoxa (frigideira, airfryer, forno) · batatas na gordura do frango · arroz de alho · prime rib na chapa · smashed potatoes na air fryer · medalhões de filé mignon suíno ao molho de mostarda · fraldinha marinada assada · feijoada completa · farofa de bacon · couve na gordura de bacon · fried rice de bacon e calabresa · risone de camarão ao limão · escabeche de sardinha · molho de pimenta lacto-fermentado · quentão com mel

Também disponível em PDF: [`Fogo-Baixo.pdf`](Fogo-Baixo.pdf).

## Como mexer

Todo o conteúdo vive em [`fonte/dados.js`](fonte/dados.js) — um arquivo só, sem build tooling. Cada receita traz ingredientes (com equivalência em gramas e escala por porção), a grade da tabela de cozimento, o modo de preparo com timers, e as notas.

```bash
# depois de editar fonte/dados.js ou fonte/template.html
python3 fonte/build.py          # regenera index.html

# opcional: regenerar o PDF (precisa de node + playwright)
npm install playwright && node fonte/build-pdf.js
```

`index.html` é um arquivo único e autocontido: sem dependências externas, sem CDN, sem build step no servidor. Abre direto no navegador, funciona offline.

## Achou um erro?

[Abra uma issue](https://github.com/czanchetta/fogo-baixo/issues) ou mande um e-mail.

## Licença

Conteúdo sob [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt-br) — use, adapte e compartilhe à vontade, sem fins comerciais, mantendo a atribuição e a mesma licença.

---

Celso Zanchetta · [github.com/czanchetta](https://github.com/czanchetta) · celso.zanchetta@gmail.com
