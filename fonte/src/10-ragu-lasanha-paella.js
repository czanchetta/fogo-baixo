/* ===================== BECHAMEL (TÉCNICA) ===================== */

TECNICAS.push({
  id: "bechamel",
  titulo: T("Bechamel", "Bechamel", "Béchamel"),
  kicker: T("TÉCNICA · MOLHO-MÃE · A PROPORÇÃO DEFINE O USO", "TÉCNICA · SALSA MADRE · LA PROPORCIÓN DEFINE EL USO", "TECHNIQUE · MOTHER SAUCE · THE RATIO DEFINES THE USE"),
  resumo: T(
    "Manteiga, farinha e leite — o que muda entre um molho fluido e uma cobertura de lasanha é só a proporção. Engrossa quando ferve, não antes.",
    "Manteca, harina y leche — lo que cambia entre una salsa fluida y una cobertura de lasaña es solo la proporción. Espesa cuando hierve, no antes.",
    "Butter, flour and milk — what changes between a runny sauce and a lasagna topping is just the ratio. It thickens when it boils, not before."
  ),
  corpo: [
    {
      h: T("Roux: cozinhar a farinha antes do leite", "Roux: cocinar la harina antes de la leche", "Roux: cooking the flour before the milk"),
      p: T(
        "Manteiga derretida e farinha em partes iguais em peso, cozidas juntas até virar uma pasta lisa que borbulha e cheira a biscoito — cerca de 2 minutos em fogo médio-baixo, mexendo sempre. Menos que isso deixa gosto de farinha crua; mais que isso escurece o roux e ele engrossa menos.",
        "Manteca derretida y harina en partes iguales en peso, cocidas juntas hasta volverse una pasta lisa que burbujea y huele a galleta — unos 2 minutos a fuego medio-bajo, mezclando siempre. Menos que eso deja gusto a harina cruda; más que eso oscurece el roux y espesa menos.",
        "Melted butter and flour in equal parts by weight, cooked together until it becomes a smooth paste that bubbles and smells like biscuit — about 2 minutes over medium-low heat, stirring constantly. Less than that leaves a raw-flour taste; more than that darkens the roux and it thickens less."
      ),
    },
    {
      h: T("Leite morno ou frio, nunca os dois quentes", "Leche tibia o fría, nunca las dos calientes", "Warm or cold milk, never both hot"),
      p: T(
        "Duas combinações evitam grumo: leite morno entrando aos poucos num roux quente, ou leite frio entrando num roux tirado do fogo. O que empelota é leite quente despejado de uma vez num roux quente — escolha um dos dois métodos e não misture. As duas primeiras conchas de leite formam uma massa grossa que precisa ser batida até lisa antes da próxima; dali em diante, o resto entra em fio, sempre mexendo e raspando os cantos da panela, onde o grumo se esconde.",
        "Dos combinaciones evitan los grumos: leche tibia entrando de a poco en un roux caliente, o leche fría entrando en un roux retirado del fuego. Lo que forma grumos es leche caliente volcada de una vez en un roux caliente — elegí uno de los dos métodos y no los mezcles. Los primeros dos cucharones de leche forman una masa espesa que hay que batir hasta alisar antes del siguiente; de ahí en más, el resto entra en hilo, siempre mezclando y raspando las esquinas de la olla, donde se esconde el grumo.",
        "Two combinations avoid lumps: warm milk added gradually to a hot roux, or cold milk added to a roux taken off the heat. What causes lumps is hot milk poured all at once into a hot roux — pick one of the two methods and don't mix them. The first two ladles of milk form a thick paste that needs beating smooth before the next; from there, the rest goes in a thin stream, always stirring and scraping the corners of the pot, where lumps hide."
      ),
      tabela: {
        legenda: T("A proporção define o uso", "La proporción define el uso", "The ratio defines the use"),
        cabecalho: [
          T("Proporção (manteiga / farinha / leite)", "Proporción (manteca / harina / leche)", "Ratio (butter / flour / milk)"),
          T("Resultado", "Resultado", "Result"),
          T("Uso", "Uso", "Use"),
        ],
        linhas: [
          [
            T("60 g / 60 g / 1 L", "60 g / 60 g / 1 L", "60 g / 60 g / 1 L"),
            T("Molho fluido", "Salsa fluida", "Runny sauce"),
            T("Para napar", "Para napar", "For coating/saucing"),
          ],
          [
            T("80 g / 80 g / 1 L", "80 g / 80 g / 1 L", "80 g / 80 g / 1 L"),
            T("Cobre e gratina sem escorrer", "Cubre y gratina sin escurrir", "Coats and browns without running"),
            T("Cobertura de lasanha (padrão daqui)", "Cobertura de lasaña (estándar de acá)", "Lasagna topping (the standard here)"),
          ],
          [
            T("100 g / 100 g / 1 L", "100 g / 100 g / 1 L", "100 g / 100 g / 1 L"),
            T("Muito grosso", "Muy espeso", "Very thick"),
            T("Base de croquete", "Base de croqueta", "Croquette base"),
          ],
        ],
      },
    },
    {
      h: T("Ferve pra engrossar", "Hierve para espesar", "It boils to thicken"),
      p: T(
        "O molho só engrossa de verdade quando levanta fervura — não julgue o ponto antes disso. Fogo médio, mexendo o fundo, até borbulhar; depois, mais 3 a 5 minutos em fogo baixo, para terminar de cozinhar o amido da farinha.",
        "La salsa recién espesa de verdad cuando rompe hervor — no juzgues el punto antes de eso. Fuego medio, mezclando el fondo, hasta que burbujee; después, 3 a 5 minutos más a fuego bajo, para terminar de cocinar el almidón de la harina.",
        "The sauce only truly thickens once it comes to a boil — don't judge the consistency before that. Medium heat, stirring the bottom, until it bubbles; then 3 to 5 more minutes on low heat, to finish cooking the flour's starch."
      ),
    },
    {
      h: T("Corrigindo o ponto", "Corrigiendo el punto", "Fixing the consistency"),
      p: T(
        "Grumo se resolve na peneira ou no mixer, sem drama. Muito grosso pede mais leite morno em fio, ainda no fogo; muito ralo pede mais tempo de fervura, ou um pouco de roux extra feito à parte. Tempere por último — sal, noz-moscada ralada na hora e pouca pimenta — e prove sabendo que, numa lasanha, o queijo e o presunto já vêm salgados: o bechamel fica um ponto abaixo do que se comeria de colher.",
        "El grumo se resuelve con el colador o la minipimer, sin drama. Muy espeso pide más leche tibia en hilo, todavía al fuego; muy ralo pide más tiempo de hervor, o un poco de roux extra hecho aparte. Condimentá al final — sal, nuez moscada recién rallada y poca pimienta — y probá sabiendo que, en una lasaña, el queso y el jamón ya vienen salados: el bechamel queda un punto por debajo de lo que comerías a cucharadas.",
        "Lumps are fixed with a sieve or an immersion blender, no drama. Too thick calls for more warm milk in a stream, still over heat; too thin calls for more simmering time, or a little extra roux made separately. Season last — salt, freshly grated nutmeg and a little pepper — and taste knowing that, in a lasagna, the cheese and ham are already salty: the béchamel should land a notch under what you'd eat by the spoonful."
      ),
    },
  ],
  notas: [
    T("Não guarda bem mais de 2 dias na geladeira: talha e separa ao reaquecer se não for batido antes.",
      "No se conserva bien más de 2 días en la heladera: se corta y separa al recalentar si no se bate antes.",
      "It doesn't keep well more than 2 days in the fridge: it curdles and separates on reheating unless it's whisked first."),
    T("Se não usar na hora, filme plástico encostado direto na superfície evita que crie pele. Amorne e bata antes de usar.",
      "Si no se usa en el momento, film pegado directo a la superficie evita que se forme una película. Entibiá y batí antes de usar.",
      "If it's not used right away, plastic wrap pressed directly onto the surface stops a skin from forming. Warm it and whisk before using."),
    T("Leite frio funciona tão bem quanto leite morno, desde que o roux esteja fora do fogo quando ele entra — o que não funciona é misturar os dois métodos.",
      "La leche fría funciona tan bien como la tibia, siempre que el roux esté fuera del fuego cuando entra — lo que no funciona es mezclar los dos métodos.",
      "Cold milk works just as well as warm, as long as the roux is off the heat when it goes in — what doesn't work is mixing the two methods."),
  ],
});

/* ===================== RAGÙ E LASANHA ===================== */

RECEITAS.push(
  {
    id: "ragu-bolonhesa",
    capitulo: "ragu-lasanha",
    titulo: T("Ragù à bolonhesa", "Ragù a la boloñesa", "Ragù alla bolognese"),
    kicker: T("MASSA · 1H30 EM FOGO MÍNIMO · PARA LASANHA OU TAGLIATELLE", "PASTA · 1H30 A FUEGO MÍNIMO · PARA LASAÑA O TALLARINES", "PASTA · 1H30 ON THE LOWEST HEAT · FOR LASAGNA OR TAGLIATELLE"),
    subtitulo: T(
      "Ragù de carne, não molho de tomate com carne — o corpo vem do soffritto suado longo e da carne frita na própria gordura, não do tomate.",
      "Ragù de carne, no salsa de tomate con carne — el cuerpo viene del soffritto sudado largo y de la carne frita en su propia grasa, no del tomate.",
      "A meat ragù, not a tomato sauce with meat in it — the body comes from a long-sweated soffritto and meat fried in its own fat, not from the tomato."
    ),
    principio: T(
      "Baseado numa receita de livro italiano que usa só uma colher de extrato de tomate para 255 g de carne: o tomate é coadjuvante. Ao quadruplicar para 1 kg de carne mista (metade boi, metade porco — o porco dá gordura e doçura, o boi dá fundo), o tempo de fervura não muda, continua 1h30; o que muda é o tempo para dourar a carne, que pede panela larga e, com 1 kg, duas levas — senão a carne cozinha no vapor em vez de fritar.",
      "Basado en una receta de un libro italiano que usa solo una cucharada de concentrado de tomate para 255 g de carne: el tomate es un actor secundario. Al cuadruplicar para 1 kg de carne mixta (mitad res, mitad cerdo — el cerdo aporta grasa y dulzor, la res aporta fondo), el tiempo de cocción no cambia, sigue siendo 1h30; lo que cambia es el tiempo para dorar la carne, que pide una olla ancha y, con 1 kg, dos tandas — si no, la carne se cocina al vapor en vez de dorarse.",
      "Based on a recipe from an Italian cookbook that uses just one spoonful of tomato paste for 255 g of meat: tomato is a supporting player. Quadrupling it to 1 kg of mixed meat (half beef, half pork — pork brings fat and sweetness, beef brings depth), the simmer time doesn't change, still 1h30; what changes is the time to brown the meat, which needs a wide pot and, with 1 kg, two batches — otherwise the meat steams instead of browning."
    ),
    porcoes: 1, porcoesOpcoes: [1, 2], lote: true, ativo: 40, total: 130,
    rende: T("~2,5 L — o suficiente para duas travessas de lasanha", "~2,5 L — suficiente para dos fuentes de lasaña", "~2.5 L — enough for two lasagna pans"),
    utensilio: T("Panela pesada e larga, com chapa difusora", "Olla pesada y ancha, con difusor de calor", "Heavy, wide pot, with a heat diffuser"),
    faixa: T("A CARNE TEM QUE FRITAR, NÃO SUAR — DUAS LEVAS SE A PANELA NÃO FOR BEM LARGA", "LA CARNE TIENE QUE DORARSE, NO SUDAR — DOS TANDAS SI LA OLLA NO ES BIEN ANCHA", "THE MEAT HAS TO BROWN, NOT STEAM — TWO BATCHES IF THE POT ISN'T VERY WIDE"),
    ingredientes: [
      { q: 4, u: "cs", nome: T("azeite", "aceite de oliva", "olive oil"), obs: T("~60 ml", "~60 ml", "~60 ml") },
      { q: 60, u: "g", nome: T("manteiga", "manteca", "butter") },
      { q: 2, u: "un", alt: { q: 500, u: "g" }, nome: T("cebolas grandes", "cebollas grandes", "large onions"), obs: T("em cubos", "en cubos", "diced") },
      { q: 4, u: "un", nome: T("cenouras", "zanahorias", "carrots"), obs: T("em cubos", "en cubos", "diced") },
      { q: 4, u: "dente", alt: { q: 16, u: "g" }, nome: T("alho", "ajo", "garlic"), obs: T("amassado", "aplastado", "crushed") },
      { q: 500, u: "g", nome: T("carne bovina moída", "carne de res molida", "ground beef") },
      { q: 500, u: "g", nome: T("carne suína moída", "carne de cerdo molida", "ground pork") },
      { q: 4, u: "cs", nome: T("extrato de tomate concentrado", "concentrado de tomate", "tomato paste") },
      { q: 480, u: "ml", nome: T("vinho branco seco", "vino blanco seco", "dry white wine") },
      { q: 680, u: "g", nome: T("passata de tomate", "passata de tomate", "tomato passata"), obs: T("1 vidro, inteiro", "1 frasco, entero", "1 jar, all of it") },
      { q: null, u: "", nome: T("água", "agua", "water"), obs: T("só se precisar, ao longo do cozimento", "solo si hace falta, durante la cocción", "only if needed, during cooking"), escala: false },
      { q: 2, u: "cc", nome: T("sal", "sal", "salt"), obs: T("ponto de partida, acertar no final", "punto de partida, ajustar al final", "starting point, adjust at the end") },
      { q: 1, u: "cc", nome: T("pimenta-do-reino", "pimienta negra", "black pepper") },
    ],
    grade: [
      { col: 1, de: 2, ate: 2, titulo: T("sua a cebola", "suda la cebolla", "sweat the onion"), detalhe: T("tampada, fogo médio-baixo, até translúcida", "tapada, fuego medio-bajo, hasta transparentar", "covered, medium-low heat, until translucent") },
      { col: 2, de: 3, ate: 3, titulo: T("cenoura", "zanahoria", "carrot"), detalhe: T("tampada, até amaciar e dourar nas bordas", "tapada, hasta ablandar y dorar en los bordes", "covered, until soft and browned at the edges") },
      { col: 3, de: 4, ate: 4, titulo: T("alho", "ajo", "garlic"), detalhe: T("1 min destampado", "1 min destapado", "1 min uncovered") },
      { col: 4, de: 5, ate: 6, titulo: T("doura a carne", "dora la carne", "brown the meat"), detalhe: T("fogo alto, duas levas, até perder o vermelho", "fuego alto, dos tandas, hasta perder el rojo", "high heat, two batches, until no pink remains") },
      { col: 5, de: 7, ate: 7, titulo: T("extrato", "concentrado", "tomato paste"), detalhe: T("tosta 1 min", "tuesta 1 min", "toasts 1 min") },
      { col: 6, de: 8, ate: 9, titulo: T("vinho e passata", "vino y passata", "wine and passata"), detalhe: T("carne quase coberta", "carne casi cubierta", "meat almost covered") },
      { col: 7, de: 0, ate: 12, titulo: T("cozimento lento", "cocción lenta", "slow simmer"), detalhe: T("1h30, fogo mínimo, tampado", "1h30, fuego mínimo, tapado", "1h30, lowest heat, covered") },
    ],
    modo: [
      { t: T(
        "Azeite e manteiga na panela pesada e larga. Cebola, tampe e fogo médio-baixo, 5 a 10 minutos até translúcida, mexendo a cada 2 minutos.",
        "Aceite y manteca en la olla pesada y ancha. Cebolla, tapá y fuego medio-bajo, 5 a 10 minutos hasta transparentar, mezclando cada 2 minutos.",
        "Oil and butter in the heavy, wide pot. Onion, cover and medium-low heat, 5 to 10 minutes until translucent, stirring every 2 minutes."), timer: 420 },
      { t: T(
        "Cenoura, tampe de novo, mais 5 a 10 minutos, até amaciar e começar a dourar nas bordas.",
        "Zanahoria, tapá de nuevo, 5 a 10 minutos más, hasta ablandar y empezar a dorar en los bordes.",
        "Carrot, cover again, 5 to 10 more minutes, until soft and starting to brown at the edges."), timer: 420 },
      { t: T(
        "Alho, 1 minuto destampado.",
        "Ajo, 1 minuto destapado.",
        "Garlic, 1 minute uncovered."), timer: 60 },
      { t: T(
        "Fogo alto. Carne quebrada com colher de pau — com 1 kg, duas levas se a panela não for muito larga, para fritar em vez de suar. Pronto quando perde o vermelho e começa a chiar na própria gordura, 10 a 15 minutos por leva.",
        "Fuego alto. Carne desarmada con cuchara de madera — con 1 kg, dos tandas si la olla no es muy ancha, para dorar en vez de sudar. Está cuando pierde el rojo y empieza a chisporrotear en su propia grasa, 10 a 15 minutos por tanda.",
        "High heat. Break up the meat with a wooden spoon — with 1 kg, two batches if the pot isn't very wide, so it fries instead of steaming. It's ready when it loses its pink color and starts sizzling in its own fat, 10 to 15 minutes per batch."), timer: 900 },
      { t: T(
        "Extrato de tomate, misturando e tostando por 1 minuto.",
        "Concentrado de tomate, mezclando y tostando 1 minuto.",
        "Tomato paste, mixing and toasting for 1 minute."), timer: 60 },
      { t: T(
        "Vinho e a passata. Sal e pimenta. A carne deve ficar quase coberta de líquido.",
        "Vino y la passata. Sal y pimienta. La carne debe quedar casi cubierta de líquido.",
        "Wine and the passata. Salt and pepper. The meat should be almost covered in liquid.") },
      { t: T(
        "Fogo mínimo com a chapa difusora, tampado, borbulhando devagar, 1h30. A passata tem açúcar e sólidos que grudam mais que água — mexa o fundo a cada 20 minutos; provavelmente só precisa de água na última meia hora, se precisar.",
        "Fuego mínimo con el difusor de calor, tapado, hirviendo despacio, 1h30. La passata tiene azúcar y sólidos que se pegan más que el agua — mezclá el fondo cada 20 minutos; probablemente solo necesite agua en la última media hora, si hace falta.",
        "Lowest heat with the heat diffuser, covered, simmering slowly, 1h30. The passata has sugar and solids that stick more than water — stir the bottom every 20 minutes; it will probably only need water in the last half hour, if at all."), timer: 5400 },
      { t: T(
        "Ponto pra lasanha: o molho escorre da colher mas não empoça. Se estiver aguado, destampe nos últimos 20 a 30 minutos. Acerte o sal no final.",
        "Punto para lasaña: la salsa escurre de la cuchara pero no encharca. Si está aguada, destapá los últimos 20 a 30 minutos. Ajustá la sal al final.",
        "Ready for lasagna when the sauce runs off the spoon but doesn't pool. If it's watery, uncover it for the last 20 to 30 minutes. Adjust the salt at the end.") },
    ],
    notas: [
      T("A versão fiel ao livro (para massa longa como tagliatelle) troca a passata por salsão no soffritto (4 talos) e por água no lugar da passata (480 ml de vinho + 480 ml de água, mais até 480 ml extra se secar) — fica mais seco e mais carnudo, sem a doçura da passata.",
        "La versión fiel al libro (para pasta larga como tallarines) cambia la passata por apio en el soffritto (4 tallos) y por agua en lugar de la passata (480 ml de vino + 480 ml de agua, más hasta 480 ml extra si se seca) — queda más seco y más carnudo, sin el dulzor de la passata.",
        "The version faithful to the cookbook (for long pasta like tagliatelle) swaps the passata for celery in the soffritto (4 stalks) and for water instead of passata (480 ml wine + 480 ml water, plus up to 480 ml more if it dries out) — it comes out drier and meatier, without the passata's sweetness."),
      T("Passata não substitui o extrato: não é concentrada, não dá o tostado do passo do extrato — as duas coisas entram, uma não fica no lugar da outra.",
        "La passata no reemplaza al concentrado: no está concentrada, no da el tostado del paso del concentrado — las dos cosas entran, una no reemplaza a la otra.",
        "Passata doesn't replace the tomato paste: it isn't concentrated and doesn't give the toasted flavor of the paste step — both go in, one doesn't substitute for the other."),
      T("O livro sugere variações: metade vitela e metade porco; ou boi com uma linguiça italiana sem pele esfarelada; ou 225 g de cogumelo fatiado frito em manteiga, entrando meia hora antes do fim (quantidades do livro, para 255 g de carne — ajustar proporcionalmente).",
        "El libro sugiere variaciones: mitad ternera y mitad cerdo; o res con un chorizo italiano sin piel desmenuzado; o 225 g de champiñones en fetas fritos en manteca, entrando media hora antes del final (cantidades del libro, para 255 g de carne — ajustar proporcionalmente).",
        "The cookbook suggests variations: half veal and half pork; or beef with a crumbled skinless Italian sausage; or 225 g of sliced mushrooms fried in butter, added half an hour before the end (book quantities, for 255 g of meat — adjust proportionally)."),
      T("Feito na véspera fica melhor, e a gordura sobe e endurece na geladeira, facilitando tirar o excesso antes de montar a lasanha.",
        "Hecho la víspera queda mejor, y la grasa sube y se endurece en la heladera, facilitando quitar el exceso antes de armar la lasaña.",
        "Made the day before is better, and the fat rises and hardens in the fridge, making it easy to skim off before assembling the lasagna."),
      T("Cebola: 2 grandes equivalem a cerca de 4 médias. Para um ragù mais carnudo, 3 médias bastam, mantendo a cenoura.",
        "Cebolla: 2 grandes equivalen a unas 4 medianas. Para un ragù más carnudo, alcanza con 3 medianas, manteniendo la zanahoria.",
        "Onion: 2 large ones equal about 4 medium ones. For a meatier ragù, 3 medium onions are enough, keeping the carrot the same."),
    ],
  },

  {
    id: "lasanha-bolonhesa-bechamel",
    capitulo: "ragu-lasanha",
    titulo: T(
      "Lasanha de presunto, queijo e bolonhesa, coberta com bechamel",
      "Lasaña de jamón, queso y bolonesa, cubierta con bechamel",
      "Ham, cheese and bolognese lasagna, topped with béchamel"
    ),
    kicker: T("MASSA · BECHAMEL SÓ NO TOPO · MAÇARICO NO FINAL", "PASTA · BECHAMEL SOLO ENCIMA · SOPLETE AL FINAL", "PASTA · BÉCHAMEL ON TOP ONLY · TORCHED AT THE END"),
    subtitulo: T(
      "Camadas de massa, ragù, presunto e queijo; bechamel só por cima, maçaricado no final para dourar sem depender do grill do forno.",
      "Capas de masa, ragù, jamón y queso; bechamel solo encima, soplete al final para dorar sin depender del grill del horno.",
      "Layers of pasta, ragù, ham and cheese; béchamel on top only, torched at the end to brown without relying on the oven's broiler."
    ),
    principio: T(
      "Duas coisas seguram a estrutura: o ragù com umidade suficiente pra hidratar a massa no forno, e o presunto com queijo como camada seca que dá corte limpo. O bechamel fica só no topo — o interior é ragù puro, mais carnudo e menos cremoso que uma lasanha com bechamel entre camadas. O maçarico faz o que o forno faz mal: dourar o topo rápido, sem ressecar o miolo nem depender do grill.",
      "Dos cosas sostienen la estructura: el ragù con humedad suficiente para hidratar la masa en el horno, y el jamón con queso como capa seca que da un corte limpio. El bechamel queda solo encima — el interior es ragù puro, más carnudo y menos cremoso que una lasaña con bechamel entre capas. El soplete hace lo que el horno hace mal: dorar la superficie rápido, sin resecar el centro ni depender del grill.",
      "Two things hold the structure together: the ragù, wet enough to hydrate the pasta in the oven, and the ham with cheese as a dry layer that gives a clean cut. The béchamel stays on top only — the inside is pure ragù, meatier and less creamy than a lasagna with béchamel between every layer. The torch does what the oven does poorly: brown the top fast, without drying out the middle or depending on the broiler."
    ),
    porcoes: 1, porcoesOpcoes: [1, 2], lote: true, ativo: 30, total: 95,
    rende: T("1 travessa (~10 porções)", "1 fuente (~10 porciones)", "1 pan (~10 servings)"),
    utensilio: T("Travessa de forno e maçarico culinário", "Fuente de horno y soplete de cocina", "Baking dish and kitchen torch"),
    faixa: T("RAGÙ NUNCA GELADO NA MONTAGEM — ESFRIA A MASSA E ENDURECE A BORDA", "RAGÙ NUNCA FRÍO AL ARMAR — ENFRÍA LA MASA Y ENDURECE EL BORDE", "NEVER COLD RAGÙ AT ASSEMBLY — IT CHILLS THE PASTA AND HARDENS THE EDGE"),
    ingredientes: [
      { q: 1.25, u: "l", nome: T("ragù à bolonhesa", "ragù a la boloñesa", "bolognese ragù"), obs: T("ver receita própria", "ver receta propia", "see that recipe") },
      { q: 1, u: "l", nome: T("bechamel (80 g / 80 g / 1 L)", "bechamel (80 g / 80 g / 1 L)", "béchamel (80 g / 80 g / 1 L)"), obs: T("ver receita própria", "ver receta propia", "see that recipe") },
      { q: 500, u: "g", nome: T("presunto fatiado fino", "jamón cocido en fetas finas", "thinly sliced ham") },
      { q: null, u: "", nome: T("queijo fatiado (mussarela ou prato)", "queso en fetas (mozzarella o similar)", "sliced cheese (mozzarella or similar)"), obs: T("sugestão de partida: 500 g — não confirmado", "sugerencia de partida: 500 g — no confirmado", "starting suggestion: 500 g — not confirmed"), escala: false },
      { q: null, u: "", nome: T("queijo ralado pra finalizar", "queso rallado para terminar", "grated cheese to finish"), obs: T("sugestão: 100 g — não confirmado", "sugerencia: 100 g — no confirmado", "suggestion: 100 g — not confirmed"), escala: false },
      { q: null, u: "", nome: T("massa de lasanha", "masa de lasaña", "lasagna pasta"), obs: T("tipo e quantidade não registrados — fresca, pré-cozida ou seca", "tipo y cantidad no registrados — fresca, precocida o seca", "type and amount not recorded — fresh, pre-cooked or dried"), escala: false },
      { q: null, u: "", nome: T("manteiga", "manteca", "butter"), obs: T("pra untar", "para untar", "for greasing"), escala: false },
    ],
    grade: [
      { col: 1, de: 0, ate: 0, titulo: T("ragù na temperatura certa", "ragù a la temperatura correcta", "ragù at the right temperature"), detalhe: T("amorno, nunca gelado", "tibio, nunca frío", "warmed, never cold") },
      { col: 2, de: 5, ate: 5, titulo: T("massa", "masa", "pasta"), detalhe: T("al dente menos 1 min, se for seca", "al dente menos 1 min, si es seca", "al dente minus 1 min, if dried") },
      { col: 3, de: 0, ate: 6, titulo: T("camadas", "capas", "layers"), detalhe: T("massa, ragù, presunto, queijo — 3 a 4 vezes", "masa, ragù, jamón, queso — 3 a 4 veces", "pasta, ragù, ham, cheese — 3 to 4 times") },
      { col: 4, de: 1, ate: 4, titulo: T("cobertura", "cobertura", "topping"), detalhe: T("bechamel morno até as bordas, queijo ralado", "bechamel tibio hasta los bordes, queso rallado", "warm béchamel to the edges, grated cheese") },
      { col: 5, de: 0, ate: 6, titulo: T("forno e maçarico", "horno y soplete", "oven and torch"), detalhe: T("180 °C coberta 30 min + 15–20 min descoberta, depois maçarico", "180 °C tapada 30 min + 15–20 min destapada, después soplete", "180 °C covered 30 min + 15–20 min uncovered, then torch") },
    ],
    modo: [
      { t: T(
        "Se o ragù foi feito na véspera, tire da geladeira 1 hora antes e retire o excesso de gordura solidificada por cima — ragù gelado não molha a massa e deixa a lasanha com bordas duras.",
        "Si el ragù se hizo la víspera, sacalo de la heladera 1 hora antes y quitá el exceso de grasa solidificada encima — el ragù frío no moja la masa y deja la lasaña con bordes duros.",
        "If the ragù was made the day before, take it out of the fridge 1 hour ahead and skim off the solidified fat on top — cold ragù doesn't wet the pasta and leaves the lasagna with hard edges."), timer: 3600 },
      { t: T(
        "Se a massa for seca sem pré-cozimento, cozinhe até al dente menos 1 minuto e escorra num pano. Fresca ou pré-cozida entra direto — nesse caso o ragù precisa estar bem solto.",
        "Si la masa es seca sin precocción, cociná hasta al dente menos 1 minuto y escurrí en un repasador. Fresca o precocida entra directo — en ese caso el ragù tiene que estar bien suelto.",
        "If the pasta is dried with no pre-cooking, boil it to al dente minus 1 minute and drain on a towel. Fresh or pre-cooked goes in straight — in that case the ragù needs to be quite loose.") },
      { t: T(
        "Unte a travessa e espalhe uma concha fina de ragù no fundo, só para a massa não grudar.",
        "Untá la fuente y esparcí un cucharón fino de ragù en el fondo, solo para que la masa no se pegue.",
        "Grease the dish and spread a thin ladle of ragù on the bottom, just so the pasta doesn't stick.") },
      { t: T(
        "Monte as camadas, 3 a 4 vezes: massa, ragù espalhado até as bordas, presunto sem sobrepor demais, queijo fatiado. Na última camada, massa e por cima uma camada mais fina de ragù, para a massa não ficar exposta.",
        "Armá las capas, 3 a 4 veces: masa, ragù esparcido hasta los bordes, jamón sin superponer demasiado, queso en fetas. En la última capa, masa y encima una capa más fina de ragù, para que la masa no quede expuesta.",
        "Build the layers, 3 to 4 times: pasta, ragù spread to the edges, ham without overlapping too much, sliced cheese. On the last layer, pasta topped with a thinner layer of ragù, so the pasta isn't left exposed.") },
      { t: T(
        "Espalhe o bechamel morno sobre tudo, até as bordas — é ele que sela. Queijo ralado por cima.",
        "Esparcí el bechamel tibio sobre todo, hasta los bordes — es el que sella. Queso rallado encima.",
        "Spread the warm béchamel over everything, to the edges — it's what seals it. Grated cheese on top.") },
      { t: T(
        "Cubra com papel-alumínio untado por dentro (para não grudar no bechamel) e leve ao forno a 180 °C por 30 minutos.",
        "Cubrí con papel aluminio untado por dentro (para que no se pegue al bechamel) y llevá al horno a 180 °C por 30 minutos.",
        "Cover with foil greased on the inside (so it doesn't stick to the béchamel) and bake at 180 °C for 30 minutes."), timer: 1800 },
      { t: T(
        "Destampe e asse mais 15 a 20 minutos, até borbulhar nas bordas. Confira o miolo com uma faca no centro — precisa sair quente, encostando no lábio.",
        "Destapá y horneá 15 a 20 minutos más, hasta que burbujee en los bordes. Comprobá el centro con un cuchillo — tiene que salir caliente, tocando el labio.",
        "Uncover and bake 15 to 20 more minutes, until it bubbles at the edges. Check the center with a knife — it should come out hot to the touch."), timer: 1050 },
      { t: T(
        "Descanse 15 minutos fora do forno antes do maçarico e do corte — sem isso, a lasanha desmonta ao cortar.",
        "Dejá reposar 15 minutos fuera del horno antes del soplete y el corte — sin eso, la lasaña se desarma al cortar.",
        "Rest 15 minutes out of the oven before torching and cutting — without this, the lasagna falls apart when sliced."), timer: 900 },
      { t: T(
        "Maçarico em chama média, a 10–15 cm, em movimento contínuo, até o bechamel com queijo ganhar manchas douradas e bolhas escuras nos pontos altos — não pare num ponto só, ou queima antes de dourar em volta. Corte com faca grande, em pedaços de uns 8 × 10 cm, com espátula por baixo.",
        "Soplete en llama media, a 10–15 cm, en movimiento continuo, hasta que el bechamel con queso tenga manchas doradas y burbujas oscuras en los puntos altos — no te quedes en un solo punto, o se quema antes de dorar alrededor. Cortá con cuchillo grande, en trozos de unos 8 × 10 cm, con espátula por debajo.",
        "Torch on medium flame, 10–15 cm away, in continuous motion, until the cheesy béchamel gets golden patches and dark bubbles at the high points — don't linger on one spot, or it burns before browning around it. Cut with a large knife, into pieces of about 8 × 10 cm, with a spatula underneath.") },
    ],
    notas: [
      T("Bechamel só no topo é escolha da casa. Para uma versão mais cremosa, use 1,5 L e espalhe uma camada fina também sobre o ragù em cada andar — o corte fica menos definido.",
        "El bechamel solo encima es elección de la casa. Para una versión más cremosa, usá 1,5 L y esparcí una capa fina también sobre el ragù en cada piso — el corte queda menos definido.",
        "Béchamel on top only is the house's choice. For a creamier version, use 1.5 L and spread a thin layer over the ragù on every layer too — the slices come out less clean-cut."),
      T("Presunto solta água: fatie fino e sem empilhar — empilhado forma bolsão de água que amolece a massa.",
        "El jamón suelta agua: cortalo fino y sin apilar — apilado forma una bolsa de agua que ablanda la masa.",
        "Ham releases water: slice it thin and don't stack it — stacked, it forms a water pocket that softens the pasta."),
      T("Se o forno falhar, monte numa travessa que aguente a chama e cozinhe tampada no fogão, fogo mínimo com difusor, 40 a 50 minutos — a massa cozinha no vapor do ragù. Não fica igual, mas salva o jantar; o maçarico no fim resolve o topo.",
        "Si el horno falla, armá en una fuente que aguante la llama y cociná tapada en la hornalla, fuego mínimo con difusor, 40 a 50 minutos — la masa se cocina al vapor del ragù. No queda igual, pero salva la cena; el soplete al final resuelve la superficie.",
        "If the oven fails, assemble in a dish that can go on the burner and cook it covered on the stovetop, lowest heat with a diffuser, 40 to 50 minutes — the pasta cooks in the ragù's steam. It won't be the same, but it saves dinner; the torch at the end takes care of the top."),
      T("Melhor 20 minutos depois do forno do que na hora. Reaquece bem em porções, forno a 160 °C coberta por 20 minutos, ou air fryer em pedaço único a 150 °C por 10 minutos.",
        "Mejor 20 minutos después del horno que en el momento. Recalienta bien en porciones, horno a 160 °C cubierta 20 minutos, o air fryer en un solo trozo a 150 °C por 10 minutos.",
        "Better 20 minutes out of the oven than straight away. Reheats well in portions, oven at 160 °C covered for 20 minutes, or air fryer as a single piece at 150 °C for 10 minutes."),
      T("Congela montada e crua, sem maçaricar: vai ao forno ainda gelada, 1 hora coberta mais 20 minutos descoberta, com o maçarico no fim.",
        "Se congela armada y cruda, sin soplete: va al horno todavía fría, 1 hora tapada más 20 minutos destapada, con el soplete al final.",
        "Freezes assembled and unbaked, before torching: bake it still cold, 1 hour covered plus 20 minutes uncovered, with the torch at the end."),
      T("Queijo, queijo ralado e o tipo de massa ainda não foram registrados com precisão — os valores aqui são ponto de partida, não medida testada. Ajuste pelo que usar de fato.",
        "El queso, el queso rallado y el tipo de masa todavía no se registraron con precisión — los valores acá son un punto de partida, no una medida probada. Ajustá según lo que uses de verdad.",
        "The cheese, grated cheese and pasta type haven't been precisely recorded yet — the values here are a starting point, not a tested measurement. Adjust to whatever you actually use."),
    ],
  }
);

/* ===================== PAELLA (capítulo Arroz e massas rápidas) ===================== */

RECEITAS.push({
  id: "paella-mista-arborio",
  capitulo: "arroz",
  titulo: T("Paella mista com arroz arbóreo", "Paella mixta con arroz arbóreo", "Mixed paella with arborio rice"),
  kicker: T("ARROZ · SEM MEXER · CHAPA DIFUSORA SOBRE A BOCA DE 4,5 KW", "ARROZ · SIN REVOLVER · DIFUSOR SOBRE EL QUEMADOR DE 4,5 KW", "RICE · NO STIRRING · HEAT DIFFUSER ON THE 4.5 KW BURNER"),
  subtitulo: T(
    "Frango, linguiça e frutos do mar com arbóreo em vez de bomba — sofrito, açafrão no vinho, caldo de uma vez só e sem mexer.",
    "Pollo, embutido y mariscos con arbóreo en lugar de bomba — sofrito, azafrán en el vino, caldo de una sola vez y sin revolver.",
    "Chicken, sausage and seafood with arborio instead of bomba rice — sofrito, saffron steeped in wine, all the stock at once, and no stirring."
  ),
  principio: T(
    "Arbóreo tem mais amido que bomba e absorve menos líquido: mexido vira creme; parado, cozinha em grão solto, só que mais úmido que uma paella de verdade. Por isso o líquido entra todo de uma vez, em menos volume do que uma receita de risoto pediria, numa frigideira larga que mantém o arroz numa camada fina — e a chapa difusora sobre a boca de 4,5 kW dá o calor uniforme que uma paellera dá de fábrica.",
    "El arbóreo tiene más almidón que el bomba y absorbe menos líquido: revuelto se vuelve crema; quieto, cocina en grano suelto, aunque más húmedo que una paella de verdad. Por eso el líquido entra todo de una vez, en menos volumen del que pediría una receta de risotto, en una sartén ancha que mantiene el arroz en una capa fina — y el difusor sobre el quemador de 4,5 kW da el calor parejo que una paellera trae de fábrica.",
    "Arborio has more starch than bomba and absorbs less liquid: stirred, it turns creamy; left alone, it cooks into separate grains, just wetter than a true paella. That's why all the liquid goes in at once, in less volume than a risotto recipe would call for, in a wide pan that keeps the rice in a thin layer — and the heat diffuser on the 4.5 kW burner gives the even heat a paella pan gets for free."
  ),
  porcoes: 4, porcoesOpcoes: [2, 4, 6], ativo: 45, total: 50,
  utensilio: T("Frigideira larga e chapa difusora", "Sartén ancha y difusor de calor", "Wide skillet and heat diffuser"),
  faixa: T("CALDO TODO DE UMA VEZ, DEPOIS NÃO MEXA MAIS", "EL CALDO TODO DE UNA VEZ, DESPUÉS NO REVUELVAS MÁS", "ALL THE STOCK AT ONCE, THEN STOP STIRRING"),
  ingredientes: [
    { q: 300, u: "g", nome: T("arroz arbóreo", "arroz arbóreo", "arborio rice"), obs: T("1½ xícara", "1½ taza", "1½ cups") },
    { q: 2, u: "un", nome: T("sobrecoxas desossadas e sem pele", "muslos de pollo deshuesados y sin piel", "boneless, skinless chicken thighs"), obs: T("em pedaços pequenos", "en trozos pequeños", "in small pieces") },
    { q: 120, u: "g", nome: T("linguiça fina", "chorizo fino", "thin sausage"), obs: T("calabresa fina ou paio; toscana fresca também vai — ver notas", "chorizo fino o similar; fresca también sirve — ver notas", "thin smoked sausage; fresh Italian sausage also works — see notes") },
    { q: 400, u: "g", nome: T("kit paella (lula, polvo, camarão, mexilhão)", "kit de mariscos (calamar, pulpo, camarón, mejillón)", "seafood kit (squid, octopus, shrimp, mussels)"), obs: T("congelado — anéis e pedaços de lula, tentáculos de polvo, camarão e mexilhão descascados pré-cozidos; descongelado, escorrido e seco (~320 g). O sachê de tempero é opcional — ver notas", "congelado — anillos y trozos de calamar, tentáculos de pulpo, camarón y mejillón pelados precocidos; descongelado, escurrido y seco (~320 g). El sachet de condimento es opcional — ver notas", "frozen — squid rings and pieces, octopus tentacles, pre-cooked peeled shrimp and mussels; thawed, drained and dried (~320 g). The seasoning sachet is optional — see notes") },
    { q: 1, u: "un", nome: T("cebola pequena", "cebolla pequeña", "small onion"), obs: T("picada fininha", "picada fina", "finely chopped") },
    { q: 2, u: "dente", nome: T("alho", "ajo", "garlic"), obs: T("picado", "picado", "chopped") },
    { q: 1, u: "un", nome: T("tomate roma", "tomate perita", "roma tomato"), obs: T("ralado sem a pele, ou bem picado", "rallado sin piel, o bien picado", "grated without the skin, or finely chopped") },
    { q: 2, u: "cc", nome: T("páprica defumada", "pimentón ahumado", "smoked paprika") },
    { q: 0.5, u: "cc", nome: T("fios de açafrão", "hebras de azafrán", "saffron threads") },
    { q: 0.5, u: "xic", nome: T("vinho branco seco", "vino blanco seco", "dry white wine") },
    { q: 3.5, u: "xic", nome: T("caldo de galinha", "caldo de pollo", "chicken stock"), obs: T("quente, ~850 ml, + uma chaleira de reserva", "caliente, ~850 ml, + una pava de reserva", "hot, ~850 ml, + a kettle in reserve") },
    { q: 1, u: "xic", nome: T("ervilha congelada", "arvejas congeladas", "frozen peas") },
    { q: 1, u: "cs", nome: T("azeite", "aceite de oliva", "olive oil") },
    { q: null, u: "", nome: T("sal e pimenta-do-reino", "sal y pimienta negra", "salt and black pepper"), escala: false },
    { q: null, u: "", nome: T("salsinha picada e limão em gomos", "perejil picado y limón en gajos", "chopped parsley and lemon wedges"), obs: T("para servir", "para servir", "to serve"), escala: false },
  ],
  grade: [
    { col: 1, de: 1, ate: 2, titulo: T("frango e linguiça", "pollo y chorizo", "chicken and sausage"), detalhe: T("douram na própria gordura, reservados", "se doran en su propia grasa, reservados", "browned in their own fat, set aside") },
    { col: 2, de: 4, ate: 7, titulo: T("sofrito e páprica", "sofrito y pimentón", "sofrito and paprika"), detalhe: T("cebola, alho, tomate, páprica só pra perfumar", "cebolla, ajo, tomate, pimentón solo para aromatizar", "onion, garlic, tomato, paprika just to bloom") },
    { col: 3, de: 0, ate: 0, titulo: T("tosta o arroz", "tuesta el arroz", "toast the rice"), detalhe: T("grão envolvido na gordura, translúcido", "grano envuelto en grasa, translúcido", "grain coated in fat, translucent") },
    { col: 4, de: 8, ate: 9, titulo: T("açafrão no vinho", "azafrán en el vino", "saffron in the wine"), detalhe: T("infusão, depois deglaça", "infusión, después desglasa", "steeped, then deglazes") },
    { col: 5, de: 10, ate: 10, titulo: T("caldo, tudo de uma vez", "caldo, todo de una vez", "stock, all at once"), detalhe: T("camada fina, sem mexer, 8 min forte + 10 min baixo", "capa fina, sin revolver, 8 min fuerte + 10 min bajo", "thin layer, no stirring, 8 min strong + 10 min low") },
    { col: 6, de: 3, ate: 11, titulo: T("kit e ervilha", "kit y arvejas", "seafood kit and peas"), detalhe: T("aos 14 min o cru, aos 17 min o mexilhão", "a los 14 min lo crudo, a los 17 min el mejillón", "at 14 min the raw seafood, at 17 min the mussels") },
    { col: 7, de: 0, ate: 0, titulo: T("socarrat e descanso", "socarrat y reposo", "socarrat and rest"), detalhe: T("fogo alto 60–90 s, depois 5 min tampado", "fuego alto 60–90 s, después 5 min tapado", "high heat 60–90 s, then 5 min covered") },
  ],
  modo: [
    { t: T(
      "Descongele o kit de frutos do mar na geladeira, ou em água fria por 1 hora se estiver com pressa; escorra e seque bem no papel-toalha. Separe em dois montes: a lula, que é a única parte crua e precisa de 3 a 4 minutos de cozimento, e o camarão, o mexilhão e o polvo, que já vêm pré-cozidos e só precisam aquecer.",
      "Descongelá el kit de mariscos en la heladera, o en agua fría por 1 hora si tenés apuro; escurrí y secá bien con papel de cocina. Separá en dos montones: el calamar, que es la única parte cruda y necesita 3 a 4 minutos de cocción, y el camarón, el mejillón y el pulpo, que ya vienen precocidos y solo necesitan calentarse.",
      "Thaw the seafood kit in the fridge, or in cold water for 1 hour if you're short on time; drain and dry it well with paper towel. Split it into two piles: the squid, the only raw part, which needs 3 to 4 minutes of cooking, and the shrimp, mussels and octopus, which are already pre-cooked and only need warming through.") },
    { t: T(
      "Aqueça o caldo de galinha e mantenha quente em fogo mínimo ao lado — caldo frio esfria o cozimento do arroz.",
      "Calentá el caldo de pollo y mantenelo caliente a fuego mínimo al lado — el caldo frío enfría la cocción del arroz.",
      "Heat the chicken stock and keep it hot on the lowest heat alongside — cold stock cools down the rice as it cooks.") },
    { t: T(
      "Esfarele os fios de açafrão no vinho branco e deixe em infusão enquanto prepara o resto.",
      "Desmenuzá las hebras de azafrán en el vino blanco y dejá en infusión mientras preparás el resto.",
      "Crumble the saffron threads into the white wine and let it steep while you prep everything else.") },
    { t: T(
      "Azeite em fogo médio-alto. Doure o frango, mexendo, até cozido, 5 a 8 minutos. Junte a linguiça e doure mais 2 a 4 minutos. Retire os dois com escumadeira, deixando a gordura na frigideira.",
      "Aceite a fuego medio-alto. Dorá el pollo, mezclando, hasta cocido, 5 a 8 minutos. Sumá el chorizo y dorá 2 a 4 minutos más. Retirá los dos con espumadera, dejando la grasa en la sartén.",
      "Oil over medium-high heat. Brown the chicken, stirring, until cooked, 5 to 8 minutes. Add the sausage and brown 2 to 4 more minutes. Remove both with a slotted spoon, leaving the fat in the pan."), timer: 600 },
    { t: T(
      "Fogo médio: cebola e alho na gordura, 1 a 2 minutos até amaciar. Junte o tomate e cozinhe até secar e a gordura reaparecer. Páprica só nos últimos 30 segundos, para perfumar sem queimar.",
      "Fuego medio: cebolla y ajo en la grasa, 1 a 2 minutos hasta ablandar. Sumá el tomate y cociná hasta que se seque y reaparezca la grasa. Pimentón solo en los últimos 30 segundos, para aromatizar sin quemarse.",
      "Medium heat: onion and garlic in the fat, 1 to 2 minutes until soft. Add the tomato and cook until it dries out and the fat reappears. Paprika only in the last 30 seconds, to bloom without burning."), timer: 300 },
    { t: T(
      "Junte o arroz e mexa 1 a 2 minutos até cada grão estar envolvido na gordura e levemente translúcido. Sal generoso e pimenta.",
      "Sumá el arroz y mezclá 1 a 2 minutos hasta que cada grano esté envuelto en la grasa y ligeramente translúcido. Sal generosa y pimienta.",
      "Add the rice and stir for 1 to 2 minutes until every grain is coated in fat and lightly translucent. Generous salt and pepper.") },
    { t: T(
      "Entre com o vinho de açafrão, raspando o fundo da frigideira, e deixe quase secar.",
      "Agregá el vino de azafrán, raspando el fondo de la sartén, y dejá que se seque casi por completo.",
      "Add the saffron wine, scraping the bottom of the pan, and let it nearly evaporate.") },
    { t: T(
      "Despeje as 3½ xícaras de caldo de uma vez, espalhe o arroz numa camada uniforme e não mexa mais. Volte o frango e a linguiça por cima.",
      "Volcá las 3½ tazas de caldo de una vez, esparcí el arroz en una capa pareja y no revuelvas más. Devolvé el pollo y el chorizo encima.",
      "Pour in all 3½ cups of stock at once, spread the rice into an even layer and don't stir anymore. Put the chicken and sausage back on top.") },
    { t: T(
      "Fogo médio-alto por 8 minutos, borbulhando forte; depois fogo baixo por mais 10 minutos. Se algum ponto secar antes do arroz chegar no ponto, um pouco de caldo da chaleira só ali, sem mexer.",
      "Fuego medio-alto por 8 minutos, hirviendo fuerte; después fuego bajo por 10 minutos más. Si algún punto se seca antes de que el arroz esté a punto, un poco de caldo de la pava solo ahí, sin revolver.",
      "Medium-high heat for 8 minutes, bubbling hard; then low heat for another 10 minutes. If any spot dries out before the rice is done, a little stock from the kettle right there, without stirring."), timer: 1080 },
    { t: T(
      "Aos 14 minutos de cozimento, distribua por cima a lula e a ervilha, afundando de leve. Aos 17 minutos, o camarão, o mexilhão e o polvo, só para aquecer — 1 a 2 minutos, nunca mais, ou viram borracha.",
      "A los 14 minutos de cocción, distribuí encima el calamar y las arvejas, hundiendo apenas. A los 17 minutos, el camarón, el mejillón y el pulpo, solo para calentar — 1 a 2 minutos, nunca más, o se vuelven goma.",
      "At 14 minutes into cooking, scatter the squid and peas on top, pressing them in lightly. At 17 minutes, the shrimp, mussels and octopus, just to warm through — 1 to 2 minutes, never more, or they turn rubbery.") },
    { t: T(
      "Quando o líquido sumir da superfície e o arroz estiver al dente, fogo alto por 60 a 90 segundos para o socarrat — cheire: tostado é o ponto, queimado passou.",
      "Cuando el líquido desaparezca de la superficie y el arroz esté al dente, fuego alto por 60 a 90 segundos para el socarrat — oliscá: tostado es el punto, quemado ya pasó.",
      "When the liquid disappears from the surface and the rice is al dente, high heat for 60 to 90 seconds for the socarrat — smell it: toasted is the point, burnt has gone too far."), timer: 75 },
    { t: T(
      "Fora do fogo, cubra com um pano de prato limpo, 5 minutos de descanso. Sirva na própria frigideira, com salsinha e limão em gomos à parte.",
      "Fuera del fuego, cubrí con un repasador limpio, 5 minutos de reposo. Serví en la misma sartén, con perejil y limón en gajos aparte.",
      "Off the heat, cover with a clean kitchen towel, 5 minutes to rest. Serve straight from the pan, with parsley and lemon wedges on the side."), timer: 300 },
  ],
  notas: [
    T("Adaptada de uma receita de \"risoto à paella\" (arbóreo, concha a concha, parmesão no fim) — a original é um risoto fantasiado; esta troca o método pelo da paella e tira o queijo, que briga com mexilhão e lula.",
      "Adaptada de una receta de \"risotto a la paella\" (arbóreo, cucharón a cucharón, parmesano al final) — la original es un risotto disfrazado; esta cambia el método por el de la paella y saca el queso, que choca con el mejillón y el calamar.",
      "Adapted from a \"risotto styled as paella\" recipe (arborio, ladle by ladle, parmesan at the end) — the original is a risotto in disguise; this one swaps in the paella method and drops the cheese, which clashes with mussels and squid."),
    T("O kit usado foi o Noronha Pescados de 400 g. Congelado vira cerca de 320 g depois de escorrido — com frango e linguiça no prato, um kit basta para 4 pessoas; só de frutos do mar, ficaria curto, e o certo é usar 2 kits.",
      "El kit usado fue el Noronha Pescados de 400 g. Congelado se vuelve unos 320 g después de escurrido — con pollo y chorizo en el plato, un kit alcanza para 4 personas; solo de mariscos, quedaría corto, y lo correcto es usar 2 kits.",
      "The kit used was the 400 g Noronha Pescados one. Frozen, it comes to about 320 g once drained — with chicken and sausage in the dish, one kit is enough for 4 people; seafood alone, it would fall short, and the right call is 2 kits."),
    T("Confira o polvo ao descongelar: deve ceder macio ao apertar, sinal de que já foi cozido, como o resto do kit. Se vier cru e firme, não serve direto neste prato — precisaria de uns 40 minutos de cozimento à parte antes de entrar.",
      "Comprobá el pulpo al descongelar: debe ceder blando al apretar, señal de que ya fue cocido, como el resto del kit. Si viene crudo y firme, no sirve directo en este plato — necesitaría unos 40 minutos de cocción aparte antes de entrar.",
      "Check the octopus as it thaws: it should give softly when pressed, a sign it's already cooked, like the rest of the kit. If it comes raw and firm, it won't work straight in this dish — it would need about 40 minutes of separate cooking first."),
    T("O sachê de tempero do kit (8 g: alho, cebola, páprica, cúrcuma, pimentão, salsa, noz-moscada, coentro e pimenta) muda o perfil — a cúrcuma amarela o arroz por cima do açafrão, e o coentro desvia o sabor. Melhor pular; se usar, no máximo metade, reduzindo a páprica para 1 colher (chá).",
      "El sachet de condimento del kit (8 g: ajo, cebolla, pimentón, cúrcuma, pimiento, perejil, nuez moscada, cilantro y pimienta) cambia el perfil — la cúrcuma amarillea el arroz sobre el azafrán, y el cilantro desvía el sabor. Mejor omitirlo; si se usa, como máximo la mitad, reduciendo el pimentón a 1 cucharadita.",
      "The kit's seasoning sachet (8 g: garlic, onion, paprika, turmeric, bell pepper, parsley, nutmeg, cilantro and pepper) changes the profile — the turmeric yellows the rice over the saffron, and the cilantro throws off the flavor. Best to skip it; if used, at most half, cutting the paprika back to 1 teaspoon."),
    T("O kit tem metabissulfito como conservante; secar bem e descartar a água do descongelamento ajuda a tirar o gosto residual.",
      "El kit tiene metabisulfito como conservante; secar bien y descartar el agua del descongelamiento ayuda a quitar el gusto residual.",
      "The kit contains metabisulfite as a preservative; drying it well and discarding the thawing water helps get rid of the residual taste."),
    T("Calabresa fina ou paio já trazem defumado e gordura vermelha; a toscana fresca traz gordura e sabor, mas nada de páprica — por isso a defumada em 2 colheres (chá). Com calabresa, pode voltar a 1 colher (chá) de páprica doce.",
      "El chorizo fino ya trae ahumado y grasa roja; la salchicha fresca aporta grasa y sabor, pero nada de pimentón — por eso el ahumado en 2 cucharaditas. Con chorizo, se puede volver a 1 cucharadita de pimentón dulce.",
      "Thin smoked sausage already brings smokiness and red fat; fresh Italian sausage brings fat and flavor but no paprika at all — hence the smoked paprika at 2 teaspoons. With smoked sausage, it can go back down to 1 teaspoon of sweet paprika."),
    T("Sem queijo: parmesão em cima de frutos do mar não combina, e a cremosidade que ele traria é justamente o que não se quer aqui.",
      "Sin queso: el parmesano sobre mariscos no combina, y la cremosidad que aportaría es justo lo que no se quiere acá.",
      "No cheese: parmesan on top of seafood doesn't work, and the creaminess it would bring is exactly what's not wanted here."),
    T("Frango é opcional: sem ele, é paella de frutos do mar, e o caldo pode virar de peixe ou de camarão.",
      "El pollo es opcional: sin él, es paella de mariscos, y el caldo puede pasar a ser de pescado o de camarón.",
      "Chicken is optional: without it, this becomes a seafood paella, and the stock can switch to fish or shrimp stock."),
  ],
});
