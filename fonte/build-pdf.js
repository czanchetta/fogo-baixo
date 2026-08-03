/* Gera os três PDFs (pt, es, en) a partir do mesmo dados.js */
const fs = require('fs');
const vm = require('vm');
const { chromium } = require('playwright');

const ctx = { console };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync('dados.js','utf8') +
  ';globalThis.__X={LIVRO,UI,UNI,IDIOMAS,CAPITULOS,TECNICAS,RECEITAS};', ctx);
const { LIVRO, UI, UNI, IDIOMAS, CAPITULOS, TECNICAS, RECEITAS } = ctx.__X;

let LANG = 'pt';
const t = v => v == null ? '' : (typeof v === 'string' ? v : (v[LANG] != null ? v[LANG] : v.pt));
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const uni = (cod, pl) => { const u = UNI[cod]; if (!u) return cod || ''; const p = u[LANG] || u.pt; return pl ? p[1] : p[0]; };
const dec = n => LANG === 'en' ? String(n) : String(n).replace('.', ',');
const rotuloPorcoes = (n, ehLote) => `${n} ${esc(t(n === 1 ? (ehLote ? UI.lote : UI.porcao) : (ehLote ? UI.lotes : UI.porcoes)))}`;
const fmtDuracao = min => {
  if (min < 180) return `${min} ${esc(t(UI.min))}`;
  if (min < 2880) {
    const h = Math.floor(min / 60), r = min % 60;
    return r === 0 ? `${h} ${esc(t(UI.hAbrev))}` : `${h}h${String(r).padStart(2, '0')}`;
  }
  const d = Math.round(min / 1440);
  return `${d} ${esc(t(d === 1 ? UI.dia : UI.dias))}`;
};

const FR = [[1/8,"⅛"],[1/6,"⅙"],[1/4,"¼"],[1/3,"⅓"],[1/2,"½"],[2/3,"⅔"],[3/4,"¾"]];
function fracao(n){
  const i = Math.floor(n + 1e-6), r = n - i;
  if (r < 0.04) return String(i);
  if (r > 0.96) return String(i + 1);
  let best = null, err = 1;
  for (const [v, s] of FR){ const e = Math.abs(r - v); if (e < err){ err = e; best = s; } }
  if (err > 0.06) return dec(Math.round(n * 100) / 100);
  return (i ? i + ' ' : '') + best;
}
const PESO = new Set(['g','ml','kg','l']);
const fq = (q, u) => PESO.has(u) ? dec(q) : fracao(q);
function ingHTML(i){
  if (i.q == null) return `${esc(t(i.nome))}${i.obs ? ` <span class="obs">— ${esc(t(i.obs))}</span>` : ''}`;
  const u = i.u ? uni(i.u, i.q > 1.0001) : '';
  return `<span class="q">${esc((fq(i.q, i.u) + (u ? ' ' + u : '')).trim())}</span> ${esc(t(i.nome))}${i.obs ? ` <span class="obs">— ${esc(t(i.obs))}</span>` : ''}`;
}
const num = id => { let n = 0; for (const c of CAPITULOS) for (const r of RECEITAS.filter(x => x.capitulo === c.id)){ n++; if (r.id === id) return String(n).padStart(2,'0'); } return ''; };

function tabela(r){
  const n = Math.max(...r.grade.map(g => g.col));
  const occ = {}; r.grade.forEach(s => { for (let i = s.de; i <= s.ate; i++) occ[s.col+':'+i] = true; });
  let cells = r.ingredientes.map((i, idx) =>
    `<div class="g-ing" style="grid-column:1;grid-row:${idx+1}"><div>${ingHTML(i)}</div></div>`).join('');
  cells += r.grade.map(s =>
    `<div class="g-step" style="grid-column:${s.col+1};grid-row:${s.de+1}/${s.ate+2}"><div class="t">${esc(t(s.titulo))}</div>${s.detalhe ? `<div class="d">${esc(t(s.detalhe))}</div>` : ''}</div>`).join('');
  for (let c = 1; c <= n; c++) for (let i = 0; i < r.ingredientes.length; i++)
    if (!occ[c+':'+i]) cells += `<div class="g-empty" style="grid-column:${c+1};grid-row:${i+1}"></div>`;
  const larga = n >= 7;
  return `<div class="grid-wrap${larga ? ' larga' : ''}">
    <div class="grid-band">${esc(t(r.faixa))}</div>
    <div class="grid" style="grid-template-columns:minmax(0,${larga ? 1.25 : 1.5}fr) repeat(${n},minmax(0,1fr))">${cells}</div>
  </div>`;
}

function tabelaTecnica(tb){
  let h = '<table class="ftab">';
  if (tb.legenda) h += `<caption>${esc(t(tb.legenda))}</caption>`;
  h += `<thead><tr>${tb.cabecalho.map(c => `<th>${esc(t(c))}</th>`).join('')}</tr></thead>`;
  h += `<tbody>${tb.linhas.map(lin => `<tr>${lin.map(c => `<td>${esc(t(c))}</td>`).join('')}</tr>`).join('')}</tbody>`;
  h += '</table>';
  return h;
}

function documento(){
  const capa = `
<section class="cover">
  <div class="k">${esc(t(LIVRO.subtitulo))}</div>
  <div>
    <h1>${esc(LIVRO.titulo)}</h1>
    <p>${esc(t(LIVRO.chamadaPdf))}</p>
  </div>
  <div class="a">${esc(LIVRO.autor)}<br><span class="dim">${esc(t(LIVRO.edicao))}</span></div>
</section>`;

  const sumario = `
<section class="page toc">
  <h2 class="ch">${esc(t(UI.sumario))}</h2>
  <h4>${esc(t(UI.tecnicas))}</h4>
  <ul class="toc-list">${TECNICAS.map(x => `<li>${esc(t(x.titulo))}<span class="sub">${esc(t(x.kicker).toLowerCase())}</span></li>`).join('')}</ul>
  ${CAPITULOS.map(c => {
    const rs = RECEITAS.filter(r => r.capitulo === c.id);
    if (!rs.length) return '';
    return `<h4>${esc(t(c.nome))}</h4>${c.intro ? `<p class="cap-intro">${esc(t(c.intro))}</p>` : ''}<ul class="toc-list">${rs.map(r => `<li><b class="n">${num(r.id)}</b> ${esc(t(r.titulo))}<span class="sub">${esc(t(r.kicker).toLowerCase())}</span></li>`).join('')}</ul>`;
  }).join('')}
</section>`;

  const divisor = (k, h, p) => `
<section class="page divisor"><div class="dv-k">${esc(k)}</div><h2>${esc(h)}</h2><p>${esc(p)}</p></section>`;

  const tecnicas = TECNICAS.map(x => `
<section class="page">
  <p class="kicker">${esc(t(x.kicker))}</p>
  <h1>${esc(t(x.titulo))}</h1>
  <p class="lede">${esc(t(x.resumo))}</p>
  <hr>
  ${x.corpo.map(s => `<h3>${esc(t(s.h))}</h3><p class="body">${esc(t(s.p))}</p>${s.tabela ? tabelaTecnica(s.tabela) : ''}`).join('')}
  <div class="notas"><h4>${esc(t(UI.notas))}</h4><ul>${x.notas.map(y => `<li>${esc(t(y))}</li>`).join('')}</ul></div>
</section>`).join('');

  const receitas = CAPITULOS.map(c => {
    const rs = RECEITAS.filter(r => r.capitulo === c.id);
    if (!rs.length) return '';
    return rs.map(r => `
<section class="page">
  <p class="kicker">${num(r.id)} · ${esc(t(c.nome))} · ${esc(t(r.kicker))}</p>
  <h1>${esc(t(r.titulo))}</h1>
  <p class="lede">${esc(t(r.subtitulo))}</p>
  <hr>
  ${r.principio ? `<p class="principio">${esc(t(r.principio))}</p>` : ''}
  <div class="meta">
    <div><span>${esc(t(UI.rende))}</span><b>${r.rende ? esc(t(r.rende)) : rotuloPorcoes(r.porcoes, r.lote)}</b></div>
    <div><span>${esc(t(UI.ativo))}</span><b>${fmtDuracao(r.ativo)}</b></div>
    <div><span>${esc(t(UI.totalT))}</span><b>${fmtDuracao(r.total)}</b></div>
    <div><span>${esc(t(UI.utensilio))}</span><b>${esc(t(r.utensilio))}</b></div>
  </div>
  <div class="cols">
    <div><h4>${esc(t(UI.ingredientes))}</h4><ul class="ings">${r.ingredientes.map(x => `<li>${ingHTML(x)}</li>`).join('')}</ul></div>
    <div><h4>${esc(t(UI.preparo))}</h4><ol class="modo">${r.modo.map(s => `<li>${esc(t(s.t))}</li>`).join('')}</ol></div>
  </div>
  <h4 class="tab-h">${esc(t(UI.tabela))}</h4>
  ${tabela(r)}
  <div class="notas"><h4>${esc(t(UI.notas))}</h4><ul>${r.notas.map(x => `<li>${esc(t(x))}</li>`).join('')}</ul></div>
</section>`).join('');
  }).join('');

  const colofao = `
<section class="page colofao">
  <p class="kicker">${esc(t(UI.colofao)).toUpperCase()}</p>
  <h1>${esc(t(UI.sobreTitulo))}</h1>
  <hr>
  ${UI.sobreCorpo.map(p => `<p class="body">${esc(t(p))}</p>`).join('')}
  <div class="idbox">
    <h4>${esc(LIVRO.autor)}</h4>
    <p>${esc(t(UI.projetoPessoal))}</p>
    <p class="mono">github.com/czanchetta<br>celso.zanchetta@gmail.com<br>czanchetta.github.io/fogo-baixo</p>
  </div>
</section>`;

  const htmlLang = (IDIOMAS.find(i => i.cod === LANG) || IDIOMAS[0]).htmlLang;
  return `<!DOCTYPE html><html lang="${htmlLang}"><head><meta charset="utf-8"><style>
@page{size:A4;margin:18mm 16mm 20mm}
*{box-sizing:border-box}
body{margin:0;font-family:"Inter",ui-sans-serif,system-ui,Helvetica,Arial,sans-serif;color:#15180f;font-size:10.5pt;line-height:1.5;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.mono,.dim{font-family:ui-monospace,"SF Mono",Menlo,Consolas,monospace}
.page{break-after:page}
.page:last-child{break-after:auto}
.cover{height:245mm;display:flex;flex-direction:column;justify-content:space-between;background:#15180f;color:#eef1e6;margin:-18mm -16mm 0;padding:34mm 22mm 26mm;break-after:page}
.cover .k{font-family:ui-monospace,Menlo,monospace;font-size:9pt;letter-spacing:.3em;text-transform:uppercase;color:#c07d1c}
.cover h1{font-size:76pt;line-height:.88;letter-spacing:-.045em;margin:10mm 0 0;font-weight:800}
.cover p{font-size:13.5pt;max-width:72%;line-height:1.35;margin:9mm 0 0;color:#c3ccb5}
.cover .a{font-family:ui-monospace,Menlo,monospace;font-size:10pt;letter-spacing:.16em;text-transform:uppercase;color:#e2e8d6;line-height:1.8}
.cover .dim{color:#8e9a7c;font-size:8.5pt}
.divisor{height:225mm;display:flex;flex-direction:column;justify-content:center;border-top:2pt solid #15180f;border-bottom:2pt solid #15180f}
.divisor .dv-k{font-family:ui-monospace,Menlo,monospace;font-size:8pt;letter-spacing:.28em;text-transform:uppercase;color:#c07d1c;font-weight:700}
.divisor h2{font-size:44pt;line-height:1;letter-spacing:-.04em;margin:6mm 0 0;font-weight:800;max-width:16ch}
.divisor p{font-size:12.5pt;max-width:44ch;margin:8mm 0 0;color:#3d4232;line-height:1.5}
.kicker{font-family:ui-monospace,Menlo,monospace;font-size:8pt;letter-spacing:.18em;text-transform:uppercase;color:#c07d1c;font-weight:700;margin:0 0 4mm}
h1{font-size:29pt;line-height:1.02;letter-spacing:-.03em;margin:0;font-weight:800}
.lede{font-size:12pt;line-height:1.35;margin:4mm 0 0;max-width:44em;color:#2c3020}
hr{border:0;border-top:.6pt solid #15180f;margin:5mm 0 0}
h3{font-size:12.5pt;letter-spacing:-.01em;margin:6mm 0 1.5mm}
p.body{margin:0 0 4mm;font-size:10.5pt;line-height:1.58;max-width:46em}
h4{font-family:ui-monospace,Menlo,monospace;font-size:8pt;letter-spacing:.18em;text-transform:uppercase;color:#5c614f;margin:0 0 3mm;padding-bottom:1.5mm;border-bottom:.6pt solid #15180f;font-weight:700}
.meta{display:flex;flex-wrap:wrap;gap:8mm;margin:3.5mm 0 7mm;font-family:ui-monospace,Menlo,monospace;font-size:8.5pt}
.meta span{color:#5c614f;letter-spacing:.1em;text-transform:uppercase;font-size:7.5pt}
.meta b{margin-left:2mm}
.cols{display:grid;grid-template-columns:1fr 1.5fr;gap:9mm}
.ings{list-style:none;margin:0;padding:0}
.ings li{padding:1.5mm 0;border-bottom:.5pt solid #c3cbb8;font-size:9.6pt;line-height:1.3}
.q{font-family:ui-monospace,Menlo,monospace;font-weight:700}
.obs{color:#5c614f}
.modo{margin:0;padding-left:6mm}
.modo li{margin-bottom:2.8mm;font-size:10pt;line-height:1.48;padding-left:1mm}
.modo li::marker{font-family:ui-monospace,Menlo,monospace;font-weight:700;color:#c07d1c;font-size:8.5pt}
.principio{margin:4mm 0 0;font-size:10pt;line-height:1.5;color:#3d4232;max-width:44em;
  border-left:1.2pt solid #c07d1c;padding-left:4mm}
.cap-intro{font-size:8.6pt;line-height:1.45;color:#5c614f;margin:0 0 3mm;max-width:52em}
table.ftab{width:100%;border-collapse:collapse;margin:3mm 0 5mm;font-size:8.6pt;break-inside:avoid}
table.ftab caption{caption-side:top;text-align:left;font-family:ui-monospace,Menlo,monospace;font-size:7pt;
  letter-spacing:.1em;text-transform:uppercase;color:#5c614f;margin-bottom:1.5mm}
table.ftab th{text-align:left;font-size:7pt;letter-spacing:.06em;text-transform:uppercase;color:#5c614f;
  font-weight:700;padding:0 3mm 1.8mm 0;border-bottom:.6pt solid #15180f}
table.ftab td{padding:2mm 3mm 2mm 0;border-bottom:.5pt solid #c3cbb8;vertical-align:top;line-height:1.35}
table.ftab td:first-child,table.ftab th:first-child{font-weight:700;white-space:nowrap}
table.ftab tr:last-child td{border-bottom:none}
.tab-h{margin-top:9mm}
.grid-wrap{border:.8pt solid #15180f;break-inside:avoid}
.grid-band{background:#15180f;color:#eef1e6;text-align:center;padding:2.2mm;font-family:ui-monospace,Menlo,monospace;font-size:7pt;letter-spacing:.14em;text-transform:uppercase;font-weight:700}
.grid{display:grid;background:#fbfbf8}
.g-ing{border-right:.7pt solid #15180f;border-bottom:.5pt solid #c3cbb8;padding:1.8mm 2.4mm;font-size:8.4pt;line-height:1.26;display:flex;align-items:center}
.g-step{background:#dde6d4;border-right:1pt solid #fbfbf8;border-bottom:1pt solid #fbfbf8;padding:2.2mm 1.5mm;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:.8mm}
.g-step .t{font-weight:650;font-size:8.4pt;line-height:1.16}
.g-step .d{font-family:ui-monospace,Menlo,monospace;font-size:6.6pt;line-height:1.28;color:#5c614f}
.g-empty{background:#fbfbf8;border-bottom:1pt solid #fbfbf8}
.larga .g-ing{font-size:7.6pt;padding:1.4mm 1.8mm}
.larga .g-step{padding:1.8mm 1mm}
.larga .g-step .t{font-size:7.6pt}
.larga .g-step .d{font-size:6.2pt}
.notas{margin-top:7mm;break-inside:avoid}
.notas ul{margin:0;padding-left:5mm}
.notas li{font-size:9.2pt;line-height:1.42;color:#3d4232;margin-bottom:1.8mm}
.toc h2.ch{font-size:30pt;letter-spacing:-.035em;margin:0 0 9mm;font-weight:800}
.toc h4{margin-top:7mm}
.toc-list{list-style:none;margin:0;padding:0}
.toc-list li{padding:2.2mm 0;border-bottom:.5pt solid #c3cbb8;font-size:10.5pt;font-weight:600}
.toc-list .n{font-family:ui-monospace,Menlo,monospace;font-size:8.5pt;color:#c07d1c;margin-right:3mm}
.toc-list .sub{display:block;font-weight:400;font-size:7.4pt;color:#5c614f;margin-top:.8mm;font-family:ui-monospace,Menlo,monospace;letter-spacing:.06em;text-transform:uppercase}
.colofao .idbox{margin-top:10mm;padding:7mm 8mm;border:.8pt solid #15180f;background:#f2f5ec;max-width:44em}
.colofao .idbox h4{border:0;padding:0;font-size:9pt;color:#15180f;letter-spacing:.14em}
.colofao .idbox p{margin:0 0 3mm;font-size:10pt}
.colofao .idbox p.mono{font-size:9pt;line-height:1.7;color:#3d4232;margin:0}
</style></head><body>
${capa}${sumario}
${divisor(t(UI.parteUm), t(UI.tecnicas), t(UI.introTecnicas))}
${tecnicas}
${divisor(t(UI.parteDois), t(UI.receitas), t(UI.introReceitas))}
${receitas}${colofao}
</body></html>`;
}

(async () => {
  const b = await chromium.launch();
  for (const cod of ['pt','es','en']){
    LANG = cod;
    const html = documento();
    const nome = cod === 'pt' ? 'Fogo-Baixo.pdf' : 'Fogo-Baixo-' + cod.toUpperCase() + '.pdf';
    const p = await b.newPage();
    await p.setContent(html, { waitUntil: 'load' });
    await p.emulateMedia({ media: 'print' });
    await p.pdf({
      path: nome, format: 'A4', printBackground: true,
      margin: { top:'18mm', bottom:'20mm', left:'16mm', right:'16mm' },
      displayHeaderFooter: true, headerTemplate: '<div></div>',
      footerTemplate: `<div style="width:100%;font-family:monospace;font-size:7pt;color:#5c614f;padding:0 16mm;display:flex;justify-content:space-between"><span>FOGO BAIXO · CELSO ZANCHETTA</span><span class="pageNumber"></span></div>`,
    });
    await p.close();
    console.log(nome, 'ok');
  }
  await b.close();
})();
