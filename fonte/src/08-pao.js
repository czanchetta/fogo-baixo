/* ===================== PÃO ===================== */

RECEITAS.push({
  id: "pao-forma-sem-sova",
  capitulo: "pao",
  titulo: T("Pão de forma sem sova", "Pan de molde sin amasado", "No-knead sandwich bread"),
  kicker: T("SEM SOVA · SEM BATEDEIRA · ~15 MIN DE TRABALHO ATIVO", "SIN AMASADO · SIN BATIDORA · ~15 MIN DE TRABAJO ACTIVO", "NO KNEADING · NO STAND MIXER · ~15 MIN OF ACTIVE WORK"),
  subtitulo: T(
    "O glúten se desenvolve sozinho, por hidratação e tempo — quatro dobras rápidas fazem o trabalho da batedeira.",
    "El gluten se desarrolla solo, por hidratación y tiempo — cuatro pliegues rápidos hacen el trabajo de la batidora.",
    "The gluten develops on its own, through hydration and time — four quick folds do the work a stand mixer would."
  ),
  principio: T(
    "Sovar é só uma forma acelerada de alinhar as cadeias de glúten. Massa hidratada e parada faz o mesmo trabalho sozinha, só que devagar — e as dobras, espaçadas, organizam a rede sem esforço. A única regra que não se inverte: manteiga e ovo atrapalham a formação do glúten, então entram depois de a farinha já ter hidratado.",
    "Amasar es solo una forma acelerada de alinear las cadenas de gluten. La masa hidratada y en reposo hace el mismo trabajo sola, solo que más despacio — y los pliegues, espaciados, organizan la red sin esfuerzo. La única regla que no se invierte: la manteca y el huevo entorpecen la formación del gluten, así que entran después de que la harina ya se hidrató.",
    "Kneading is just a sped-up way of aligning gluten chains. Hydrated, resting dough does the same work alone, only slower — and the folds, spaced out over time, organise the network with no effort. The one rule that never reverses: butter and egg get in the way of gluten formation, so they go in after the flour has already hydrated."
  ),
  porcoes: 1, porcoesOpcoes: [1, 2], lote: true, ativo: 15, total: 480,
  rende: T("1 forma de bolo inglês de 22–24 cm", "1 molde de budín inglés de 22–24 cm", "1 loaf, 22–24 cm pan"),
  utensilio: T("Forma de bolo inglês 22–24 cm, idealmente tampada (tipo pullman)", "Molde de budín inglés 22–24 cm, idealmente con tapa (tipo pullman)", "22–24 cm loaf pan, ideally lidded (pullman-style)"),
  faixa: T("PONTO NO FORNO: 90–93 °C NO CENTRO — SÓ O TERMÔMETRO CONFIRMA", "PUNTO EN EL HORNO: 90–93 °C EN EL CENTRO — SOLO EL TERMÓMETRO LO CONFIRMA", "OVEN DONENESS: 90–93 °C AT THE CENTRE — ONLY A THERMOMETER CONFIRMS IT"),
  ingredientes: [
    { q: 250, u: "g", nome: T("leite integral morno", "leche entera tibia", "warm whole milk"), obs: T("morno de dedo, não quente", "tibia al tacto, no caliente", "finger-warm, not hot") },
    { q: 30, u: "g", nome: T("açúcar", "azúcar", "sugar") },
    { q: 4, u: "g", nome: T("fermento biológico seco instantâneo", "levadura seca instantánea", "instant dried yeast"), obs: T("~1 colher de chá rasa", "~1 cucharadita rasa", "~1 level teaspoon") },
    { q: 1, u: "un", alt: { q: 50, u: "g" }, nome: T("ovo", "huevo", "egg") },
    { q: 400, u: "g", nome: T("farinha de trigo", "harina de trigo", "wheat flour"), obs: T("idealmente tipo 1 especial para pão, com mais proteína", "idealmente de fuerza, con más proteína", "ideally strong bread flour, higher in protein") },
    { q: 8, u: "g", nome: T("sal", "sal", "salt") },
    { q: 40, u: "g", nome: T("manteiga sem sal", "manteca sin sal", "unsalted butter"), obs: T("bem amolecida", "bien blanda", "well softened") },
    { q: null, u: "", nome: T("manteiga extra", "manteca extra", "extra butter"), obs: T("para untar a forma e pincelar no fim", "para untar el molde y pincelar al final", "for greasing the pan and brushing at the end"), escala: false },
  ],
  grade: [
    { col: 1, de: 0, ate: 5, titulo: T("misturar", "mezclar", "mix"), detalhe: T("até não sobrar farinha seca · descansar 30 min", "hasta que no quede harina seca · reposar 30 min", "until no dry flour remains · rest 30 min") },
    { col: 2, de: 6, ate: 6, titulo: T("incorporar a manteiga", "incorporar la manteca", "work in the butter"), detalhe: T("com a mão, na tigela · não sovar", "con la mano, en el bol · no amasar", "by hand, in the bowl · do not knead") },
    { col: 3, de: 0, ate: 6, titulo: T("quatro dobras", "cuatro pliegues", "four folds"), detalhe: T("uma a cada 30 min · 30 s cada", "uno cada 30 min · 30 s cada uno", "one every 30 min · 30 s each") },
    { col: 4, de: 0, ate: 6, titulo: T("fermentação em bulk", "fermentación en bloque", "bulk fermentation"), detalhe: T("até quase dobrar · 1–2 h", "hasta casi duplicar · 1–2 h", "until nearly doubled · 1–2 h") },
    { col: 5, de: 7, ate: 7, titulo: T("modelar", "formar", "shape"), detalhe: T("3 rolinhos na forma untada, emenda para baixo", "3 rollitos en el molde untado, unión hacia abajo", "3 rolls in the greased pan, seam down") },
    { col: 6, de: 0, ate: 7, titulo: T("fermentação final", "fermentación final", "final proof"), detalhe: T("até ~1 cm da borda · 1–1,5 h", "hasta ~1 cm del borde · 1–1,5 h", "to ~1 cm from the rim · 1–1.5 h") },
    { col: 7, de: 0, ate: 7, titulo: T("forno 180 °C", "horno 180 °C", "oven 180 °C"), detalhe: T("30–35 min · 90–93 °C no centro", "30–35 min · 90–93 °C en el centro", "30–35 min · 90–93 °C at the centre") },
    { col: 8, de: 7, ate: 7, titulo: T("pincelar e esfriar", "pincelar y enfriar", "brush and cool"), detalhe: T("desenformar na hora · esfriar 2 h antes de cortar", "desmoldar al momento · enfriar 2 h antes de cortar", "unmould right away · cool 2 h before slicing") },
  ],
  modo: [
    { t: T(
      "Numa tigela grande, misture o leite morno, o açúcar e o fermento. Junte o ovo. Adicione a farinha e o sal e misture com uma espátula só até não sobrar farinha seca — vai ficar feio e grudento, é pra ficar. Cubra e descanse.",
      "En un bol grande, mezclá la leche tibia, el azúcar y la levadura. Sumá el huevo. Agregá la harina y la sal y mezclá con una espátula solo hasta que no quede harina seca — va a quedar feo y pegajoso, así tiene que ser. Cubrí y dejá reposar.",
      "In a large bowl, mix the warm milk, sugar and yeast. Add the egg. Add the flour and salt and mix with a spatula only until no dry flour remains — it will look messy and sticky, and that is correct. Cover and rest."), timer: 1800 },
    { t: T(
      "Junte a manteiga amolecida e incorpore com a mão, apertando e dobrando a massa sobre si mesma dentro da tigela. Ela vai parecer que desandou e vai voltar. Não sove.",
      "Sumá la manteca blanda e incorporala con la mano, apretando y doblando la masa sobre sí misma dentro del bol. Va a parecer que se separó y va a volver a unirse. No amasés.",
      "Add the softened butter and work it in by hand, pinching and folding the dough over itself inside the bowl. It will look like it has fallen apart, then come back together. Do not knead."), timer: 120 },
    { t: T(
      "Dobra 1 de 4. Molhe a mão, puxe uma borda da massa para cima e dobre sobre o centro, gire a tigela 90° e repita 4 vezes — leva 30 segundos. Cubra e descanse.",
      "Pliegue 1 de 4. Mojate la mano, tirá de un borde de la masa hacia arriba y doblalo sobre el centro, girá el bol 90° y repetí 4 veces — lleva 30 segundos. Cubrí y dejá reposar.",
      "Fold 1 of 4. Wet your hand, pull one edge of the dough up and fold it over the centre, turn the bowl 90° and repeat 4 times — it takes 30 seconds. Cover and rest."), timer: 1800 },
    { t: T(
      "Dobra 2 de 4. Mesmo movimento. A massa já fica visivelmente mais lisa. Cubra e descanse.",
      "Pliegue 2 de 4. Mismo movimiento. La masa ya se nota más lisa. Cubrí y dejá reposar.",
      "Fold 2 of 4. Same motion. The dough is already visibly smoother. Cover and rest."), timer: 1800 },
    { t: T(
      "Dobra 3 de 4. Mesmo movimento — a rede de glúten está tomando forma. Cubra e descanse.",
      "Pliegue 3 de 4. Mismo movimiento — la red de gluten está tomando forma. Cubrí y dejá reposar.",
      "Fold 3 of 4. Same motion — the gluten network is taking shape. Cover and rest."), timer: 1800 },
    { t: T(
      "Dobra 4 de 4, a última. A massa deve estar elástica e lisa ao final desta série.",
      "Pliegue 4 de 4, el último. La masa debe quedar elástica y lisa al final de esta serie.",
      "Fold 4 of 4, the last one. The dough should be elastic and smooth by the end of this round."), timer: 30 },
    { t: T(
      "Fermentação em bulk: deixe descansar coberto até quase dobrar de volume — 1 a 2 h, dependendo da temperatura da cozinha.",
      "Fermentación en bloque: dejá reposar tapado hasta casi duplicar el volumen — 1 a 2 h, según la temperatura de la cocina.",
      "Bulk fermentation: let it rest covered until nearly doubled — 1 to 2 h, depending on the kitchen's temperature."), timer: 5400 },
    { t: T(
      "Vire a massa na bancada levemente enfarinhada, desgaseifique com as mãos e divida em 3 bolinhas iguais. Abra cada uma num retângulo e enrole apertado como rocambole. Coloque os 3 rolinhos lado a lado na forma untada, com a emenda para baixo.",
      "Volcá la masa sobre la mesada apenas enharinada, desgasificá con las manos y dividí en 3 bollos iguales. Estirá cada uno en un rectángulo y enrollá apretado como arrollado. Colocá los 3 rollitos uno al lado del otro en el molde untado, con la unión hacia abajo.",
      "Turn the dough out onto a lightly floured counter, degas it with your hands and divide into 3 equal balls. Roll each one out into a rectangle and roll it up tight like a Swiss roll. Place the 3 rolls side by side in the greased pan, seam down.") },
    { t: T(
      "Cubra e deixe até a massa chegar a ~1 cm da borda da forma (ou preencher ~80% da altura, se for tampada). Teste: aperte de leve com o dedo — a marca deve voltar devagar, sem sumir por completo.",
      "Cubrí y dejá hasta que la masa llegue a ~1 cm del borde del molde (o llene ~80% de la altura, si es con tapa). Prueba: apretá suavemente con el dedo — la marca debe volver despacio, sin desaparecer del todo.",
      "Cover and let it rise until the dough reaches about 1 cm from the rim of the pan (or fills about 80% of the height, if lidded). Test: press gently with a finger — the mark should spring back slowly, not vanish completely."), timer: 4500 },
    { t: T(
      "Pré-aqueça o forno a 180 °C. Asse 30 a 35 minutos — se a forma for tampada, 30 min com tampa e 5 min sem, para corar. O ponto certo é 90 a 93 °C no centro; com termômetro é o único jeito confiável de saber.",
      "Precalentá el horno a 180 °C. Horneá 30 a 35 minutos — si el molde tiene tapa, 30 min con tapa y 5 min sin, para dorar. El punto correcto es 90 a 93 °C en el centro; con termómetro es la única forma confiable de saberlo.",
      "Preheat the oven to 180 °C. Bake for 30 to 35 minutes — if the pan is lidded, 30 min covered and 5 min uncovered, to brown. Doneness is 90 to 93 °C at the centre; a thermometer is the only reliable way to know."), timer: 1800 },
    { t: T(
      "Pincele manteiga na crosta ainda quente, desenforme na hora e esfrie sobre uma grade. Espere esfriar por completo, no mínimo 2 horas, antes de cortar — pão quente ainda está cozinhando por dentro, e cortar antes dá miolo gomoso.",
      "Pincelá manteca sobre la costra todavía caliente, desmoldá al momento y dejá enfriar sobre una rejilla. Esperá que se enfríe por completo, mínimo 2 horas, antes de cortar — el pan caliente todavía se está cocinando por dentro, y cortarlo antes deja la miga gomosa.",
      "Brush butter on the still-hot crust, unmould it right away and cool it on a rack. Wait for it to cool completely, at least 2 hours, before slicing — hot bread is still cooking inside, and cutting it early leaves the crumb gummy."), timer: 7200 },
  ],
  notas: [
    T("Temperatura da cozinha manda em tudo: os tempos valem para uns 24 °C. Abaixo disso (18–20 °C) some 30 a 50% em cada etapa. Nunca vá só pelo relógio — vá pelo volume e pelo teste do dedo.",
      "La temperatura de la cocina manda en todo: los tiempos valen para unos 24 °C. Por debajo (18–20 °C) sumá 30 a 50% en cada etapa. Nunca te guíes solo por el reloj — guiate por el volumen y la prueba del dedo.",
      "Kitchen temperature governs everything: the times above hold at around 24 °C. Below that (18–20 °C), add 30 to 50% to each stage. Never go by the clock alone — go by volume and the finger test."),
    T("Farinha comum funciona, mas dá pão mais baixo e esfarelento; farinha com mais proteína rende melhor. Só tendo farinha comum, uma colher de sopa de glúten de trigo (vital wheat gluten) resolve.",
      "La harina común funciona, pero da un pan más bajo y desmenuzable; una harina con más proteína rinde mejor. Si solo tenés harina común, una cucharada de gluten de trigo (vital wheat gluten) lo resuelve.",
      "Plain flour works, but gives a lower, more crumbly loaf; higher-protein flour performs better. With only plain flour on hand, a tablespoon of vital wheat gluten fixes it."),
    T("Sal e fermento juntos, direto e secos, não é problema nas quantidades daqui — o mito de que o sal \"mata\" o fermento só vale para contato prolongado e concentrado.",
      "Sal y levadura juntos, directo y secos, no es problema en las cantidades de esta receta — el mito de que la sal \"mata\" la levadura solo vale para contacto prolongado y concentrado.",
      "Salt and yeast together, dry and direct, is not a problem at these quantities — the myth that salt \"kills\" yeast only holds for prolonged, concentrated contact."),
    T("Fatiar e congelar é o que torna isso sustentável: pão esfriado por completo, fatiado, num saco no freezer, vai direto congelado para a torradeira. Dura um mês. Na bancada, 2 a 3 dias em saco plástico — nunca na geladeira, que acelera o endurecimento.",
      "Cortar y congelar es lo que hace esto sostenible: pan enfriado por completo, cortado, en una bolsa al freezer, va directo congelado a la tostadora. Dura un mes. En la mesada, 2 a 3 días en bolsa plástica — nunca en la heladera, que acelera el endurecimiento.",
      "Slicing and freezing is what makes this sustainable: fully cooled bread, sliced, in a freezer bag, goes straight from frozen into the toaster. It keeps a month. On the counter, 2 to 3 days in a plastic bag — never in the fridge, which speeds up staling."),
    T("Versão fermentação a frio, mais prática pra rotina de semana: reduza o fermento para 2 g, faça mistura/manteiga/dobras normalmente e leve a tigela coberta à geladeira por 12 a 16 h logo após a última dobra. No dia seguinte, modele com a massa ainda gelada (fica mais fácil de manusear) e faça a fermentação final em temperatura ambiente — demora mais, 2 a 3 h, porque a massa precisa aquecer antes de crescer. Bônus: mais sabor.",
      "Versión de fermentación en frío, más práctica para la rutina semanal: reducí la levadura a 2 g, hacé la mezcla/manteca/pliegues normalmente y llevá el bol tapado a la heladera por 12 a 16 h justo después del último pliegue. Al día siguiente, formá con la masa todavía fría (es más fácil de manejar) y hacé la fermentación final a temperatura ambiente — tarda más, 2 a 3 h, porque la masa necesita entibiarse antes de crecer. Bono: más sabor.",
      "Cold-fermentation version, more practical for a weekday routine: cut the yeast to 2 g, do the mix/butter/folds as normal, and refrigerate the covered bowl for 12 to 16 h right after the last fold. The next day, shape it while still cold (it handles more easily) and do the final proof at room temperature — it takes longer, 2 to 3 h, since the dough needs to warm up before rising. Bonus: more flavour."),
    T("Upgrade tangzhong, pelo custo de 1 minuto extra: separe 20 g da farinha e 100 g do leite da receita, cozinhe os dois juntos em fogo baixo mexendo sem parar até virar uma pasta tipo mingau grosso (~1 min), deixe amornar e junte no primeiro passo com o resto. Deixa o pão nitidamente mais macio e estende a validade para 4 a 5 dias.",
      "Upgrade tangzhong, al costo de 1 minuto extra: separá 20 g de la harina y 100 g de la leche de la receta, cociná los dos juntos a fuego bajo revolviendo sin parar hasta que quede una pasta tipo papilla espesa (~1 min), dejá entibiar y sumalo en el primer paso con el resto. Deja el pan notablemente más blando y extiende la duración a 4 o 5 días.",
      "Tangzhong upgrade, for the cost of 1 extra minute: set aside 20 g of the flour and 100 g of the milk from the recipe, cook the two together over low heat, stirring constantly, until it turns into a thick paste (about 1 min), let it cool to warm and add it in the first step with everything else. It makes the bread noticeably softer and extends its shelf life to 4 or 5 days."),
  ],
});
