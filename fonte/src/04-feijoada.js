/* ===================== FEIJOADA ===================== */
RECEITAS.push(
  {
    id: "feijoada",
    capitulo: "feijoada",
    titulo: T("Feijoada completa", "Feijoada completa", "Full feijoada"),
    kicker: T("DOIS DIAS · 10 A 15 PESSOAS · SOBRA PARA CONGELAR", "DOS DÍAS · 10 A 15 PERSONAS · SOBRA PARA CONGELAR", "TWO DAYS · 10 TO 15 PEOPLE · LEFTOVERS TO FREEZE"),
    subtitulo: T(
      "Dessalga correta, sequência de entrada das carnes e fogo baixo por 4 a 5 horas. O resto é paciência.",
      "Desalado correcto, secuencia de entrada de las carnes y fuego bajo por 4 a 5 horas. El resto es paciencia.",
      "Correct soaking, the right order for the meats, and low heat for 4 to 5 hours. The rest is patience."
    ),
    porcoes: 20, porcoesOpcoes: [10, 20, 30], ativo: 180, total: 1835,
    utensilio: T("Caldeirão de 33–36 cm (~16–18 L)", "Olla grande de 33–36 cm (~16–18 L)", "33–36 cm stockpot (~16–18 L)"),
    faixa: T("3 KG DE CARNE PARA 1 KG DE FEIJÃO · SAL SÓ NO FINAL", "3 KG DE CARNE POR 1 KG DE FRIJOL · SAL SOLO AL FINAL", "3 KG OF MEAT TO 1 KG OF BEANS · SALT ONLY AT THE END"),
    ingredientes: [
      { q: 828, u: "g", nome: T("carne seca", "cecina (carne seca)", "carne seca (dried salted beef)"), obs: T("em cubos de 3 cm", "en cubos de 3 cm", "in 3 cm cubes") },
      { q: 1220, u: "g", nome: T("costela suína salgada", "costilla de cerdo salada", "salted pork ribs"), obs: T("em cubos de 3 cm", "en cubos de 3 cm", "in 3 cm cubes") },
      { q: 518, u: "g", nome: T("orelha de porco salgada", "oreja de cerdo salada", "salted pig's ear") },
      { q: 276, u: "g", nome: T("rabo de porco salgado", "rabo de cerdo salado", "salted pig's tail") },
      { q: 1500, u: "g", nome: T("feijão preto", "frijol negro", "black beans"), obs: T("de molho por 30 min", "en remojo 30 min", "soaked 30 min") },
      { q: 5, u: "un", alt: { q: 700, u: "g" }, nome: T("cebolas grandes", "cebollas grandes", "large onions"), obs: T("picadas fino", "picadas finas", "finely chopped") },
      { q: 8, u: "dente", alt: { q: 40, u: "g" }, nome: T("alho", "ajo", "garlic"), obs: T("picado fino", "picado fino", "finely chopped") },
      { q: 0.33, u: "xic", alt: { q: 70, u: "g" }, nome: T("banha", "manteca de cerdo", "lard"), obs: T("melhor que azeite aqui", "mejor que aceite aquí", "better than oil here") },
      { q: 1.5, u: "cc", alt: { q: 4, u: "g" }, nome: T("cominho em pó", "comino molido", "ground cumin") },
      { q: 5, u: "folha", alt: { q: 2, u: "g" }, nome: T("louro", "laurel", "bay") },
      { q: 7, u: "l", nome: T("água", "agua", "water"), obs: T("proporcional ao feijão", "proporcional al frijol", "in proportion to the beans") },
      { q: 1, u: "un", alt: { q: 200, u: "g" }, nome: T("laranja inteira com casca", "naranja entera con piel", "whole orange, unpeeled") },
      { q: 1000, u: "g", nome: T("lombo suíno salgado", "lomo de cerdo salado", "salted pork loin") },
      { q: 366, u: "g", nome: T("paio", "paio (embutido ahumado)", "paio (smoked pork sausage)"), obs: T("inteiro", "entero", "whole") },
      { q: 460, u: "g", nome: T("calabresa", "chorizo calabresa", "calabresa sausage"), obs: T("inteira", "entera", "whole") },
      { q: null, u: "", nome: T("sal e pimenta-do-reino", "sal y pimienta negra", "salt and black pepper"), obs: T("só no fim, provando", "solo al final, probando", "only at the end, by tasting"), escala: false },
    ],
    grade: [
      { col: 1, de: 0, ate: 3, titulo: T("dessalgar 24 h", "desalar 24 h", "soak 24 h"), detalhe: T("cubos de 3 cm · trocar a água a cada 3–4 h", "cubos de 3 cm · cambiar el agua cada 3–4 h", "3 cm cubes · change the water every 3–4 h") },
      { col: 2, de: 0, ate: 3, titulo: T("ferventar 10 min", "hervir 10 min", "pre-boil 10 min"), detalhe: T("descartar a água", "desechar el agua", "discard the water") },
      { col: 3, de: 5, ate: 9, titulo: T("refogar na banha", "sofreír en la manteca", "fry in the lard"), detalhe: T("cebola 8 min · alho, cominho e louro 1 min", "cebolla 8 min · ajo, comino y laurel 1 min", "onion 8 min · garlic, cumin and bay 1 min") },
      { col: 4, de: 0, ate: 10, titulo: T("feijão, carnes e água", "frijol, carnes y agua", "beans, meats and water"), detalhe: T("fogo alto até ferver", "fuego alto hasta hervir", "high heat until it boils") },
      { col: 5, de: 0, ate: 11, titulo: T("laranja e fogo mínimo", "naranja y fuego mínimo", "orange and minimum heat"), detalhe: T("tampa entreaberta · ~1h40", "tapa entreabierta · ~1h40", "lid ajar · ~1h40") },
      { col: 6, de: 0, ate: 14, titulo: T("lombo ferventado, paio e calabresa", "lomo hervido, paio y calabresa", "pre-boiled loin, paio and calabresa"), detalhe: T("inteiros · +2 h mexendo a cada 20–30 min", "enteros · +2 h removiendo cada 20–30 min", "whole · +2 h stirring every 20–30 min") },
      { col: 7, de: 0, ate: 14, titulo: T("tirar a laranja, fatiar as linguiças", "retirar la naranja, cortar los embutidos", "remove the orange, slice the sausages"), detalhe: T("espremer o caldo da laranja antes", "exprimir el jugo de la naranja antes", "squeeze the orange juice in first") },
      { col: 8, de: 0, ate: 15, titulo: T("provar o sal e apurar", "probar la sal y apurar", "taste for salt and thicken"), detalhe: T("amassar feijão · descansar 5–10 min", "aplastar frijol · reposar 5–10 min", "mash some beans · rest 5–10 min") },
    ],
    modo: [
      { t: T(
        "Dia 1 — Dessalga. Corte as carnes salgadas em cubos de 3 cm, cubra com bastante água em tigelas separadas e leve à geladeira. Troque a água a cada 3 ou 4 horas ao longo do dia. Vinte e quatro horas é o ideal.",
        "Día 1 — Desalado. Corta las carnes saladas en cubos de 3 cm, cúbrelas con abundante agua en boles separados y llévalas a la nevera. Cambia el agua cada 3 o 4 horas a lo largo del día. Veinticuatro horas es lo ideal.",
        "Day 1 — Soaking. Cut the salted meats into 3 cm cubes, cover with plenty of water in separate bowls and refrigerate. Change the water every 3 or 4 hours through the day. Twenty-four hours is ideal.") },
      { t: T(
        "Dia 2, 5h45 — Ferventa as carnes salgadas num caldeirão com água. Dez minutos após ferver, descarte a água e reserve as carnes.",
        "Día 2, 5:45 — Hierve las carnes saladas en una olla con agua. Diez minutos después de romper el hervor, desecha el agua y reserva las carnes.",
        "Day 2, 5:45 — Pre-boil the salted meats in a pot of water. Ten minutes after it boils, discard the water and set the meats aside."), timer: 600 },
      { t: T(
        "6h30 — Refogue a cebola na banha até dourar, cerca de 8 minutos. Adicione o alho, o cominho e o louro e mexa 1 minuto. Se pegar um pouco no fundo, tudo bem: fond é sabor, e você deglaceia depois.",
        "6:30 — Sofríe la cebolla en la manteca hasta dorar, unos 8 minutos. Añade el ajo, el comino y el laurel y remueve 1 minuto. Si se pega un poco al fondo, no pasa nada: el fondo es sabor, y lo desglasas después.",
        "6:30 — Fry the onion in the lard until golden, about 8 minutes. Add the garlic, cumin and bay and stir for 1 minute. If it catches slightly on the base, fine: fond is flavour, and you deglaze later."), timer: 480 },
      { t: T(
        "6h50 — Adicione o feijão (que ficou de molho 30 min), 6 a 8 litros de água e as carnes ferventadas. Fogo alto até ferver.",
        "6:50 — Añade el frijol (que estuvo en remojo 30 min), 6 a 8 litros de agua y las carnes hervidas. Fuego alto hasta que hierva.",
        "6:50 — Add the beans (soaked 30 min), 6 to 8 litres of water and the pre-boiled meats. High heat until it boils.") },
      { t: T(
        "7h40 — Na fervura, acrescente a laranja inteira, abaixe para o fogo mínimo e deixe a tampa entreaberta.",
        "7:40 — Al hervir, agrega la naranja entera, baja al fuego mínimo y deja la tapa entreabierta.",
        "7:40 — Once boiling, add the whole orange, drop to minimum heat and leave the lid ajar.") },
      { t: T(
        "9h20 — Ferventa o lombo separadamente por 10 minutos e adicione à panela, junto com o paio e a calabresa inteiros. Não coloque bacon: ele todo vai para a farofa.",
        "9:20 — Hierve el lomo por separado 10 minutos y añádelo a la olla, junto con el paio y la calabresa enteros. No pongas bacon: todo va para la farofa.",
        "9:20 — Pre-boil the loin separately for 10 minutes and add it to the pot, along with the whole paio and calabresa. No bacon here: all of it goes into the farofa."), timer: 600 },
      { t: T(
        "9h20 às 11h30 — Mexa a cada 20 ou 30 minutos, raspando delicadamente o fundo. Confira o nível de água: as carnes têm que ficar cobertas. Complete se precisar.",
        "9:20 a 11:30 — Remueve cada 20 o 30 minutos, raspando con cuidado el fondo. Revisa el nivel de agua: las carnes tienen que quedar cubiertas. Completa si hace falta.",
        "9:20 to 11:30 — Stir every 20 or 30 minutes, gently scraping the base. Check the water level: the meats must stay covered. Top up if needed.") },
      { t: T(
        "10h30 — Tire a laranja e esprema o caldo dela na panela antes de descartar. Deixar mais tempo amarga.",
        "10:30 — Retira la naranja y exprime su jugo en la olla antes de desecharla. Dejarla más tiempo amarga.",
        "10:30 — Take out the orange and squeeze its juice into the pot before discarding it. Leaving it longer turns bitter.") },
      { t: T(
        "11h50 — Tire o paio e a calabresa, corte em rodelas de 1 cm na diagonal e devolva à panela.",
        "11:50 — Retira el paio y la calabresa, corta en rodajas de 1 cm en diagonal y devuélvelos a la olla.",
        "11:50 — Take out the paio and calabresa, cut into 1 cm diagonal slices and return them to the pot.") },
      { t: T(
        "12h — Prove o sal pela primeira vez. Provavelmente nem precisa. Se o caldo estiver ralo, amasse um pouco do feijão contra a parede da panela com o dorso da concha.",
        "12:00 — Prueba la sal por primera vez. Probablemente ni haga falta. Si el caldo está ralo, aplasta un poco de frijol contra la pared de la olla con el dorso del cucharón.",
        "12:00 — Taste for salt for the first time. It probably needs none. If the broth is thin, mash some beans against the side of the pot with the back of the ladle.") },
      { t: T(
        "12h20 — Desligue. Descanse 5 a 10 minutos com a tampa entreaberta antes de servir: o caldo termina de engrossar.",
        "12:20 — Apaga. Deja reposar 5 a 10 minutos con la tapa entreabierta antes de servir: el caldo termina de espesar.",
        "12:20 — Turn it off. Rest 5 to 10 minutes with the lid ajar before serving: the broth finishes thickening."), timer: 600 },
    ],
    notas: [
      T("Feijoada tem várias fontes de sal: carnes salgadas, paio, calabresa. Nunca sale antes de provar no final.",
        "La feijoada tiene varias fuentes de sal: carnes saladas, paio, calabresa. Nunca sales antes de probar al final.",
        "Feijoada has several sources of salt: the salted meats, the paio, the calabresa. Never salt before tasting at the end."),
      T("1,5 kg de feijão fica carnuda; 2 kg dá mais caldo para dividir. Teste 2 kg se o grupo passar de 15.",
        "1,5 kg de frijol queda muy carnosa; 2 kg da más caldo para repartir. Prueba con 2 kg si el grupo pasa de 15.",
        "1.5 kg of beans makes it meat-heavy; 2 kg gives more broth to go round. Try 2 kg if the group is over 15."),
      T("Bacon todo na farofa: a feijoada já tem gordura de sobra com paio, calabresa, costela e lombo.",
        "Todo el bacon a la farofa: la feijoada ya tiene grasa de sobra con paio, calabresa, costilla y lomo.",
        "All the bacon goes into the farofa: the feijoada already has plenty of fat from paio, calabresa, ribs and loin."),
      T("O tempo total conta as 24 h de dessalga; o dia de cozimento em si (Dia 2) leva umas 6h30 do início ao descanso final.",
        "El tiempo total cuenta las 24 h de desalado; el día de cocción en sí (Día 2) lleva unas 6h30 desde el inicio hasta el reposo final.",
        "The total time counts the 24 h soak; the cooking day itself (Day 2) runs about 6h30 from start to the final rest."),
      T("Antes de ferver: carnes, feijão e água facilmente passam de 12–13 L. Um caldeirão de 10 L fica raso demais para mexer sem derramar — use um maior ou divida em duas panelas.",
        "Antes de hervir: carnes, frijol y agua fácilmente superan los 12–13 L. Una olla de 10 L queda demasiado baja para remover sin que se derrame — usá una más grande o dividí en dos ollas.",
        "Before it boils: the meats, beans and water easily add up to more than 12–13 L. A 10 L pot is too shallow to stir without spilling — use a bigger one or split it across two pots."),
      T("Congela muito bem e melhora no dia seguinte. Separe potes limpos antes de servir. Para descongelar: geladeira 24 h antes, requentar em fogo baixo mexendo.",
        "Congela muy bien y mejora al día siguiente. Separa recipientes limpios antes de servir. Para descongelar: nevera 24 h antes, recalentar a fuego bajo removiendo.",
        "It freezes very well and improves the next day. Set aside clean containers before serving. To thaw: fridge 24 h ahead, reheat over low heat, stirring."),
      T("Molho de pimenta: Tabasco é o clássico, biquinho em conserva é o suave universal. Sriracha e sweet chilli não combinam — perfil errado.",
        "Salsa picante: el Tabasco es el clásico, la pimienta biquinho en conserva es la suave universal. Sriracha y sweet chilli no combinan — perfil equivocado.",
        "Hot sauce: Tabasco is the classic, pickled biquinho peppers the mild crowd-pleaser. Sriracha and sweet chilli do not work — wrong profile."),
    ],
  },

  {
    id: "farofa-bacon",
    capitulo: "feijoada",
    titulo: T("Farofa de bacon com azeitona", "Farofa de bacon con aceitunas", "Bacon farofa with olives"),
    kicker: T("SEPARE METADE DA GORDURA PARA A COUVE", "SEPARA LA MITAD DE LA GRASA PARA LA BERZA", "SET ASIDE HALF THE FAT FOR THE GREENS"),
    subtitulo: T(
      "O bacon inteiro da feijoada vem parar aqui — rende mais como farofa crocante.",
      "Todo el bacon de la feijoada acaba aquí — rinde más como farofa crujiente.",
      "All the bacon from the feijoada ends up here — it goes further as crisp farofa."
    ),
    porcoes: 20, porcoesOpcoes: [10, 20, 30], ativo: 25, total: 25,
    utensilio: T("Frigideira grande", "Sartén grande", "Large skillet"),
    faixa: T("FARINHA AOS POUCOS, MEXENDO SEMPRE", "LA HARINA POCO A POCO, REMOVIENDO SIEMPRE", "FLOUR A LITTLE AT A TIME, STIRRING CONSTANTLY"),
    ingredientes: [
      { q: 240, u: "g", nome: T("bacon", "bacon", "bacon"), obs: T("em cubos de 1 cm", "en cubos de 1 cm", "in 1 cm cubes") },
      { q: 1, u: "un", alt: { q: 140, u: "g" }, nome: T("cebola média", "cebolla mediana", "medium onion"), obs: T("picada", "picada", "chopped") },
      { q: 2, u: "dente", alt: { q: 10, u: "g" }, nome: T("alho", "ajo", "garlic"), obs: T("picado", "picado", "chopped") },
      { q: 2, u: "xic", alt: { q: 300, u: "g" }, nome: T("farinha de mandioca", "harina de mandioca", "cassava flour"), obs: T("fina ou biju", "fina o tipo biju", "fine or coarse (biju)") },
      { q: 0.5, u: "xic", alt: { q: 70, u: "g" }, nome: T("azeitonas", "aceitunas", "olives"), obs: T("picadas", "picadas", "chopped") },
      { q: 2, u: "cs", alt: { q: 8, u: "g" }, nome: T("salsinha", "perejil", "parsley"), obs: T("picada", "picado", "chopped") },
      { q: 0.5, u: "cc", alt: { q: 1, u: "g" }, nome: T("pimenta-do-reino", "pimienta negra", "black pepper"), obs: T("moída na hora", "molida al momento", "freshly ground") },
    ],
    grade: [
      { col: 1, de: 0, ate: 0, titulo: T("fritar o bacon", "freír el bacon", "fry the bacon"), detalhe: T("~7 min · retirar com escumadeira", "~7 min · retirar con espumadera", "~7 min · lift out with a slotted spoon") },
      { col: 2, de: 0, ate: 0, titulo: T("separar metade da gordura", "separar la mitad de la grasa", "set aside half the fat"), detalhe: T("reservar para a couve", "reservar para la berza", "keep it for the greens") },
      { col: 3, de: 0, ate: 2, titulo: T("refogar cebola e alho", "sofreír cebolla y ajo", "fry onion and garlic"), detalhe: T("5 min + 1 min", "5 min + 1 min", "5 min + 1 min") },
      { col: 4, de: 0, ate: 3, titulo: T("voltar o bacon, fogo baixo", "devolver el bacon, fuego bajo", "return the bacon, low heat") },
      { col: 5, de: 0, ate: 3, titulo: T("farinha aos poucos, torrar", "harina poco a poco, tostar", "flour bit by bit, toast"), detalhe: T("7–10 min · mexendo sempre", "7–10 min · removiendo siempre", "7–10 min · stirring constantly") },
      { col: 6, de: 0, ate: 6, titulo: T("salsinha, azeitona e pimenta", "perejil, aceitunas y pimienta", "parsley, olives and pepper"), detalhe: T("provar o sal", "probar la sal", "taste for salt") },
    ],
    modo: [
      { t: T(
        "Frite o bacon em cubos de 1 cm até dourar, cerca de 7 minutos. Tire com escumadeira e reserve.",
        "Fríe el bacon en cubos de 1 cm hasta dorar, unos 7 minutos. Sácalo con espumadera y resérvalo.",
        "Fry the bacon in 1 cm cubes until golden, about 7 minutes. Lift it out with a slotted spoon and set aside."), timer: 420 },
      { t: T(
        "Separe metade da gordura numa tigelinha, para a couve. Esse passo é crucial — couve com gordura de bacon é imbatível.",
        "Separa la mitad de la grasa en un bol pequeño, para la berza. Este paso es crucial — la berza con grasa de bacon es imbatible.",
        "Pour half the fat into a small bowl, for the greens. This step matters — collards in bacon fat are unbeatable.") },
      { t: T(
        "Na gordura restante, refogue a cebola picada até dourar, cerca de 5 minutos. Adicione o alho e refogue mais 1 minuto.",
        "En la grasa restante, sofríe la cebolla picada hasta dorar, unos 5 minutos. Añade el ajo y sofríe 1 minuto más.",
        "In the remaining fat, fry the chopped onion until golden, about 5 minutes. Add the garlic and cook 1 minute more."), timer: 300 },
      { t: T(
        "Volte o bacon à frigideira e abaixe o fogo.",
        "Devuelve el bacon a la sartén y baja el fuego.",
        "Return the bacon to the pan and lower the heat.") },
      { t: T(
        "Adicione a farinha aos poucos, mexendo sempre. Torre 7 a 10 minutos até dourar — farinha fina precisa de mais torra que biju.",
        "Añade la harina poco a poco, removiendo siempre. Tuesta 7 a 10 minutos hasta dorar — la harina fina necesita más tueste que la tipo biju.",
        "Add the flour a little at a time, stirring constantly. Toast for 7 to 10 minutes until golden — fine flour needs more toasting than coarse."), timer: 540 },
      { t: T(
        "No final, junte a salsinha picada, as azeitonas e a pimenta-do-reino moída na hora. Prove o sal. Reserve tampada.",
        "Al final, añade el perejil picado, las aceitunas y la pimienta negra molida al momento. Prueba la sal. Reserva tapada.",
        "At the end, add the chopped parsley, olives and freshly ground black pepper. Taste for salt. Keep it covered.") },
    ],
    notas: [
      T("Ovo mexido antes da farinha faz uma farofa premium.",
        "Huevo revuelto antes de la harina hace una farofa de lujo.",
        "Scrambled egg before the flour makes a deluxe farofa."),
      T("O bacon é a única fonte de gordura aqui, e já é bastante — não acrescente óleo.",
        "El bacon es la única fuente de grasa aquí, y ya es bastante — no añadas aceite.",
        "The bacon is the only source of fat here, and it is plenty — do not add oil."),
    ],
  },

  {
    id: "couve-bacon",
    capitulo: "feijoada",
    titulo: T("Couve na gordura de bacon", "Berza en grasa de bacon", "Collard greens in bacon fat"),
    kicker: T("CHIFFONADE NA FACA · NUNCA NO PROCESSADOR", "CHIFFONADE A CUCHILLO · NUNCA EN PROCESADORA", "CHIFFONADE BY KNIFE · NEVER IN A PROCESSOR"),
    subtitulo: T(
      "Dois a três minutos de frigideira. Passou do ponto, perdeu.",
      "Dos o tres minutos de sartén. Si se pasa, se perdió.",
      "Two to three minutes in the pan. Past that point, it's gone."
    ),
    porcoes: 20, porcoesOpcoes: [10, 20, 30], ativo: 15, total: 15,
    utensilio: T("Frigideira bem quente", "Sartén bien caliente", "Very hot skillet"),
    faixa: T("TEM QUE SAIR VERDE-VIBRANTE", "TIENE QUE SALIR VERDE VIBRANTE", "IT HAS TO COME OUT VIVID GREEN"),
    ingredientes: [
      { q: 3, u: "maco", alt: { q: 450, u: "g" }, nome: T("couve manteiga", "berza", "collard greens"), obs: T("em chiffonade de 2–3 mm", "en chiffonade de 2–3 mm", "chiffonade, 2–3 mm") },
      { q: 2, u: "cs", alt: { q: 30, u: "ml" }, nome: T("gordura de bacon", "grasa de bacon", "bacon fat"), obs: T("a que você reservou da farofa", "la que reservaste de la farofa", "the one you saved from the farofa") },
      { q: 1, u: "dente", alt: { q: 5, u: "g" }, nome: T("alho", "ajo", "garlic"), obs: T("picado", "picado", "chopped") },
      { q: 0.5, u: "cc", alt: { q: 3, u: "g" }, nome: T("sal", "sal", "salt"), obs: T("no fim", "al final", "at the end") },
    ],
    grade: [
      { col: 1, de: 0, ate: 0, titulo: T("chiffonade fina", "chiffonade fina", "fine chiffonade"), detalhe: T("empilhar, enrolar apertado, fatiar 2–3 mm", "apilar, enrollar apretado, cortar 2–3 mm", "stack, roll tight, slice 2–3 mm") },
      { col: 2, de: 1, ate: 2, titulo: T("frigideira bem quente", "sartén bien caliente", "very hot skillet"), detalhe: T("gordura e alho", "grasa y ajo", "fat and garlic") },
      { col: 3, de: 0, ate: 3, titulo: T("saltear", "saltear", "sauté"), detalhe: T("2–3 min · mexendo rápido", "2–3 min · removiendo rápido", "2–3 min · stirring fast") },
    ],
    modo: [
      { t: T(
        "Empilhe as folhas, enrole apertado e fatie bem fino — 2 a 3 mm, com faca. Processador amassa a folha, dá corte irregular e oxida.",
        "Apila las hojas, enróllalas apretadas y córtalas muy finas — 2 a 3 mm, a cuchillo. La procesadora machaca la hoja, da un corte irregular y la oxida.",
        "Stack the leaves, roll them tight and slice very thin — 2 to 3 mm, with a knife. A processor bruises the leaf, cuts unevenly and oxidises it.") },
      { t: T(
        "Frigideira bem quente com a gordura reservada do bacon e o alho picado.",
        "Sartén bien caliente con la grasa reservada del bacon y el ajo picado.",
        "Very hot skillet with the reserved bacon fat and the chopped garlic.") },
      { t: T(
        "Jogue a couve e mexa rápido por 2 a 3 minutos. Sal no fim. Não pode passar do ponto: tem que ficar verde-vibrante.",
        "Echa la berza y remueve rápido 2 a 3 minutos. Sal al final. No puede pasarse: tiene que quedar verde vibrante.",
        "Throw in the greens and stir fast for 2 to 3 minutes. Salt at the end. It must not overcook: it has to stay vivid green."), timer: 150 },
    ],
    notas: [
      T("É o último item a sair da cozinha, imediatamente antes de servir.",
        "Es lo último que sale de la cocina, justo antes de servir.",
        "It is the last thing to leave the kitchen, immediately before serving."),
      T("Sem feijoada no dia? Gordura de bacon guardada na geladeira faz o mesmo serviço.",
        "¿Sin feijoada ese día? La grasa de bacon guardada en la nevera hace el mismo trabajo.",
        "No feijoada that day? Bacon fat kept in the fridge does the same job."),
    ],
  }
);
