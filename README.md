# Fogo Baixo

**Um caderno pessoal de cozinha, de Celso Zanchetta.**

→ **[czanchetta.github.io/fogo-baixo](https://czanchetta.github.io/fogo-baixo/)**

Técnicas e receitas testadas em casa, anotadas com os porquês: por que a frigideira começa fria, por que o sal entra no fim, por que o arroz do fried rice tem que ser o de ontem.

Não é publicação editorial nem consultoria gastronômica. É um arquivo próprio, aberto porque não custa nada deixar aberto.

🇧🇷 Português · 🇪🇸 Español · 🇬🇧 English — o site detecta o idioma do navegador e lembra a escolha. Tema claro e escuro seguindo o sistema.

## Quatro formatos para a mesma receita

| Formato | Para quê |
|---|---|
| **Tradicional** | Ingredientes em lista, preparo numerado. Para ler antes. |
| **Tabela de cozimento** | A receita inteira de uma vez, no formato do [Cooking for Engineers](https://www.cookingforengineers.com/). A melhor forma de enxergar o que acontece em paralelo. |
| **Interativo** | A mesma tabela, com porções e unidades recalculadas ao vivo. |
| **Modo cozinha** | Tela grande, um passo por vez, timers nas etapas cronometradas, tela que não apaga. Para usar com as mãos sujas. |

## Conteúdo

**Técnicas (6)** — o princípio da pele crocante · a disciplina do sal · ponto de carne sem termômetro · chapa, panela e a boca de 4,5 kW · fermentar em salmoura sem medo · papinha é família de alimento, não receita

**Receitas (24), em oito capítulos:**

- **Frango** — sobrecoxa na frigideira, na airfryer e no forno · batatas na gordura do frango · arroz de alho na gordura rendida
- **Carnes na chapa e no forno** — prime rib na chapa · smashed potatoes na air fryer · medalhões de filé mignon suíno ao molho de mostarda · fraldinha marinada assada no forno
- **Um dia inteiro: a feijoada** — feijoada completa · farofa de bacon com azeitona · couve na gordura de bacon
- **Arroz e massas rápidas** — fried rice de bacon e calabresa · risone de camarão ao limão
- **Sem fogo: molhos e acompanhamentos** — farofa fria · molho alemão
- **Conservas e fermentados** — escabeche de sardinha · molho de pimenta lacto-fermentado
- **Papinhas: a introdução alimentar** — cinco papinhas da série "Papai Papinha" (2023), todas na panela de pressão e sem sal
- **Para beber** — quentão com mel

> O capítulo das papinhas é o registro do que foi feito em casa, não orientação pediátrica. Introdução alimentar se acerta com o pediatra da criança.

Também em PDF: [`Fogo-Baixo.pdf`](Fogo-Baixo.pdf) · [`Fogo-Baixo-ES.pdf`](Fogo-Baixo-ES.pdf) · [`Fogo-Baixo-EN.pdf`](Fogo-Baixo-EN.pdf)

## Como mexer

Todo o conteúdo vive em [`fonte/dados.js`](fonte/dados.js) — um arquivo só, sem build tooling. Cada string traduzível é `T("português", "español", "english")`; **estrutura, quantidades, grades e timers são definidos uma única vez**, então não há como as três versões saírem de sincronia.

```js
{ q: 4, u: "un", alt: { q: 720, u: "g" },
  nome: T("sobrecoxas com pele e osso", "contramuslos con piel y hueso", "bone-in chicken thighs"),
  obs:  T("~180 g cada", "~180 g cada uno", "~180 g each") }
```

- `q` / `u` — quantidade e código de unidade (`cs`, `cc`, `xic`, `dente`…); o dicionário `UNI` traduz e pluraliza sozinho.
- `alt` — a mesma coisa em peso/volume, para o botão Gramas.
- `escala: false` — para o que não multiplica ("a gosto").
- `q: null` — quando a receita original não tinha medida. Não invente uma.
- `grade` — `{ col, de, ate, titulo, detalhe }`: coluna da tabela e quais linhas de ingrediente a célula abraça.
- `modo` — `{ t, timer }`, com `timer` em segundos nas etapas cronometradas.

Se você só sabe o texto em português, repita o português nos três campos — nada quebra, só fica sem tradução.

```bash
python3 fonte/build.py                        # regenera index.html
npm install playwright && node fonte/build-pdf.js   # regenera os três PDFs
```

`index.html` é um arquivo único e autocontido: sem dependências externas, sem CDN, sem build no servidor. Abre direto no navegador e funciona offline.

## Achou um erro?

[Abra uma issue](https://github.com/czanchetta/fogo-baixo/issues) ou mande um e-mail.

## Licença

Conteúdo sob [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt-br) — use, adapte e compartilhe à vontade, sem fins comerciais, mantendo a atribuição e a mesma licença.

---

Celso Zanchetta · [github.com/czanchetta](https://github.com/czanchetta) · celso.zanchetta@gmail.com
