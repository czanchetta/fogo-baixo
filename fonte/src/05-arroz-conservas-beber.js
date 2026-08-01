/* ===================== ARROZ E MASSAS ===================== */
RECEITAS.push(
  {
    id: "fried-rice",
    capitulo: "arroz",
    titulo: T("Fried rice de bacon e calabresa", "Fried rice de bacon y calabresa", "Bacon and calabresa fried rice"),
    kicker: T("15 MINUTOS · ARROZ DE ONTEM É OBRIGATÓRIO", "15 MINUTOS · EL ARROZ DE AYER ES OBLIGATORIO", "15 MINUTES · YESTERDAY'S RICE IS MANDATORY"),
    subtitulo: T(
      "A ordem é o método: cada etapa aproveita a gordura da anterior.",
      "El orden es el método: cada etapa aprovecha la grasa de la anterior.",
      "The order is the method: each step uses the fat from the one before."
    ),
    porcoes: 2, porcoesOpcoes: [2, 4], ativo: 15, total: 15,
    utensilio: T("Wok ou frigideira grande", "Wok o sartén grande", "Wok or large skillet"),
    faixa: T("MISE EN PLACE ANTES DE LIGAR O FOGO", "MISE EN PLACE ANTES DE ENCENDER EL FUEGO", "MISE EN PLACE BEFORE YOU TURN ON THE HEAT"),
    ingredientes: [
      { q: 80, u: "g", nome: T("bacon", "bacon", "bacon"), obs: T("em cubinhos", "en cubitos", "in small cubes") },
      { q: 80, u: "g", nome: T("linguiça calabresa", "chorizo calabresa", "calabresa sausage"), obs: T("fatiada bem fina", "en rodajas muy finas", "very thinly sliced") },
      { q: 2, u: "un", alt: { q: 110, u: "g" }, nome: T("ovos grandes", "huevos grandes", "large eggs"), obs: T("batidos", "batidos", "beaten") },
      { q: 2, u: "cc", alt: { q: 8, u: "g" }, nome: T("gengibre", "jengibre", "ginger"), obs: T("ralado", "rallado", "grated") },
      { q: 3, u: "xic", alt: { q: 450, u: "g" }, nome: T("arroz branco de ontem", "arroz blanco de ayer", "day-old white rice"), obs: T("frio e esfarelado", "frío y desgranado", "cold and broken up") },
      { q: 1.5, u: "cs", alt: { q: 22, u: "ml" }, nome: T("shoyu", "salsa de soja", "soy sauce"), obs: T("pela borda da panela", "por el borde de la sartén", "down the side of the pan") },
      { q: 1, u: "cs", alt: { q: 15, u: "ml" }, nome: T("sake seco", "sake seco", "dry sake") },
      { q: 1, u: "pitada", alt: { q: 1, u: "g" }, nome: T("aji-no-moto", "glutamato monosódico", "MSG"), obs: T("opcional", "opcional", "optional"), escala: false },
      { q: 1, u: "cc", alt: { q: 5, u: "ml" }, nome: T("óleo de gergelim", "aceite de sésamo", "sesame oil"), obs: T("fora do fogo", "fuera del fuego", "off the heat") },
      { q: null, u: "", nome: T("togarashi", "togarashi", "togarashi"), obs: T("a gosto, para finalizar", "al gusto, para terminar", "to taste, to finish") },
      { q: null, u: "", nome: T("cebolinha", "cebollino", "spring onion"), obs: T("picada, opcional", "picado, opcional", "chopped, optional") },
    ],
    grade: [
      { col: 1, de: 0, ate: 0, titulo: T("fritar o bacon", "freír el bacon", "fry the bacon"), detalhe: T("reservar · deixar toda a gordura", "reservar · dejar toda la grasa", "set aside · leave all the fat") },
      { col: 2, de: 1, ate: 1, titulo: T("dourar a calabresa", "dorar la calabresa", "brown the calabresa"), detalhe: T("até pegar cor nas bordas", "hasta que tome color en los bordes", "until the edges colour") },
      { col: 3, de: 2, ate: 2, titulo: T("ovos na mesma gordura", "huevos en la misma grasa", "eggs in the same fat"), detalhe: T("tirar ainda cremoso", "sacar aún cremoso", "take them out still creamy") },
      { col: 4, de: 3, ate: 3, titulo: T("gengibre no fogo alto", "jengibre a fuego alto", "ginger over high heat"), detalhe: T("segundos, só até perfumar", "segundos, solo hasta que perfume", "seconds, just until fragrant") },
      { col: 5, de: 3, ate: 4, titulo: T("arroz espalhado, parado", "arroz extendido, quieto", "rice spread out, left alone"), detalhe: T("uns segundos antes de mexer", "unos segundos antes de remover", "a few seconds before stirring") },
      { col: 6, de: 3, ate: 7, titulo: T("shoyu pela borda, sake, aji", "soja por el borde, sake, glutamato", "soy down the side, sake, MSG"), detalhe: T("misturar rápido", "mezclar rápido", "toss quickly") },
      { col: 7, de: 0, ate: 7, titulo: T("juntar tudo", "juntar todo", "bring it all together"), detalhe: T("só até aquecer", "solo hasta calentar", "just until heated through") },
      { col: 8, de: 0, ate: 10, titulo: T("fora do fogo", "fuera del fuego", "off the heat"), detalhe: T("gergelim, togarashi, cebolinha", "sésamo, togarashi, cebollino", "sesame, togarashi, spring onion") },
    ],
    modo: [
      { t: T(
        "Mise en place primeiro — o salteado é rápido demais para picar no meio. Esfarele o arroz com as mãos, fatie a calabresa fina, bata os ovos, rale o gengibre. Tudo ao alcance antes de ligar o fogo.",
        "Mise en place primero — el salteado es demasiado rápido para picar a media cocción. Desgrana el arroz con las manos, corta la calabresa fina, bate los huevos, ralla el jengibre. Todo al alcance antes de encender el fuego.",
        "Mise en place first — the stir-fry is too fast to chop halfway through. Break up the rice with your hands, slice the sausage thin, beat the eggs, grate the ginger. Everything within reach before the heat goes on.") },
      { t: T(
        "Panela quase seca, fogo médio. Frite o bacon até render e ficar dourado e crocante. Retire com escumadeira e deixe toda a gordura na panela — é a base de tudo.",
        "Sartén casi seca, fuego medio. Fríe el bacon hasta que suelte la grasa y quede dorado y crujiente. Retíralo con espumadera y deja toda la grasa en la sartén — es la base de todo.",
        "Almost-dry pan, medium heat. Fry the bacon until it renders and turns golden and crisp. Lift it out with a slotted spoon and leave all the fat in the pan — it is the base of everything.") },
      { t: T(
        "Na gordura do bacon, doure a calabresa até pegar cor nas bordas. Retire e reserve junto com o bacon.",
        "En la grasa del bacon, dora la calabresa hasta que tome color en los bordes. Retírala y resérvala junto al bacon.",
        "In the bacon fat, brown the sausage until the edges colour. Remove and set aside with the bacon.") },
      { t: T(
        "Despeje os ovos batidos na mesma gordura e mexa em fogo médio, puxando do fundo. Tire ainda mole e cremoso, antes de secar — ele termina de cozinhar depois.",
        "Vierte los huevos batidos en la misma grasa y remueve a fuego medio, tirando desde el fondo. Sácalos aún blandos y cremosos, antes de que se sequen — terminan de cocerse después.",
        "Pour the beaten eggs into the same fat and stir over medium heat, pulling from the bottom. Take them out still soft and creamy, before they dry — they finish cooking later.") },
      { t: T(
        "Suba para o fogo alto. Jogue o gengibre e mexa só até perfumar, sem queimar — nessa boca são segundos.",
        "Sube a fuego alto. Echa el jengibre y remueve solo hasta que perfume, sin quemarlo — en ese quemador son segundos.",
        "Turn the heat up high. Throw in the ginger and stir just until fragrant, without burning it — on this burner that is seconds.") },
      { t: T(
        "Entra o arroz esfarelado. Espalhe numa camada e deixe parado uns segundos para pegar na panela antes de mexer — é isso que dá o tostadinho. Depois salteie até os grãos soltarem e dourarem de leve.",
        "Entra el arroz desgranado. Extiéndelo en una capa y déjalo quieto unos segundos para que agarre en la sartén antes de remover — eso es lo que da el tostadito. Después saltea hasta que los granos se suelten y doren ligeramente.",
        "In goes the broken-up rice. Spread it in a layer and leave it still for a few seconds to catch on the pan before stirring — that is what gives the toasted bits. Then toss until the grains loosen and colour lightly.") },
      { t: T(
        "Regue o shoyu pela borda da panela, que carameliza melhor que jogado por cima. Splash de sake para soltar o fundo, pitada de aji. Misture rápido.",
        "Vierte la salsa de soja por el borde de la sartén, que caramelia mejor que echada por encima. Un chorro de sake para soltar el fondo, pizca de glutamato. Mezcla rápido.",
        "Pour the soy sauce down the side of the pan, where it caramelises better than poured over the top. A splash of sake to lift the base, a pinch of MSG. Toss quickly.") },
      { t: T(
        "Devolva bacon, calabresa e ovo. Misture só até aquecer e o ovo se quebrar em pedaços pelo arroz.",
        "Devuelve el bacon, la calabresa y el huevo. Mezcla solo hasta calentar y que el huevo se rompa en trozos por el arroz.",
        "Return the bacon, sausage and egg. Toss just until heated and the egg breaks into pieces through the rice.") },
      { t: T(
        "Fora do fogo: fio de óleo de gergelim, togarashi e cebolinha. Prove e corrija — dificilmente vai precisar de sal.",
        "Fuera del fuego: chorrito de aceite de sésamo, togarashi y cebollino. Prueba y corrige — difícilmente va a necesitar sal.",
        "Off the heat: a drizzle of sesame oil, togarashi and spring onion. Taste and adjust — it will rarely need salt.") },
    ],
    notas: [
      T("Arroz frio de véspera é obrigatório: o grão perdeu umidade e frita solto. Arroz quente recém-feito solta vapor e empapa.",
        "El arroz frío de la víspera es obligatorio: el grano perdió humedad y se fríe suelto. El arroz caliente recién hecho suelta vapor y se apelmaza.",
        "Cold day-old rice is mandatory: the grain has lost moisture and fries loose. Hot fresh rice releases steam and goes soggy."),
      T("Bacon dá gordura e crocância defumada; calabresa entra em pouca quantidade só pela páprica e pelo alho. Sem ela, compense com mais gengibre e shoyu.",
        "El bacon da grasa y crujiente ahumado; la calabresa entra en poca cantidad solo por el pimentón y el ajo. Sin ella, compensa con más jengibre y salsa de soja.",
        "Bacon brings fat and smoky crunch; the calabresa goes in small amounts only for its paprika and garlic. Without it, compensate with more ginger and soy."),
      T("Sem miso: no calor da panela ele empelota, queima e vira pasta. Lugar dele é sopa, marinada ou molho de tigela.",
        "Sin miso: con el calor de la sartén se apelmaza, se quema y se vuelve pasta. Su lugar es la sopa, una marinada o una salsa de bol.",
        "No miso: in the heat of the pan it clumps, burns and turns to paste. Its place is soup, a marinade or a bowl sauce."),
      T("Quatro fontes de sódio juntas — bacon, calabresa, shoyu e aji. Prove antes de pensar em sal.",
        "Cuatro fuentes de sodio juntas — bacon, calabresa, soja y glutamato. Prueba antes de pensar en la sal.",
        "Four sources of sodium at once — bacon, sausage, soy and MSG. Taste before you even think about salt."),
    ],
  },

  {
    id: "risone-camarao",
    capitulo: "arroz",
    titulo: T("Risone de camarão ao limão", "Risoni de gambas al limón", "Lime prawn orzo"),
    kicker: T("RISOTTATO · SEM QUEIJO · CREMOSO PELO AMIDO", "RISOTTATO · SIN QUESO · CREMOSO POR EL ALMIDÓN", "RISOTTATO · NO CHEESE · CREAMY FROM THE STARCH"),
    subtitulo: T(
      "Camarão já cozido só reaquece no fim. O hondashi supre o fundo marinho que falta.",
      "Las gambas ya cocidas solo se recalientan al final. El hondashi aporta el fondo marino que falta.",
      "Pre-cooked prawns only reheat at the end. The hondashi supplies the sea flavour that is missing."
    ),
    porcoes: 2, porcoesOpcoes: [2, 4], ativo: 25, total: 30,
    utensilio: T("Frigideira grande, borda de 4–5 cm", "Sartén grande, borde de 4–5 cm", "Large pan, 4–5 cm sides"),
    faixa: T("PARE NO AL DENTE, MESMO QUE SOBRE CALDO", "PARA EN EL AL DENTE, AUNQUE SOBRE CALDO", "STOP AT AL DENTE, EVEN IF STOCK IS LEFT"),
    ingredientes: [
      { q: 600, u: "ml", nome: T("água quente", "agua caliente", "hot water"), obs: T("+ chaleira de reserva", "+ hervidor de reserva", "+ a kettle in reserve") },
      { q: 1, u: "tablete", alt: { q: 10, u: "g" }, nome: T("caldo de legumes", "caldo de verduras", "vegetable stock") },
      { q: 1, u: "cc", alt: { q: 4, u: "g" }, nome: T("hondashi", "hondashi (dashi en polvo)", "hondashi (instant dashi)"), obs: T("até 1½ se quiser mais marcado", "hasta 1½ si lo quieres más marcado", "up to 1½ for a stronger note") },
      { q: 3, u: "cs", alt: { q: 45, u: "ml" }, nome: T("azeite", "aceite de oliva", "olive oil"), obs: T("+ um fio para finalizar", "+ un chorrito para terminar", "+ a drizzle to finish") },
      { q: 0.5, u: "un", alt: { q: 70, u: "g" }, nome: T("cebola média", "cebolla mediana", "medium onion"), obs: T("picada fininha", "picada muy fina", "very finely chopped") },
      { q: 2, u: "dente", alt: { q: 10, u: "g" }, nome: T("alho", "ajo", "garlic") },
      { q: 160, u: "g", nome: T("risone", "risoni", "orzo"), obs: T("orzo", "orzo", "risoni") },
      { q: 90, u: "g", nome: T("vagem congelada", "judías verdes congeladas", "frozen green beans"), obs: T("em pedaços de 2 cm", "en trozos de 2 cm", "in 2 cm pieces") },
      { q: 300, u: "g", nome: T("camarão cozido descascado", "gambas cocidas peladas", "cooked peeled prawns"), obs: T("descongelado e bem escorrido", "descongeladas y bien escurridas", "thawed and well drained") },
      { q: 1, u: "un", alt: { q: 60, u: "g" }, nome: T("limão-taíti", "lima (limón verde)", "lime"), obs: T("raspas + suco", "ralladura + zumo", "zest + juice") },
      { q: 1, u: "cc", alt: { q: 3, u: "g" }, nome: T("lemon pepper", "lemon pepper", "lemon pepper") },
      { q: null, u: "", nome: T("sal", "sal", "salt"), obs: T("só se precisar, no fim", "solo si hace falta, al final", "only if needed, at the end"), escala: false },
    ],
    grade: [
      { col: 1, de: 0, ate: 2, titulo: T("caldo quente ao lado", "caldo caliente al lado", "hot stock alongside"), detalhe: T("dissolver tablete e hondashi", "disolver pastilla y hondashi", "dissolve the cube and hondashi") },
      { col: 2, de: 3, ate: 5, titulo: T("refogar cebola e alho", "sofreír cebolla y ajo", "sweat onion and garlic"), detalhe: T("médio-baixo · sem dourar", "medio-bajo · sin dorar", "medium-low · no colour") },
      { col: 3, de: 3, ate: 6, titulo: T("tostar o risone", "tostar el risoni", "toast the orzo"), detalhe: T("1–2 min · até perfumar", "1–2 min · hasta que perfume", "1–2 min · until fragrant") },
      { col: 4, de: 0, ate: 6, titulo: T("caldo concha a concha", "caldo cucharón a cucharón", "stock a ladle at a time"), detalhe: T("esperar absorver antes da próxima", "esperar que absorba antes del siguiente", "wait for it to absorb before the next") },
      { col: 5, de: 0, ate: 7, titulo: T("vagem congelada", "judías congeladas", "frozen beans"), detalhe: T("6–7 min antes do fim", "6–7 min antes del final", "6–7 min before the end") },
      { col: 6, de: 0, ate: 8, titulo: T("camarão, fogo mínimo", "gambas, fuego mínimo", "prawns, minimum heat"), detalhe: T("1–2 min só para aquecer", "1–2 min solo para calentar", "1–2 min just to warm through") },
      { col: 7, de: 0, ate: 11, titulo: T("fora do fogo", "fuera del fuego", "off the heat"), detalhe: T("raspas, suco, lemon pepper, azeite · provar", "ralladura, zumo, lemon pepper, aceite · probar", "zest, juice, lemon pepper, oil · taste") },
    ],
    modo: [
      { t: T(
        "Aqueça os 600 ml de água com o tablete de legumes e o hondashi até dissolver. Mantenha quente em fogo baixo ao lado, com uma chaleira de água quente de reserva.",
        "Calienta los 600 ml de agua con la pastilla de caldo y el hondashi hasta disolver. Mantenlo caliente a fuego bajo al lado, con un hervidor de agua caliente de reserva.",
        "Heat the 600 ml of water with the stock cube and hondashi until dissolved. Keep it hot on low heat beside you, with a kettle of hot water in reserve.") },
      { t: T(
        "Escorra o camarão muito bem e seque com papel-toalha. Ele já vem cozido — entra só no fim. Reserve.",
        "Escurre muy bien las gambas y sécalas con papel de cocina. Ya vienen cocidas — entran solo al final. Resérvalas.",
        "Drain the prawns thoroughly and pat them dry. They come pre-cooked — they go in only at the end. Set aside.") },
      { t: T(
        "Azeite em fogo médio-baixo, refogue a cebola até translúcida. Junte o alho e refogue 1 minuto, sem dourar — nessa boca o alho queima em segundos.",
        "Aceite a fuego medio-bajo, sofríe la cebolla hasta que esté translúcida. Añade el ajo y sofríe 1 minuto, sin dorar — en ese quemador el ajo se quema en segundos.",
        "Olive oil over medium-low heat, sweat the onion until translucent. Add the garlic and cook 1 minute without colouring — on this burner garlic burns in seconds.") },
      { t: T(
        "Junte o risone seco e mexa 1 a 2 minutos em fogo médio, até perfumar e dourar de leve. Dá sabor e segura o ponto.",
        "Añade el risoni seco y remueve 1 a 2 minutos a fuego medio, hasta que perfume y dore ligeramente. Da sabor y sujeta el punto.",
        "Add the dry orzo and stir 1 to 2 minutes over medium heat, until fragrant and lightly coloured. It builds flavour and helps hold the bite."), timer: 90 },
      { t: T(
        "Adicione o caldo quente concha a concha, mexendo e esperando absorver antes da próxima. Fogo médio, borbulhar constante e alegre.",
        "Añade el caldo caliente cucharón a cucharón, removiendo y esperando que absorba antes del siguiente. Fuego medio, burbujeo constante y alegre.",
        "Add the hot stock a ladle at a time, stirring and waiting for it to absorb before the next. Medium heat, a steady cheerful bubble.") },
      { t: T(
        "Uns 6 a 7 minutos antes do fim, junte a vagem ainda congelada, direto na panela.",
        "Unos 6 a 7 minutos antes del final, añade las judías aún congeladas, directo a la sartén.",
        "About 6 to 7 minutes before the end, add the beans straight from the freezer."), timer: 400 },
      { t: T(
        "Comece a provar aos 7 ou 8 minutos. Risone é rápido — pare no al dente, mesmo que sobre caldo. O ponto manda, não o relógio.",
        "Empieza a probar a los 7 u 8 minutos. El risoni es rápido — para en el al dente, aunque sobre caldo. Manda el punto, no el reloj.",
        "Start tasting at 7 or 8 minutes. Orzo is fast — stop at al dente, even if stock is left. Doneness rules, not the clock.") },
      { t: T(
        "Fogo no mínimo ou desligado. Junte o camarão só para aquecer, 1 a 2 minutos. Nunca mais que isso.",
        "Fuego al mínimo o apagado. Añade las gambas solo para calentar, 1 a 2 minutos. Nunca más que eso.",
        "Minimum heat or off. Add the prawns just to warm through, 1 to 2 minutes. Never longer."), timer: 90 },
      { t: T(
        "Fora do fogo: raspas e metade do suco do limão, lemon pepper, um fio de azeite. Mexa bem para ficar cremoso e solto (all'onda); se precisar, mais uma concha de caldo. Prove antes de pensar em sal.",
        "Fuera del fuego: ralladura y la mitad del zumo de la lima, lemon pepper, un chorrito de aceite. Remueve bien para que quede cremoso y suelto (all'onda); si hace falta, otro cucharón de caldo. Prueba antes de pensar en la sal.",
        "Off the heat: zest and half the lime juice, lemon pepper, a drizzle of oil. Stir well so it stays creamy and loose (all'onda); add another ladle of stock if needed. Taste before you even think about salt.") },
      { t: T(
        "Sirva na hora — risone continua absorvendo e engrossa parado.",
        "Sirve al momento — el risoni sigue absorbiendo y espesa si se queda quieto.",
        "Serve immediately — orzo keeps absorbing and thickens as it sits.") },
    ],
    notas: [
      T("600 ml, não 700: o que entra de fato são uns 500 a 550 ml, o resto é folga. O erro é despejar tudo de uma vez e afogar a massa.",
        "600 ml, no 700: lo que entra de verdad son unos 500 a 550 ml, el resto es margen. El error es echarlo todo de golpe y ahogar la pasta.",
        "600 ml, not 700: what actually goes in is around 500 to 550 ml, the rest is slack. The mistake is dumping it all at once and drowning the pasta."),
      T("Frigideira larga e baixa cozinha numa camada fina e solta amido melhor. Panela funda empilha a massa e empapa embaixo.",
        "Una sartén ancha y baja cocina en una capa fina y suelta mejor el almidón. Una olla honda amontona la pasta y la apelmaza abajo.",
        "A wide, shallow pan cooks in a thin layer and releases starch better. A deep pot piles the pasta up and it goes soggy underneath."),
      T("Caldo de carne fica de fora: sabor de boi briga com o camarão.",
        "El caldo de carne queda fuera: el sabor a vacuno pelea con las gambas.",
        "Beef stock stays out of this: beef flavour fights the prawns."),
      T("Uma colherzinha de manteiga gelada batida no fim deixa mais sedoso, se quiser.",
        "Una cucharadita de mantequilla fría batida al final lo deja más sedoso, si quieres.",
        "A small knob of cold butter whisked in at the end makes it silkier, if you like."),
    ],
  },

  /* ===================== CONSERVAS ===================== */
  {
    id: "escabeche-sardinha",
    capitulo: "conservas",
    titulo: T("Escabeche de sardinha", "Escabeche de sardinas", "Sardine escabeche"),
    kicker: T("PETISCO · MELHOR NO DIA SEGUINTE · NUNCA REAQUECE", "TAPA · MEJOR AL DÍA SIGUIENTE · NUNCA SE RECALIENTA", "SNACK · BETTER THE NEXT DAY · NEVER REHEATED"),
    subtitulo: T(
      "Frita rápido e curte num banho morno de vinagre, azeite e aromáticos.",
      "Se fríe rápido y se cura en un baño tibio de vinagre, aceite y aromáticos.",
      "Fried fast, then cured in a warm bath of vinegar, oil and aromatics."
    ),
    porcoes: 4, porcoesOpcoes: [2, 4, 8], ativo: 40, total: 280,
    utensilio: T("Refratário de vidro ou cerâmica", "Fuente de vidrio o cerámica", "Glass or ceramic dish"),
    faixa: T("RECIPIENTE NÃO-REATIVO · TUDO SUBMERSO", "RECIPIENTE NO REACTIVO · TODO SUMERGIDO", "NON-REACTIVE DISH · EVERYTHING SUBMERGED"),
    ingredientes: [
      { q: 600, u: "g", nome: T("sardinha fresca", "sardinas frescas", "fresh sardines"), obs: T("espalmada", "abiertas en mariposa", "butterflied") },
      { q: 1, u: "cc", alt: { q: 6, u: "g" }, nome: T("sal e pimenta", "sal y pimienta", "salt and pepper"), obs: T("dos dois lados", "por ambos lados", "on both sides") },
      { q: 2, u: "cs", alt: { q: 20, u: "g" }, nome: T("farinha de trigo", "harina de trigo", "plain flour"), obs: T("opcional, para empanar leve", "opcional, para enharinar ligero", "optional, a light dusting") },
      { q: 120, u: "ml", nome: T("azeite de oliva", "aceite de oliva", "olive oil") },
      { q: 2, u: "un", alt: { q: 280, u: "g" }, nome: T("cebolas médias", "cebollas medianas", "medium onions"), obs: T("em meia-lua fina", "en media luna fina", "in thin half-moons") },
      { q: 4, u: "dente", alt: { q: 20, u: "g" }, nome: T("alho", "ajo", "garlic"), obs: T("fatiados", "en láminas", "sliced") },
      { q: 1, u: "un", alt: { q: 80, u: "g" }, nome: T("cenoura pequena", "zanahoria pequeña", "small carrot"), obs: T("em rodelas finas, opcional", "en rodajas finas, opcional", "thinly sliced, optional") },
      { q: 2, u: "folha", alt: { q: 1, u: "g" }, nome: T("louro", "laurel", "bay") },
      { q: 1, u: "cc", alt: { q: 3, u: "g" }, nome: T("pimenta-do-reino em grãos", "pimienta negra en grano", "black peppercorns") },
      { q: 120, u: "ml", nome: T("vinagre de vinho branco", "vinagre de vino blanco", "white wine vinegar"), obs: T("ou de arroz, mais suave", "o de arroz, más suave", "or rice vinegar, milder") },
      { q: 60, u: "ml", nome: T("vinho branco seco", "vino blanco seco", "dry white wine"), obs: T("opcional", "opcional", "optional") },
      { q: 60, u: "ml", nome: T("água", "agua", "water") },
      { q: 1, u: "cc", alt: { q: 4, u: "g" }, nome: T("açúcar", "azúcar", "sugar"), obs: T("equilibra a acidez", "equilibra la acidez", "balances the acidity") },
      { q: null, u: "", nome: T("salsinha", "perejil", "parsley"), obs: T("picada, para servir", "picado, para servir", "chopped, to serve") },
    ],
    grade: [
      { col: 1, de: 0, ate: 1, titulo: T("secar e temperar", "secar y sazonar", "dry and season"), detalhe: T("papel-toalha · dos dois lados", "papel de cocina · por ambos lados", "paper towel · both sides") },
      { col: 2, de: 0, ate: 3, titulo: T("fritar em levas", "freír en tandas", "fry in batches"), detalhe: T("1–2 min por lado · só dourar", "1–2 min por lado · solo dorar", "1–2 min per side · just to colour") },
      { col: 3, de: 3, ate: 8, titulo: T("refogar os aromáticos", "sofreír los aromáticos", "sweat the aromatics"), detalhe: T("médio-baixo · cebola translúcida", "medio-bajo · cebolla translúcida", "medium-low · onion translucent") },
      { col: 4, de: 3, ate: 12, titulo: T("vinagre, vinho, água e açúcar", "vinagre, vino, agua y azúcar", "vinegar, wine, water and sugar"), detalhe: T("ferver brando 2–3 min · provar", "hervir suave 2–3 min · probar", "gentle simmer 2–3 min · taste") },
      { col: 5, de: 0, ate: 12, titulo: T("cobrir as sardinhas", "cubrir las sardinas", "cover the sardines"), detalhe: T("morno · o mais submerso possível", "tibio · lo más sumergido posible", "warm · as submerged as possible") },
      { col: 6, de: 0, ate: 13, titulo: T("amornar e gelar", "atemperar y enfriar", "cool and chill"), detalhe: T("mín. 4 h · vira a partir de ~12 h", "mín. 4 h · mejora a partir de ~12 h", "min. 4 h · comes into its own after ~12 h") },
    ],
    modo: [
      { t: T(
        "Seque bem as sardinhas com papel-toalha e tempere com sal e pimenta dos dois lados.",
        "Seca bien las sardinas con papel de cocina y sazona con sal y pimienta por ambos lados.",
        "Dry the sardines well with paper towel and season with salt and pepper on both sides.") },
      { t: T(
        "Se quiser, passe leve na farinha e sacuda o excesso. Frite no azeite bem quente, em levas sem lotar a panela, 1 a 2 minutos por lado, só até dourar de leve. Retire para um refratário de vidro ou cerâmica.",
        "Si quieres, pásalas ligeramente por harina y sacude el exceso. Fríelas en aceite bien caliente, en tandas sin llenar la sartén, 1 a 2 minutos por lado, solo hasta dorar ligeramente. Retíralas a una fuente de vidrio o cerámica.",
        "If you like, dust them lightly with flour and shake off the excess. Fry in very hot oil, in batches without crowding, 1 to 2 minutes per side, just until lightly golden. Transfer to a glass or ceramic dish."), timer: 180 },
      { t: T(
        "No mesmo azeite, em fogo médio-baixo, refogue a cebola, a cenoura, o alho, o louro e a pimenta em grão até a cebola ficar macia e translúcida — sem dourar muito.",
        "En el mismo aceite, a fuego medio-bajo, sofríe la cebolla, la zanahoria, el ajo, el laurel y la pimienta en grano hasta que la cebolla esté blanda y translúcida — sin dorar demasiado.",
        "In the same oil, over medium-low heat, sweat the onion, carrot, garlic, bay and peppercorns until the onion is soft and translucent — without much colour.") },
      { t: T(
        "Junte o vinagre, o vinho, a água e o açúcar. Ferva brando 2 a 3 minutos, só para tirar o ardido cru do vinagre. Prove e equilibre acidez e sal.",
        "Añade el vinagre, el vino, el agua y el azúcar. Hierve suave 2 a 3 minutos, solo para quitar el ardor crudo del vinagre. Prueba y equilibra acidez y sal.",
        "Add the vinegar, wine, water and sugar. Simmer gently for 2 to 3 minutes, just to take the raw bite off the vinegar. Taste and balance acidity and salt."), timer: 150 },
      { t: T(
        "Despeje o escabeche morno sobre as sardinhas, deixando-as o mais cobertas possível pelo líquido e pela cebola.",
        "Vierte el escabeche tibio sobre las sardinas, dejándolas lo más cubiertas posible por el líquido y la cebolla.",
        "Pour the warm escabeche over the sardines, leaving them as covered as possible by the liquid and the onion.") },
      { t: T(
        "Deixe amornar 20 a 30 minutos na bancada — não horas —, tampe e leve à geladeira. Descansa no mínimo 4 horas; vira a partir de umas 12.",
        "Deja atemperar 20 a 30 minutos en la encimera — no horas —, tapa y lleva a la nevera. Reposa mínimo 4 horas; se transforma a partir de unas 12.",
        "Let it cool 20 to 30 minutes on the counter — not hours — then cover and refrigerate. Rest at least 4 hours; it comes into its own after about 12."), timer: 1500 },
    ],
    notas: [
      T("Come frio ou em temperatura ambiente, sem reaquecer, com pão. Aguenta 4 a 5 dias na geladeira e melhora no dia seguinte.",
        "Se come frío o a temperatura ambiente, sin recalentar, con pan. Aguanta 4 a 5 días en la nevera y mejora al día siguiente.",
        "Eaten cold or at room temperature, never reheated, with bread. Keeps 4 to 5 days in the fridge and improves the next day."),
      T("Para presente: fritar no fim da tarde e entregar na manhã seguinte dá 14 a 16 h de cura, a melhor janela.",
        "Para regalar: freír al final de la tarde y entregar a la mañana siguiente da 14 a 16 h de curado, la mejor ventana.",
        "As a gift: frying late afternoon and delivering the next morning gives 14 to 16 hours of curing, the best window."),
      T("Azeite, não banha: a banha solidifica e embranquece na geladeira.",
        "Aceite de oliva, no manteca: la manteca solidifica y blanquea en la nevera.",
        "Olive oil, not lard: lard sets solid and turns white in the fridge."),
      T("Nunca alumínio ou ferro — o vinagre reage com metal e deixa gosto metálico.",
        "Nunca aluminio ni hierro — el vinagre reacciona con el metal y deja sabor metálico.",
        "Never aluminium or iron — vinegar reacts with metal and leaves a metallic taste."),
      T("As espinhas finas amolecem no ácido em cerca de um dia e ficam comestíveis.",
        "Las espinas finas se ablandan en el ácido en cerca de un día y quedan comestibles.",
        "The fine bones soften in the acid in about a day and become edible."),
      T("Com vinagre de arroz, mais suave e adocicado, pode tirar o açúcar.",
        "Con vinagre de arroz, más suave y dulzón, puedes quitar el azúcar.",
        "With rice vinegar, milder and sweeter, you can leave out the sugar."),
    ],
  },

  {
    id: "molho-pimenta",
    capitulo: "conservas",
    titulo: T("Molho de pimenta lacto-fermentado", "Salsa picante lacto-fermentada", "Lacto-fermented hot sauce"),
    kicker: T("DEDO-DE-MOÇA + MALAGUETA · CALIBRADO NO MÉDIO", "DEDO-DE-MOÇA + MALAGUETA · CALIBRADO EN MEDIO", "DEDO-DE-MOÇA + MALAGUETA · CALIBRATED TO MEDIUM"),
    subtitulo: T(
      "Estilo Tabasco brasileiro: base frutada, malagueta como único calor. Rende 450–550 ml.",
      "Estilo Tabasco brasileño: base afrutada, malagueta como único picor. Rinde 450–550 ml.",
      "Brazilian Tabasco style: fruity base, malagueta as the only heat. Makes 450–550 ml."
    ),
    porcoes: 1, porcoesOpcoes: [1, 2], lote: true, ativo: 40, total: 10080,
    rende: T("450–550 ml", "450–550 ml", "450–550 ml"),
    utensilio: T("Pote ou garrafa de vidro limpo", "Frasco o botella de vidrio limpio", "Clean glass jar or bottle"),
    faixa: T("SAL A 3% DO PESO DE PIMENTA + ÁGUA · TUDO SUBMERSO", "SAL AL 3% DEL PESO DE CHILE + AGUA · TODO SUMERGIDO", "SALT AT 3% OF CHILLI + WATER WEIGHT · EVERYTHING SUBMERGED"),
    ingredientes: [
      { q: 346, u: "g", nome: T("pimenta dedo-de-moça", "chile dedo-de-moça (tipo cayena fresca)", "dedo-de-moça chilli (fresh cayenne-like)"), obs: T("fresca, já limpa", "fresco, ya limpio", "fresh, trimmed") },
      { q: 40, u: "g", nome: T("pimenta malagueta", "chile malagueta (piri-piri)", "malagueta (piri-piri) chilli"), obs: T("o botão de volume — calibre provando", "el mando del volumen — calíbralo probando", "the volume knob — calibrate by tasting") },
      { q: 5, u: "dente", alt: { q: 25, u: "g" }, nome: T("alho", "ajo", "garlic") },
      { q: 380, u: "ml", nome: T("água filtrada", "agua filtrada", "filtered water"), obs: T("o suficiente para submergir", "la suficiente para sumergir", "enough to submerge") },
      { q: 23, u: "g", nome: T("sal", "sal", "salt"), obs: T("3% do peso de pimenta + água", "3% del peso de chile + agua", "3% of chilli + water weight") },
      { q: 45, u: "ml", nome: T("vinagre de arroz ou de maçã", "vinagre de arroz o de manzana", "rice or cider vinegar"), obs: T("só no fim, a gosto", "solo al final, al gusto", "only at the end, to taste") },
    ],
    grade: [
      { col: 1, de: 0, ate: 2, titulo: T("picar grosso, na faca", "picar grueso, a cuchillo", "chop coarsely, by knife"), detalhe: T("sem cabinhos · com sementes · use luva", "sin rabitos · con semillas · usa guante", "no stems · seeds in · wear a glove") },
      { col: 2, de: 0, ate: 2, titulo: T("provar o blend cru", "probar la mezcla cruda", "taste the raw blend"), detalhe: T("calibrar o calor com mais malagueta", "calibrar el picor con más malagueta", "adjust heat with more malagueta") },
      { col: 3, de: 0, ate: 3, titulo: T("cobrir com água", "cubrir con agua", "cover with water"), detalhe: T("no pote limpo", "en el frasco limpio", "in the clean jar") },
      { col: 4, de: 0, ate: 4, titulo: T("pesar e salgar a 3%", "pesar y salar al 3%", "weigh and salt at 3%"), detalhe: T("do peso de pimenta + água", "del peso de chile + agua", "of the chilli + water weight") },
      { col: 5, de: 0, ate: 4, titulo: T("submergir, tampa frouxa", "sumergir, tapa floja", "submerge, loose lid"), detalhe: T("ambiente, longe do sol, num pratinho", "ambiente, lejos del sol, sobre un platito", "room temperature, out of the sun, on a saucer") },
      { col: 6, de: 0, ate: 4, titulo: T("fermentar", "fermentar", "ferment"), detalhe: T("1 semana a alguns meses · provar do 5º dia", "1 semana a unos meses · probar desde el 5º día", "1 week to a few months · taste from day 5") },
      { col: 7, de: 0, ate: 5, titulo: T("bater e engarrafar", "triturar y embotellar", "blend and bottle"), detalhe: T("acertar com vinagre · geladeira", "ajustar con vinagre · nevera", "adjust with vinegar · refrigerate") },
    ],
    modo: [
      { t: T(
        "Tire os cabinhos e pique grosso na faca, em rodelas. Nada de processador agora — purê vira outro método, sem água. Mantenha as sementes para o médio. Use luva com a malagueta, lave bem as mãos e não esfregue os olhos.",
        "Quita los rabitos y pica grueso a cuchillo, en rodajas. Nada de procesadora ahora — el puré es otro método, sin agua. Deja las semillas para el picor medio. Usa guante con la malagueta, lávate bien las manos y no te frotes los ojos.",
        "Remove the stems and chop coarsely by knife, into rounds. No blender at this stage — a purée is a different method, without water. Keep the seeds for medium heat. Wear a glove with the malagueta, wash your hands well and do not rub your eyes.") },
      { t: T(
        "Monte num pote ou garrafa bem limpo: dedo-de-moça, alho e a porção inicial de malagueta.",
        "Monta en un frasco o botella bien limpio: dedo-de-moça, ajo y la porción inicial de malagueta.",
        "Layer into a scrupulously clean jar or bottle: dedo-de-moça, garlic and the starting amount of malagueta.") },
      { t: T(
        "Prove o blend cru e ajuste o calor com mais malagueta se quiser. Dá para subir, não para descer — e fermentar não tira ardência, só arredonda.",
        "Prueba la mezcla cruda y ajusta el picor con más malagueta si quieres. Se puede subir, no bajar — y fermentar no quita picante, solo lo redondea.",
        "Taste the raw blend and adjust the heat with more malagueta if you want. You can go up, not down — and fermenting does not remove heat, it only rounds it.") },
      { t: T(
        "Cubra com água até submergir. Pese o conjunto — pimenta mais água — e adicione 3% em sal. Dissolva bem.",
        "Cubre con agua hasta sumergir. Pesa el conjunto — chile más agua — y añade 3% en sal. Disuelve bien.",
        "Cover with water until submerged. Weigh the whole thing — chilli plus water — and add 3% salt. Dissolve it well.") },
      { t: T(
        "Mantenha tudo submerso: um saquinho limpo com salmoura a 3% dentro (não água pura) enfiado no gargalo faz peso e isola do ar. Nenhuma pimenta acima da linha do líquido — é ali que mofa.",
        "Mantén todo sumergido: una bolsita limpia con salmuera al 3% dentro (no agua pura) metida en el cuello hace peso y aísla del aire. Ningún chile por encima de la línea del líquido — ahí es donde aparece el moho.",
        "Keep everything submerged: a clean bag filled with 3% brine (not plain water) pushed into the neck acts as a weight and seals off the air. No chilli above the liquid line — that is where mould starts.") },
      { t: T(
        "Tampa frouxa: a fermentação solta CO₂ e garrafa cheia transborda nos primeiros dias. Temperatura ambiente, longe do sol, num pratinho para aparar. Vai turvar e borbulhar — é o certo.",
        "Tapa floja: la fermentación suelta CO₂ y una botella llena se desborda los primeros días. Temperatura ambiente, lejos del sol, sobre un platito para recoger. Se pondrá turbio y burbujeará — es lo correcto.",
        "Loose lid: fermentation releases CO₂ and a full bottle overflows in the first days. Room temperature, out of the sun, on a saucer to catch spills. It will cloud and bubble — that is right.") },
      { t: T(
        "Fermente de uma semana a alguns meses. Comece a provar do quinto ao sétimo dia; o ponto é o gosto.",
        "Fermenta de una semana a unos meses. Empieza a probar del quinto al séptimo día; el punto es el gusto.",
        "Ferment from one week to a few months. Start tasting from day five to seven; the endpoint is taste.") },
      { t: T(
        "Para finalizar: escorra reservando a salmoura, bata as pimentas e o alho com um pouco dela, acerte com vinagre, engarrafe em vidro limpo e guarde na geladeira.",
        "Para terminar: escurre reservando la salmuera, tritura los chiles y el ajo con un poco de ella, ajusta con vinagre, embotella en vidrio limpio y guarda en la nevera.",
        "To finish: drain, reserving the brine, blend the chillies and garlic with a little of it, adjust with vinegar, bottle in clean glass and keep refrigerated.") },
    ],
    notas: [
      T("Para escalar: malagueta a ~10% do peso da dedo-de-moça dá o médio; sal sempre 3% do peso de pimenta + água.",
        "Para escalar: malagueta al ~10% del peso de la dedo-de-moça da el punto medio; sal siempre 3% del peso de chile + agua.",
        "To scale: malagueta at ~10% of the dedo-de-moça weight gives medium heat; salt always 3% of chilli + water weight."),
      T("Kahm (película branca lisa) é levedura inofensiva, retire com a colher. Mofo — qualquer coisa felpuda, de qualquer cor — descarta o lote inteiro.",
        "El kahm (película blanca lisa) es levadura inofensiva, retíralo con la cuchara. El moho — cualquier cosa afelpada, de cualquier color — obliga a desechar el lote entero.",
        "Kahm (a smooth white film) is a harmless yeast, spoon it off. Mould — anything fuzzy, any colour — means discarding the whole batch."),
      T("Pimenta de cheiro não substitui biquinho: é da família do habanero e pode arder absurdamente. Para perfume sem fogo, use biquinho.",
        "El chile de olor no sustituye al biquinho: es de la familia del habanero y puede picar absurdamente. Para perfume sin fuego, usa biquinho.",
        "Pimenta de cheiro is not a substitute for biquinho: it is in the habanero family and can be brutally hot. For aroma without fire, use biquinho."),
      T("Garrafa de gargalo estreito é o formato mais chato para manter submerso.",
        "La botella de cuello estrecho es el formato más incómodo para mantener todo sumergido.",
        "A narrow-necked bottle is the most awkward shape for keeping everything submerged."),
    ],
  },

  /* ===================== BEBER ===================== */
  {
    id: "quentao-mel",
    capitulo: "beber",
    titulo: T("Quentão com mel", "Quentão con miel", "Quentão with honey"),
    kicker: T("SEM AÇÚCAR · O MEL ENTRA DISSOLVIDO NO FIM", "SIN AZÚCAR · LA MIEL ENTRA DISUELTA AL FINAL", "NO SUGAR · THE HONEY DISSOLVES IN AT THE END"),
    subtitulo: T(
      "Mel não caramela: queima rápido e vira acre. O custo da troca é só a cor.",
      "La miel no carameliza: se quema rápido y se vuelve acre. El costo del cambio es solo el color.",
      "Honey does not caramelise: it burns fast and turns acrid. The cost of the swap is only colour."
    ),
    porcoes: 6, porcoesOpcoes: [6, 12], ativo: 10, total: 30,
    utensilio: T("Panela", "Olla", "Saucepan"),
    faixa: T("NADA DE CARAMELIZAR O MEL", "NADA DE CARAMELIZAR LA MIEL", "DO NOT CARAMELISE THE HONEY"),
    ingredientes: [
      { q: 750, u: "ml", nome: T("água", "agua", "water") },
      { q: 80, u: "g", nome: T("gengibre fresco", "jengibre fresco", "fresh ginger"), obs: T("em fatias", "en rodajas", "sliced") },
      { q: 3, u: "pau", alt: { q: 9, u: "g" }, nome: T("canela", "canela", "cinnamon") },
      { q: 8, u: "un", alt: { q: 2, u: "g" }, nome: T("cravos-da-índia", "clavos de olor", "cloves") },
      { q: 1, u: "un", alt: { q: 20, u: "g" }, nome: T("casca de laranja", "piel de naranja", "orange peel") },
      { q: 500, u: "ml", nome: T("cachaça", "cachaça", "cachaça") },
      { q: 120, u: "g", nome: T("mel", "miel", "honey"), obs: T("ponto de partida — acerta provando", "punto de partida — ajusta probando", "starting point — adjust by tasting") },
    ],
    grade: [
      { col: 1, de: 0, ate: 4, titulo: T("infusão dos aromáticos", "infusión de los aromáticos", "infuse the aromatics"), detalhe: T("ferver e apurar 15 min em fogo baixo", "hervir y reducir 15 min a fuego bajo", "boil, then 15 min on low") },
      { col: 2, de: 0, ate: 5, titulo: T("cachaça, fogo baixo", "cachaça, fuego bajo", "cachaça, low heat"), detalhe: T("5 min mantém o teor · 15+ suaviza", "5 min mantiene el grado · 15+ suaviza", "5 min keeps the strength · 15+ softens it") },
      { col: 3, de: 0, ate: 6, titulo: T("desligar e dissolver o mel", "apagar y disolver la miel", "turn off and dissolve the honey"), detalhe: T("não ferver depois disso", "no hervir después de esto", "no boiling after this") },
      { col: 4, de: 0, ate: 6, titulo: T("coar e servir", "colar y servir", "strain and serve"), detalhe: T("bem quente, nas canecas", "bien caliente, en tazas", "very hot, in mugs") },
    ],
    modo: [
      { t: T(
        "Panela com a água, o gengibre, a canela, o cravo e a casca de laranja. Ferva, abaixe e apure uns 15 minutos em fogo baixo, para extrair o sabor das especiarias e do gengibre.",
        "Olla con el agua, el jengibre, la canela, el clavo y la piel de naranja. Hierve, baja y reduce unos 15 minutos a fuego bajo, para extraer el sabor de las especias y del jengibre.",
        "Pan with the water, ginger, cinnamon, cloves and orange peel. Bring to a boil, lower and simmer about 15 minutes, to draw out the flavour of the spices and ginger."), timer: 900 },
      { t: T(
        "Acrescente a cachaça e mantenha em fogo baixo, sem ferver forte, para casar os sabores. Cinco minutos mantêm o teor alcoólico; quinze ou mais deixam bem mais suave.",
        "Añade la cachaça y mantén a fuego bajo, sin hervir fuerte, para casar los sabores. Cinco minutos mantienen el grado alcohólico; quince o más lo dejan mucho más suave.",
        "Add the cachaça and keep it on low heat, without a hard boil, to marry the flavours. Five minutes keeps the alcohol; fifteen or more makes it much gentler."), timer: 300 },
      { t: T(
        "Desligue — ou deixe no mínimo — e dissolva o mel mexendo. Não ferva depois disso, para não perder o aroma. Prove e acerte o doce: mel é mais marcante que açúcar.",
        "Apaga — o déjalo al mínimo — y disuelve la miel removiendo. No hiervas después de esto, para no perder el aroma. Prueba y ajusta el dulzor: la miel es más marcada que el azúcar.",
        "Turn it off — or leave it on the lowest setting — and stir in the honey until dissolved. Do not boil after this, or you lose the aroma. Taste and adjust the sweetness: honey is more assertive than sugar.") },
      { t: T(
        "Coe e sirva bem quente, nas canecas.",
        "Cuela y sirve bien caliente, en tazas.",
        "Strain and serve very hot, in mugs.") },
    ],
    notas: [
      T("Mel é mais doce que açúcar: comece com 120 g e vá acertando no fim, nunca o contrário.",
        "La miel es más dulce que el azúcar: empieza con 120 g y ajusta al final, nunca al revés.",
        "Honey is sweeter than sugar: start with 120 g and adjust at the end, never the other way round."),
      T("Quer puxar o fundo tostado que o caramelo daria? Reforce o cravo e a canela.",
        "¿Quieres recuperar el fondo tostado que daría el caramelo? Refuerza el clavo y la canela.",
        "Want the toasted background that caramel would give? Push the cloves and cinnamon."),
      T("Maçã em pedaços junto com a laranja deixa mais frutado.",
        "Manzana en trozos junto con la naranja lo deja más afrutado.",
        "Chopped apple alongside the orange makes it fruitier."),
    ],
  }
);
