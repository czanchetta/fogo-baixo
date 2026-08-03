/* ===================== CARNES ===================== */
RECEITAS.push(
  {
    id: "prime-rib-chapa",
    capitulo: "carnes",
    titulo: T("Prime rib na chapa", "Prime rib a la plancha", "Prime rib on the griddle"),
    kicker: T("DUAS FASES · PEÇA ALTA DE 4 CM", "DOS FASES · PIEZA ALTA DE 4 CM", "TWO PHASES · 4 CM THICK CUT"),
    subtitulo: T(
      "Selar forte e depois fogo mínimo virando a cada minuto — a chapa vira um forno.",
      "Sellar fuerte y después fuego mínimo volteando cada minuto — la plancha se vuelve un horno.",
      "Sear hard, then minimum heat flipping every minute — the griddle becomes an oven."
    ),
    porcoes: 1, porcoesOpcoes: [1, 2, 4], ativo: 25, total: 45,
    utensilio: T("Chapa removível sobre a boca alta", "Plancha desmontable sobre el quemador potente", "Removable griddle over the big burner"),
    faixa: T("GOTA D'ÁGUA DANÇA E SOME EM 1–2 SEGUNDOS", "LA GOTA DE AGUA BAILA Y DESAPARECE EN 1–2 SEGUNDOS", "A WATER DROP SKITTERS AND VANISHES IN 1–2 SECONDS"),
    ingredientes: [
      { q: 1, u: "peca", alt: { q: 700, u: "g" }, nome: T("prime rib", "prime rib", "prime rib"), obs: T("~4 cm de altura", "~4 cm de altura", "~4 cm thick") },
      { q: 1, u: "cs", alt: { q: 12, u: "g" }, nome: T("sal grosso", "sal gruesa", "coarse salt"), obs: T("generoso, só na hora", "generosa, solo al momento", "generous, only at the last moment") },
      { q: 1, u: "cc", alt: { q: 5, u: "ml" }, nome: T("banha ou óleo", "manteca o aceite", "lard or oil"), obs: T("filme fino na chapa", "película fina en la plancha", "thin film on the griddle") },
      { q: 0.5, u: "cc", alt: { q: 1, u: "g" }, nome: T("pimenta-do-reino", "pimienta negra", "black pepper"), obs: T("só depois de selar", "solo después de sellar", "only after searing") },
    ],
    grade: [
      { col: 1, de: 0, ate: 0, titulo: T("secar e atemperar", "secar y atemperar", "dry and temper"), detalhe: T("papel toalha · 30–40 min fora da geladeira", "papel de cocina · 30–40 min fuera de la nevera", "paper towel · 30–40 min out of the fridge") },
      { col: 2, de: 0, ate: 1, titulo: T("salgar na hora", "salar al momento", "salt at the last moment"), detalhe: T("generoso, só ao ir para a chapa", "generosa, solo al ir a la plancha", "generous, only as it goes on") },
      { col: 3, de: 0, ate: 2, titulo: T("selar na chapa quente", "sellar en la plancha caliente", "sear on the hot griddle"), detalhe: T("2–3 min por lado", "2–3 min por lado", "2–3 min per side") },
      { col: 4, de: 0, ate: 3, titulo: T("fogo mínimo, virar a cada minuto", "fuego mínimo, voltear cada minuto", "minimum heat, flip every minute"), detalhe: T("6–10 min · cut-and-peek", "6–10 min · cortar y mirar", "6–10 min · cut and peek") },
      { col: 5, de: 0, ate: 3, titulo: T("selar as bordas de gordura", "sellar los bordes de grasa", "sear the fat edges"), detalhe: T("30 s na vertical, com pinça", "30 s en vertical, con pinzas", "30 s upright, with tongs") },
      { col: 6, de: 0, ate: 3, titulo: T("descansar", "reposar", "rest"), detalhe: T("8–10 min", "8–10 min", "8–10 min") },
    ],
    modo: [
      { t: T(
        "Seque muito bem com papel toalha e deixe 30 a 40 minutos fora da geladeira. Centro gelado é o maior inimigo.",
        "Seca muy bien con papel de cocina y deja 30 a 40 minutos fuera de la nevera. El centro helado es el mayor enemigo.",
        "Dry thoroughly with paper towel and leave it 30 to 40 minutes out of the fridge. A cold centre is the biggest enemy.") },
      { t: T(
        "Pré-aqueça a chapa 5 a 8 minutos em registro baixo-médio, para o calor espalhar. A chama concentra no centro, então sele no centro mesmo. Teste com uma gota d'água: ela deve dançar e sumir em 1 a 2 segundos.",
        "Precalienta la plancha 5 a 8 minutos a fuego bajo-medio, para que el calor se reparta. La llama se concentra en el centro, así que sella justo ahí. Prueba con una gota de agua: debe bailar y desaparecer en 1 o 2 segundos.",
        "Preheat the griddle 5 to 8 minutes on low-medium so the heat spreads. The flame concentrates in the centre, so sear there. Test with a drop of water: it should skitter and vanish in 1 to 2 seconds."), timer: 420 },
      { t: T(
        "Sal generoso só agora. Filme fino de banha ou óleo na chapa quente.",
        "Sal generosa solo ahora. Película fina de manteca o aceite en la plancha caliente.",
        "Generous salt only now. A thin film of lard or oil on the hot griddle.") },
      { t: T(
        "Sele 2 a 3 minutos de cada lado, até formar crosta bonita.",
        "Sella 2 a 3 minutos por cada lado, hasta formar una costra bonita.",
        "Sear 2 to 3 minutes per side, until a good crust forms."), timer: 150 },
      { t: T(
        "Baixe para o fogo mínimo e vire a cada minuto por mais 6 a 10 minutos, conforme o ponto. Virar com frequência cozinha o centro de forma uniforme.",
        "Baja al fuego mínimo y voltea cada minuto durante 6 a 10 minutos más, según el punto. Voltear seguido cocina el centro de forma uniforme.",
        "Drop to minimum heat and flip every minute for another 6 to 10 minutes, depending on doneness. Frequent flipping cooks the centre evenly."), timer: 480 },
      { t: T(
        "Sele as bordas de gordura na vertical, cerca de 30 segundos, segurando com a pinça. Pimenta-do-reino agora — antes ela queima.",
        "Sella los bordes de grasa en vertical, unos 30 segundos, sujetando con pinzas. La pimienta negra ahora — antes se quema.",
        "Sear the fat edges upright, about 30 seconds, holding with tongs. Black pepper now — earlier it burns."), timer: 30 },
      { t: T(
        "A partir dos 6 minutos de fogo baixo, faça um corte pequeno no centro e espie: ao ponto para menos é rosado quente; vermelho frio pede mais tempo.",
        "A partir de los 6 minutos de fuego bajo, haz un corte pequeño en el centro y mira: al punto para menos es rosado caliente; rojo frío pide más tiempo.",
        "From 6 minutes into the low-heat phase, make a small cut in the centre and look: medium-rare is warm pink; cold red needs more time.") },
      { t: T(
        "Descanse 8 a 10 minutos. Peça alta precisa desse tempo para redistribuir os sucos.",
        "Deja reposar 8 a 10 minutos. Una pieza alta necesita ese tiempo para redistribuir los jugos.",
        "Rest 8 to 10 minutes. A thick cut needs that time to redistribute its juices."), timer: 540 },
    ],
    notas: [
      T("Peça fina (~2 cm) é outro método: 2 a 2,5 minutos por lado virando uma vez só, 20–30 min fora da geladeira, descanso de 5 min. Cada 30 segundos a mais muda o ponto.",
        "La pieza fina (~2 cm) es otro método: 2 a 2,5 minutos por lado volteando una sola vez, 20–30 min fuera de la nevera, reposo de 5 min. Cada 30 segundos de más cambia el punto.",
        "A thin cut (~2 cm) is a different method: 2 to 2.5 minutes per side flipping once only, 20–30 min out of the fridge, 5 min rest. Every extra 30 seconds changes the doneness."),
      T("Molho de fond: devolva a chapa ao fogo baixo e deglaceie com um pouco de cachaça ou shoyu mais manteiga. Se levar shoyu, alivie o sal do resto do prato.",
        "Salsa de fondo: devuelve la plancha al fuego bajo y desglasa con un poco de cachaça o salsa de soja más mantequilla. Si lleva soja, alivia la sal del resto del plato.",
        "Pan sauce: return the griddle to low heat and deglaze with a little cachaça or soy sauce plus butter. If it has soy, ease off the salt elsewhere on the plate."),
      T("Use a chapa removível, não a integrada: a boca alta tem calor de recuperação melhor.",
        "Usa la plancha desmontable, no la integrada: el quemador potente tiene mejor calor de recuperación.",
        "Use the removable griddle, not the built-in one: the big burner has better heat recovery."),
    ],
  },

  {
    id: "smashed-potatoes",
    capitulo: "carnes",
    titulo: T("Smashed potatoes na air fryer", "Patatas aplastadas en freidora de aire", "Smashed potatoes in the air fryer"),
    kicker: T("SUPERFÍCIE IRREGULAR · GORDURA GENEROSA · NÃO MEXER", "SUPERFICIE IRREGULAR · GRASA GENEROSA · NO REMOVER", "ROUGH SURFACE · GENEROUS FAT · DON'T STIR"),
    subtitulo: T(
      "Rachaduras e bordas soltas são o que vira crocância. Não tente arrumar.",
      "Las grietas y los bordes sueltos son lo que se vuelve crujiente. No intentes arreglarlos.",
      "Cracks and loose edges are what turn crisp. Don't tidy them up."
    ),
    porcoes: 2, porcoesOpcoes: [2, 4], ativo: 15, total: 40,
    utensilio: T("Air fryer", "Freidora de aire", "Air fryer"),
    faixa: T("GORDURA DE MENOS É O ERRO Nº 1 NA AIR FRYER", "POCA GRASA ES EL ERROR Nº 1 EN LA FREIDORA DE AIRE", "TOO LITTLE FAT IS THE #1 AIR FRYER MISTAKE"),
    ingredientes: [
      { q: 4, u: "un", alt: { q: 600, u: "g" }, nome: T("batatas médias", "patatas medianas", "medium potatoes"), obs: T("inteiras, com casca", "enteras, con piel", "whole, skin on") },
      { q: 1, u: "cs", alt: { q: 15, u: "g" }, nome: T("sal grosso", "sal gruesa", "coarse salt"), obs: T("para a água", "para el agua", "for the water") },
      { q: 3, u: "cs", alt: { q: 45, u: "ml" }, nome: T("banha ou azeite", "manteca o aceite de oliva", "lard or olive oil"), obs: T("dos dois lados", "por ambos lados", "on both sides") },
      { q: 1, u: "pitada", alt: { q: 2, u: "g" }, nome: T("sal fino", "sal fina", "fine salt"), obs: T("leve, por cima", "ligera, por encima", "light, on top"), escala: false },
      { q: 1, u: "ramo", alt: { q: 2, u: "g" }, nome: T("alecrim", "romero", "rosemary") },
    ],
    grade: [
      { col: 1, de: 0, ate: 1, titulo: T("cozinhar inteiras", "cocer enteras", "boil whole"), detalhe: T("água bem salgada · ~20 min", "agua bien salada · ~20 min", "well-salted water · ~20 min") },
      { col: 2, de: 0, ate: 1, titulo: T("escorrer e secar", "escurrir y secar", "drain and dry"), detalhe: T("2–3 min soltando vapor", "2–3 min soltando vapor", "2–3 min letting steam off") },
      { col: 3, de: 0, ate: 1, titulo: T("amassar com o fundo do copo", "aplastar con el culo de un vaso", "smash with the base of a glass"), detalhe: T("até ~1,5 cm · rachaduras = crocância", "hasta ~1,5 cm · grietas = crujiente", "to ~1.5 cm · cracks = crunch") },
      { col: 4, de: 0, ate: 4, titulo: T("gordura, sal e alecrim", "grasa, sal y romero", "fat, salt and rosemary"), detalhe: T("dos dois lados, inclusive nos pedacinhos", "por ambos lados, incluso en los trocitos", "both sides, including the loose bits") },
      { col: 5, de: 0, ate: 4, titulo: T("air fryer 200 °C", "freidora de aire 200 °C", "air fryer 200 °C"), detalhe: T("15–18 min · sem virar e sem mexer", "15–18 min · sin voltear ni remover", "15–18 min · no flipping, no stirring") },
    ],
    modo: [
      { t: T(
        "Cozinhe as batatas inteiras em água bem salgada até o garfo entrar fácil, cerca de 20 minutos.",
        "Cuece las patatas enteras en agua bien salada hasta que el tenedor entre fácil, unos 20 minutos.",
        "Boil the potatoes whole in well-salted water until a fork slides in easily, about 20 minutes."), timer: 1200 },
      { t: T(
        "Escorra e deixe secar 2 a 3 minutos soltando vapor.",
        "Escurre y deja secar 2 a 3 minutos soltando vapor.",
        "Drain and let them dry for 2 to 3 minutes, steaming off."), timer: 150 },
      { t: T(
        "Amasse cada uma com o fundo de um copo até uns 1,5 cm. Rachaduras e bordas irregulares são o que vira crocância — não re-formate se desmontar.",
        "Aplasta cada una con el culo de un vaso hasta unos 1,5 cm. Las grietas y bordes irregulares son lo que se vuelve crujiente — no las rearmes si se desmontan.",
        "Smash each one with the base of a glass to about 1.5 cm. Cracks and ragged edges are what turn crisp — do not reshape them if they fall apart.") },
      { t: T(
        "Gordura generosa dos dois lados, inclusive nos pedacinhos soltos. Sal leve por cima (a água já salgou por dentro) e alecrim.",
        "Grasa generosa por ambos lados, incluso en los trocitos sueltos. Sal ligera por encima (el agua ya saló por dentro) y romero.",
        "Generous fat on both sides, including the loose bits. Light salt on top (the water already seasoned the inside) and rosemary.") },
      { t: T(
        "Air fryer a 200 °C por 15 a 18 minutos, sem virar e sem mexer. Cesta pequena: duas levas de duas batatas — amontoada não croca.",
        "Freidora de aire a 200 °C durante 15 a 18 minutos, sin voltear ni remover. Cesta pequeña: dos tandas de dos patatas — amontonadas no crujen.",
        "Air fryer at 200 °C for 15 to 18 minutes, no flipping, no stirring. Small basket: two batches of two potatoes — piled up they will not crisp."), timer: 1000 },
    ],
    notas: [
      T("Batata muito cozida solta mais umidade: compense com mais gordura.",
        "La patata muy cocida suelta más humedad: compensa con más grasa.",
        "Overcooked potato releases more moisture: compensate with more fat."),
      T("Se precisarem esperar, 2 a 3 minutos de volta na air fryer re-crocam.",
        "Si tienen que esperar, 2 a 3 minutos de vuelta en la freidora las vuelven a poner crujientes.",
        "If they have to wait, 2 to 3 minutes back in the air fryer re-crisps them."),
      T("Forno para quatro batatas é desperdício — a circulação de ar da air fryer croca até mais.",
        "El horno para cuatro patatas es un desperdicio — la circulación de aire de la freidora las deja incluso más crujientes.",
        "An oven for four potatoes is a waste — the air fryer's circulation crisps them even better."),
    ],
  },

  {
    id: "medalhoes-suinos",
    capitulo: "carnes",
    titulo: T("Medalhões de filé mignon suíno ao molho de mostarda", "Medallones de solomillo de cerdo a la mostaza", "Pork tenderloin medallions in mustard sauce"),
    kicker: T("ALMOÇO A DOIS · SELAR E TERMINAR NO MOLHO", "ALMUERZO PARA DOS · SELLAR Y TERMINAR EN LA SALSA", "LUNCH FOR TWO · SEAR AND FINISH IN THE SAUCE"),
    subtitulo: T(
      "Corte magro: sela só para a crosta e deixa o molho terminar o cozimento devagar.",
      "Corte magro: se sella solo por la costra y se deja que la salsa termine la cocción despacio.",
      "A lean cut: sear only for the crust and let the sauce finish the cooking slowly."
    ),
    porcoes: 2, porcoesOpcoes: [2, 4], ativo: 30, total: 35,
    utensilio: T("Inox de fundo grosso ou ferro fundido", "Inox de fondo grueso o hierro fundido", "Heavy stainless or cast iron"),
    faixa: T("SELE COM O CENTRO AINDA CRU — O MOLHO TERMINA", "SELLA CON EL CENTRO AÚN CRUDO — LA SALSA TERMINA", "SEAR WITH THE CENTRE STILL RAW — THE SAUCE FINISHES IT"),
    ingredientes: [
      { q: 650, u: "g", nome: T("filé mignon suíno", "solomillo de cerdo", "pork tenderloin"), obs: T("2 cordões, em medalhões de 2,5 cm", "2 piezas, en medallones de 2,5 cm", "2 whole loins, in 2.5 cm medallions") },
      { q: 1, u: "cc", alt: { q: 6, u: "g" }, nome: T("sal", "sal", "salt"), obs: T("leve — o shoyu já salga", "ligera — la salsa de soja ya sala", "light — the soy sauce already salts") },
      { q: 0.5, u: "cc", alt: { q: 1, u: "g" }, nome: T("pimenta-do-reino", "pimienta negra", "black pepper"), obs: T("moída na hora", "molida al momento", "freshly ground") },
      { q: 1, u: "cs", alt: { q: 15, u: "ml" }, nome: T("óleo", "aceite", "oil") },
      { q: 2, u: "cs", alt: { q: 30, u: "g" }, nome: T("manteiga gelada", "mantequilla fría", "cold butter"), obs: T("metade no início, metade no fim", "mitad al principio, mitad al final", "half at the start, half at the end") },
      { q: 1, u: "dente", alt: { q: 5, u: "g" }, nome: T("alho", "ajo", "garlic"), obs: T("amassado", "aplastado", "smashed") },
      { q: 2, u: "cs", alt: { q: 30, u: "ml" }, nome: T("cachaça", "cachaça", "cachaça") },
      { q: 1, u: "cs", alt: { q: 15, u: "g" }, nome: T("mostarda Dijon", "mostaza de Dijon", "Dijon mustard") },
      { q: 1, u: "cs", alt: { q: 15, u: "ml" }, nome: T("shoyu", "salsa de soja", "soy sauce") },
      { q: 100, u: "ml", nome: T("creme de leite", "nata líquida", "heavy cream") },
    ],
    grade: [
      { col: 1, de: 0, ate: 0, titulo: T("cortar 2,5 cm e secar", "cortar 2,5 cm y secar", "cut 2.5 cm and dry"), detalhe: T("a ponta fina dobra com palito", "la punta fina se dobla con un palillo", "fold the thin tail and pin it") },
      { col: 2, de: 0, ate: 2, titulo: T("temperar só na hora", "sazonar solo al momento", "season at the last moment"), detalhe: T("sal leve e pimenta", "sal ligera y pimienta", "light salt and pepper") },
      { col: 3, de: 0, ate: 3, titulo: T("selar e retirar", "sellar y retirar", "sear and remove"), detalhe: T("2 min · virar · 2 min · centro cru", "2 min · voltear · 2 min · centro crudo", "2 min · flip · 2 min · raw centre") },
      { col: 4, de: 4, ate: 5, titulo: T("manteiga e alho", "mantequilla y ajo", "butter and garlic"), detalhe: T("só até perfumar", "solo hasta que perfume", "just until fragrant") },
      { col: 5, de: 4, ate: 6, titulo: T("fora do fogo: cachaça", "fuera del fuego: cachaça", "off the heat: cachaça"), detalhe: T("volte e raspe o fond", "vuelve y raspa el fondo", "return and scrape the fond") },
      { col: 6, de: 4, ate: 9, titulo: T("mostarda, shoyu e creme", "mostaza, soja y nata", "mustard, soy and cream"), detalhe: T("reduzir até cobrir a colher", "reducir hasta que cubra la cuchara", "reduce until it coats the spoon") },
      { col: 7, de: 0, ate: 9, titulo: T("devolver a carne", "devolver la carne", "return the meat"), detalhe: T("aquecer gentil · provar o sal", "calentar suave · probar la sal", "warm gently · taste for salt") },
    ],
    modo: [
      { t: T(
        "Corte os medalhões com cerca de 2,5 cm de altura. O que manda no ponto é a espessura, não o diâmetro — se uns saírem mais largos, tudo bem. A ponta fina dobra sobre si mesma e prende com um palito para ganhar altura.",
        "Corta los medallones de unos 2,5 cm de alto. Lo que manda en el punto es el grosor, no el diámetro — si algunos salen más anchos, no pasa nada. La punta fina se dobla sobre sí misma y se sujeta con un palillo para ganar altura.",
        "Cut the medallions about 2.5 cm thick. What governs doneness is thickness, not diameter — if some come out wider, fine. Fold the thin tail back on itself and pin it with a toothpick to match the height.") },
      { t: T(
        "Seque muito bem com papel toalha. Carne úmida cozinha no vapor, não doura. Tempere com sal e pimenta só na hora de ir para a panela.",
        "Seca muy bien con papel de cocina. La carne húmeda se cuece al vapor, no dora. Sazona con sal y pimienta solo al ir a la sartén.",
        "Dry thoroughly with paper towel. Wet meat steams instead of browning. Season with salt and pepper only as it goes into the pan.") },
      { t: T(
        "Panela quente com o óleo. Acomode sem amontoar — se a panela for de fundo fino, sele em lotes pequenos e deixe ela recuperar entre um e outro.",
        "Sartén caliente con el aceite. Coloca sin amontonar — si la sartén es de fondo fino, sella en tandas pequeñas y deja que se recupere entre una y otra.",
        "Hot pan with the oil. Lay them out without crowding — if the pan is thin-bottomed, sear in small batches and let it recover between them.") },
      { t: T(
        "Sele 2 minutos, vire, mais 2 minutos — só até a crosta dourada dos dois lados. O centro fica cru de propósito. Retire e reserve num prato.",
        "Sella 2 minutos, voltea, otros 2 minutos — solo hasta la costra dorada por ambos lados. El centro queda crudo a propósito. Retira y reserva en un plato.",
        "Sear 2 minutes, flip, 2 more minutes — only until golden crust on both sides. The centre stays raw on purpose. Remove and set aside on a plate."), timer: 240 },
      { t: T(
        "Abaixe para fogo médio. Junte metade da manteiga e o alho amassado; refogue só até perfumar — nessa boca o alho queima em segundos.",
        "Baja a fuego medio. Añade la mitad de la mantequilla y el ajo aplastado; sofríe solo hasta que perfume — en ese quemador el ajo se quema en segundos.",
        "Drop to medium heat. Add half the butter and the smashed garlic; cook just until fragrant — on this burner garlic burns in seconds.") },
      { t: T(
        "Tire a panela do fogo e adicione a cachaça (álcool em panela muito quente pode inflamar). Volte ao fogo e raspe o fundo para soltar o fond.",
        "Retira la sartén del fuego y añade la cachaça (el alcohol en sartén muy caliente puede inflamarse). Vuelve al fuego y raspa el fondo para soltar el fondo tostado.",
        "Take the pan off the heat and add the cachaça (alcohol in a very hot pan can ignite). Return to the heat and scrape the base to lift the fond.") },
      { t: T(
        "Junte a mostarda, o shoyu e o creme de leite. Mexa e reduza em fogo baixo até encorpar e cobrir as costas da colher.",
        "Añade la mostaza, la salsa de soja y la nata. Remueve y reduce a fuego bajo hasta que espese y cubra el dorso de la cuchara.",
        "Add the mustard, soy sauce and cream. Stir and reduce over low heat until it thickens and coats the back of a spoon.") },
      { t: T(
        "Desligue e incorpore a manteiga gelada restante para dar brilho.",
        "Apaga e incorpora la mantequilla fría restante para dar brillo.",
        "Turn off the heat and whisk in the remaining cold butter for shine.") },
      { t: T(
        "Devolva os medalhões e o líquido que soltaram; aqueça gentilmente só para terminar o ponto. Rosado claro com sucos rosados = pronto. Prove o molho antes de acertar o sal.",
        "Devuelve los medallones y el líquido que soltaron; calienta suavemente solo para terminar el punto. Rosado claro con jugos rosados = listo. Prueba la salsa antes de corregir la sal.",
        "Return the medallions and any juices they released; warm gently just to finish cooking. Pale pink with pink juices means done. Taste the sauce before adjusting salt.") },
    ],
    notas: [
      T("Evite antiaderente: quase não forma fond, e o molho fica sem graça.",
        "Evita el antiadherente: casi no forma fondo, y la salsa queda sosa.",
        "Avoid non-stick: it barely builds fond, and the sauce comes out flat."),
      T("Variação clássica: troque o shoyu por uma pitada extra de sal e capriche na mostarda. Variação leve: pule o creme e faça só a redução de cachaça com manteiga gelada.",
        "Variación clásica: cambia la soja por una pizca extra de sal y carga la mostaza. Variación ligera: sáltate la nata y haz solo la reducción de cachaça con mantequilla fría.",
        "Classic variation: swap the soy for an extra pinch of salt and go heavier on the mustard. Light variation: skip the cream and make only the cachaça reduction with cold butter."),
      T("Acompanhamentos: arroz branco, purê ou batatas douradas, e pão para aproveitar o molho.",
        "Guarniciones: arroz blanco, puré o patatas doradas, y pan para aprovechar la salsa.",
        "Sides: white rice, mash or browned potatoes, and bread for the sauce."),
    ],
  },

  {
    id: "fraldinha-forno",
    capitulo: "carnes",
    titulo: T("Fraldinha marinada assada no forno", "Vacío marinado al horno", "Marinated flap steak in the oven"),
    kicker: T("PEÇA INTEIRA · FATIADA NA MESA", "PIEZA ENTERA · CORTADA EN LA MESA", "WHOLE CUT · SLICED AT THE TABLE"),
    subtitulo: T(
      "Servida quente, ao ponto+, fatiada fino contra as fibras na hora de servir.",
      "Servida caliente, al punto+, cortada fina a contrafibra al momento de servir.",
      "Served hot, medium-well, sliced thin against the grain as it goes to the table."
    ),
    porcoes: 4, porcoesOpcoes: [4, 6, 8], ativo: 20, total: 185,
    utensilio: T("Assadeira e papel alumínio", "Bandeja y papel de aluminio", "Roasting tray and foil"),
    faixa: T("A MARINADA TEM QUATRO FONTES DE SÓDIO — RESERVE UMA PARTE ANTES DE USAR NA CARNE E PROVE SÓ ESSA", "LA MARINADA TIENE CUATRO FUENTES DE SODIO — RESERVÁ UNA PARTE ANTES DE USARLA EN LA CARNE Y PROBÁ SOLO ESA", "THE MARINADE HAS FOUR SOURCES OF SODIUM — SET SOME ASIDE BEFORE IT TOUCHES THE MEAT AND TASTE ONLY THAT PART"),
    ingredientes: [
      { q: 1.2, u: "kg", alt: { q: 1200, u: "g" }, nome: T("fraldinha", "vacío", "flap steak (bavette)"), obs: T("peça inteira", "pieza entera", "whole cut") },
      { q: null, u: "", nome: T("sal", "sal", "salt") },
      { q: null, u: "", nome: T("shoyu", "salsa de soja", "soy sauce") },
      { q: null, u: "", nome: T("molho inglês", "salsa Worcestershire", "Worcestershire sauce") },
      { q: null, u: "", nome: T("nam pla", "salsa de pescado", "fish sauce") },
      { q: null, u: "", nome: T("vinagre", "vinagre", "vinegar") },
      { q: null, u: "", nome: T("cerveja", "cerveza", "beer") },
      { q: null, u: "", nome: T("louro", "laurel", "bay leaf") },
      { q: null, u: "", nome: T("pimenta-do-reino", "pimienta negra", "black pepper") },
      { q: null, u: "", nome: T("pimenta-da-Jamaica", "pimienta de Jamaica", "allspice") },
    ],
    grade: [
      { col: 1, de: 1, ate: 9, titulo: T("montar a marinada", "montar la marinada", "mix the marinade"), detalhe: T("reservar uma parte antes da carne e provar só essa", "reservar una parte antes de la carne y probar solo esa", "set some aside before the meat and taste only that") },
      { col: 2, de: 0, ate: 9, titulo: T("marinar 2 h", "marinar 2 h", "marinate 2 h"), detalhe: T("geladeira", "nevera", "refrigerated") },
      { col: 3, de: 0, ate: 9, titulo: T("1 h fora da geladeira", "1 h fuera de la nevera", "1 h out of the fridge"), detalhe: T("e secar bem a superfície", "y secar bien la superficie", "and dry the surface well") },
      { col: 4, de: 0, ate: 9, titulo: T("coberta com alumínio, 200 °C", "cubierta con aluminio, 200 °C", "covered with foil, 200 °C"), detalhe: T("checar a partir dos 45 min", "revisar a partir de los 45 min", "start checking at 45 min") },
      { col: 5, de: 0, ate: 9, titulo: T("sem alumínio + grill", "sin aluminio + gratinador", "foil off + grill"), detalhe: T("só para corar", "solo para dorar", "just to colour") },
      { col: 6, de: 0, ate: 9, titulo: T("descansar e fatiar", "reposar y cortar", "rest and slice"), detalhe: T("8–10 min · fino, contra as fibras", "8–10 min · fino, a contrafibra", "8–10 min · thin, against the grain") },
    ],
    modo: [
      { t: T(
        "Monte a marinada com sal, shoyu, molho inglês, nam pla, vinagre, cerveja, louro, pimenta-do-reino e pimenta-da-Jamaica. São quatro fontes de sódio juntas — reserve uma parte antes de colocar a carne, e prove só essa parte reservada.",
        "Monta la marinada con sal, salsa de soja, salsa Worcestershire, salsa de pescado, vinagre, cerveza, laurel, pimienta negra y pimienta de Jamaica. Son cuatro fuentes de sodio juntas — reservá una parte antes de poner la carne, y probá solo esa parte reservada.",
        "Mix the marinade: salt, soy sauce, Worcestershire, fish sauce, vinegar, beer, bay, black pepper and allspice. That is four sources of sodium at once — set a portion aside before the meat goes in, and taste only that reserved portion.") },
      { t: T("Marine 2 horas na geladeira.", "Marina 2 horas en la nevera.", "Marinate 2 hours in the fridge.") },
      { t: T(
        "Tire da geladeira 1 hora antes de ir para o forno. Centro frio é o maior inimigo sem termômetro.",
        "Sácala de la nevera 1 hora antes de ir al horno. El centro frío es el mayor enemigo sin termómetro.",
        "Take it out of the fridge 1 hour before it goes in the oven. A cold centre is the biggest enemy without a thermometer."), timer: 3600 },
      { t: T(
        "Seque bem a superfície com papel toalha — a marinada encharca a carne.",
        "Seca bien la superficie con papel de cocina — la marinada empapa la carne.",
        "Dry the surface well with paper towel — the marinade soaks the meat.") },
      { t: T(
        "Cubra com papel alumínio e leve ao forno a 200 °C.",
        "Cubre con papel de aluminio y lleva al horno a 200 °C.",
        "Cover with foil and put it in the oven at 200 °C.") },
      { t: T(
        "Comece a checar aos 45 minutos: faça um corte no ponto mais grosso e leia a cor. Vermelho frio no centro segue; rosa quente é mal para ao ponto; levemente rosado, quase sem rosa e ainda úmido é o ponto+, o ideal. Cinza por igual é bem passado e não volta atrás.",
        "Empieza a revisar a los 45 minutos: haz un corte en la parte más gruesa y lee el color. Rojo frío en el centro, sigue; rosa caliente es entre poco hecho y al punto; apenas rosado, casi sin rosa y todavía jugoso es el punto+, el ideal. Gris parejo es muy hecho y no tiene vuelta.",
        "Start checking at 45 minutes: cut into the thickest point and read the colour. Cold red in the centre means keep going; warm pink is rare to medium-rare; barely pink, almost none, still moist is medium-well — the target. Even grey is well done and there is no going back."), timer: 2700 },
      { t: T(
        "Perto do ponto, tire o alumínio e ligue o grill só para corar a superfície.",
        "Cerca del punto, retira el aluminio y enciende el gratinador solo para dorar la superficie.",
        "Near the target, take off the foil and turn on the grill just to colour the surface.") },
      { t: T(
        "Descanse 8 a 10 minutos antes de fatiar. Não pule.",
        "Deja reposar 8 a 10 minutos antes de cortar. No te lo saltes.",
        "Rest 8 to 10 minutes before slicing. Do not skip this."), timer: 540 },
      { t: T(
        "Leve a peça inteira e quente à mesa e fatie na hora, bem fino e contra as fibras — é o fator que mais pesa na maciez deste corte.",
        "Lleva la pieza entera y caliente a la mesa y córtala al momento, bien fina y a contrafibra — es el factor que más pesa en la terneza de este corte.",
        "Bring the whole hot cut to the table and slice it there, very thin and against the grain — it is the single biggest factor in this cut's tenderness.") },
    ],
    notas: [
      T("Tempo total aproximado: 50 a 65 minutos de forno para peça de ~1,2 kg a 200 °C.",
        "Tiempo total aproximado: 50 a 65 minutos de horno para una pieza de ~1,2 kg a 200 °C.",
        "Approximate total: 50 to 65 minutes in the oven for a ~1.2 kg cut at 200 °C."),
      T("Molho opcional com o líquido que sobrou da carne crua: leve à fervura plena por pelo menos 5 minutos antes de reduzir — só depois disso prove o sal, que a redução intensifica bastante.",
        "Salsa opcional con el líquido que sobró de la carne cruda: llevá a hervor pleno durante al menos 5 minutos antes de reducir — recién después probá la sal, que la reducción intensifica bastante.",
        "Optional sauce from the liquid the raw meat sat in: bring it to a full boil for at least 5 minutes before reducing — only then taste for salt, since reducing intensifies it considerably."),
      T("Reaquecimento destrói: fraldinha ao ponto que volta ao fogo vira borracha. Se não dá para servir na hora, faça braseado (150–160 °C, 2h30–3h com líquido cobrindo) ou rosbife frio.",
        "El recalentado destruye: un vacío al punto que vuelve al fuego se vuelve goma. Si no puedes servir al momento, hazlo braseado (150–160 °C, 2h30–3h con líquido cubriendo) o rosbif frío.",
        "Reheating destroys it: medium flap steak that goes back on the heat turns to rubber. If you cannot serve immediately, braise instead (150–160 °C, 2.5–3 h with liquid covering) or serve it as cold roast beef."),
    ],
  },

  {
    id: "costela-quadrada-assada",
    capitulo: "carnes",
    titulo: T("Costela quadrada assada", "Costilla cuadrada al horno", "Roasted short rib (chuck rib)"),
    kicker: T("PEÇA DE 2 KG · DUAS FASES: CROSTA E BRASEADO", "PIEZA DE 2 KG · DOS FASES: COSTRA Y BRASEADO", "2 KG CUT · TWO PHASES: CRUST AND BRAISE"),
    subtitulo: T(
      "Meia hora de forno máximo faz a crosta; cinco horas seladas em papel alumínio desmancham o osso.",
      "Media hora de horno al máximo hace la costra; cinco horas selladas en papel de aluminio deshacen el hueso.",
      "Half an hour at full oven heat builds the crust; five hours sealed in foil melt the bone loose."
    ),
    principio: T(
      "Duas fases que não se misturam: crosta no forno no máximo, peça descoberta, meia hora — a única janela em que a superfície doura, porque depois de selada no alumínio o ambiente vira vapor e nada mais cora. Depois, braseado de cinco horas em calor baixo, até o colágeno virar gelatina e o osso soltar. A mostarda não entra por sabor, entra como cola: segura o tempero na superfície durante o choque térmico, e o que sobra dela no fim é só um fundo ácido no caldo.",
      "Dos fases que no se mezclan: costra en el horno al máximo, pieza destapada, media hora — la única ventana en la que la superficie dora, porque después de sellada en el aluminio el ambiente se vuelve vapor y nada más se dora. Después, braseado de cinco horas a fuego bajo, hasta que el colágeno se vuelve gelatina y el hueso se suelta. La mostaza no entra por sabor, entra como pegamento: sostiene el condimento en la superficie durante el choque térmico, y lo que queda de ella al final es solo un fondo ácido en el caldo.",
      "Two phases that never mix: crust in a maxed-out oven, uncovered, half an hour — the only window in which the surface browns, because once sealed in foil the environment turns to steam and nothing colours further. Then a five-hour braise at low heat, until the collagen turns to gelatine and the bone pulls free. The mustard is not there for flavour, it is glue: it holds the seasoning on the surface through the thermal shock, and what is left of it at the end is just a sharp note in the broth."
    ),
    porcoes: 1, porcoesOpcoes: [1, 2], lote: true, ativo: 60, total: 340,
    rende: T("6–8 porções por peça de 2 kg", "6–8 porciones por pieza de 2 kg", "6–8 servings per 2 kg cut"),
    utensilio: T("Assadeira grande e papel alumínio", "Bandeja grande y papel de aluminio", "Large roasting tray and foil"),
    faixa: T("NADA DOURA DEPOIS DO ALUMÍNIO — A COR VEM SÓ DOS 30 MINUTOS INICIAIS", "NADA DORA DESPUÉS DEL ALUMINIO — EL COLOR VIENE SOLO DE LOS PRIMEROS 30 MINUTOS", "NOTHING BROWNS AFTER THE FOIL GOES ON — ALL THE COLOUR COMES FROM THE FIRST 30 MINUTES"),
    ingredientes: [
      { q: 1, u: "peca", alt: { q: 2000, u: "g" }, nome: T("costela quadrada", "costilla cuadrada", "short rib (chuck rib), whole piece"), obs: T("peça inteira", "pieza entera", "whole cut") },
      { q: null, u: "", nome: T("mostarda", "mostaza", "mustard"), obs: T("o suficiente para besuntar toda a superfície", "la suficiente para untar toda la superficie", "enough to coat the whole surface"), escala: false },
      { q: 40, u: "g", nome: T("sal médio ou grosso", "sal mediana o gruesa", "medium or coarse salt"), obs: T("2% do peso da peça", "2% del peso de la pieza", "2% of the cut's weight") },
      { q: null, u: "", nome: T("açúcar", "azúcar", "sugar"), obs: T("só uma pitada, para caramelizar", "solo una pizca, para caramelizar", "just a pinch, to caramelise"), escala: false },
      { q: null, u: "", nome: T("ervas secas", "hierbas secas", "dried herbs"), obs: T("a gosto", "al gusto", "to taste"), escala: false },
      { q: null, u: "", nome: T("pimenta-do-reino", "pimienta negra", "black pepper"), obs: T("moída na hora", "molida al momento", "freshly ground"), escala: false },
      { q: null, u: "", nome: T("batata bolinha", "papa pequeña", "baby potatoes"), obs: T("cebola e o que mais houver, para assar junto", "cebolla y lo que haya, para asar junto", "onion and whatever else is on hand, to roast alongside"), escala: false },
      { q: null, u: "", nome: T("cebola", "cebolla", "onion"), escala: false },
      { q: null, u: "", nome: T("vinho branco", "vino blanco", "white wine"), obs: T("para o fundo da assadeira — ou água, ou nada", "para el fondo de la bandeja — o agua, o nada", "for the base of the tray — or water, or nothing"), escala: false },
      { q: 2, u: "un", nome: T("folhas de papel alumínio", "hojas de papel de aluminio", "sheets of foil"), obs: T("duas camadas", "dos capas", "two layers"), escala: false },
    ],
    grade: [
      { col: 1, de: 0, ate: 1, titulo: T("besuntar", "untar", "coat"), detalhe: T("mostarda em filme fino, com a mão", "mostaza en película fina, con la mano", "a thin film of mustard, by hand") },
      { col: 2, de: 2, ate: 5, titulo: T("temperar", "condimentar", "season"), detalhe: T("sal 2%, açúcar em pitada, ervas, pimenta", "sal 2%, azúcar en pizca, hierbas, pimienta", "2% salt, a pinch of sugar, herbs, pepper") },
      { col: 3, de: 0, ate: 0, titulo: T("crosta 30 min", "costra 30 min", "crust 30 min"), detalhe: T("270 °C, descoberta · conferir aos 20", "270 °C, destapada · revisar a los 20", "270 °C, uncovered · check at 20") },
      { col: 4, de: 6, ate: 8, titulo: T("legumes e fundo", "verduras y fondo", "vegetables and base"), detalhe: T("ao redor da peça · só molhar o fundo", "alrededor de la pieza · solo mojar el fondo", "around the cut · just wet the base") },
      { col: 5, de: 9, ate: 9, titulo: T("selar", "sellar", "seal"), detalhe: T("duas camadas, bem fechadas nas bordas", "dos capas, bien cerradas en los bordes", "two layers, sealed tight at the edges") },
      { col: 6, de: 0, ate: 9, titulo: T("braseado 5 h", "braseado 5 h", "braise 5 h"), detalhe: T("150 °C, vedado · sem abrir", "150 °C, sellado · sin abrir", "150 °C, sealed · do not open") },
      { col: 7, de: 0, ate: 0, titulo: T("descansar", "reposar", "rest"), detalhe: T("10 min antes de servir", "10 min antes de servir", "10 min before serving") },
    ],
    modo: [
      { t: T(
        "Besunte toda a superfície da peça com mostarda, com a mão — fina e uniforme, um filme, não uma camada.",
        "Untá toda la superficie de la pieza con mostaza, con la mano — fina y pareja, una película, no una capa.",
        "Coat the whole surface of the cut with mustard, by hand — thin and even, a film, not a layer.") },
      { t: T(
        "Tempere por cima da mostarda: sal (2% do peso da peça), açúcar, ervas secas e pimenta-do-reino. O sal grosso fica aparente, e é isso mesmo.",
        "Condimentá por encima de la mostaza: sal (2% del peso de la pieza), azúcar, hierbas secas y pimienta negra. La sal gruesa queda a la vista, y así es como tiene que ser.",
        "Season over the mustard: salt (2% of the cut's weight), sugar, dried herbs and black pepper. The coarse salt stays visible on the surface, and that is correct.") },
      { t: T(
        "Forno no máximo (270 °C), peça descoberta e com a gordura para cima, 30 minutos. Confira aos 20: se o açúcar já estiver escurecendo demais, tire antes.",
        "Horno al máximo (270 °C), pieza destapada y con la grasa hacia arriba, 30 minutos. Revisá a los 20: si el azúcar ya se está oscureciendo demasiado, sacala antes.",
        "Full oven heat (270 °C), uncovered, fat side up, 30 minutes. Check at 20: if the sugar is already darkening too much, take it out early."), timer: 1800 },
      { t: T(
        "Tire a assadeira do forno. Distribua a batata bolinha e a cebola ao redor da peça. Molhe só o fundo com vinho branco (ou água), sem afogar.",
        "Sacá la bandeja del horno. Distribuí la papa pequeña y la cebolla alrededor de la pieza. Mojá solo el fondo con vino blanco (o agua), sin ahogar.",
        "Take the tray out of the oven. Scatter the baby potatoes and onion around the cut. Wet just the base with white wine (or water), without drowning it.") },
      { t: T(
        "Cubra com duas camadas de papel alumínio, bem fechadas nas bordas da assadeira. Vedação de verdade é o que faz as cinco horas funcionarem.",
        "Cubrí con dos capas de papel de aluminio, bien cerradas en los bordes de la bandeja. Un sellado de verdad es lo que hace que las cinco horas funcionen.",
        "Cover with two layers of foil, sealed tight against the edges of the tray. A real seal is what makes the five hours work.") },
      { t: T(
        "Abaixe o forno para 150 °C e asse por 5 horas, sem abrir.",
        "Bajá el horno a 150 °C y horneá durante 5 horas, sin abrir.",
        "Drop the oven to 150 °C and roast for 5 hours, without opening it."), timer: 18000 },
      { t: T(
        "Teste o ponto só ao abrir, no fim das cinco horas: osso girando solto e garfo entrando sem resistência. Abrir antes custa a vedação e o calor que a receita precisa.",
        "Probá el punto solo al abrir, al final de las cinco horas: hueso girando suelto y tenedor entrando sin resistencia. Abrir antes cuesta el sellado y el calor que la receta necesita.",
        "Check for doneness only when you open it, at the end of the five hours: the bone should turn freely and a fork should meet no resistance. Opening earlier costs the seal and the heat the recipe depends on.") },
      { t: T(
        "Descanse 10 minutos antes de servir.",
        "Dejá reposar 10 minutos antes de servir.",
        "Rest 10 minutes before serving."), timer: 600 },
    ],
    notas: [
      T("Nada doura depois do alumínio: toda a cor da peça vem dos primeiros 30 minutos. Se sair pálida dessa fase, não adianta esperar — não vai corar mais.",
        "Nada dora después del aluminio: todo el color de la pieza viene de los primeros 30 minutos. Si sale pálida de esa fase, no sirve esperar — no va a dorar más.",
        "Nothing browns after the foil goes on: all the colour comes from the first 30 minutes. If it comes out pale from that phase, waiting will not fix it — it will not brown any further."),
      T("2% de sal funciona porque nada se descarta: a batata, a cebola e o líquido dividem o sal ao longo das cinco horas. A mesma proporção numa peça assada seca e fatiada ficaria salgada demais.",
        "El 2% de sal funciona porque nada se descarta: la papa, la cebolla y el líquido reparten la sal a lo largo de las cinco horas. La misma proporción en una pieza asada seca y cortada quedaría demasiado salada.",
        "2% salt works because nothing gets discarded: the potatoes, onion and liquid all share the salt over the five hours. The same ratio on a dry roasted-and-sliced cut would be far too salty."),
      T("Vedação vale mais que líquido: com o alumínio bem fechado, a própria peça solta caldo suficiente. Líquido demais no fundo cozinha as batatas em água em vez de assar.",
        "El sellado vale más que el líquido: con el aluminio bien cerrado, la propia pieza suelta caldo suficiente. Demasiado líquido en el fondo cocina las papas en agua en vez de asarlas.",
        "The seal matters more than the liquid: with the foil sealed tight, the cut releases enough of its own juices. Too much liquid in the base boils the potatoes instead of roasting them."),
      T("Não abre no meio: cada abertura quebra a vedação de duas camadas, que não se refaz igual, e derruba a temperatura do forno.",
        "No se abre a la mitad: cada apertura rompe el sellado de dos capas, que no se rehace igual, y hace caer la temperatura del horno.",
        "Do not open it partway through: every opening breaks the two-layer seal, which never re-seals the same way, and drops the oven temperature."),
      T("150 °C, não 160 °C: dentro do alumínio vedado o ambiente já fica em torno de 100 °C pelo vapor — o que a temperatura do forno muda é a velocidade e o quanto força as bordas. A 160 °C as batatas e a cebola passam do ponto antes das cinco horas.",
        "150 °C, no 160 °C: dentro del aluminio sellado el ambiente ya queda alrededor de 100 °C por el vapor — lo que cambia la temperatura del horno es la velocidad y cuánto fuerza los bordes. A 160 °C la papa y la cebolla se pasan de punto antes de las cinco horas.",
        "150 °C, not 160 °C: inside the sealed foil the environment already sits around 100 °C from the steam — what the oven temperature changes is speed, and how hard it pushes the edges. At 160 °C the potatoes and onion overcook before the five hours are up."),
      T("Plano B na panela: o mesmo braseado funciona no caldeirão, com a chapa removível como difusor sobre a boca no mínimo — nesse caso são umas 4 horas, não 5. A crosta se faz na chapa antes, e o acabamento vai para a air fryer a 200 °C por 10 minutos.",
        "Plan B en la olla: el mismo braseado funciona en la olla grande, con la plancha desmontable como difusor sobre el quemador al mínimo — en ese caso son unas 4 horas, no 5. La costra se hace en la plancha antes, y el acabado va a la freidora de aire a 200 °C por 10 minutos.",
        "Stovetop backup: the same braise works in a stockpot, with the removable griddle as a heat diffuser over the lowest burner setting — in that case it takes about 4 hours, not 5. The crust is done on the griddle first, and the finish goes into the air fryer at 200 °C for 10 minutes."),
    ],
  }
);
