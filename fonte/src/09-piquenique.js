/* ===================== PIQUENIQUE ===================== */

TECNICAS.push({
  id: "piquenique-caixa-termica",
  titulo: T(
    "Piquenique de manhã: comida de uma mão e caixa térmica",
    "Picnic por la mañana: comida de una mano y caja térmica",
    "Morning picnic: one-handed food and a cool box"
  ),
  kicker: T(
    "TÉCNICA · O FILTRO QUE DECIDE O CARDÁPIO DE VIAGEM",
    "TÉCNICA · EL FILTRO QUE DECIDE EL MENÚ DE VIAJE",
    "TECHNIQUE · THE FILTER THAT DECIDES A TRAVEL MENU"
  ),
  resumo: T(
    "Duas perguntas eliminam quase tudo do cardápio: cabe numa mão, e aguenta esperar sem mudar de estado? A cadeia de frio faz o resto.",
    "Dos preguntas eliminan casi todo el menú: ¿cabe en una mano, y aguanta esperar sin cambiar de estado? La cadena de frío hace el resto.",
    "Two questions rule out most of the menu: does it fit in one hand, and can it wait without changing state? The cold chain does the rest."
  ),
  corpo: [
    {
      h: T("Duas perguntas eliminam quase tudo", "Dos preguntas eliminan casi todo", "Two questions rule out almost everything"),
      p: T(
        "A primeira: dá pra comer em pé, com uma mão? Piquenique com criança não tem mesa e ninguém senta — qualquer prato que peça garfo, faca ou prato ocupa as duas mãos e vira atrito. Frango assado é ótimo e não passa; sanduíche embrulhado, ovo cozido, fruta em cubo, chip com molho e palito de crudité passam. A segunda: aguenta esperar sem mudar de estado? O que empapa, murcha, derrete ou escurece entre a montagem e a hora de comer sai, ou muda de formato — não é questão de segurança, é questão de estar bom. O que sobra depois dos dois filtros é um cardápio curto, e curto é o objetivo: menos itens significa menos potes, caixa mais folgada, menos aberturas e temperatura mais estável.",
        "La primera: ¿se puede comer de pie, con una mano? Un picnic con niños no tiene mesa y nadie se sienta — cualquier plato que pida tenedor, cuchillo o plato ocupa las dos manos y se vuelve fricción. El pollo asado es excelente y no pasa el filtro; sándwich envuelto, huevo duro, fruta en cubos, chip con salsa y bastón de verdura sí pasan. La segunda: ¿aguanta esperar sin cambiar de estado? Lo que se empapa, se marchita, se derrite u oscurece entre armar y comer queda fuera, o cambia de formato — no es cuestión de seguridad, es cuestión de que esté bueno. Lo que sobrevive a los dos filtros es un menú corto, y corto es el objetivo: menos ítems significa menos recipientes, caja más holgada, menos aperturas y temperatura más estable.",
        "The first: can it be eaten standing up, with one hand? A picnic with kids has no table and nobody sits — any dish that needs a fork, knife or plate ties up both hands and becomes friction. Roast chicken is great and fails the test; a wrapped sandwich, a hard-boiled egg, cubed fruit, a chip with dip and a vegetable stick all pass. The second: can it wait without changing state? Whatever turns soggy, wilts, melts or browns between assembly and eating is out, or changes shape — this isn't a safety question, it's a question of still being good. What survives both filters is a short menu, and short is the goal, not a side effect: fewer items means fewer containers, a roomier box, fewer openings and steadier temperature."
      ),
      tabela: {
        legenda: T("O filtro na prática", "El filtro en la práctica", "The filter in practice"),
        cabecalho: [
          T("Entra", "Entra", "In"),
          T("Sai", "Sale", "Out"),
          T("Por quê", "Por qué", "Why"),
        ],
        linhas: [
          [
            T("Sanduíche embrulhado individual", "Sándwich envuelto individual", "Individually wrapped sandwich"),
            T("Sanduíche montado na hora", "Sándwich armado en el momento", "Sandwich assembled on the spot"),
            T("Montar com criança em volta não acontece", "Armar con niños alrededor no sucede", "Assembling with kids around doesn't happen"),
          ],
          [
            T("Ovo cozido sem descascar", "Huevo duro sin pelar", "Hard-boiled egg, unpeeled"),
            T("Ovo descascado", "Huevo pelado", "Peeled egg"),
            T("A casca é a embalagem", "La cáscara es el envase", "The shell is the packaging"),
          ],
          [
            T("Fruta em cubo, uva solta", "Fruta en cubos, uvas sueltas", "Cubed fruit, loose grapes"),
            T("Fruta que precisa de faca", "Fruta que necesita cuchillo", "Fruit that needs a knife"),
            T("Faca no parque é uma etapa a mais", "Un cuchillo en el parque es un paso de más", "A knife at the park is one more step"),
          ],
          [
            T("Chip grosso + molho encorpado", "Chip grueso + salsa espesa", "Thick chip + thick dip"),
            T("Molho que escorre", "Salsa que escurre", "Runny sauce"),
            T("O chip é o talher; molho ralo pinga e quebra o chip", "El chip es el cubierto; salsa rala gotea y rompe el chip", "The chip is the utensil; thin sauce drips and breaks it"),
          ],
          [
            T("Bolo seco, sem cobertura", "Bizcocho seco, sin cobertura", "Dry cake, no frosting"),
            T("Bolo com cobertura", "Bizcocho con cobertura", "Frosted cake"),
            T("Cobertura de leite condensado dentro da caixa é lambança", "Cobertura de dulce de leche dentro de la caja es un desastre", "Condensed-milk frosting inside the cooler is a mess"),
          ],
          [
            T("Palito de crudité", "Bastón de verdura", "Vegetable stick"),
            T("Salada", "Ensalada", "Salad"),
            T("Talher", "Cubierto", "Utensil"),
          ],
        ],
      },
    },
    {
      h: T("Cadeia de frio", "Cadena de frío", "Cold chain"),
      p: T(
        "Garrafas PET congeladas na véspera substituem o gelo: são gelo estrutural que não molha nada quando derrete, e depois viram bebida — quatro garrafas seguram uma caixa média numa manhã que sobe de 16 °C a 29 °C. Tudo entra já gelado: bebida em temperatura ambiente rouba frio de todo o resto, e é o erro mais fácil de evitar. A ordem de arrumação, de baixo pra cima, é garrafas congeladas no fundo, depois o pote rígido dos sanduíches deitado, depois molhos e ovos, frutas por cima; pão, bolo e chips ficam fora da caixa, porque ela esmaga e o ar dela é úmido. E abre-se pouco: tira-se o que vai ser comido agora, não o pote inteiro — o que saiu da caixa e não foi comido não volta.",
        "Botellas PET congeladas la víspera reemplazan el hielo: son hielo estructural que no moja nada al derretirse, y después se vuelven bebida — cuatro botellas sostienen una caja mediana en una mañana que sube de 16 °C a 29 °C. Todo entra ya frío: una bebida a temperatura ambiente le roba frío a todo lo demás, y es el error más fácil de evitar. El orden de acomodo, de abajo hacia arriba, es botellas congeladas en el fondo, después el recipiente rígido de los sándwiches acostado, después salsas y huevos, frutas arriba; el pan, el bizcocho y los chips quedan fuera de la caja, porque esta aplasta y su aire es húmedo. Y se abre poco: se saca lo que se va a comer ahora, no el recipiente entero — lo que salió de la caja y no se comió no vuelve.",
        "Plastic bottles frozen the night before replace ice: they're structural ice that doesn't wet anything as it melts, and afterwards they turn into a drink — four bottles hold a medium cooler through a morning that climbs from 16 °C to 29 °C. Everything goes in already cold: a drink at room temperature steals cold from everything else, and it's the easiest mistake to avoid. Packing order, bottom to top, is frozen bottles at the base, then the rigid sandwich container lying flat, then dips and eggs, fruit on top; bread, cake and chips stay outside the cooler, because it crushes them and its air is damp. And open it as little as possible: take out only what will be eaten now, not the whole container — whatever comes out and isn't eaten doesn't go back in."
      ),
    },
    {
      h: T("Sequenciamento de véspera", "Secuenciación de la víspera", "Night-before sequencing"),
      p: T(
        "A regra que organiza a noite anterior: o que é seco se faz na véspera, o que precisa de água e ganha sendo fresco se faz de manhã. Véspera: montagem de sanduíche, patês, ovos cozidos, bolo, o que precisa de processador; manhã: lavar e cortar fruta, amassar guacamole, café. Não é só divisão de trabalho — numa noite em que a rua ficou sem água, foi o que salvou o programa: a montagem dos sanduíches, o bloco mais longo, não usa uma gota. Numa saída às 6h, o bloco da manhã tem que caber em 15 a 25 minutos; passou disso, alguma coisa foi empurrada pro horário errado.",
        "La regla que organiza la noche anterior: lo seco se hace la víspera, lo que necesita agua y gana siendo fresco se hace por la mañana. Víspera: armado de sándwiches, patés, huevos duros, bizcocho, lo que necesita procesadora; mañana: lavar y cortar fruta, machacar guacamole, café. No es solo división de trabajo — en una noche en que se cortó el agua en la calle, esto fue lo que salvó el plan: el armado de los sándwiches, el bloque más largo, no usa una gota. En una salida a las 6h, el bloque de la mañana tiene que entrar en 15 a 25 minutos; si se pasó de eso, algo se empujó al horario equivocado.",
        "The rule that organizes the night before: whatever is dry gets made the night before, whatever needs water and is better fresh gets made in the morning. The night before: assembling sandwiches, spreads, hard-boiled eggs, cake, anything that needs a food processor; morning: washing and cutting fruit, mashing guacamole, coffee. This isn't just division of labor — on a night when the street's water was cut off, this is what saved the plan: assembling the sandwiches, the longest single block, doesn't use a drop. For a 6am departure, the morning block has to fit into 15 to 25 minutes; anything longer means something got pushed into the wrong slot."
      ),
    },
    {
      h: T("Reaproveitamento de água", "Reaprovechar el agua", "Reusing water"),
      p: T(
        "Quando falta água, a água em que os ovos ferveram é estéril e serve para lavar mão, faca e tábua entre etapas — a água do choque, não: ela lavou casca, que é onde mora salmonela, e não encosta em nada que vá cru pra boca. Uma bacia única serve para todos os vegetais, do mais limpo pro mais sujo — folha, erva, fruta de casca fina, fruta de casca grossa, raiz — e cerca de 2,5 litros cobrem o dia. Papel toalha economiza água: seca folha, seca ralado, limpa tábua entre ingredientes.",
        "Cuando falta agua, el agua en que hirvieron los huevos es estéril y sirve para lavar mano, cuchillo y tabla entre etapas — la del choque térmico, no: lavó la cáscara, que es donde vive la salmonela, y no toca nada que vaya crudo a la boca. Una sola palangana sirve para todas las verduras, de la más limpia a la más sucia — hoja, hierba, fruta de cáscara fina, fruta de cáscara gruesa, raíz — y unos 2,5 litros cubren el día. El papel de cocina ahorra agua: seca hojas, seca lo rallado, limpia la tabla entre ingredientes.",
        "When water runs short, the water the eggs boiled in is sterile and works for washing hands, knives and cutting boards between steps — the ice-bath water doesn't: it rinsed the shells, where salmonella lives, and shouldn't touch anything that goes raw into a mouth. One basin serves all the vegetables, from cleanest to dirtiest — leaves, herbs, thin-skinned fruit, thick-skinned fruit, roots — and about 2.5 liters cover the whole day. Paper towel saves water: it dries leaves, dries grated vegetables, wipes the board between ingredients."
      ),
    },
  ],
  notas: [
    T(
      "Cardápio se poda, não se acumula: desconfie do cardápio que só cresce. Este começou com frango assado, farofa fria, molho alemão, torta salgada e crudité, e chegou no parque com sanduíche, ovo, dois molhos com chips, fruta e bolo — cada corte teve um motivo (talher, água, forno, sono).",
      "El menú se poda, no se acumula: desconfía del menú que solo crece. Este empezó con pollo asado, farofa fría, molho alemão, tarta salada y crudité, y llegó al parque con sándwich, huevo, dos salsas con chips, fruta y bizcocho — cada recorte tuvo un motivo (cubierto, agua, horno, sueño).",
      "A menu gets pruned, not piled on: be wary of a menu that only grows. This one started with roast chicken, cold farofa, molho alemão, a savory pie and crudités, and arrived at the park with sandwiches, eggs, two dips with chips, fruit and cake — every cut had a reason (utensil, water, oven, sleep)."
    ),
    T(
      "A torta de liquidificador é a armadilha clássica: parece rápida, mas o recheio pede refogar, escorrer e esfriar, e a peça pede mais 40 minutos esfriando antes de cortar sem esfarelar — é uma hora e meia disfarçada de vinte minutos.",
      "La tarta de licuadora es la trampa clásica: parece rápida, pero el relleno pide sofreír, escurrir y enfriar, y la pieza pide otros 40 minutos enfriándose antes de cortarse sin desmoronarse — es una hora y media disfrazada de veinte minutos.",
      "The blender pie is the classic trap: it looks quick, but the filling needs sautéing, draining and cooling, and the whole pie needs another 40 minutes cooling before it slices without crumbling — it's ninety minutes disguised as twenty."
    ),
    T(
      "Forno intermitente não entra em rota crítica: se o equipamento é o que pode falhar, ele não pode estar no caminho do único item que o cardápio depende.",
      "Un horno intermitente no entra en la ruta crítica: si el equipo es lo que puede fallar, no puede estar en el camino del único ítem del que depende el menú.",
      "A flaky oven doesn't belong on the critical path: if the equipment is what might fail, it can't be the thing the whole menu depends on."
    ),
    T(
      "Sono é ingrediente: véspera que termina depois da meia-noite com despertador às 5h15 cobra na estrada. Cortar um item vale mais que ganhar quinze minutos de manhã — e atraso de manhã é barato, sair 6h50 em vez de 6h não muda nada num programa de parque.",
      "El sueño es un ingrediente: una víspera que termina después de medianoche con despertador a las 5h15 pasa factura en el camino. Cortar un ítem vale más que ganar quince minutos por la mañana — y el atraso matutino es barato: salir a las 6h50 en vez de las 6h no cambia nada en un plan de parque.",
      "Sleep is an ingredient: a night that ends after midnight with a 5:15am alarm charges interest on the road. Cutting one item is worth more than gaining fifteen morning minutes — and a late start is cheap: leaving at 6:50 instead of 6:00 changes nothing about a morning at the park."
    ),
    T(
      "Calibrada numa manhã real: Parque da Criança, Jundiaí, 6 adultos e 6 crianças, saída de São Paulo às 6h.",
      "Calibrada en una mañana real: Parque da Criança, Jundiaí, 6 adultos y 6 niños, salida de São Paulo a las 6h.",
      "Calibrated on a real morning: Parque da Criança, Jundiaí, 6 adults and 6 kids, leaving São Paulo at 6am."
    ),
  ],
});

/* ---- Sem fogo: os dois molhos de tigela ---- */

RECEITAS.push(
  {
    id: "pate-de-atum-duas-consistencias",
    capitulo: "semfogo",
    titulo: T("Patê de atum, duas consistências", "Paté de atún, dos consistencias", "Tuna spread, two consistencies"),
    kicker: T("SEM FOGO · UMA TIGELA, DOIS USOS · SANDUÍCHE E CHIP", "SIN FUEGO · UN BOL, DOS USOS · SÁNDWICH Y CHIP", "NO HEAT · ONE BOWL, TWO USES · SANDWICH AND CHIP"),
    subtitulo: T(
      "O recheio firme do sanduíche e o molho solto da tigela nascem da mesma mistura e se separam no fim.",
      "El relleno firme del sándwich y la salsa suelta del bol nacen de la misma mezcla y se separan al final.",
      "The sandwich's firm filling and the bowl's loose dip start as the same mixture and split apart at the end."
    ),
    principio: T(
      "O patê de sanduíche precisa ser firme para não escorrer no pão; o de tigela precisa ser mais frouxo para não quebrar o chip ao raspar. A diferença entre os dois é só o fim da receita: mais maionese, mais limão e cheiro verde na porção que vai pra tigela — porque essa versão é vista de perto e comida pura, enquanto a do sanduíche fica escondida.",
      "El paté de sándwich necesita ser firme para no escurrir en el pan; el de bol necesita ser más suelto para no romper el chip al raspar. La diferencia entre los dos es solo el final de la receta: más mayonesa, más limón y perejil-cebollino en la porción que va al bol — porque esa versión se ve de cerca y se come sola, mientras la del sándwich queda escondida.",
      "The sandwich spread needs to be firm so it doesn't run into the bread; the bowl dip needs to be looser so it doesn't crack the chip when scooped. The only difference between the two is the last step: more mayonnaise, more lime and herbs in the portion that goes into the bowl — because that version is seen up close and eaten on its own, while the sandwich version stays hidden."
    ),
    porcoes: 1, porcoesOpcoes: [1, 2], lote: true, ativo: 15, total: 15,
    rende: T("~600 g de tigela + 250–350 g para sanduíche", "~600 g de bol + 250–350 g para sándwich", "~600 g for the bowl + 250–350 g for sandwiches"),
    utensilio: T("Peneira e tigela", "Colador y bol", "Sieve and bowl"),
    faixa: T("PROVE ANTES DE PENSAR EM SAL — ATUM E CREAM CHEESE JÁ TRAZEM SÓDIO", "PROBÁ ANTES DE PENSAR EN SAL — EL ATÚN Y EL QUESO CREMA YA TRAEN SODIO", "TASTE BEFORE YOU THINK ABOUT SALT — TUNA AND CREAM CHEESE ALREADY BRING SODIUM"),
    ingredientes: [
      { q: 4, u: "un", nome: T("latas de atum sólido em óleo", "latas de atún sólido en aceite", "cans of solid tuna in oil"), obs: T("muito bem escorrido, ~480 g drenados", "muy bien escurrido, ~480 g escurridos", "very well drained, ~480 g drained") },
      { q: 300, u: "g", nome: T("cream cheese ou requeijão espesso", "queso crema o requesón espeso", "cream cheese or thick spreadable cheese") },
      { q: 100, u: "g", nome: T("maionese", "mayonesa", "mayonnaise"), obs: T("+1 col. sopa para a versão de tigela", "+1 cda para la versión de bol", "+1 tbsp for the bowl version") },
      { q: 80, u: "g", nome: T("cebola roxa fatiada fina", "cebolla morada en fetas finas", "thinly sliced red onion") },
      { q: 1, u: "un", nome: T("limão", "limón", "lime"), obs: T("suco, + um fio no fim na versão de tigela", "zumo, + un chorrito al final en la versión de bol", "juice, + a splash at the end for the bowl version") },
      { q: 2, u: "cs", nome: T("cheiro verde picado", "perejil y cebollino picados", "chopped parsley and spring onion"), obs: T("só na versão de tigela", "solo en la versión de bol", "bowl version only") },
      { q: null, u: "", nome: T("pimenta-do-reino", "pimienta negra", "black pepper"), escala: false },
      { q: null, u: "", nome: T("sal", "sal", "salt"), obs: T("só depois de provar", "solo después de probar", "only after tasting"), escala: false },
    ],
    grade: [
      { col: 1, de: 0, ate: 0, titulo: T("escorrer o atum", "escurrir el atún", "drain the tuna"), detalhe: T("na peneira, apertando com a colher", "en el colador, apretando con la cuchara", "in the sieve, pressing with the spoon") },
      { col: 2, de: 3, ate: 3, titulo: T("cebola em água gelada", "cebolla en agua helada", "onion in ice water"), detalhe: T("5 min · tira o ardido", "5 min · quita el picante crudo", "5 min · takes off the raw bite") },
      { col: 3, de: 0, ate: 4, titulo: T("misturar a base", "mezclar la base", "mix the base"), detalhe: T("atum, cream cheese, maionese, cebola, limão", "atún, queso crema, mayonesa, cebolla, limón", "tuna, cream cheese, mayonnaise, onion, lime") },
      { col: 4, de: 0, ate: 2, titulo: T("separar o do sanduíche", "separar el de sándwich", "set aside the sandwich portion"), detalhe: T("250–350 g · fica firme", "250–350 g · queda firme", "250–350 g · stays firm") },
      { col: 5, de: 2, ate: 6, titulo: T("afrouxar o de tigela", "aflojar el de bol", "loosen the bowl portion"), detalhe: T("+maionese, +limão, cheiro verde", "+mayonesa, +limón, perejil y cebollino", "+mayonnaise, +lime, herbs") },
    ],
    modo: [
      { t: T(
        "Escorra o atum na peneira, apertando com as costas da colher — sai muito mais líquido do que parece, e é ele que solta o patê depois.",
        "Escurrí el atún en el colador, apretando con el dorso de la cuchara — sale mucho más líquido de lo que parece, y es el que afloja el paté después.",
        "Drain the tuna in a sieve, pressing with the back of the spoon — far more liquid comes out than you'd expect, and that liquid is what would loosen the spread later.") },
      { t: T(
        "Fatie a cebola roxa bem fina (disco de fatiar do processador, não a lâmina em S), deixe 5 minutos em água gelada e escorra bem — tira o ardido cru.",
        "Cortá la cebolla morada bien fina (disco de fetear del procesador, no la cuchilla en S), dejala 5 minutos en agua helada y escurrí bien — quita el picante crudo.",
        "Slice the red onion very thin (the processor's slicing disc, not the S-blade), leave it in ice water for 5 minutes and drain well — it takes off the raw bite."), timer: 300 },
      { t: T(
        "Misture atum, cream cheese, 100 g de maionese, a cebola, o suco de limão e pimenta. Prove antes de pensar em sal — atum de lata e cream cheese já trazem sódio.",
        "Mezclá atún, queso crema, 100 g de mayonesa, la cebolla, el zumo de limón y pimienta. Probá antes de pensar en sal — el atún en lata y el queso crema ya traen sodio.",
        "Mix the tuna, cream cheese, 100 g of mayonnaise, the onion, lime juice and pepper. Taste before you think about salt — canned tuna and cream cheese already bring sodium.") },
      { t: T(
        "Separe a porção do sanduíche, 250 a 350 g conforme a receita, num pote — essa fica como está, firme.",
        "Separá la porción de sándwich, 250 a 350 g según la receta, en un recipiente — esa queda tal cual, firme.",
        "Set aside the sandwich portion, 250 to 350 g depending on the recipe, in a container — that one stays as is, firm.") },
      { t: T(
        "No restante, o de tigela: mais uma colher de maionese, um fio de limão e o cheiro verde. Mexa até cair da colher devagar.",
        "En el resto, el de bol: una cucharada más de mayonesa, un chorrito de limón y el perejil y cebollino. Mezclá hasta que caiga de la cuchara despacio.",
        "In the rest, the bowl version: one more spoonful of mayonnaise, a splash of lime and the herbs. Mix until it falls slowly off the spoon.") },
      { t: T(
        "Filme encostado na superfície dos dois potes, sem bolha, e geladeira.",
        "Film pegado a la superficie de los dos recipientes, sin burbuja, y heladera.",
        "Plastic wrap pressed onto the surface of both containers, no air bubble, and into the fridge.") },
    ],
    notas: [
      T("Molho para chip é definido por viscosidade, não por sabor: o ponto certo é cair da colher devagar, sem escorrer.",
        "La salsa para chip se define por viscosidad, no por sabor: el punto correcto es caer de la cuchara despacio, sin escurrir.",
        "A chip dip is defined by viscosity, not flavor: the right point is falling slowly off the spoon, without running."),
      T("O ar é o inimigo, não o tempo: filme encostado direto na superfície, sem bolha, resolve o ressecamento tanto quanto a validade.",
        "El aire es el enemigo, no el tiempo: film pegado directo a la superficie, sin burbuja, resuelve el resecado tanto como la conservación.",
        "Air is the enemy, not time: plastic wrap pressed flat against the surface, with no air bubble, solves drying-out as much as shelf life."),
      T("Guardado com filme encostado, o de tigela dura na geladeira até o dia seguinte sem problema — mas é bom não passar de 2 dias com o de sanduíche, por causa da maionese e do ovo do cream cheese comercial.",
        "Guardado con film pegado, el de bol dura en la heladera hasta el día siguiente sin problema — pero conviene no pasar los 2 días con el de sándwich, por la mayonesa y el huevo del queso crema comercial.",
        "Stored with the wrap pressed on, the bowl version keeps in the fridge until the next day without trouble — but the sandwich portion is best kept under 2 days, because of the mayonnaise and the egg in commercial cream cheese."),
      T("Molho de churrasco não vira molho de chip: testado e descartado. O molho alemão, por exemplo, é fino de propósito, para cortar carne gorda — engrossá-lo o bastante viraria outra receita.",
        "Una salsa de asado no se convierte en salsa de chip: probado y descartado. El molho alemão, por ejemplo, es fino a propósito, para cortar la grasa de la carne — espesarlo lo suficiente sería otra receta.",
        "A barbecue sauce doesn't become a chip dip: tried and dropped. Molho alemão, for instance, is thin on purpose, to cut through fatty meat — thickening it enough would make it a different sauce."),
    ],
  },

  {
    id: "guacamole-piquenique",
    capitulo: "semfogo",
    titulo: T("Guacamole", "Guacamole", "Guacamole"),
    kicker: T("SEM FOGO · FEITO NA MANHÃ DA SAÍDA · CINCO MINUTOS", "SIN FUEGO · SE HACE LA MAÑANA DE LA SALIDA · CINCO MINUTOS", "NO HEAT · MADE THE MORNING YOU LEAVE · FIVE MINUTES"),
    subtitulo: T(
      "Amassado com garfo, deixando pedaço — a única coisa do cardápio que ganha de verdade sendo feita na hora.",
      "Machacado con tenedor, dejando trozos — lo único del menú que realmente gana haciéndose en el momento.",
      "Fork-mashed, kept chunky — the one thing on the menu that genuinely benefits from being made at the last minute."
    ),
    porcoes: 1, porcoesOpcoes: [1, 2], lote: true, ativo: 5, total: 5,
    rende: T("~600 g", "~600 g", "~600 g"),
    utensilio: T("Garfo e tigela", "Tenedor y bol", "Fork and bowl"),
    faixa: T("LIMÃO, CEBOLA E FILME SEM BOLHA — NÃO O TEMPO — CONTROLAM O ESCURECIMENTO", "LIMÓN, CEBOLLA Y FILM SIN BURBUJA — NO EL TIEMPO — CONTROLAN EL OSCURECIMIENTO", "LIME, ONION AND BUBBLE-FREE WRAP — NOT TIMING — CONTROL BROWNING"),
    ingredientes: [
      { q: 600, u: "g", nome: T("polpa de abacate", "pulpa de palta", "avocado flesh"), obs: T("1 abacate brasileiro médio, ou 3 avocados", "1 palta grande, o 3 paltas hass", "1 large avocado, or 3 hass avocados") },
      { q: 1.5, u: "un", nome: T("limão", "limón", "lime"), obs: T("só o suco", "solo el zumo", "juice only") },
      { q: 30, u: "g", nome: T("cebola roxa fatiada fina", "cebolla morada en fetas finas", "thinly sliced red onion"), obs: T("fatiada na véspera, junto com a do patê", "cortada la víspera, junto con la del paté", "sliced the night before, along with the onion for the spread") },
      { q: 6, u: "g", nome: T("sal", "sal", "salt"), obs: T("1% do peso da polpa", "1% del peso de la pulpa", "1% of the flesh's weight") },
      { q: null, u: "", nome: T("pimenta-do-reino", "pimienta negra", "black pepper"), escala: false },
      { q: null, u: "", nome: T("coentro", "cilantro", "cilantro"), obs: T("só se todo mundo gostar", "solo si a todos les gusta", "only if everyone likes it"), escala: false },
    ],
    grade: [
      { col: 1, de: 0, ate: 0, titulo: T("amassar com garfo", "machacar con tenedor", "mash with a fork"), detalhe: T("deixando pedaço, sem processador", "dejando trozos, sin procesadora", "kept chunky, no food processor") },
      { col: 2, de: 1, ate: 5, titulo: T("temperar", "condimentar", "season"), detalhe: T("limão, cebola, sal, pimenta", "limón, cebolla, sal, pimienta", "lime, onion, salt, pepper") },
      { col: 3, de: 0, ate: 0, titulo: T("alisar e guardar", "alisar y guardar", "smooth and store"), detalhe: T("filme sem bolha, no pote de servir", "film sin burbuja, en el recipiente de servir", "bubble-free wrap, in the serving bowl") },
    ],
    modo: [
      { t: T(
        "Amasse o abacate com garfo, deixando pedaço — processador em três pulsos vira purê, e isso é outra coisa.",
        "Machacá la palta con tenedor, dejando trozos — la procesadora en tres pulsos la vuelve puré, y eso es otra cosa.",
        "Mash the avocado with a fork, keeping it chunky — three pulses in a food processor turns it to purée, and that's a different thing.") },
      { t: T(
        "Junte o limão, a cebola, o sal e a pimenta. O limão não é só sabor: o ácido retarda a enzima que oxida.",
        "Sumá el limón, la cebolla, la sal y la pimienta. El limón no es solo sabor: el ácido retrasa la enzima que oxida.",
        "Add the lime, onion, salt and pepper. The lime isn't just for flavor: the acid slows the enzyme that causes browning.") },
      { t: T(
        "Alise a superfície com as costas da colher, filme encostado sem bolha de ar, tampa por cima.",
        "Alisá la superficie con el dorso de la cuchara, film pegado sin burbuja de aire, tapa encima.",
        "Smooth the surface with the back of the spoon, plastic wrap pressed on with no air bubble, lid on top.") },
      { t: T(
        "Leve já no pote em que vai servir, para abrir uma vez só.",
        "Llevalo ya en el recipiente en que vas a servir, para abrirlo una sola vez.",
        "Take it in the bowl you'll serve it from, so it only gets opened once.") },
    ],
    notas: [
      T("Feito na manhã da saída, não na véspera — é a única coisa do cardápio que ganha de verdade sendo feita na hora, e custa cinco minutos.",
        "Se hace la mañana de la salida, no la víspera — es lo único del menú que realmente gana haciéndose en el momento, y cuesta cinco minutos.",
        "Made the morning you leave, not the night before — it's the one thing on the menu that genuinely benefits from last-minute prep, and it costs five minutes."),
      T("O abacate precisa estar maduro no dia da compra, cedendo de leve perto do cabinho — abacate duro não amadurece a tempo de um piquenique de amanhã.",
        "La palta necesita estar madura el día de la compra, cediendo apenas cerca del cabito — una palta dura no madura a tiempo para un picnic de mañana.",
        "The avocado needs to already be ripe on the day you buy it, giving slightly near the stem — a hard avocado won't ripen in time for tomorrow's picnic."),
      T("De véspera funciona, na hora é melhor: com limão e filme encostado atravessa a noite sem problema, o escurecimento é só de superfície — mas se a alternativa custa cinco minutos de manhã, faça de manhã.",
        "De víspera funciona, en el momento es mejor: con limón y film pegado atraviesa la noche sin problema, el oscurecimiento es solo de superficie — pero si la alternativa cuesta cinco minutos por la mañana, hacelo por la mañana.",
        "Made ahead works, made fresh is better: with lime and the wrap pressed on it survives the night fine, the browning is only surface-deep — but if the alternative costs five morning minutes, spend them."),
      T("Tomate fica de fora: solta água e o molho fica ralo — mesma regra da farofa fria.",
        "El tomate queda afuera: suelta agua y la salsa queda rala — misma regla de la farofa fría.",
        "Tomato stays out: it releases water and thins the dip — same rule as the cold farofa."),
      T("Se houver um fio escuro no topo na hora de servir, é meio milímetro de oxidação de superfície — raspe com a colher e mexa antes de servir.",
        "Si aparece una línea oscura arriba a la hora de servir, es medio milímetro de oxidación superficial — raspá con la cuchara y mezclá antes de servir.",
        "If there's a dark line on top at serving time, it's half a millimeter of surface oxidation — scrape it off with the spoon and stir before serving."),
    ],
  }
);

/* ---- Sanduíches ---- */

RECEITAS.push(
  {
    id: "ciabatta-caprese-rucula",
    capitulo: "sanduiches",
    titulo: T("Ciabatta caprese com rúcula", "Ciabatta caprese con rúcula", "Caprese ciabatta with arugula"),
    kicker: T("SANDUÍCHE · COME NA HORA · ~15 MIN DO COMEÇO AO FIM", "SÁNDWICH · SE COME EN EL MOMENTO · ~15 MIN DE PRINCIPIO A FIN", "SANDWICH · EAT IT RIGHT AWAY · ~15 MIN START TO FINISH"),
    subtitulo: T(
      "Tomate cereja, búfala e manjericão numa ciabatta tostada — uma receita de gerenciar água, não de montar.",
      "Tomate cherry, búfala y albahaca en una ciabatta tostada — una receta de gestionar agua, no de armar.",
      "Cherry tomato, buffalo mozzarella and basil on toasted ciabatta — a recipe about managing water, not about assembly."
    ),
    principio: T(
      "Tomate cereja e búfala são os dois ingredientes mais aguados da geladeira, e o miolo aberto da ciabatta é o pior lugar para os dois. O método é uma sequência de barreiras: tomate escorrido na peneira antes de entrar, pão tostado em azeite para selar a superfície, e rúcula como colchão entre o miolo e o recheio.",
      "Tomate cherry y búfala son los dos ingredientes más acuosos de la heladera, y la miga abierta de la ciabatta es el peor lugar para los dos. El método es una secuencia de barreras: tomate escurrido en el colador antes de entrar, pan tostado en aceite para sellar la superficie, y rúcula como colchón entre la miga y el relleno.",
      "Cherry tomatoes and buffalo mozzarella are the two wettest things in the fridge, and ciabatta's open crumb is the worst place to put either. The method is a sequence of barriers: tomato drained in a sieve before it goes in, bread toasted in oil to seal the surface, and arugula as a cushion between the crumb and the filling."
    ),
    porcoes: 2, porcoesOpcoes: [2, 4], ativo: 15, total: 15,
    rende: T("2 sanduíches", "2 sándwiches", "2 sandwiches"),
    utensilio: T("Frigideira ou chapa", "Sartén o plancha", "Skillet or griddle"),
    faixa: T("BALSÂMICO NO TOMATE, NUNCA NO SANDUÍCHE MONTADO", "BALSÁMICO EN EL TOMATE, NUNCA EN EL SÁNDWICH ARMADO", "BALSAMIC ON THE TOMATO, NEVER ON THE ASSEMBLED SANDWICH"),
    ingredientes: [
      { q: 2, u: "un", nome: T("ciabattas", "ciabattas", "ciabatta rolls"), obs: T("ou 1 grande, cortada em duas", "o 1 grande, cortada al medio", "or 1 large one, cut in half") },
      { q: 250, u: "g", nome: T("tomate cereja", "tomate cherry", "cherry tomatoes") },
      { q: 200, u: "g", nome: T("mussarela de búfala", "mozzarella de búfala", "buffalo mozzarella") },
      { q: 60, u: "g", nome: T("rúcula", "rúcula", "arugula") },
      { q: null, u: "", nome: T("manjericão fresco", "albahaca fresca", "fresh basil"), obs: T("generosamente, em folhas inteiras", "generosa, en hojas enteras", "generously, whole leaves"), escala: false },
      { q: 4, u: "cs", nome: T("azeite de oliva", "aceite de oliva", "olive oil") },
      { q: 1, u: "cs", nome: T("vinagre balsâmico", "vinagre balsámico", "balsamic vinegar") },
      { q: 0.5, u: "cc", nome: T("sal", "sal", "salt") },
      { q: null, u: "", nome: T("pimenta-do-reino", "pimienta negra", "black pepper"), obs: T("moída na hora", "molida en el momento", "freshly ground"), escala: false },
    ],
    grade: [
      { col: 1, de: 1, ate: 1, titulo: T("tomate na peneira", "tomate en el colador", "tomato in the sieve"), detalhe: T("sal + balsâmico, 10 min escorrendo", "sal + balsámico, 10 min escurriendo", "salt + balsamic, 10 min draining") },
      { col: 2, de: 2, ate: 2, titulo: T("búfala secando", "búfala secándose", "mozzarella drying"), detalhe: T("rasgada à mão, no papel-toalha", "desgarrada a mano, sobre papel de cocina", "torn by hand, on paper towel") },
      { col: 3, de: 0, ate: 0, titulo: T("pão tostado", "pan tostado", "toasted bread"), detalhe: T("azeite, miolo para baixo, 2–3 min", "aceite, miga hacia abajo, 2–3 min", "oil, crumb side down, 2–3 min") },
      { col: 4, de: 0, ate: 4, titulo: T("montagem", "armado", "assembly"), detalhe: T("rúcula → tomate → búfala → manjericão", "rúcula → tomate → búfala → albahaca", "arugula → tomato → mozzarella → basil") },
      { col: 5, de: 5, ate: 8, titulo: T("finaliza e corta", "termina y corta", "finish and cut"), detalhe: T("azeite, pimenta, diagonal", "aceite, pimienta, diagonal", "oil, pepper, diagonal cut") },
    ],
    modo: [
      { t: T(
        "Corte os tomates cereja ao meio, tempere com o sal e o balsâmico e deixe numa peneira sobre uma tigela, 10 minutos — o sal puxa a água, o balsâmico tempera e o excesso vai embora com o líquido.",
        "Cortá los tomates cherry por la mitad, condimentá con la sal y el balsámico y dejalos en un colador sobre un bol, 10 minutos — la sal saca el agua, el balsámico condimenta y el exceso se va con el líquido.",
        "Halve the cherry tomatoes, season with the salt and balsamic and leave them in a sieve over a bowl for 10 minutes — the salt draws out the water, the balsamic seasons them, and the excess leaves with the liquid."), timer: 600 },
      { t: T(
        "Rasgue a búfala com a mão em pedaços grandes e espalhe sobre papel-toalha — rasgar dá mais superfície para agarrar o azeite que fatia lisa.",
        "Desgarrá la búfala con la mano en trozos grandes y extendela sobre papel de cocina — desgarrarla da más superficie para agarrar el aceite que una feta lisa.",
        "Tear the mozzarella by hand into large pieces and spread them on paper towel — tearing gives more surface to hold the oil than a clean slice would.") },
      { t: T(
        "Abra as ciabattas, pincele metade do azeite nas faces internas e toste com o miolo para baixo em frigideira ou chapa até dourar, 2 a 3 minutos.",
        "Abrí las ciabattas, pincelá la mitad del aceite en las caras internas y tostalas con la miga hacia abajo en sartén o plancha hasta dorar, 2 a 3 minutos.",
        "Split the ciabattas open, brush half the oil on the cut faces and toast crumb-side down in a skillet or on a griddle until golden, 2 to 3 minutes."), timer: 150 },
      { t: T(
        "Monte de baixo para cima: rúcula, tomate escorrido, búfala, manjericão em folhas inteiras — picado oxida e escurece em minutos.",
        "Armá de abajo hacia arriba: rúcula, tomate escurrido, búfala, albahaca en hojas enteras — picada se oxida y oscurece en minutos.",
        "Layer from the bottom up: arugula, drained tomato, mozzarella, whole basil leaves — chopped, it oxidizes and darkens in minutes.") },
      { t: T(
        "Finalize com o azeite restante, pimenta-do-reino e sal só se precisar. Feche, aperte de leve com a palma e corte na diagonal.",
        "Terminá con el aceite restante, pimienta negra y sal solo si hace falta. Cerrá, presioná suave con la palma y cortá en diagonal.",
        "Finish with the remaining oil, black pepper and salt only if it needs it. Close it up, press lightly with your palm and cut on the diagonal.") },
    ],
    notas: [
      T("Balsâmico entra no tomate, na peneira — nunca regado no sanduíche montado, onde encharca o miolo e escorre pela mão.",
        "El balsámico entra en el tomate, en el colador — nunca rociado sobre el sándwich armado, donde empapa la miga y escurre por la mano.",
        "Balsamic goes on the tomato, in the sieve — never drizzled over the assembled sandwich, where it soaks the crumb and runs down your hand."),
      T("A búfala não vai ao fogo: derrete em fios aguados e perde o que tem de bom. Se a vontade for de risone com os mesmos ingredientes, ela entra crua e rasgada, fora do fogo, só amolecendo no calor residual.",
        "La búfala no va al fuego: se derrite en hilos aguados y pierde lo que tiene de bueno. Si las ganas son de un risoni con los mismos ingredientes, entra cruda y desgarrada, fuera del fuego, ablandándose solo con el calor residual.",
        "Buffalo mozzarella never sees heat: it melts into watery strings and loses what makes it good. If the craving is for an orzo with the same ingredients, it goes in raw and torn, off the heat, softening only in residual warmth."),
      T("Ciabatta é o pão certo pela casca: ela segura o miolo enquanto o recheio comprime. Pão de miolo fofo desmonta ao apertar.",
        "La ciabatta es el pan correcto por la corteza: sostiene la miga mientras el relleno comprime. Un pan de miga blanda se desarma al apretar.",
        "Ciabatta is the right bread for its crust: it holds the crumb together as the filling compresses. A soft-crumbed loaf falls apart when pressed."),
      T("Rúcula é barreira e contraponto: o amargor equilibra a doçura do tomate e a gordura láctea da búfala, que juntos ficam meio monótonos.",
        "La rúcula es barrera y contrapunto: su amargor equilibra el dulzor del tomate y la grasa láctea de la búfala, que juntos quedan medio monótonos.",
        "Arugula is barrier and counterpoint: its bitterness balances the tomato's sweetness and the mozzarella's milk fat, which together turn a bit flat."),
      T("É o oposto do sanduíche natural do capítulo: aqui não existe versão que atravessa a noite. Para levar, os componentes vão separados e a montagem acontece no destino.",
        "Es lo opuesto del sándwich natural del capítulo: acá no existe una versión que atraviese la noche. Para llevar, los componentes van separados y el armado sucede en el destino.",
        "It's the opposite of the picnic sandwich in this chapter: there is no version of this one that survives overnight. To travel, the components go separately and assembly happens on arrival."),
    ],
  },

  {
    id: "sanduiche-natural-piquenique",
    capitulo: "sanduiches",
    titulo: T("Sanduíche natural para piquenique", "Sándwich natural para picnic", "Picnic tea sandwiches"),
    kicker: T("SANDUÍCHE · MONTA NA VÉSPERA · ATRAVESSA A NOITE", "SÁNDWICH · SE ARMA LA VÍSPERA · AGUANTA TODA LA NOCHE", "SANDWICH · ASSEMBLE THE NIGHT BEFORE · HOLDS OVERNIGHT"),
    subtitulo: T(
      "Vinte sanduíches de pão de forma sem casca, embrulhados um a um, feitos para atravessar a noite na geladeira e uma manhã de caixa térmica sem empapar.",
      "Veinte sándwiches de pan de molde sin corteza, envueltos uno a uno, hechos para atravesar la noche en la heladera y una mañana de caja térmica sin empaparse.",
      "Twenty crustless sandwiches, wrapped individually, built to survive a night in the fridge and a morning in a cool box without going soggy."
    ),
    principio: T(
      "O sanduíche natural de padaria fica aguado por um motivo só: bota tudo dentro. Esta versão é definida por duas decisões — cream cheese até a borda das duas fatias, como barreira de gordura contra a água do recheio, e uma lista do que não entra: tomate nunca, alface só à parte, cenoura sempre no ralo grosso, que solta um terço da água do ralo fino.",
      "El sándwich natural de panadería queda aguado por un solo motivo: le meten todo adentro. Esta versión se define por dos decisiones — queso crema hasta el borde de las dos rebanadas, como barrera de grasa contra el agua del relleno, y una lista de lo que no entra: tomate nunca, lechuga solo aparte, zanahoria siempre en el rallador grueso, que suelta un tercio del agua del rallador fino.",
      "The bakery-counter version turns soggy for one reason: it puts everything inside. This one is defined by two decisions — cream cheese to the edge on both slices, as a fat barrier against the filling's water, and a list of what stays out: tomato, never; lettuce only on the side; carrot always on the coarse grater, which releases a third of the water the fine one does."
    ),
    porcoes: 20, porcoesOpcoes: [10, 20, 40], ativo: 35, total: 755,
    rende: T("20 sanduíches inteiros / 40 metades — 6 adultos e 6 crianças", "20 sándwiches enteros / 40 mitades — 6 adultos y 6 niños", "20 whole sandwiches / 40 halves — 6 adults and 6 kids"),
    utensilio: T("Bancada e pote hermético", "Mesada y recipiente hermético", "Counter space and an airtight container"),
    faixa: T("CREAM CHEESE ATÉ A BORDA — É A BARREIRA, NÃO SÓ RECHEIO", "QUESO CREMA HASTA EL BORDE — ES LA BARRERA, NO SOLO RELLENO", "CREAM CHEESE TO THE EDGE — IT'S THE BARRIER, NOT JUST FILLING"),
    ingredientes: [
      { q: 40, u: "un", nome: T("fatias de pão de forma sem casca", "fetas de pan de molde sin corteza", "slices of crustless sandwich bread"), obs: T("2 pacotes", "2 paquetes", "2 loaves") },
      { q: 350, u: "g", nome: T("cream cheese ou requeijão espesso", "queso crema o requesón espeso", "cream cheese or thick spreadable cheese"), obs: T("o de pote firme; o cremoso de copo escorre", "el de pote firme; el cremoso de vasito se escurre", "the firm tub kind; the runny cup kind will leak") },
      { q: 350, u: "g", nome: T("patê de atum firme", "paté de atún firme", "firm tuna spread"), obs: T("ver receita própria", "ver receta propia", "see the recipe for it") },
      { q: 300, u: "g", nome: T("queijo branco ou muçarela fatiado", "queso blanco o mozzarella en fetas", "sliced white cheese or mozzarella"), obs: T("24 fatias", "24 fetas", "24 slices") },
      { q: 250, u: "g", nome: T("cenoura no ralo grosso", "zanahoria en rallador grueso", "coarsely grated carrot"), obs: T("2 cenouras médias, bem secas", "2 zanahorias medianas, bien secas", "2 medium carrots, well dried") },
      { q: null, u: "", nome: T("pimenta-do-reino", "pimienta negra", "black pepper"), escala: false },
      { q: null, u: "", nome: T("orégano", "orégano", "oregano"), escala: false },
      { q: null, u: "", nome: T("raspa de limão", "ralladura de limón", "lime zest"), obs: T("raspa de ½ limão", "ralladura de ½ limón", "zest of ½ lime"), escala: false },
    ],
    grade: [
      { col: 1, de: 5, ate: 7, titulo: T("temperar o cream cheese", "condimentar el queso crema", "season the cream cheese"), detalhe: T("pimenta, orégano, raspa de limão", "pimienta, orégano, ralladura de limón", "pepper, oregano, lime zest") },
      { col: 2, de: 0, ate: 1, titulo: T("cream cheese nas 40 fatias", "queso crema en las 40 fetas", "cream cheese on all 40 slices"), detalhe: T("camada fina até a borda", "capa fina hasta el borde", "thin layer, edge to edge") },
      { col: 3, de: 0, ate: 4, titulo: T("preencher as 20 bases", "rellenar las 20 bases", "fill the 20 bases"), detalhe: T("atum ou queijo + cenoura", "atún o queso + zanahoria", "tuna, or cheese + carrot") },
      { col: 4, de: 0, ate: 0, titulo: T("fechar, cortar, embrulhar", "cerrar, cortar, envolver", "close, cut, wrap"), detalhe: T("diagonal, um movimento só", "diagonal, un solo movimiento", "diagonal, one motion") },
      { col: 5, de: 0, ate: 0, titulo: T("pote e geladeira", "recipiente y heladera", "container and fridge"), detalhe: T("em pé, até a manhã", "de pie, hasta la mañana", "standing up, until morning") },
    ],
    modo: [
      { t: T(
        "Prepare a bancada em duas fileiras de 20 fatias — a de cima é tampa, a de baixo é base — e deixe por perto faca de manteiga, faca de serra, filme e um pote rígido.",
        "Preparí la mesada en dos filas de 20 fetas — la de arriba es tapa, la de abajo es base — y dejá cerca cuchillo de manteca, cuchillo de sierra, film y un recipiente rígido.",
        "Set up the counter with two rows of 20 slices — the top row is the lid, the bottom is the base — with a butter knife, serrated knife, plastic wrap and a rigid container close at hand.") },
      { t: T(
        "Tempere o cream cheese numa tigela com a pimenta, o orégano e a raspa de limão. Se estiver duro de geladeira, mexa bem antes — frio demais, ele rasga o pão.",
        "Condimentá el queso crema en un bol con la pimienta, el orégano y la ralladura de limón. Si está duro de heladera, mezclalo bien antes — demasiado frío, rompe el pan.",
        "Season the cream cheese in a bowl with the pepper, oregano and lime zest. If it's still cold and stiff, beat it smooth first — too cold, it tears the bread.") },
      { t: T(
        "Passe o cream cheese temperado nas 40 fatias de uma vez, em camada fina até a borda.",
        "Untá el queso crema condimentado en las 40 fetas de una vez, en capa fina hasta el borde.",
        "Spread the seasoned cream cheese on all 40 slices in one pass, a thin layer edge to edge.") },
      { t: T(
        "Preencha as 20 bases, começando pelas de atum: uma colher de sopa bem cheia, deixando 1 cm de borda livre — ele se espalha sozinho ao fechar. Nas de queijo, 2 fatias e a cenoura por cima do queijo, nunca encostada no pão.",
        "Rellená las 20 bases, empezando por las de atún: una cucharada bien colmada, dejando 1 cm de borde libre — se esparce solo al cerrar. En las de queso, 2 fetas y la zanahoria encima del queso, nunca pegada al pan.",
        "Fill the 20 bases, starting with the tuna ones: a heaping tablespoon, leaving a 1 cm border free — it spreads on its own as you close it. On the cheese ones, 2 slices with the carrot on top of the cheese, never touching the bread.") },
      { t: T(
        "Feche e pressione de leve com a palma, só até o recheio encostar nas duas faces e selar as bordas.",
        "Cerrá y presioná suave con la palma, solo hasta que el relleno toque las dos caras y selle los bordes.",
        "Close it up and press lightly with your palm, just until the filling touches both faces and seals the edges.") },
      { t: T(
        "Corte na diagonal com faca de serra, num movimento só — serrar para frente e para trás empurra o recheio para fora. Limpe a lâmina a cada 4 ou 5 cortes.",
        "Cortá en diagonal con cuchillo de sierra, en un solo movimiento — serruchar hacia adelante y atrás empuja el relleno hacia afuera. Limpiá la hoja cada 4 o 5 cortes.",
        "Cut on the diagonal with a serrated knife, one motion only — sawing back and forth pushes the filling out. Wipe the blade every 4 or 5 cuts.") },
      { t: T(
        "Embrulhe cada metade em filme bem apertado, na posição em que ficou — é o filme que dá forma e mantém a compressão.",
        "Envolvé cada mitad en film bien ajustado, en la posición en que quedó — es el film el que le da forma y mantiene la compresión.",
        "Wrap each half tightly in plastic wrap, in the position it ended up — the wrap is what holds its shape and keeps the compression.") },
      { t: T(
        "Encaixe os sanduíches em pé, lado a lado como fichário, num pote rígido. Geladeira, na prateleira do meio, até a manhã.",
        "Acomodá los sándwiches de pie, uno al lado del otro como fichero, en un recipiente rígido. Heladera, en el estante del medio, hasta la mañana.",
        "Slot the sandwiches upright, side by side like a filing cabinet, into a rigid container. Fridge, on the middle shelf, until morning."), timer: 43200 },
    ],
    notas: [
      T("Cenoura úmida é a única fonte de água do sanduíche: rale, espalhe no papel-toalha e deixe secando enquanto faz o resto. Se ainda estiver molhada na hora de montar, mais 5 minutos.",
        "La zanahoria húmeda es la única fuente de agua del sándwich: rallala, extendela en papel de cocina y dejala secar mientras hacés el resto. Si sigue mojada a la hora de armar, cinco minutos más.",
        "Damp carrot is the sandwich's only source of water: grate it, spread it on paper towel and let it dry while you do everything else. If it's still wet at assembly time, give it five more minutes."),
      T("Faça cada gesto quarenta vezes seguidas, não vinte sanduíches inteiros um a um — muda tudo no tempo: são cerca de 35 minutos assim, quase o dobro do outro jeito.",
        "Hacé cada gesto cuarenta veces seguidas, no veinte sándwiches enteros uno a uno — cambia todo el tiempo: son unos 35 minutos así, casi el doble del otro modo.",
        "Do each motion forty times in a row, not twenty whole sandwiches one at a time — it changes the timing completely: about 35 minutes this way, nearly double the other way."),
      T("Sem peru, o queijo dobra: 2 fatias por sanduíche, não 1 — sem o embutido, o queijo passa a ser a proteína. Com peru, ele volta a 1 fatia e entram 2 de peito de peru fatiado.",
        "Sin pavo, el queso se duplica: 2 fetas por sándwich, no 1 — sin el fiambre, el queso pasa a ser la proteína. Con pavo, vuelve a 1 feta y entran 2 de pechuga de pavo fileteada.",
        "Without turkey, the cheese doubles: 2 slices per sandwich, not 1 — without the cold cut, cheese becomes the protein. With turkey, it goes back to 1 slice and 2 slices of sliced turkey breast go in."),
      T("Alface, se entrar, vai inteira e bem seca num pote à parte, e é encaixada na hora — se os sanduíches já estiverem embrulhados individualmente, ninguém vai desembrulhar só para pôr folha.",
        "La lechuga, si entra, va entera y bien seca en un recipiente aparte, y se coloca en el momento — si los sándwiches ya están envueltos individualmente, nadie los va a desenvolver solo para ponerle hoja.",
        "Lettuce, if it's used, goes in whole and very dry in a separate container, and gets tucked in on the spot — once the sandwiches are individually wrapped, nobody's going to unwrap one just to add a leaf."),
      T("20 para 12 pessoas parece muito e não é: sanduíche cortado é o item ao qual as pessoas voltam. Se ele for o único salgado do cardápio, considere 24.",
        "20 para 12 personas parece mucho y no lo es: el sándwich cortado es el ítem al que la gente vuelve. Si es el único salado del menú, considerá 24.",
        "20 for 12 people sounds like a lot and isn't: a cut sandwich is the item people come back for. If it's the only savory thing on the menu, consider making 24."),
      T("O patê de atum é o mesmo da receita de molhos de tigela, na versão firme reservada antes de afrouxar a de tigela — ver receita própria.",
        "El paté de atún es el mismo de la receta de salsas de bol, en la versión firme que se reserva antes de aflojar la de bol — ver receta propia.",
        "The tuna spread is the same one from the bowl-dip recipe, in the firm version set aside before loosening the bowl version — see that recipe."),
    ],
  }
);
