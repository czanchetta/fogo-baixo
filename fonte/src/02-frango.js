/* ============================================================
   RECEITAS
   ============================================================ */
const RECEITAS = [
  /* ===================== FRANGO ===================== */
  {
    id: "sobrecoxa-frigideira",
    capitulo: "frango",
    titulo: T("Sobrecoxa na frigideira", "Contramuslo de pollo a la sartén", "Chicken thighs in the skillet"),
    kicker: T("UMA FRIGIDEIRA · SEM MOLHO · O MELHOR RESULTADO", "UNA SARTÉN · SIN SALSA · EL MEJOR RESULTADO", "ONE PAN · NO SAUCE · THE BEST RESULT"),
    subtitulo: T(
      "Pele vidrada, carne suculenta, arrematada na manteiga com alho e ervas.",
      "Piel vidriada, carne jugosa, rematada en mantequilla con ajo y hierbas.",
      "Glassy skin, juicy meat, finished in butter with garlic and herbs."
    ),
    porcoes: 2, porcoesOpcoes: [2, 4, 6], ativo: 30, total: 55,
    utensilio: T("Frigideira de fundo grosso", "Sartén de fondo grueso", "Heavy-bottomed skillet"),
    faixa: T("SEQUE MUITO BEM A PELE ANTES DE COMEÇAR", "SECA MUY BIEN LA PIEL ANTES DE EMPEZAR", "DRY THE SKIN THOROUGHLY BEFORE YOU START"),
    ingredientes: [
      { q: 4, u: "un", alt: { q: 720, u: "g" }, nome: T("sobrecoxas com pele e osso", "contramuslos con piel y hueso", "bone-in, skin-on chicken thighs"), obs: T("~180 g cada", "~180 g cada uno", "~180 g each") },
      { q: 1, u: "cc", alt: { q: 6, u: "g" }, nome: T("sal", "sal", "salt"), obs: T("grosso, moído na hora", "grueso, molido al momento", "coarse, ground fresh") },
      { q: 1, u: "cc", alt: { q: 1, u: "g" }, nome: T("ervas secas", "hierbas secas", "dried herbs"), obs: T("tomilho, alecrim ou orégano", "tomillo, romero u orégano", "thyme, rosemary or oregano") },
      { q: 0.5, u: "cc", alt: { q: 1, u: "g" }, nome: T("pimenta-do-reino", "pimienta negra", "black pepper"), obs: T("moída na hora", "molida al momento", "freshly ground") },
      { q: 1, u: "cs", alt: { q: 15, u: "ml" }, nome: T("azeite ou óleo neutro", "aceite de oliva o aceite neutro", "olive oil or neutral oil"), obs: T("só para cobrir o fundo", "solo para cubrir el fondo", "just to coat the base") },
      { q: 1, u: "cs", alt: { q: 15, u: "g" }, nome: T("manteiga", "mantequilla", "butter"), obs: T("para arrematar", "para rematar", "to finish") },
      { q: 2, u: "dente", alt: { q: 10, u: "g" }, nome: T("alho", "ajo", "garlic"), obs: T("amassados, com casca", "aplastados, con piel", "smashed, skin on") },
      { q: 2, u: "ramo", alt: { q: 4, u: "g" }, nome: T("alecrim ou tomilho frescos", "romero o tomillo frescos", "fresh rosemary or thyme"), obs: T("opcional", "opcional", "optional") },
    ],
    grade: [
      { col: 1, de: 0, ate: 3, titulo: T("temperar e secar", "sazonar y secar", "season and dry"), detalhe: T("20 min fora da geladeira · papel toalha", "20 min fuera de la nevera · papel de cocina", "20 min out of the fridge · paper towel") },
      { col: 2, de: 0, ate: 4, titulo: T("frigideira fria, pele para baixo", "sartén fría, piel hacia abajo", "cold pan, skin side down"), detalhe: T("só então ligue o fogo médio-baixo", "solo entonces enciende a fuego medio-bajo", "only then turn on medium-low heat") },
      { col: 3, de: 0, ate: 4, titulo: T("dourar sem mexer", "dorar sin mover", "brown without moving"), detalhe: T("12–15 min · com peso por cima", "12–15 min · con peso encima", "12–15 min · with a weight on top") },
      { col: 4, de: 0, ate: 4, titulo: T("virar", "voltear", "flip"), detalhe: T("5–6 min do lado da carne", "5–6 min del lado de la carne", "5–6 min on the meat side") },
      { col: 5, de: 0, ate: 7, titulo: T("arrematar na manteiga", "rematar en mantequilla", "finish in butter"), detalhe: T("1 min · regando com a colher", "1 min · bañando con la cuchara", "1 min · basting with a spoon") },
      { col: 6, de: 0, ate: 7, titulo: T("descansar", "reposar", "rest"), detalhe: T("5 min · 75 °C no centro", "5 min · 75 °C en el centro", "5 min · 75 °C at the centre") },
    ],
    modo: [
      { t: T(
        "Tire o frango da geladeira 20 minutos antes. Tempere com o sal, as ervas secas e a pimenta.",
        "Saca el pollo de la nevera 20 minutos antes. Sazona con la sal, las hierbas secas y la pimienta.",
        "Take the chicken out of the fridge 20 minutes ahead. Season with salt, dried herbs and pepper.") },
      { t: T(
        "Seque muito bem a pele com papel toalha. Se o frango ficou marinando, esse passo é obrigatório — o tempero deixa a pele encharcada.",
        "Seca muy bien la piel con papel de cocina. Si el pollo estuvo marinando, este paso es obligatorio — el adobo deja la piel empapada.",
        "Dry the skin thoroughly with paper towel. If the chicken has been marinating, this step is mandatory — the marinade leaves the skin soaked.") },
      { t: T(
        "Na frigideira fria, ponha um fio de óleo, só para cobrir o fundo. Acomode as sobrecoxas com a pele para baixo e só então ligue o fogo médio-baixo.",
        "En la sartén fría, pon un chorrito de aceite, solo para cubrir el fondo. Coloca los contramuslos con la piel hacia abajo y solo entonces enciende el fuego medio-bajo.",
        "In the cold pan, add a thin film of oil, just enough to coat the base. Lay the thighs skin side down and only then turn on medium-low heat.") },
      { t: T(
        "Doure 12 a 15 minutos sem mexer e sem cutucar. Ponha um peso por cima — outra panela, uma leiteira com água — para garantir contato total da pele com a frigideira.",
        "Dora 12 a 15 minutos sin mover y sin tocar. Pon un peso encima — otra olla, un cazo con agua — para garantizar contacto total de la piel con la sartén.",
        "Brown for 12 to 15 minutes without moving or poking. Put a weight on top — another pan, a saucepan of water — to guarantee full contact between skin and pan."), timer: 780 },
      { t: T(
        "Vire as peças. Mais 5 a 6 minutos do lado da carne.",
        "Voltea las piezas. Otros 5 a 6 minutos del lado de la carne.",
        "Flip the pieces. Another 5 to 6 minutes on the meat side."), timer: 330 },
      { t: T(
        "Junte a manteiga, o alho amassado e os ramos de alecrim ou tomilho. Incline a panela e regue a carne com a manteiga espumante por 1 minuto.",
        "Añade la mantequilla, el ajo aplastado y las ramas de romero o tomillo. Inclina la sartén y baña la carne con la mantequilla espumosa durante 1 minuto.",
        "Add the butter, smashed garlic and rosemary or thyme sprigs. Tilt the pan and baste the meat with the foaming butter for 1 minute."), timer: 60 },
      { t: T(
        "Descanse 5 minutos antes de servir. Ponto: 75 °C no centro, medidos com termômetro sem encostar no osso — o osso soltando fácil é só um indício a mais.",
        "Deja reposar 5 minutos antes de servir. Punto: 75 °C en el centro, medidos con termómetro sin tocar el hueso — el hueso soltándose fácil es solo un indicio extra.",
        "Rest 5 minutes before serving. Doneness: 75 °C at the centre, checked with a thermometer that isn't touching the bone — the bone pulling free easily is just a bonus sign."), timer: 300 },
    ],
    notas: [
      T("A gordura que sobrou na frigideira é ingrediente, não sujeira: vale para as batatas ou para o arroz de alho.",
        "La grasa que quedó en la sartén es ingrediente, no suciedad: sirve para las patatas o para el arroz al ajo.",
        "The fat left in the pan is an ingredient, not mess: it goes into the potatoes or the garlic rice."),
      T("Evite temperos com açúcar (mel, shoyu, barbecue) — queimam antes de a pele ficar pronta.",
        "Evita adobos con azúcar (miel, salsa de soja, barbacoa) — se queman antes de que la piel esté lista.",
        "Avoid sugary seasonings (honey, soy, barbecue) — they burn before the skin is done."),
      T("Sem peso por cima, a pele empena e doura só nas bordas.",
        "Sin peso encima, la piel se comba y dora solo en los bordes.",
        "Without a weight, the skin buckles and browns only at the edges."),
    ],
  },

  {
    id: "sobrecoxa-airfryer",
    capitulo: "frango",
    titulo: T("Sobrecoxa na airfryer", "Contramuslo en freidora de aire", "Chicken thighs in the air fryer"),
    kicker: T("SEM VIGIAR · SEM SUJEIRA · O MAIS PRÁTICO", "SIN VIGILAR · SIN ENSUCIAR · LO MÁS PRÁCTICO", "NO WATCHING · NO MESS · THE EASY WAY"),
    subtitulo: T(
      "Quase tão bom quanto a frigideira, com um décimo do trabalho. Não precisa virar.",
      "Casi tan bueno como la sartén, con la décima parte del trabajo. No hay que voltear.",
      "Almost as good as the skillet, for a tenth of the work. No flipping."
    ),
    porcoes: 2, porcoesOpcoes: [2, 4, 6], ativo: 5, total: 30,
    utensilio: T("Airfryer", "Freidora de aire", "Air fryer"),
    faixa: T("PELE PARA CIMA · NÃO LOTE O CESTO", "PIEL HACIA ARRIBA · NO LLENES LA CESTA", "SKIN UP · DON'T CROWD THE BASKET"),
    ingredientes: [
      { q: 4, u: "un", alt: { q: 720, u: "g" }, nome: T("sobrecoxas com pele e osso", "contramuslos con piel y hueso", "bone-in, skin-on chicken thighs") },
      { q: 1, u: "cc", alt: { q: 6, u: "g" }, nome: T("sal", "sal", "salt") },
      { q: 1, u: "cc", alt: { q: 1, u: "g" }, nome: T("ervas secas", "hierbas secas", "dried herbs"), obs: T("ou lemon pepper, ou páprica", "o lemon pepper, o pimentón", "or lemon pepper, or paprika") },
      { q: 0.5, u: "cc", alt: { q: 1, u: "g" }, nome: T("pimenta-do-reino", "pimienta negra", "black pepper"), obs: T("moída na hora", "molida al momento", "freshly ground") },
      { q: 1, u: "cc", alt: { q: 5, u: "ml" }, nome: T("azeite", "aceite de oliva", "olive oil"), obs: T("opcional, um fio", "opcional, un chorrito", "optional, a drizzle") },
    ],
    grade: [
      { col: 1, de: 0, ate: 3, titulo: T("temperar e secar", "sazonar y secar", "season and dry"), detalhe: T("papel toalha na pele", "papel de cocina en la piel", "paper towel on the skin") },
      { col: 2, de: 0, ate: 4, titulo: T("no cesto, pele para cima", "en la cesta, piel hacia arriba", "in the basket, skin up"), detalhe: T("sem encostar uma peça na outra", "sin que se toquen las piezas", "pieces not touching") },
      { col: 3, de: 0, ate: 4, titulo: T("assar 180 °C", "hornear 180 °C", "cook at 180 °C"), detalhe: T("25 min · sem virar", "25 min · sin voltear", "25 min · no flipping") },
      { col: 4, de: 0, ate: 4, titulo: T("descansar", "reposar", "rest"), detalhe: T("5 min", "5 min", "5 min") },
    ],
    modo: [
      { t: T(
        "Tempere as sobrecoxas com sal, ervas e pimenta. Seque bem a pele com papel toalha.",
        "Sazona los contramuslos con sal, hierbas y pimienta. Seca bien la piel con papel de cocina.",
        "Season the thighs with salt, herbs and pepper. Dry the skin well with paper towel.") },
      { t: T(
        "Arrume no cesto com a pele para cima, sem encostar uma peça na outra — se lotar, o ar não circula e a pele cozinha no vapor.",
        "Colócalos en la cesta con la piel hacia arriba, sin que se toquen — si llenas demasiado, el aire no circula y la piel se cuece al vapor.",
        "Arrange them in the basket skin up, not touching — if you crowd it, air cannot circulate and the skin steams.") },
      { t: T(
        "Airfryer a 180 °C por 25 minutos. Não vire, não abra.",
        "Freidora de aire a 180 °C durante 25 minutos. No voltees, no abras.",
        "Air fryer at 180 °C for 25 minutes. Do not flip, do not open."), timer: 1500 },
      { t: T(
        "Descanse 5 minutos. Fica muito bom, só um pouco menos vidrado que a frigideira.",
        "Deja reposar 5 minutos. Queda muy bien, solo un poco menos vidriado que en sartén.",
        "Rest 5 minutes. Very good — just slightly less glassy than the skillet version."), timer: 300 },
    ],
    notas: [
      T("Se a airfryer for pequena, faça duas fornadas em vez de empilhar.",
        "Si la freidora es pequeña, haz dos tandas en vez de apilar.",
        "If the air fryer is small, do two batches rather than stacking."),
      T("Um fio de azeite ajuda a dourar, mas não é necessário: a gordura da pele dá conta.",
        "Un chorrito de aceite ayuda a dorar, pero no es necesario: la grasa de la piel se basta.",
        "A drizzle of oil helps browning, but is not needed: the skin's own fat is enough."),
    ],
  },

  {
    id: "sobrecoxa-forno",
    capitulo: "frango",
    titulo: T("Sobrecoxa no forno", "Contramuslo al horno", "Chicken thighs in the oven"),
    kicker: T("PARA MUITAS PEÇAS DE UMA VEZ", "PARA MUCHAS PIEZAS A LA VEZ", "FOR MANY PIECES AT ONCE"),
    subtitulo: T(
      "A grelha sobre a assadeira é o que separa pele crocante de frango cozido no próprio caldo.",
      "La rejilla sobre la bandeja es lo que separa la piel crujiente del pollo cocido en su propio jugo.",
      "A rack over the tray is what separates crisp skin from chicken stewed in its own juices."
    ),
    porcoes: 4, porcoesOpcoes: [4, 6, 8], ativo: 10, total: 50,
    utensilio: T("Assadeira com grelha", "Bandeja con rejilla", "Roasting tray with rack"),
    faixa: T("O AR PRECISA CIRCULAR POR BAIXO", "EL AIRE TIENE QUE CIRCULAR POR DEBAJO", "AIR HAS TO CIRCULATE UNDERNEATH"),
    ingredientes: [
      { q: 8, u: "un", alt: { q: 1440, u: "g" }, nome: T("sobrecoxas com pele e osso", "contramuslos con piel y hueso", "bone-in, skin-on chicken thighs") },
      { q: 2, u: "cc", alt: { q: 12, u: "g" }, nome: T("sal", "sal", "salt") },
      { q: 2, u: "cc", alt: { q: 2, u: "g" }, nome: T("ervas secas", "hierbas secas", "dried herbs") },
      { q: 1, u: "cc", alt: { q: 2, u: "g" }, nome: T("pimenta-do-reino", "pimienta negra", "black pepper"), obs: T("moída na hora", "molida al momento", "freshly ground") },
      { q: 1, u: "cc", alt: { q: 3, u: "g" }, nome: T("páprica", "pimentón", "paprika"), obs: T("opcional", "opcional", "optional") },
    ],
    grade: [
      { col: 1, de: 0, ate: 4, titulo: T("temperar e secar", "sazonar y secar", "season and dry"), detalhe: T("papel toalha na pele", "papel de cocina en la piel", "paper towel on the skin") },
      { col: 2, de: 0, ate: 4, titulo: T("grelha sobre a assadeira", "rejilla sobre la bandeja", "rack over the tray"), detalhe: T("pele para cima, espaçadas", "piel hacia arriba, separadas", "skin up, spaced apart") },
      { col: 3, de: 0, ate: 4, titulo: T("assar 220 °C", "hornear 220 °C", "roast at 220 °C"), detalhe: T("35–40 min", "35–40 min", "35–40 min") },
      { col: 4, de: 0, ate: 4, titulo: T("descansar", "reposar", "rest"), detalhe: T("5 min", "5 min", "5 min") },
    ],
    modo: [
      { t: T(
        "Preaqueça o forno a 220 °C. Tempere e seque bem a pele.",
        "Precalienta el horno a 220 °C. Sazona y seca bien la piel.",
        "Preheat the oven to 220 °C. Season and dry the skin well.") },
      { t: T(
        "Disponha as peças sobre uma grelha encaixada na assadeira, pele para cima. Sem a grelha, a peça assa dentro da própria gordura e a pele de baixo nunca fica crocante.",
        "Coloca las piezas sobre una rejilla encajada en la bandeja, piel hacia arriba. Sin la rejilla, la pieza se asa dentro de su propia grasa y la piel de abajo nunca queda crujiente.",
        "Arrange the pieces on a rack set in the tray, skin up. Without the rack, the piece roasts in its own fat and the underside skin never crisps.") },
      { t: T(
        "Asse 35 a 40 minutos, sem virar, até a pele vidrar.",
        "Hornea 35 a 40 minutos, sin voltear, hasta que la piel se vidrie.",
        "Roast 35 to 40 minutes, without turning, until the skin glazes."), timer: 2100 },
      { t: T(
        "Descanse 5 minutos antes de servir.",
        "Deja reposar 5 minutos antes de servir.",
        "Rest 5 minutes before serving."), timer: 300 },
    ],
    notas: [
      T("A gordura que pinga na assadeira é ouro: coe e guarde na geladeira por até uma semana.",
        "La grasa que gotea en la bandeja es oro: cuélala y guárdala en la nevera hasta una semana.",
        "The fat that drips into the tray is gold: strain it and keep it in the fridge for up to a week."),
      T("Forno com ventilação acelera: comece a olhar aos 30 minutos.",
        "El horno con ventilador acelera: empieza a mirar a los 30 minutos.",
        "A fan oven speeds this up: start checking at 30 minutes."),
    ],
  },

  {
    id: "batatas-gordura",
    capitulo: "frango",
    titulo: T("Batatas na gordura do frango", "Patatas en la grasa del pollo", "Potatoes in chicken fat"),
    kicker: T("MESMA FRIGIDEIRA · SEM LAVAR NADA", "MISMA SARTÉN · SIN LAVAR NADA", "SAME PAN · NOTHING TO WASH"),
    subtitulo: T(
      "Feitas logo depois do frango, na gordura rendida, enquanto a carne descansa.",
      "Hechas justo después del pollo, en la grasa que soltó, mientras la carne reposa.",
      "Made right after the chicken, in the rendered fat, while the meat rests."
    ),
    porcoes: 2, porcoesOpcoes: [2, 4, 6], ativo: 20, total: 25,
    utensilio: T("A frigideira do frango", "La sartén del pollo", "The chicken pan"),
    faixa: T("NÃO LAVE A FRIGIDEIRA — A GORDURA É O TEMPERO", "NO LAVES LA SARTÉN — LA GRASA ES EL CONDIMENTO", "DON'T WASH THE PAN — THE FAT IS THE SEASONING"),
    ingredientes: [
      { q: 500, u: "g", nome: T("batatas", "patatas", "potatoes"), obs: T("em cubos de 2 cm", "en cubos de 2 cm", "in 2 cm cubes") },
      { q: 2, u: "cs", alt: { q: 30, u: "ml" }, nome: T("gordura rendida do frango", "grasa que soltó el pollo", "rendered chicken fat"), obs: T("o que ficou na frigideira", "lo que quedó en la sartén", "whatever is left in the pan") },
      { q: 2, u: "dente", alt: { q: 10, u: "g" }, nome: T("alho", "ajo", "garlic"), obs: T("fatiado", "en láminas", "sliced") },
      { q: 1, u: "ramo", alt: { q: 2, u: "g" }, nome: T("alecrim", "romero", "rosemary"), obs: T("opcional", "opcional", "optional") },
      { q: 0.5, u: "cc", alt: { q: 3, u: "g" }, nome: T("sal", "sal", "salt"), obs: T("só no fim", "solo al final", "only at the end") },
    ],
    grade: [
      { col: 1, de: 0, ate: 0, titulo: T("cortar e secar", "cortar y secar", "cut and dry"), detalhe: T("cubos de 2 cm · papel toalha", "cubos de 2 cm · papel de cocina", "2 cm cubes · paper towel") },
      { col: 2, de: 0, ate: 1, titulo: T("na gordura quente", "en la grasa caliente", "into the hot fat"), detalhe: T("camada única, sem empilhar", "una sola capa, sin apilar", "single layer, no stacking") },
      { col: 3, de: 0, ate: 1, titulo: T("dourar", "dorar", "brown"), detalhe: T("12–15 min · mexa pouco", "12–15 min · remueve poco", "12–15 min · stir rarely") },
      { col: 4, de: 0, ate: 4, titulo: T("alho, ervas e sal", "ajo, hierbas y sal", "garlic, herbs and salt"), detalhe: T("2 min no fim", "2 min al final", "2 min at the end") },
    ],
    modo: [
      { t: T(
        "Corte as batatas em cubos de 2 cm e seque com papel toalha — batata molhada não doura, cozinha.",
        "Corta las patatas en cubos de 2 cm y sécalas con papel de cocina — la patata mojada no dora, se cuece.",
        "Cut the potatoes into 2 cm cubes and dry them with paper towel — wet potato does not brown, it boils.") },
      { t: T(
        "Tire o frango da frigideira e deixe a gordura rendida. Se sobrou pouca, complete com azeite até cobrir o fundo.",
        "Saca el pollo de la sartén y deja la grasa. Si quedó poca, completa con aceite hasta cubrir el fondo.",
        "Take the chicken out and leave the rendered fat. If there is little left, top up with oil until the base is coated.") },
      { t: T(
        "Ponha os cubos em camada única, sem empilhar, em fogo médio-alto. Se não couberem de uma vez, faça em duas levas.",
        "Pon los cubos en una sola capa, sin apilar, a fuego medio-alto. Si no caben de una vez, hazlo en dos tandas.",
        "Put the cubes in a single layer, not stacked, over medium-high heat. If they do not fit at once, do two batches.") },
      { t: T(
        "Doure 12 a 15 minutos, mexendo o mínimo possível — cada mexida interrompe a crosta que está se formando.",
        "Dora 12 a 15 minutos, removiendo lo mínimo posible — cada remoción interrumpe la costra que se está formando.",
        "Brown for 12 to 15 minutes, stirring as little as possible — every stir interrupts the crust that is forming."), timer: 780 },
      { t: T(
        "Nos últimos 2 minutos, junte o alho fatiado e o alecrim. Sal só agora: salgar antes puxa água e amolece.",
        "En los últimos 2 minutos, añade el ajo laminado y el romero. Sal solo ahora: salar antes saca agua y ablanda.",
        "In the last 2 minutes, add the sliced garlic and rosemary. Salt only now: salting earlier draws out water and softens them."), timer: 120 },
    ],
    notas: [
      T("Para acelerar: cozinhe os cubos 6 min em água salgada, escorra, seque, e só então doure. A crosta fica melhor ainda.",
        "Para acelerar: cuece los cubos 6 min en agua con sal, escurre, seca, y solo entonces dora. La costra queda aún mejor.",
        "To speed things up: boil the cubes 6 min in salted water, drain, dry, then brown. The crust is even better."),
      T("Para cortar a riqueza do prato, uma salada de folhas com limão puro e sal — sem azeite, a gordura já veio do frango.",
        "Para cortar la riqueza del plato, una ensalada de hojas con limón puro y sal — sin aceite, la grasa ya vino del pollo.",
        "To cut the richness, a leaf salad with plain lime and salt — no oil, the fat already came from the chicken."),
    ],
  },

  {
    id: "arroz-de-alho",
    capitulo: "frango",
    titulo: T("Arroz de alho na gordura rendida", "Arroz al ajo en la grasa del pollo", "Garlic rice in rendered fat"),
    kicker: T("UMA PANELA · 20 MINUTOS", "UNA OLLA · 20 MINUTOS", "ONE POT · 20 MINUTES"),
    subtitulo: T(
      "Uma colher da gordura do frango no lugar do óleo muda o arroz inteiro.",
      "Una cucharada de la grasa del pollo en lugar del aceite cambia el arroz entero.",
      "One spoonful of chicken fat instead of oil changes the whole pot of rice."
    ),
    porcoes: 4, porcoesOpcoes: [2, 4, 6], ativo: 10, total: 25,
    utensilio: T("Panela com tampa", "Olla con tapa", "Saucepan with lid"),
    faixa: T("ÁGUA QUENTE — ARROZ NÃO GOSTA DE CHOQUE TÉRMICO", "AGUA CALIENTE — AL ARROZ NO LE GUSTA EL CHOQUE TÉRMICO", "HOT WATER — RICE DOES NOT LIKE THERMAL SHOCK"),
    ingredientes: [
      { q: 2, u: "xic", alt: { q: 360, u: "g" }, nome: T("arroz branco", "arroz blanco", "white rice"), obs: T("lavado e escorrido", "lavado y escurrido", "rinsed and drained") },
      { q: 2, u: "cs", alt: { q: 30, u: "ml" }, nome: T("gordura rendida do frango", "grasa que soltó el pollo", "rendered chicken fat") },
      { q: 4, u: "dente", alt: { q: 20, u: "g" }, nome: T("alho", "ajo", "garlic"), obs: T("fatiado fino", "en láminas finas", "thinly sliced") },
      { q: 3, u: "xic", alt: { q: 720, u: "ml" }, nome: T("água quente", "agua caliente", "hot water") },
      { q: 1, u: "cc", alt: { q: 6, u: "g" }, nome: T("sal", "sal", "salt") },
    ],
    grade: [
      { col: 1, de: 1, ate: 2, titulo: T("fritar o alho", "freír el ajo", "fry the garlic"), detalhe: T("2 min · até dourar claro", "2 min · hasta dorar claro", "2 min · to pale gold") },
      { col: 2, de: 0, ate: 2, titulo: T("refogar o arroz", "sofreír el arroz", "toast the rice"), detalhe: T("2 min · grãos translúcidos", "2 min · granos translúcidos", "2 min · grains translucent") },
      { col: 3, de: 0, ate: 4, titulo: T("água e sal, ferver", "agua y sal, hervir", "water and salt, boil"), detalhe: T("sem tampa, até secar a superfície", "sin tapa, hasta que seque la superficie", "uncovered, until the surface dries") },
      { col: 4, de: 0, ate: 4, titulo: T("tampar, fogo baixo", "tapar, fuego bajo", "cover, low heat"), detalhe: T("15 min · não abra", "15 min · no abras", "15 min · do not open") },
      { col: 5, de: 0, ate: 4, titulo: T("descansar e soltar", "reposar y soltar", "rest and fluff"), detalhe: T("5 min tampado · garfo", "5 min tapado · tenedor", "5 min covered · fork") },
    ],
    modo: [
      { t: T(
        "Aqueça a gordura rendida e frite o alho fatiado até dourar claro. Alho escuro amarga o arroz inteiro — tire do fogo antes do que parece necessário.",
        "Calienta la grasa y fríe el ajo laminado hasta dorar claro. El ajo oscuro amarga el arroz entero — retíralo del fuego antes de lo que parece necesario.",
        "Heat the rendered fat and fry the sliced garlic to pale gold. Dark garlic makes the whole pot bitter — take it off sooner than seems necessary."), timer: 120 },
      { t: T(
        "Junte o arroz lavado e escorrido. Refogue 2 minutos, até os grãos ficarem translúcidos nas bordas.",
        "Añade el arroz lavado y escurrido. Sofríe 2 minutos, hasta que los granos queden translúcidos en los bordes.",
        "Add the rinsed, drained rice. Toast 2 minutes, until the grains turn translucent at the edges."), timer: 120 },
      { t: T(
        "Adicione a água quente e o sal. Deixe ferver sem tampa até a água desaparecer da superfície e aparecerem crateras.",
        "Añade el agua caliente y la sal. Deja hervir sin tapa hasta que el agua desaparezca de la superficie y aparezcan cráteres.",
        "Add the hot water and salt. Boil uncovered until the water disappears from the surface and craters appear.") },
      { t: T(
        "Tampe, baixe o fogo ao mínimo e conte 15 minutos. Não abra a panela nesse tempo.",
        "Tapa, baja el fuego al mínimo y cuenta 15 minutos. No abras la olla en ese tiempo.",
        "Cover, drop to the lowest heat and count 15 minutes. Do not open the pot in that time."), timer: 900 },
      { t: T(
        "Desligue e descanse 5 minutos ainda tampado. Solte com um garfo, nunca com colher.",
        "Apaga y deja reposar 5 minutos aún tapado. Suelta con un tenedor, nunca con cuchara.",
        "Turn it off and rest 5 minutes still covered. Fluff with a fork, never a spoon."), timer: 300 },
    ],
    notas: [
      T("Proporção 1 de arroz para 1½ de água. Com gordura no refogado, o grão fica mais solto que com óleo.",
        "Proporción 1 de arroz por 1½ de agua. Con grasa en el sofrito, el grano queda más suelto que con aceite.",
        "Ratio 1 part rice to 1½ water. With animal fat in the base, the grains stay looser than with oil."),
      T("Gordura de frango coada guarda uma semana na geladeira e três meses no congelador.",
        "La grasa de pollo colada se guarda una semana en la nevera y tres meses en el congelador.",
        "Strained chicken fat keeps a week in the fridge and three months in the freezer."),
    ],
  },
];
