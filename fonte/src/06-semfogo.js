/* ===================== SEM FOGO ===================== */
RECEITAS.push(
  {
    id: "farofa-fria",
    capitulo: "semfogo",
    titulo: T("Farofa fria", "Farofa fría", "Cold farofa"),
    kicker: T("SEM FOGO · RECEITA DE FAMÍLIA · MONTE PERTO DA HORA", "SIN FUEGO · RECETA DE FAMILIA · ARMAR CERCA DE LA HORA", "NO HEAT · FAMILY RECIPE · ASSEMBLE CLOSE TO SERVING"),
    subtitulo: T(
      "As farinhas cruas são hidratadas pelo azeite, pelo limão e pela água do tomate. Nada vai ao fogo.",
      "Las harinas crudas se hidratan con el aceite, el limón y el agua del tomate. Nada va al fuego.",
      "The raw flours are hydrated by the oil, the lime and the water from the tomato. Nothing is cooked."
    ),
    porcoes: 6, porcoesOpcoes: [6, 12], ativo: 25, total: 55,
    utensilio: T("Tigela grande", "Bol grande", "Large bowl"),
    faixa: T("TOMATE SEM SEMENTE — É A ÁGUA QUE EMPAPA", "TOMATE SIN SEMILLA — EL AGUA ES LO QUE APELMAZA", "SEED THE TOMATOES — WATER IS WHAT MAKES IT SOGGY"),
    ingredientes: [
      { q: 2, u: "un", alt: { q: 110, u: "g" }, nome: T("ovos cozidos", "huevos duros", "hard-boiled eggs"), obs: T("em cubinhos", "en cubitos", "diced small") },
      { q: 1, u: "xic", alt: { q: 130, u: "g" }, nome: T("farinha de milho branca", "harina de maíz blanca", "white cornmeal"), obs: T("dá granulação e crocância", "aporta granulado y crujiente", "brings grain and crunch") },
      { q: 1, u: "xic", alt: { q: 150, u: "g" }, nome: T("farinha de mandioca", "harina de mandioca", "cassava flour"), obs: T("absorve o líquido e dá liga", "absorbe el líquido y da ligazón", "absorbs the liquid and binds") },
      { q: 4, u: "un", alt: { q: 480, u: "g" }, nome: T("tomates", "tomates", "tomatoes"), obs: T("sem semente, em cubos de 5 mm", "sin semilla, en cubos de 5 mm", "seeded, in 5 mm dice") },
      { q: 1, u: "xic", alt: { q: 140, u: "g" }, nome: T("azeitonas", "aceitunas", "olives"), obs: T("picadas", "picadas", "chopped") },
      { q: 1, u: "un", alt: { q: 80, u: "g" }, nome: T("cenoura", "zanahoria", "carrot"), obs: T("ralada, opcional", "rallada, opcional", "grated, optional") },
      { q: 2, u: "cs", alt: { q: 8, u: "g" }, nome: T("cheiro verde", "perejil y cebollino", "parsley and spring onion"), obs: T("picado", "picado", "chopped") },
      { q: 1, u: "un", alt: { q: 30, u: "ml" }, nome: T("limão", "limón", "lime"), obs: T("só o suco", "solo el zumo", "juice only") },
      { q: 1, u: "cc", alt: { q: 1, u: "g" }, nome: T("orégano", "orégano", "oregano") },
      { q: null, u: "", nome: T("azeite", "aceite de oliva", "olive oil"), obs: T("em fio, até a farofa ficar úmida e solta", "en hilo, hasta que la farofa quede húmeda y suelta", "in a stream, until the farofa is moist and loose"), escala: false },
      { q: null, u: "", nome: T("sal", "sal", "salt"), obs: T("provando, no fim", "probando, al final", "by tasting, at the end"), escala: false },
    ],
    grade: [
      { col: 1, de: 0, ate: 0, titulo: T("cozinhar e picar os ovos", "cocer y picar los huevos", "boil and dice the eggs"), detalhe: T("10 min · choque na água gelada", "10 min · choque en agua helada", "10 min · ice-water shock") },
      { col: 2, de: 3, ate: 3, titulo: T("tomate sem semente", "tomate sin semilla", "seed the tomatoes"), detalhe: T("tire a geleia com a colher · cubos de 5 mm", "quitá la pulpa con la cuchara · cubos de 5 mm", "scoop out the jelly · 5 mm dice") },
      { col: 3, de: 1, ate: 2, titulo: T("misturar as farinhas secas", "mezclar las harinas secas", "mix the dry flours"), detalhe: T("proporção 1:1", "proporción 1:1", "1:1 ratio") },
      { col: 4, de: 0, ate: 6, titulo: T("juntar os picados às farinhas", "sumar los picados a las harinas", "fold the chopped things into the flours"), detalhe: T("com as mãos ou garfo, sem amassar", "con las manos o tenedor, sin aplastar", "by hand or fork, without mashing") },
      { col: 5, de: 0, ate: 9, titulo: T("azeite em fio, limão e orégano", "aceite en hilo, limón y orégano", "oil in a stream, lime and oregano"), detalhe: T("até ficar úmida e solta", "hasta que quede húmeda y suelta", "until moist and loose") },
      { col: 6, de: 0, ate: 10, titulo: T("sal provando, e geladeira", "sal probando, y nevera", "salt by tasting, then chill"), detalhe: T("15–30 min para assentar", "15–30 min para asentar", "15–30 min to settle") },
    ],
    modo: [
      { t: T(
        "Cozinhe os ovos 10 minutos a partir da fervura, choque na água gelada, descasque e pique em cubinhos.",
        "Cocé los huevos 10 minutos desde el hervor, chocalos en agua helada, pelalos y picalos en cubitos.",
        "Boil the eggs for 10 minutes from the boil, shock them in ice water, peel and dice."), timer: 600 },
      { t: T(
        "Corte os tomates ao meio, tire toda a semente e a geleia com a colher, e pique em cubos de uns 5 mm. É a etapa que decide se a farofa fica solta ou empapada.",
        "Cortá los tomates por la mitad, quitá toda la semilla y la pulpa con la cuchara, y picalos en cubos de unos 5 mm. Es la etapa que decide si la farofa queda suelta o apelmazada.",
        "Halve the tomatoes, scoop out every seed and all the jelly with a spoon, and dice into about 5 mm. This is the step that decides whether the farofa stays loose or turns soggy.") },
      { t: T(
        "Pique a azeitona e o cheiro verde, e rale a cenoura se for usar.",
        "Picá la aceituna y las hierbas, y rallá la zanahoria si vas a usarla.",
        "Chop the olives and herbs, and grate the carrot if you are using it.") },
      { t: T(
        "Numa tigela grande, misture as duas farinhas ainda secas.",
        "En un bol grande, mezclá las dos harinas todavía secas.",
        "In a large bowl, mix the two flours while still dry.") },
      { t: T(
        "Acrescente tomate, azeitona, ovo, cenoura e cheiro verde. Misture com as mãos ou com garfo, sem amassar.",
        "Sumá tomate, aceituna, huevo, zanahoria y hierbas. Mezclá con las manos o con tenedor, sin aplastar.",
        "Add the tomato, olives, egg, carrot and herbs. Mix with your hands or a fork, without mashing.") },
      { t: T(
        "Azeite em fio, suco de limão e orégano, misturando e conferindo a textura. O ponto é úmido e solto: se apertar na mão junta, e depois esfarela. Farinha ainda seca no fundo pede mais azeite; brilhando e pesada, passou.",
        "Aceite en hilo, zumo de limón y orégano, mezclando y comprobando la textura. El punto es húmedo y suelto: si lo apretás en la mano se junta, y después se desmenuza. Si queda harina seca en el fondo, falta aceite; si brilla y pesa, te pasaste.",
        "Oil in a thin stream, lime juice and oregano, mixing and checking the texture as you go. The point is moist and loose: squeeze a handful and it holds, then crumbles. Dry flour still in the bottom means more oil; glossy and heavy means you went too far.") },
      { t: T(
        "Sal por último, provando. A azeitona já trouxe sódio.",
        "Sal al final, probando. La aceituna ya trajo sodio.",
        "Salt last, by tasting. The olives already brought sodium.") },
      { t: T(
        "Geladeira por 15 a 30 minutos para assentar. Sirva no mesmo dia.",
        "Nevera 15 a 30 minutos para asentar. Servir el mismo día.",
        "Chill for 15 to 30 minutes to settle. Serve the same day."), timer: 1200 },
    ],
    notas: [
      T("Monte perto da hora: até umas 2 h antes está seguro. De um dia para o outro a farinha termina de absorver tudo e a farofa fica pastosa — não é receita de sobra.",
        "Armala cerca de la hora: hasta unas 2 h antes está bien. De un día para el otro la harina termina de absorber todo y la farofa queda pastosa — no es receta de sobras.",
        "Assemble close to serving: up to about 2 hours ahead is safe. Overnight the flour finishes absorbing everything and the farofa turns pasty — this is not a make-ahead recipe."),
      T("Duas farinhas na proporção 1:1 é o padrão da anotação. Mais milho deixa mais granulada; mais mandioca, mais compacta e mais úmida no ponto.",
        "Dos harinas en proporción 1:1 es lo que dice la anotación. Más maíz la deja más granulada; más mandioca, más compacta y más húmeda en el punto.",
        "Two flours at 1:1 is what the handwritten note says. More cornmeal makes it grainier; more cassava, denser and wetter at the right point."),
      T("O limão perto do fim mantém o cheiro verde vivo; se entrar cedo demais, a salsinha murcha e escurece.",
        "El limón cerca del final mantiene las hierbas vivas; si entra demasiado pronto, el perejil se marchita y oscurece.",
        "Lime near the end keeps the herbs bright; too early and the parsley wilts and darkens."),
      T("Sem fogo, mas cru de verdade: ovo bem cozido, tomate lavado, e a farofa na geladeira até servir — principalmente em dia quente.",
        "Sin fuego, pero crudo de verdad: huevo bien cocido, tomate lavado, y la farofa en la nevera hasta servir — sobre todo en día caluroso.",
        "No heat, but genuinely raw: well-cooked egg, washed tomatoes, and keep it refrigerated until serving — especially on a hot day."),
      T("Variações da mesma base: milho verde escorrido, pimentão vermelho em cubinhos, ou uma pitada de pimenta calabresa em flocos.",
        "Variaciones de la misma base: maíz dulce escurrido, pimiento rojo en cubitos, o una pizca de chile en escamas.",
        "Variations on the same base: drained sweetcorn, red pepper in small dice, or a pinch of chilli flakes."),
    ],
  },

  {
    id: "molho-alemao",
    capitulo: "semfogo",
    titulo: T("Molho alemão", "Molho alemão", "Molho alemão"),
    kicker: T("SEM FOGO · LIQUIDIFICADOR · MELHOR NO DIA SEGUINTE", "SIN FUEGO · LICUADORA · MEJOR AL DÍA SIGUIENTE", "NO HEAT · BLENDER · BETTER THE NEXT DAY"),
    subtitulo: T(
      "Molho cru de churrasco: pimentão, tomate, cebola e alho batidos com óleo, vinagre e massa de tomate.",
      "Salsa cruda de asado: pimiento, tomate, cebolla y ajo licuados con aceite, vinagre y concentrado de tomate.",
      "A raw barbecue sauce: pepper, tomato, onion and garlic blended with oil, vinegar and tomato paste."
    ),
    porcoes: 1, porcoesOpcoes: [1, 2], lote: true, ativo: 20, total: 140,
    rende: T("~700 ml", "~700 ml", "~700 ml"),
    utensilio: T("Liquidificador e vidro limpo", "Licuadora y frasco de vidrio limpio", "Blender and a clean glass jar"),
    faixa: T("ÓLEO EM FIO FINO COM O MOTOR LIGADO — SENÃO SEPARA", "ACEITE EN HILO FINO CON EL MOTOR EN MARCHA — SI NO, SE CORTA", "OIL IN A THIN STREAM WITH THE MOTOR RUNNING — OR IT SPLITS"),
    ingredientes: [
      { q: 1, u: "un", alt: { q: 160, u: "g" }, nome: T("pimentão vermelho", "pimiento rojo", "red bell pepper"), obs: T("ou 4 — ver nota", "o 4 — ver la nota", "or 4 — see the note") },
      { q: 4, u: "un", alt: { q: 480, u: "g" }, nome: T("tomates", "tomates", "tomatoes") },
      { q: 1, u: "un", alt: { q: 150, u: "g" }, nome: T("cebola", "cebolla", "onion") },
      { q: 4, u: "dente", alt: { q: 20, u: "g" }, nome: T("alho", "ajo", "garlic") },
      { q: 200, u: "ml", nome: T("vinagre", "vinagre", "vinegar"), obs: T("1 copo", "1 vaso", "1 glass") },
      { q: 200, u: "ml", nome: T("óleo neutro", "aceite neutro", "neutral oil"), obs: T("1 copo · não azeite", "1 vaso · no aceite de oliva", "1 glass · not olive oil") },
      { q: 1, u: "un", alt: { q: 140, u: "g" }, nome: T("lata pequena de massa de tomate", "lata pequeña de concentrado de tomate", "small tin of tomato paste") },
      { q: null, u: "", nome: T("sal", "sal", "salt"), obs: T("provando, no fim", "probando, al final", "by tasting, at the end"), escala: false },
    ],
    grade: [
      { col: 1, de: 0, ate: 3, titulo: T("limpar e cortar grosso", "limpiar y cortar grueso", "clean and roughly chop"), detalhe: T("pimentão sem nervura · tomate sem semente", "pimiento sin nervaduras · tomate sin semilla", "pepper deribbed · tomato seeded") },
      { col: 2, de: 0, ate: 4, titulo: T("bater com o vinagre", "licuar con el vinagre", "blend with the vinegar"), detalhe: T("até virar purê liso", "hasta que sea un puré liso", "to a smooth purée") },
      { col: 3, de: 0, ate: 5, titulo: T("óleo em fio, motor ligado", "aceite en hilo, motor en marcha", "oil in a stream, motor running"), detalhe: T("o molho clareia e encorpa", "la salsa aclara y toma cuerpo", "the sauce lightens and thickens") },
      { col: 4, de: 0, ate: 6, titulo: T("massa de tomate", "concentrado de tomate", "tomato paste"), detalhe: T("cor e corpo · escorre da colher", "color y cuerpo · escurre de la cuchara", "colour and body · it should run off the spoon") },
      { col: 5, de: 0, ate: 7, titulo: T("sal e acidez, provando", "sal y acidez, probando", "salt and acidity, by tasting"), detalhe: T("vidro limpo · geladeira 2 h no mínimo", "frasco limpio · nevera 2 h mínimo", "clean jar · at least 2 h in the fridge") },
    ],
    modo: [
      { t: T(
        "Pimentão sem sementes e sem as nervuras brancas. Tomate sem semente, se quiser um molho menos aguado e menos amargo. Cebola e alho descascados, em pedaços grandes — o liquidificador resolve.",
        "Pimiento sin semillas y sin las nervaduras blancas. Tomate sin semilla, si querés una salsa menos aguada y menos amarga. Cebolla y ajo pelados, en trozos grandes — la licuadora resuelve.",
        "Pepper with no seeds and no white ribs. Tomato seeded, if you want a less watery, less bitter sauce. Onion and garlic peeled, in large pieces — the blender will handle it.") },
      { t: T(
        "Bata pimentão, tomate, cebola e alho no liquidificador com o vinagre — o líquido ácido ajuda a máquina a puxar tudo para baixo. Bata até virar purê liso.",
        "Licuá pimiento, tomate, cebolla y ajo con el vinagre — el líquido ácido ayuda a que la máquina arrastre todo hacia abajo. Licuá hasta que sea un puré liso.",
        "Blend the pepper, tomato, onion and garlic with the vinegar — the acid liquid helps the machine pull everything down. Blend to a smooth purée.") },
      { t: T(
        "Com o motor ligado, acrescente o óleo em fio fino. Jogar tudo de uma vez separa. O molho clareia e encorpa um pouco quando pega.",
        "Con el motor en marcha, agregá el aceite en hilo fino. Echarlo todo de golpe lo corta. La salsa aclara y toma algo de cuerpo cuando emulsiona.",
        "With the motor running, add the oil in a thin stream. Dumping it in at once will split it. The sauce lightens and thickens slightly as it takes.") },
      { t: T(
        "Junte a massa de tomate, batendo para incorporar. Se preferir calibrar, entra às colheradas até chegar na cor e no corpo que você quer — deve escorrer da colher, não ficar de pé.",
        "Sumá el concentrado de tomate, licuando para incorporar. Si preferís calibrar, va por cucharadas hasta llegar al color y al cuerpo que querés — debe escurrir de la cuchara, no quedarse parado.",
        "Add the tomato paste, blending to incorporate. If you prefer to calibrate, add it by the spoonful until you reach the colour and body you want — it should run off the spoon, not stand up on it.") },
      { t: T(
        "Sal, provando. A massa de tomate já traz sódio.",
        "Sal, probando. El concentrado de tomate ya trae sodio.",
        "Salt, by tasting. The tomato paste already brings sodium.") },
      { t: T(
        "Ajuste a acidez: se estiver agressivo, uma pitada de açúcar ou um pouco mais de massa de tomate arredonda; se estiver chapado, mais um fio de vinagre.",
        "Ajustá la acidez: si está agresivo, una pizca de azúcar o un poco más de concentrado lo redondea; si está plano, otro chorrito de vinagre.",
        "Adjust the acidity: if it is aggressive, a pinch of sugar or a little more paste rounds it off; if it is flat, another splash of vinegar.") },
      { t: T(
        "Vidro limpo, geladeira, no mínimo 2 horas antes de servir. Melhora bastante no dia seguinte, quando o alho cru perde a aspereza.",
        "Frasco limpio, nevera, mínimo 2 horas antes de servir. Mejora bastante al día siguiente, cuando el ajo crudo pierde la aspereza.",
        "Clean glass jar, refrigerated, at least 2 hours before serving. It improves a lot by the next day, when the raw garlic loses its edge."), timer: 7200 },
    ],
    notas: [
      T("A anotação traz \"1 pimentão vermelho ou 4\". Com 1, o molho fica mais avinagrado e fino; com 4, encorpado, doce e muito mais vermelho, com menos vinagre aparente — e provavelmente precisa de menos massa de tomate.",
        "La anotación dice \"1 pimiento rojo o 4\". Con 1, la salsa queda más avinagrada y fina; con 4, con más cuerpo, dulce y mucho más roja, con menos vinagre aparente — y probablemente necesite menos concentrado.",
        "The note says \"1 red pepper or 4\". With 1, the sauce is sharper and thinner; with 4, it is fuller, sweeter and much redder, with less vinegar showing — and it probably needs less paste."),
      T("Alho cru é o ingrediente que mais muda com o tempo: no dia é picante e agressivo, no dia seguinte fica redondo. Vale sempre fazer na véspera.",
        "El ajo crudo es el ingrediente que más cambia con el tiempo: el mismo día pica y es agresivo, al día siguiente queda redondo. Siempre conviene hacerlo la víspera.",
        "Raw garlic is the ingredient that changes most with time: on the day it is sharp and aggressive, by the next day it is round. Always worth making it the day before."),
      T("Conservação: vidro tampado na geladeira, 2 a 3 semanas. A separação é normal — chacoalhe antes de servir. Sirva sempre com colher limpa, sem devolver o que sobrou no prato.",
        "Conservación: frasco tapado en la nevera, 2 a 3 semanas. La separación es normal — agitá antes de servir. Serví siempre con cuchara limpia, sin devolver lo que sobró en el plato.",
        "Keeping: covered glass jar in the fridge, 2 to 3 weeks. Separation is normal — shake before serving. Always serve with a clean spoon, and never return what was left on a plate."),
      T("Recipiente não-reativo: vidro ou cerâmica, nunca alumínio — o vinagre reage e dá gosto metálico. Mesma regra do escabeche.",
        "Recipiente no reactivo: vidrio o cerámica, nunca aluminio — el vinagre reacciona y da sabor metálico. Misma regla que el escabeche.",
        "Non-reactive container: glass or ceramic, never aluminium — vinegar reacts and leaves a metallic taste. Same rule as the escabeche."),
      T("Óleo neutro, não azeite. O azeite fica pesado e amarga no liquidificador em alta rotação; aqui o papel da gordura é só carregar o sabor dos legumes.",
        "Aceite neutro, no de oliva. El de oliva queda pesado y amarga en la licuadora a alta velocidad; acá el papel de la grasa es solo transportar el sabor de las verduras.",
        "Neutral oil, not olive oil. Olive oil turns heavy and bitter in a high-speed blender; here the fat's only job is to carry the flavour of the vegetables."),
      T("Versão picada: os mesmos ingredientes em cubinhos de 5 mm, sem bater, viram um vinagrete de pimentão. É outro molho — o liquidificador é o que faz o \"alemão\".",
        "Versión picada: los mismos ingredientes en cubitos de 5 mm, sin licuar, son otra cosa: una vinagreta de pimiento. Es otra salsa — la licuadora es lo que hace al \"alemão\".",
        "Chopped version: the same ingredients in 5 mm dice, unblended, make a pepper vinaigrette. That is a different sauce — the blender is what makes it the \"alemão\"."),
    ],
  }
);
