/* ===================== PAPINHAS ===================== */

TECNICAS.push({
  id: "papinha-familias",
  titulo: T(
    "Papinha é família de alimento, não receita",
    "La papilla es familia de alimentos, no receta",
    "Baby food is food families, not recipes"
  ),
  kicker: T(
    "TÉCNICA · PANELA DE PRESSÃO · SEM SAL ANTES DE 1 ANO",
    "TÉCNICA · OLLA A PRESIÓN · SIN SAL ANTES DEL AÑO",
    "TECHNIQUE · PRESSURE COOKER · NO SALT BEFORE AGE ONE"
  ),
  resumo: T(
    "Papinha boa não é papinha lisa. Uma família de alimento por vez, textura crescente, e tempero de verdade desde o começo.",
    "Una buena papilla no es una papilla lisa. Una familia de alimentos por vez, textura creciente, y condimento de verdad desde el principio.",
    "Good baby food is not smooth baby food. One food family at a time, rising texture, and real seasoning from the start."
  ),
  corpo: [
    {
      h: T("Papinha boa não é papinha lisa", "Una buena papilla no es lisa", "Good baby food is not smooth"),
      p: T(
        "O objetivo é sabor de comida de verdade e textura crescente: o bebê precisa aprender a mastigar, e purê aveludado demais atrasa isso. Daí a panela de pressão — que cozinha rápido e por igual, com pouca água, sem virar sopa — e o processamento controlado no fim, do amassado com garfo até o picadinho.",
        "El objetivo es sabor de comida de verdad y textura creciente: el bebé necesita aprender a masticar, y un puré demasiado aterciopelado retrasa eso. De ahí la olla a presión — cocina rápido y parejo, con poca agua, sin volverse sopa — y el procesado controlado al final, del machacado con tenedor hasta el picado.",
        "The goal is real cooked flavour and rising texture: a baby needs to learn to chew, and a velvety purée delays that. Hence the pressure cooker — fast, even, little water, never turning to soup — and controlled mashing at the end, from fork-mashed to finely chopped."
      ),
    },
    {
      h: T("Sete famílias, e o que ocupa cada vaga gira", "Siete familias, y quien ocupa cada lugar rota", "Seven families, and who fills each slot rotates"),
      p: T(
        "O que sustenta a série inteira não é uma lista de ingredientes, é uma lista de famílias: tubérculo ou amiláceo para energia e corpo (batata, mandioquinha, abóbora, inhame); legume colorido para vitamina, cor e doçura (cenoura, beterraba, ervilha, abobrinha); folha verde para ferro e sabor (espinafre, couve, brócolis, agrião); proteína para ferro e construção (carne, frango, peixe, fígado, feijão, grão de bico, lentilha); aromático para sabor de comida de verdade (cebola, alho, alho-poró, salsão); gordura; e tempero. Cada lote monta uma de cada, e quem ocupa cada vaga gira conforme a feira, a estação e o que tem no congelador. Nenhuma família é obrigatória em todo lote, mas nenhum lote deve ter só duas.",
        "Lo que sostiene la serie entera no es una lista de ingredientes, sino una lista de familias: tubérculo o almidón para energía y cuerpo (papa, arracacha, calabaza, ñame); verdura de color para vitaminas, color y dulzor (zanahoria, remolacha, arveja, calabacín); hoja verde para hierro y sabor (espinaca, berza, brócoli, berro); proteína para hierro y construcción (carne, pollo, pescado, hígado, porotos, garbanzos, lentejas); aromático para sabor de comida de verdad (cebolla, ajo, puerro, apio); grasa; y condimento. Cada tanda arma una de cada, y quien ocupa cada lugar rota según el mercado, la estación y lo que haya en el congelador. Ninguna familia es obligatoria en cada tanda, pero ninguna tanda debería tener solo dos.",
        "What holds the whole series together is not an ingredient list, it is a list of families: a starchy root for energy and body (potato, arracacha, squash, yam); a coloured vegetable for vitamins, colour and sweetness (carrot, beetroot, peas, courgette); a leafy green for iron and flavour (spinach, collards, broccoli, watercress); a protein for iron and building (beef, chicken, fish, liver, beans, chickpeas, lentils); an aromatic for the taste of real cooking (onion, garlic, leek, celery); fat; and seasoning. Each batch picks one from each, and who fills each slot rotates with the market, the season and what is in the freezer. No family is compulsory in every batch, but no batch should have only two."
      ),
      tabela: {
        legenda: T("As sete famílias", "Las siete familias", "The seven families"),
        cabecalho: [
          T("Família", "Familia", "Family"),
          T("O que resolve", "Qué resuelve", "What it does"),
          T("Exemplos", "Ejemplos", "Examples"),
        ],
        linhas: [
          [
            T("Tubérculo / amiláceo", "Tubérculo / almidón", "Starchy root"),
            T("energia e corpo", "energía y cuerpo", "energy and body"),
            T("batata, mandioquinha, abóbora, inhame, mandioca", "papa, arracacha, calabaza, ñame, mandioca (yuca)", "potato, arracacha, squash, yam, cassava"),
          ],
          [
            T("Legume colorido", "Verdura de color", "Coloured vegetable"),
            T("vitaminas, cor, doçura", "vitaminas, color y dulzor", "vitamins, colour, sweetness"),
            T("cenoura, beterraba, ervilha, abobrinha, chuchu", "zanahoria, remolacha, arveja, calabacín, chayote", "carrot, beetroot, peas, courgette, chayote"),
          ],
          [
            T("Folha verde", "Hoja verde", "Leafy green"),
            T("ferro, sabor, cor", "hierro, sabor y color", "iron, flavour, colour"),
            T("espinafre, couve, brócolis, agrião, escarola", "espinaca, berza, brócoli, berro, escarola", "spinach, collards, broccoli, watercress, escarole"),
          ],
          [
            T("Proteína", "Proteína", "Protein"),
            T("ferro e construção", "hierro y construcción", "iron and building"),
            T("carne moída, suína, frango, peixe, fígado, feijão, grão de bico, lentilha", "carne molida, cerdo, pollo, pescado, hígado, porotos, garbanzos, lentejas", "ground beef, pork, chicken, fish, liver, beans, chickpeas, lentils"),
          ],
          [
            T("Aromático", "Aromático", "Aromatic"),
            T("sabor de comida de verdade", "sabor de comida de verdad", "the taste of real cooking"),
            T("cebola, alho, alho-poró, salsão", "cebolla, ajo, puerro, apio", "onion, garlic, leek, celery"),
          ],
          [
            T("Gordura", "Grasa", "Fat"),
            T("calorias e vitaminas lipossolúveis", "calorías y vitaminas liposolubles", "calories and fat-soluble vitamins"),
            T("óleo neutro (girassol)", "aceite neutro (girasol)", "neutral oil (sunflower)"),
          ],
          [
            T("Tempero", "Condimento", "Seasoning"),
            T("educar o paladar", "educar el paladar", "training the palate"),
            T("cominho, canela, louro, ervas, raspa de limão", "comino, canela, laurel, hierbas, ralladura de limón", "cumin, cinnamon, bay, herbs, lime zest"),
          ],
        ],
      },
    },
    {
      h: T("O método base, em sete passos", "El método base, en siete pasos", "The base method, in seven steps"),
      p: T(
        "Leguminosa primeiro, se houver: de molho 8 a 12 horas com a água trocada, cozida sozinha na pressão por 20 a 25 minutos, até desmanchar entre os dedos, e reservada com um pouco do caldo. Depois o refogado: óleo neutro, cebola e alho-poró até murchar, alho só até perfumar. Então a proteína, selada e desmanchada até perder o rosado. Os legumes duros em cubos de uns 2 cm, com água até quase cobrir — não afogar, papinha aguada vira sopa — e 4 a 6 minutos de pressão contados do chiado. A folha entra por último, com a panela já aberta, no calor residual. O tempero fora do fogo ou nos últimos minutos. E a textura no fim, ajustada com a água do próprio cozimento, nunca com água fria.",
        "Legumbre primero, si la hay: en remojo 8 a 12 horas con el agua cambiada, cocida sola a presión 20 a 25 minutos, hasta deshacerse entre los dedos, y reservada con algo de su caldo. Después el sofrito: aceite neutro, cebolla y puerro hasta ablandar, ajo solo hasta perfumar. Luego la proteína, sellada y deshecha hasta perder el rosado. Las verduras duras en cubos de unos 2 cm, con agua hasta casi cubrir — no ahogar, la papilla aguada se vuelve sopa — y 4 a 6 minutos de presión contados desde el silbido. La hoja entra al final, con la olla ya abierta, al calor residual. El condimento fuera del fuego o en los últimos minutos. Y la textura al final, ajustada con el agua de la propia cocción, nunca con agua fría.",
        "Pulses first, if any: soaked 8 to 12 hours with the water changed, pressure-cooked alone for 20 to 25 minutes until they crush between your fingers, then set aside with a little of their liquid. Then the sofrito: neutral oil, onion and leek until soft, garlic just until fragrant. Then the protein, seared and broken up until no pink remains. The hard vegetables in roughly 2 cm cubes, with water not quite covering — do not drown them, watery baby food becomes soup — and 4 to 6 minutes of pressure counted from the hiss. The greens go in last, with the lid already off, in the residual heat. Seasoning off the heat or in the final minutes. And texture at the very end, loosened with the cooking liquid, never with cold water."
      ),
    },
    {
      h: T("Sem sal, sem açúcar, sem mel", "Sin sal, sin azúcar, sin miel", "No salt, no sugar, no honey"),
      p: T(
        "É a única receita do caderno em que a disciplina do sal é absoluta: zero sal antes de 1 ano. O rim do bebê não dá conta do sódio, e o paladar se calibra cedo — comida sem sal na infância é comida com menos sal a vida toda. Mel também fica de fora, pelo risco de botulismo antes de 1 ano. O que entra no lugar é cebola, alho, alho-poró, cominho, canela, louro, salsinha e raspa de limão: tempero não é sal. Papinha sem sal e sem tempero é que é insossa; sem sal e bem temperada é gostosa.",
        "Es la única receta del cuaderno donde la disciplina de la sal es absoluta: cero sal antes del año. El riñón del bebé no maneja el sodio, y el paladar se calibra temprano — comida sin sal en la infancia es comida con menos sal toda la vida. La miel también queda fuera, por el riesgo de botulismo antes del año. En su lugar entran cebolla, ajo, puerro, comino, canela, laurel, perejil y ralladura de limón: condimentar no es salar. La papilla sosa es la que no lleva condimento; sin sal y bien condimentada es rica.",
        "This is the one recipe in the notebook where salt discipline is absolute: no salt at all before age one. A baby's kidneys cannot handle the sodium, and taste calibrates early — food without salt in childhood means food with less salt for life. Honey is out too, because of the risk of infant botulism before age one. What goes in instead is onion, garlic, leek, cumin, cinnamon, bay, parsley and lime zest: seasoning is not salting. It is unseasoned baby food that tastes of nothing; unsalted and well seasoned, it is good."
      ),
    },
    {
      h: T("Papinha precisa de gordura", "La papilla necesita grasa", "Baby food needs fat"),
      p: T(
        "Bebê tem estômago pequeno e necessidade calórica alta, e é a gordura que carrega as vitaminas A, D, E e K dos legumes para dentro. Papinha magra é volumosa e pouco nutritiva. Aqui é óleo neutro de girassol, e não azeite, por dois motivos: não compete com o sabor da comida — nessa fase o bebê está conhecendo o gosto do legume, não o do azeite — e aguenta o refogado sem amargar. Entra duas vezes: no refogado e um fio no prato na hora de servir.",
        "El bebé tiene estómago pequeño y alta necesidad calórica, y es la grasa la que transporta las vitaminas A, D, E y K de las verduras hacia dentro. Una papilla magra es voluminosa y poco nutritiva. Acá es aceite neutro de girasol, y no de oliva, por dos motivos: no compite con el sabor de la comida — en esta etapa el bebé está conociendo el gusto de la verdura, no el del aceite — y aguanta el sofrito sin amargar. Entra dos veces: en el sofrito y un chorrito en el plato al servir.",
        "A baby has a small stomach and high calorie needs, and it is fat that carries vitamins A, D, E and K out of the vegetables and into the child. Lean baby food is bulky and thin on nutrition. Here it is neutral sunflower oil, not olive oil, for two reasons: it does not compete with the flavour of the food — at this stage the baby is learning the taste of the vegetable, not of the oil — and it survives the sofrito without turning bitter. It goes in twice: in the sofrito and as a drizzle on the plate."
      ),
    },
    {
      h: T("Fígado, uma vez por semana", "Hígado, una vez por semana", "Liver, once a week"),
      p: T(
        "É o ingrediente de maior densidade de ferro que existe para essa fase, e entrava na rotação: bovino ou de frango, uns 50 g no lote, bem limpo, picado miúdo e refogado junto com a cebola até perder o rosado. Sabor forte — equilibra bem com abóbora, cenoura ou beterraba, que são doces. Uma vez por semana basta: fígado concentra vitamina A e não deve virar rotina diária.",
        "Es el ingrediente de mayor densidad de hierro que existe para esta etapa, y entraba en la rotación: de res o de pollo, unos 50 g por tanda, bien limpio, picado fino y sofrito junto con la cebolla hasta perder el rosado. Sabor fuerte — equilibra bien con calabaza, zanahoria o remolacha, que son dulces. Una vez por semana basta: el hígado concentra vitamina A y no debe volverse rutina diaria.",
        "It is the densest source of iron available at this stage, and it was part of the rotation: beef or chicken, about 50 g per batch, well trimmed, finely chopped and cooked with the onion until no pink remains. Strong flavour — it balances well with squash, carrot or beetroot, which are sweet. Once a week is enough: liver concentrates vitamin A and should not become a daily habit."
      ),
    },
    {
      h: T("Textura por fase", "Textura por etapa", "Texture by stage"),
      p: T(
        "De 6 a 7 meses, amassado com garfo, com pedaços macios reconhecíveis — não liquidificar. De 8 a 9 meses, amassado grosseiro, pedaços de uns 5 mm, fibras da carne visíveis. De 10 a 12 meses, picado, quase comida de adulto sem sal. Depois de 1 ano é comida da família, e aí o sal volta a existir.",
        "De 6 a 7 meses, machacado con tenedor, con trozos blandos reconocibles — no licuar. De 8 a 9 meses, machacado grueso, trozos de unos 5 mm, fibras de la carne visibles. De 10 a 12 meses, picado, casi comida de adulto sin sal. Después del año es comida de la familia, y ahí la sal vuelve a existir.",
        "At 6 to 7 months, fork-mashed with recognisable soft pieces — do not blend. At 8 to 9 months, coarsely mashed, pieces around 5 mm, meat fibres visible. At 10 to 12 months, chopped, nearly adult food without salt. After age one it is family food, and salt comes back."
      ),
    },
    {
      h: T("Congelamento", "Congelación", "Freezing"),
      p: T(
        "Porcione quente-morno em potinhos ou em forma de gelo — cubos de uns 30 ml facilitam montar porções crescentes. Esfrie rápido e congele no mesmo dia, especialmente os lotes com folha verde e beterraba, ricos em nitrato, que não devem passar horas amornando na bancada. Congelador: 30 dias. Geladeira: 48 horas. Descongele na geladeira de véspera ou em banho-maria, e requente uma vez só. O que sobrou no prato do bebê se descarta — a saliva na colher contamina o resto.",
        "Porcioná tibio en potecitos o en cubetera — cubos de unos 30 ml facilitan armar porciones crecientes. Enfriá rápido y congelá el mismo día, sobre todo las tandas con hoja verde y remolacha, ricas en nitrato, que no deben pasar horas en la mesada. Congelador: 30 días. Heladera: 48 horas. Descongelá en la heladera desde la víspera o a baño maría, y recalentá una sola vez. Lo que sobró en el plato del bebé se descarta — la saliva en la cuchara contamina el resto.",
        "Portion it warm into small pots or an ice-cube tray — roughly 30 ml cubes make it easy to build growing portions. Cool fast and freeze the same day, especially batches with leafy greens and beetroot, which are high in nitrate and should not sit out warming for hours. Freezer: 30 days. Fridge: 48 hours. Thaw in the fridge overnight or in a water bath, and reheat once only. Whatever is left on the baby's plate goes in the bin — saliva on the spoon contaminates the rest."
      ),
    },
  ],
  notas: [
    T("Este capítulo é o registro do que eu fiz em casa, não orientação pediátrica. Introdução alimentar se acerta com o pediatra da criança — sobretudo alergias, ritmo e quantidades.",
      "Este capítulo es el registro de lo que hice en casa, no orientación pediátrica. La alimentación complementaria se define con el pediatra del niño — sobre todo alergias, ritmo y cantidades.",
      "This chapter is a record of what I did at home, not paediatric advice. Starting solids is something to settle with the child's paediatrician — especially allergies, pace and quantities."),
    T("Pressão não estraga nutriente. Pelo contrário: menos tempo e menos água que o cozimento aberto significa menos perda de vitamina hidrossolúvel — e a água do cozimento volta para a papinha.",
      "La presión no arruina nutrientes. Al contrario: menos tiempo y menos agua que la cocción abierta significa menos pérdida de vitaminas hidrosolubles — y el agua de cocción vuelve a la papilla.",
      "Pressure does not destroy nutrients. The opposite: less time and less water than open cooking means less loss of water-soluble vitamins — and the cooking liquid goes back into the food."),
    T("Ferro: carne (ou fígado) + leguminosa + folha verde no mesmo lote é o melhor da série. Uma fruta cítrica de sobremesa, logo depois da refeição, ajuda mais na absorção do que a raspa de limão dentro da panela, que entra por aroma.",
      "Hierro: carne (o hígado) + legumbre + hoja verde en la misma tanda es lo mejor de la serie. Una fruta cítrica de postre, justo después de la comida, ayuda más en la absorción que la ralladura dentro de la olla, que entra por aroma.",
      "Iron: meat (or liver) + pulses + leafy greens in the same batch is the best of the series. Citrus fruit for dessert, right after the meal, helps absorption more than the zest inside the pot, which is there for aroma."),
    T("Beterraba tinge tudo — a papinha #4 sai roxa e a fralda também. Normal; avise quem cuida.",
      "La remolacha tiñe todo — la papilla #4 sale morada y el pañal también. Es normal; avisá a quien cuida.",
      "Beetroot stains everything — purée #4 comes out purple and so does the nappy. Normal; warn whoever is on duty."),
    T("Casca de leguminosa: feijão e grão de bico bem cozidos na pressão soltam a pele e ela some no processamento. Grão de bico mal cozido deixa bolinha de casca — cozinha mais, não processa mais.",
      "Piel de legumbre: porotos y garbanzos bien cocidos a presión sueltan la piel y desaparece al procesar. El garbanzo mal cocido deja bolitas de piel — cociná más, no proceses más.",
      "Pulse skins: beans and chickpeas properly pressure-cooked release their skins and they vanish in the mashing. Undercooked chickpeas leave little pellets of skin — cook them longer, do not blend them harder."),
    T("Um lote por semana era o ritmo; papinha nova a cada 4 ou 5 dias evita enjoo e amplia repertório.",
      "Una tanda por semana era el ritmo; papilla nueva cada 4 o 5 días evita el hartazgo y amplía el repertorio.",
      "One batch a week was the rhythm; a new purée every 4 or 5 days avoids boredom and widens the repertoire."),
  ],
});

RECEITAS.push(
  {
    id: "papinha-4-ervilha-beterraba",
    capitulo: "papinhas",
    titulo: T("Papinha #4 — ervilha, beterraba e carne moída", "Papilla #4 — arveja, remolacha y carne molida", "Purée #4 — peas, beetroot and ground beef"),
    kicker: T("29/6/23 · A MAIS COLORIDA DA SÉRIE", "29/6/23 · LA MÁS COLORIDA DE LA SERIE", "29 JUN 23 · THE MOST COLOURFUL OF THE SERIES"),
    subtitulo: T(
      "Sai roxa e doce — quase sempre a favorita.",
      "Sale morada y dulce — casi siempre la favorita.",
      "It comes out purple and sweet — usually the favourite."
    ),
    principio: T(
      "A carne é quem carrega o ferro deste prato — a beterraba entra por cor, doçura e variedade, não como fonte de ferro relevante. Ela domina a cor e adoça bastante. Tinge a fralda também: normal.",
      "La carne es la que aporta el hierro de este plato — la remolacha entra por color, dulzor y variedad, no como fuente relevante de hierro. Domina el color y endulza bastante. Tiñe el pañal también: es normal.",
      "The beef is what carries the iron in this dish — the beetroot is there for colour, sweetness and variety, not as a meaningful iron source. It takes over the colour and sweetens it considerably. It stains the nappy too: that is normal."
    ),
    porcoes: 1, porcoesOpcoes: [1, 2], lote: true, ativo: 30, total: 50,
    rende: T("8–12 porções congeladas (~1,2–1,5 kg)", "8–12 porciones congeladas (~1,2–1,5 kg)", "8–12 frozen portions (~1.2–1.5 kg)"),
    utensilio: T("Panela de pressão", "Olla a presión", "Pressure cooker"),
    faixa: T("SEM SAL · A FOLHA ENTRA DEPOIS DA PRESSÃO", "SIN SAL · LA HOJA ENTRA DESPUÉS DE LA PRESIÓN", "NO SALT · THE GREENS GO IN AFTER THE PRESSURE"),
    ingredientes: [
      { q: null, u: "", nome: T("óleo de girassol", "aceite de girasol", "sunflower oil"), obs: T("no refogado, mais um fio no prato", "en el sofrito, más un chorrito en el plato", "for the sofrito, plus a drizzle to serve"), escala: false },
      { q: 1, u: "un", alt: { q: 150, u: "g" }, nome: T("cebola", "cebolla", "onion") },
      { q: 4, u: "dente", alt: { q: 16, u: "g" }, nome: T("alho", "ajo", "garlic") },
      { q: 200, u: "g", nome: T("carne moída", "carne molida", "ground beef") },
      { q: 200, u: "g", nome: T("beterraba", "remolacha", "beetroot"), obs: T("em cubos de 2 cm", "en cubos de 2 cm", "in 2 cm cubes") },
      { q: 200, u: "g", nome: T("batata", "papa", "potato"), obs: T("em cubos de 2 cm", "en cubos de 2 cm", "in 2 cm cubes") },
      { q: null, u: "", nome: T("água", "agua", "water"), obs: T("até quase cobrir", "hasta casi cubrir", "not quite covering"), escala: false },
      { q: 230, u: "g", nome: T("ervilha", "arveja", "peas") },
      { q: 200, u: "g", nome: T("espinafre", "espinaca", "spinach") },
      { q: null, u: "", nome: T("ervas e condimentos", "hierbas y especias", "herbs and spices"), obs: T("sem sal", "sin sal", "no salt"), escala: false },
    ],
    grade: [
      { col: 1, de: 0, ate: 3, titulo: T("refogar", "sofreír", "sofrito"), detalhe: T("cebola → alho → carne, até perder o rosado", "cebolla → ajo → carne, hasta perder el rosado", "onion → garlic → beef, until no pink remains") },
      { col: 2, de: 0, ate: 6, titulo: T("pressão", "presión", "pressure"), detalhe: T("5–6 min do chiado · beterraba é dura", "5–6 min desde el silbido · la remolacha es dura", "5–6 min from the hiss · beetroot is hard") },
      { col: 3, de: 0, ate: 8, titulo: T("sem tampa", "sin tapa", "lid off"), detalhe: T("ervilha e espinafre, 2 min", "arveja y espinaca, 2 min", "peas and spinach, 2 min") },
      { col: 4, de: 0, ate: 9, titulo: T("temperar e amassar", "condimentar y machacar", "season and mash"), detalhe: T("textura conforme a fase", "textura según la etapa", "texture to suit the stage") },
    ],
    modo: [
      { t: T("Descasque e pique tudo. Beterraba e batata em cubos de 2 cm.", "Pelá y picá todo. Remolacha y papa en cubos de 2 cm.", "Peel and chop everything. Beetroot and potato in 2 cm cubes.") },
      { t: T("Óleo na pressão aberta, cebola até murchar, alho só até perfumar.", "Aceite en la olla destapada, cebolla hasta ablandar, ajo solo hasta perfumar.", "Oil in the open cooker, onion until soft, garlic just until fragrant."), timer: 420 },
      { t: T("Carne moída, desmanchando com a colher até perder o rosado.", "Carne molida, deshaciéndola con la cuchara hasta perder el rosado.", "Ground beef, breaking it up with the spoon until no pink remains."), timer: 300 },
      { t: T("Beterraba, batata e água até quase cobrir. Tampa e pressão, 5 a 6 minutos do chiado.", "Remolacha, papa y agua hasta casi cubrir. Tapa y presión, 5 a 6 minutos desde el silbido.", "Beetroot, potato and water not quite covering. Lid on, 5 to 6 minutes from the hiss."), timer: 360 },
      { t: T("Abra a panela. Ervilha e espinafre no calor residual, sem tampa.", "Abrí la olla. Arveja y espinaca al calor residual, sin tapa.", "Open the cooker. Peas and spinach in the residual heat, lid off."), timer: 120 },
      { t: T("Ervas e condimentos fora do fogo. Amasse na textura da fase.", "Hierbas y especias fuera del fuego. Machacá según la textura de la etapa.", "Herbs and spices off the heat. Mash to the texture of the stage.") },
      { t: T("Porcione, esfrie rápido e congele no mesmo dia.", "Porcioná, enfriá rápido y congelá el mismo día.", "Portion, cool fast and freeze the same day.") },
    ],
    notas: [
      T("Ervilha congelada entra depois de abrir a panela; se for seca, cozinha desde o começo junto com os legumes.",
        "La arveja congelada entra después de abrir la olla; si es seca, se cocina desde el principio con las verduras.",
        "Frozen peas go in after opening the cooker; dried peas cook from the start with the vegetables."),
    ],
  },

  {
    id: "papinha-5-feijao-mandioquinha",
    capitulo: "papinhas",
    titulo: T("Papinha #5 — feijão, mandioquinha e limão", "Papilla #5 — porotos, arracacha y limón", "Purée #5 — beans, arracacha and lime"),
    kicker: T("6/7/23 · A VEGETARIANA", "6/7/23 · LA VEGETARIANA", "6 JUL 23 · THE VEGETARIAN ONE"),
    subtitulo: T(
      "Canela com raspa de limão é o tempero mais bonito de todos os bilhetes.",
      "Canela con ralladura de limón es el condimento más lindo de todas las notas.",
      "Cinnamon with lime zest is the prettiest seasoning in the whole set of notes."
    ),
    principio: T(
      "Única sem carne: o ferro vem do feijão, que é menos absorvido, então esta pede uma fruta cítrica de sobremesa logo depois. A mandioquinha deixa a textura mais sedosa que a batata — vale reservar para quando quiser papinha mais macia.",
      "La única sin carne: el hierro viene de los porotos, que se absorbe menos, así que esta pide una fruta cítrica de postre justo después. La arracacha da una textura más sedosa que la papa — conviene reservarla para cuando quieras una papilla más suave.",
      "The only meatless one: the iron comes from the beans, which is absorbed less readily, so this one wants citrus fruit for dessert right after. Arracacha gives a silkier texture than potato — worth saving for when you want a softer purée."
    ),
    porcoes: 1, porcoesOpcoes: [1, 2], lote: true, ativo: 30, total: 70,
    rende: T("8–12 porções congeladas (~1,2–1,5 kg)", "8–12 porciones congeladas (~1,2–1,5 kg)", "8–12 frozen portions (~1.2–1.5 kg)"),
    utensilio: T("Panela de pressão", "Olla a presión", "Pressure cooker"),
    faixa: T("SEM SAL · FEIJÃO COZIDO À PARTE, ATÉ DESMANCHAR", "SIN SAL · POROTOS COCIDOS APARTE, HASTA DESHACERSE", "NO SALT · BEANS COOKED SEPARATELY, UNTIL THEY COLLAPSE"),
    ingredientes: [
      { q: 200, u: "g", nome: T("feijão", "porotos", "beans"), obs: T("de molho 8–12 h, água trocada", "en remojo 8–12 h, cambiando el agua", "soaked 8–12 h, water changed") },
      { q: null, u: "", nome: T("óleo de girassol", "aceite de girasol", "sunflower oil"), escala: false },
      { q: 0.5, u: "un", alt: { q: 75, u: "g" }, nome: T("cebola", "cebolla", "onion") },
      { q: 4, u: "dente", alt: { q: 16, u: "g" }, nome: T("alho", "ajo", "garlic") },
      { q: 200, u: "g", nome: T("mandioquinha", "arracacha (apio criollo)", "arracacha (Andean root)"), obs: T("em cubos de 2 cm", "en cubos de 2 cm", "in 2 cm cubes") },
      { q: 200, u: "g", nome: T("cenoura", "zanahoria", "carrot"), obs: T("em cubos de 2 cm", "en cubos de 2 cm", "in 2 cm cubes") },
      { q: null, u: "", nome: T("água", "agua", "water"), obs: T("até quase cobrir", "hasta casi cubrir", "not quite covering"), escala: false },
      { q: 100, u: "g", nome: T("espinafre", "espinaca", "spinach") },
      { q: null, u: "", nome: T("cominho", "comino", "cumin"), escala: false },
      { q: null, u: "", nome: T("canela", "canela", "cinnamon"), escala: false },
      { q: null, u: "", nome: T("raspa de limão", "ralladura de limón", "lime zest"), escala: false },
    ],
    grade: [
      { col: 1, de: 0, ate: 0, titulo: T("molho e pressão à parte", "remojo y presión aparte", "soak and pressure, separately"), detalhe: T("8–12 h de molho · 20–25 min de pressão", "8–12 h de remojo · 20–25 min de presión", "8–12 h soak · 20–25 min pressure") },
      { col: 2, de: 1, ate: 3, titulo: T("refogar", "sofreír", "sofrito"), detalhe: T("cebola até murchar, alho só até perfumar", "cebolla hasta ablandar, ajo solo hasta perfumar", "onion until soft, garlic just until fragrant") },
      { col: 3, de: 0, ate: 6, titulo: T("pressão", "presión", "pressure"), detalhe: T("4–5 min · com o feijão e um pouco do caldo", "4–5 min · con los porotos y algo de caldo", "4–5 min · with the beans and some of their liquid") },
      { col: 4, de: 0, ate: 7, titulo: T("sem tampa", "sin tapa", "lid off"), detalhe: T("espinafre, 2 min", "espinaca, 2 min", "spinach, 2 min") },
      { col: 5, de: 0, ate: 10, titulo: T("temperar e amassar", "condimentar y machacar", "season and mash"), detalhe: T("raspa de limão fora do fogo", "ralladura fuera del fuego", "zest off the heat") },
    ],
    modo: [
      { t: T("Feijão de molho de véspera, água trocada uma vez.", "Porotos en remojo desde la víspera, cambiando el agua una vez.", "Soak the beans overnight, changing the water once.") },
      { t: T("Cozinhe o feijão sozinho na pressão até desmanchar entre os dedos. Reserve com um pouco do caldo.", "Cociná los porotos solos a presión hasta que se deshagan entre los dedos. Reservá con algo de caldo.", "Pressure-cook the beans alone until they crush between your fingers. Set aside with some of their liquid."), timer: 1350 },
      { t: T("Óleo, cebola até murchar, alho só até perfumar.", "Aceite, cebolla hasta ablandar, ajo solo hasta perfumar.", "Oil, onion until soft, garlic just until fragrant."), timer: 420 },
      { t: T("Mandioquinha e cenoura em cubos, o feijão com um pouco do caldo, água até quase cobrir. Pressão.", "Arracacha y zanahoria en cubos, los porotos con algo de caldo, agua hasta casi cubrir. Presión.", "Arracacha and carrot in cubes, the beans with some liquid, water not quite covering. Pressure."), timer: 300 },
      { t: T("Abra e junte o espinafre no calor residual.", "Abrí y sumá la espinaca al calor residual.", "Open and add the spinach in the residual heat."), timer: 120 },
      { t: T("Cominho e canela nos últimos minutos; raspa de limão fora do fogo. Amasse.", "Comino y canela en los últimos minutos; ralladura fuera del fuego. Machacá.", "Cumin and cinnamon in the last minutes; zest off the heat. Mash.") },
      { t: T("Porcione, esfrie rápido e congele no mesmo dia.", "Porcioná, enfriá rápido y congelá el mismo día.", "Portion, cool fast and freeze the same day.") },
    ],
    notas: [
      T("A raspa de limão entra por aroma, não por vitamina C — para ajudar na absorção do ferro, o que vale é uma fruta cítrica logo depois da refeição.",
        "La ralladura entra por aroma, no por vitamina C — para ayudar en la absorción del hierro, lo que sirve es una fruta cítrica justo después de la comida.",
        "The zest is there for aroma, not vitamin C — what actually helps iron absorption is citrus fruit right after the meal."),
    ],
  },

  {
    id: "papinha-6-grao-de-bico-abobora",
    capitulo: "papinhas",
    titulo: T("Papinha #6 — grão de bico, abóbora e carne", "Papilla #6 — garbanzos, calabaza y carne", "Purée #6 — chickpeas, squash and beef"),
    kicker: T("11/7/23 · SEM MEDIDAS NO BILHETE", "11/7/23 · SIN MEDIDAS EN LA NOTA", "11 JUL 23 · NO MEASUREMENTS IN THE NOTE"),
    subtitulo: T(
      "A mais completa em nutrição: proteína animal e vegetal no mesmo prato.",
      "La más completa en nutrición: proteína animal y vegetal en el mismo plato.",
      "The most nutritionally complete: animal and plant protein in one dish."
    ),
    principio: T(
      "A abóbora traz vitamina A e engrossa sozinha. Canela com abóbora é combinação clássica e funciona muito bem sem açúcar nenhum. Cuidado com a água — abóbora e grão de bico soltam bastante, então comece com menos.",
      "La calabaza aporta vitamina A y espesa sola. Canela con calabaza es combinación clásica y funciona muy bien sin nada de azúcar. Cuidado con el agua — calabaza y garbanzos sueltan bastante, así que empezá con menos.",
      "Squash brings vitamin A and thickens by itself. Cinnamon and squash is a classic pairing and works beautifully with no sugar at all. Go easy on the water — squash and chickpeas release plenty, so start with less."
    ),
    porcoes: 1, porcoesOpcoes: [1, 2], lote: true, ativo: 30, total: 75,
    rende: T("8–12 porções congeladas (~1,2–1,5 kg)", "8–12 porciones congeladas (~1,2–1,5 kg)", "8–12 frozen portions (~1.2–1.5 kg)"),
    utensilio: T("Panela de pressão", "Olla a presión", "Pressure cooker"),
    faixa: T("SEM SAL · MENOS ÁGUA QUE O NORMAL", "SIN SAL · MENOS AGUA QUE LO HABITUAL", "NO SALT · LESS WATER THAN USUAL"),
    ingredientes: [
      { q: null, u: "", nome: T("grão de bico", "garbanzos", "chickpeas"), obs: T("de molho 12 h", "en remojo 12 h", "soaked 12 h"), escala: false },
      { q: null, u: "", nome: T("óleo de girassol", "aceite de girasol", "sunflower oil"), escala: false },
      { q: null, u: "", nome: T("cebola", "cebolla", "onion"), escala: false },
      { q: null, u: "", nome: T("alho", "ajo", "garlic"), escala: false },
      { q: null, u: "", nome: T("carne moída", "carne molida", "ground beef"), escala: false },
      { q: null, u: "", nome: T("abóbora", "calabaza", "squash"), obs: T("em cubos de 2 cm", "en cubos de 2 cm", "in 2 cm cubes"), escala: false },
      { q: null, u: "", nome: T("batata", "papa", "potato"), obs: T("em cubos de 2 cm", "en cubos de 2 cm", "in 2 cm cubes"), escala: false },
      { q: null, u: "", nome: T("água", "agua", "water"), obs: T("menos que o normal", "menos que lo habitual", "less than usual"), escala: false },
      { q: null, u: "", nome: T("espinafre", "espinaca", "spinach"), escala: false },
      { q: null, u: "", nome: T("canela", "canela", "cinnamon"), escala: false },
      { q: null, u: "", nome: T("cominho", "comino", "cumin"), escala: false },
    ],
    grade: [
      { col: 1, de: 0, ate: 0, titulo: T("molho e pressão à parte", "remojo y presión aparte", "soak and pressure, separately"), detalhe: T("12 h de molho · 25 min de pressão", "12 h de remojo · 25 min de presión", "12 h soak · 25 min pressure") },
      { col: 2, de: 1, ate: 4, titulo: T("refogar", "sofreír", "sofrito"), detalhe: T("cebola, alho, carne até perder o rosado", "cebolla, ajo, carne hasta perder el rosado", "onion, garlic, beef until no pink remains") },
      { col: 3, de: 0, ate: 7, titulo: T("pressão", "presión", "pressure"), detalhe: T("4 min · abóbora cozinha rápido", "4 min · la calabaza se cocina rápido", "4 min · squash cooks fast") },
      { col: 4, de: 0, ate: 8, titulo: T("sem tampa", "sin tapa", "lid off"), detalhe: T("espinafre, 2 min", "espinaca, 2 min", "spinach, 2 min") },
      { col: 5, de: 0, ate: 10, titulo: T("temperar e amassar", "condimentar y machacar", "season and mash") },
    ],
    modo: [
      { t: T("Grão de bico de molho 12 h; cozinhe sozinho na pressão até desmanchar mesmo — mal cozido deixa bolinha de casca.", "Garbanzos en remojo 12 h; cocinalos solos a presión hasta que se deshagan de verdad — mal cocidos dejan bolitas de piel.", "Soak the chickpeas 12 h; pressure-cook them alone until they truly collapse — undercooked, the skins leave little pellets."), timer: 1500 },
      { t: T("Óleo, cebola, alho, e a carne moída até perder o rosado.", "Aceite, cebolla, ajo, y la carne molida hasta perder el rosado.", "Oil, onion, garlic, then the beef until no pink remains."), timer: 480 },
      { t: T("Abóbora e batata em cubos, o grão de bico, água com moderação. Pressão.", "Calabaza y papa en cubos, los garbanzos, agua con moderación. Presión.", "Squash and potato in cubes, the chickpeas, water sparingly. Pressure."), timer: 240 },
      { t: T("Abra e junte o espinafre no calor residual.", "Abrí y sumá la espinaca al calor residual.", "Open and add the spinach in the residual heat."), timer: 120 },
      { t: T("Canela e cominho. Amasse na textura da fase.", "Canela y comino. Machacá según la etapa.", "Cinnamon and cumin. Mash to the texture of the stage.") },
      { t: T("Porcione, esfrie rápido e congele no mesmo dia.", "Porcioná, enfriá rápido y congelá el mismo día.", "Portion, cool fast and freeze the same day.") },
    ],
    notas: [
      T("O bilhete original só listava os ingredientes, sem quantidade — e não se inventou nenhuma. A proporção das outras papinhas (200 g por item, 100 g de folha, 200 g de proteína) encaixa bem se for repetir.",
        "La nota original solo listaba los ingredientes, sin cantidad — y no se inventó ninguna. La proporción de las otras papillas (200 g por ítem, 100 g de hoja, 200 g de proteína) encaja bien si se quiere repetir.",
        "The original note listed only ingredients, no amounts — and none were invented. The proportions of the other purées (200 g per item, 100 g of greens, 200 g of protein) fit well if you want to repeat it."),
    ],
  },

  {
    id: "papinha-7-suina-alho-poro",
    capitulo: "papinhas",
    titulo: T("Papinha #7 — carne suína e alho-poró", "Papilla #7 — cerdo y puerro", "Purée #7 — pork and leek"),
    kicker: T("2/8/23 · A MAIS \"DE GENTE GRANDE\"", "2/8/23 · LA MÁS \"DE GENTE GRANDE\"", "2 AUG 23 · THE MOST GROWN-UP ONE"),
    subtitulo: T(
      "Alho-poró é mais doce e menos agressivo que a cebola — bom para bebê que estranha sabor forte.",
      "El puerro es más dulce y menos agresivo que la cebolla — bueno para un bebé al que le cuesta el sabor fuerte.",
      "Leek is sweeter and gentler than onion — good for a baby who balks at strong flavours."
    ),
    principio: T(
      "Corte magro de porco — pernil ou lombo — desfia bem na pressão e fica macio sem virar pasta. Peça com gordura fica melhor de sabor, mas exige tirar o excesso depois. Foi a única aparição do alho-poró na série e merecia ter voltado.",
      "Un corte magro de cerdo — pernil o lomo — se deshilacha bien a presión y queda tierno sin volverse pasta. Un corte con grasa sabe mejor, pero exige retirar el exceso después. Fue la única aparición del puerro en la serie y merecía haber vuelto.",
      "A lean pork cut — leg or loin — shreds well under pressure and turns tender without going pasty. A fattier cut tastes better but means skimming afterwards. This was the leek's only appearance in the series and it deserved a comeback."
    ),
    porcoes: 1, porcoesOpcoes: [1, 2], lote: true, ativo: 30, total: 50,
    rende: T("8–12 porções congeladas (~1,2–1,5 kg)", "8–12 porciones congeladas (~1,2–1,5 kg)", "8–12 frozen portions (~1.2–1.5 kg)"),
    utensilio: T("Panela de pressão", "Olla a presión", "Pressure cooker"),
    faixa: T("SEM SAL · SÓ A PARTE BRANCA E O VERDE-CLARO DO ALHO-PORÓ", "SIN SAL · SOLO LA PARTE BLANCA Y EL VERDE CLARO DEL PUERRO", "NO SALT · ONLY THE WHITE AND PALE GREEN OF THE LEEK"),
    ingredientes: [
      { q: null, u: "", nome: T("óleo de girassol", "aceite de girasol", "sunflower oil"), escala: false },
      { q: null, u: "", nome: T("cebola", "cebolla", "onion"), escala: false },
      { q: null, u: "", nome: T("alho-poró", "puerro", "leek"), obs: T("parte branca e verde-claro, fatiado fino", "parte blanca y verde claro, en rodajas finas", "white and pale green, thinly sliced"), escala: false },
      { q: null, u: "", nome: T("carne suína", "carne de cerdo", "pork"), obs: T("pernil ou lombo, em cubos pequenos", "pernil o lomo, en cubos pequeños", "leg or loin, in small cubes"), escala: false },
      { q: null, u: "", nome: T("batata", "papa", "potato"), obs: T("em cubos de 2 cm", "en cubos de 2 cm", "in 2 cm cubes"), escala: false },
      { q: null, u: "", nome: T("cenoura", "zanahoria", "carrot"), obs: T("em cubos de 2 cm", "en cubos de 2 cm", "in 2 cm cubes"), escala: false },
      { q: null, u: "", nome: T("água", "agua", "water"), obs: T("até quase cobrir", "hasta casi cubrir", "not quite covering"), escala: false },
      { q: null, u: "", nome: T("espinafre", "espinaca", "spinach"), escala: false },
      { q: null, u: "", nome: T("condimentos", "especias", "spices"), obs: T("sem sal", "sin sal", "no salt"), escala: false },
    ],
    grade: [
      { col: 1, de: 0, ate: 3, titulo: T("refogar e selar", "sofreír y sellar", "sofrito and sear"), detalhe: T("cebola e alho-poró, depois a carne", "cebolla y puerro, después la carne", "onion and leek, then the pork") },
      { col: 2, de: 0, ate: 6, titulo: T("pressão", "presión", "pressure"), detalhe: T("5 min do chiado", "5 min desde el silbido", "5 min from the hiss") },
      { col: 3, de: 0, ate: 7, titulo: T("sem tampa", "sin tapa", "lid off"), detalhe: T("espinafre, 2 min", "espinaca, 2 min", "spinach, 2 min") },
      { col: 4, de: 0, ate: 8, titulo: T("temperar e amassar", "condimentar y machacar", "season and mash") },
    ],
    modo: [
      { t: T("Óleo, cebola e alho-poró fatiado fino, até murchar sem dourar.", "Aceite, cebolla y puerro en rodajas finas, hasta ablandar sin dorar.", "Oil, onion and thinly sliced leek, softened without colouring."), timer: 480 },
      { t: T("Carne suína em cubos pequenos, selada até perder o rosado.", "Cerdo en cubos pequeños, sellado hasta perder el rosado.", "Pork in small cubes, seared until no pink remains."), timer: 360 },
      { t: T("Batata e cenoura em cubos, água até quase cobrir. Pressão.", "Papa y zanahoria en cubos, agua hasta casi cubrir. Presión.", "Potato and carrot in cubes, water not quite covering. Pressure."), timer: 300 },
      { t: T("Abra e junte o espinafre no calor residual.", "Abrí y sumá la espinaca al calor residual.", "Open and add the spinach in the residual heat."), timer: 120 },
      { t: T("Condimentos fora do fogo. Amasse na textura da fase.", "Especias fuera del fuego. Machacá según la etapa.", "Spices off the heat. Mash to the texture of the stage.") },
      { t: T("Porcione, esfrie rápido e congele no mesmo dia.", "Porcioná, enfriá rápido y congelá el mismo día.", "Portion, cool fast and freeze the same day.") },
    ],
    notas: [
      T("Sem medidas no bilhete original — nada foi inventado. Se for repetir, a proporção das outras (200 g por item, 100 g de folha, 200 g de proteína) serve de partida.",
        "Sin medidas en la nota original — no se inventó nada. Si vas a repetirla, la proporción de las otras (200 g por ítem, 100 g de hoja, 200 g de proteína) sirve de punto de partida.",
        "No measurements in the original note — nothing was invented. If you repeat it, the proportions of the others (200 g per item, 100 g of greens, 200 g of protein) are a starting point."),
    ],
  },

  {
    id: "papinha-8-frango-feijao",
    capitulo: "papinhas",
    titulo: T("Papinha #8 — frango, feijão e cenoura", "Papilla #8 — pollo, porotos y zanahoria", "Purée #8 — chicken, beans and carrot"),
    kicker: T("21/8/23 · A MAIS EQUILIBRADA", "21/8/23 · LA MÁS EQUILIBRADA", "21 AUG 23 · THE BEST BALANCED"),
    subtitulo: T(
      "A mais neutra da série, boa para dia de bebê resistente.",
      "La más neutra de la serie, buena para un día de bebé reticente.",
      "The most neutral of the series, good for a day when the baby is resisting."
    ),
    principio: T(
      "Frango com feijão dá proteína suficiente com sabor suave. 100 g de proteína animal para uns 700 g de vegetal é a proporção mais leve das cinco — funciona porque o feijão complementa.",
      "Pollo con porotos da proteína suficiente con sabor suave. 100 g de proteína animal para unos 700 g de verdura es la proporción más liviana de las cinco — funciona porque los porotos complementan.",
      "Chicken with beans gives enough protein with a mild flavour. 100 g of animal protein to about 700 g of vegetables is the lightest ratio of the five — it works because the beans fill the gap."
    ),
    porcoes: 1, porcoesOpcoes: [1, 2], lote: true, ativo: 30, total: 70,
    rende: T("8–12 porções congeladas (~1,2–1,5 kg)", "8–12 porciones congeladas (~1,2–1,5 kg)", "8–12 frozen portions (~1.2–1.5 kg)"),
    utensilio: T("Panela de pressão", "Olla a presión", "Pressure cooker"),
    faixa: T("SEM SAL · CINCO DENTES DE ALHO É BASTANTE, E TUDO BEM", "SIN SAL · CINCO DIENTES DE AJO ES BASTANTE, Y ESTÁ BIEN", "NO SALT · FIVE CLOVES OF GARLIC IS A LOT, AND THAT'S FINE"),
    ingredientes: [
      { q: 200, u: "g", nome: T("feijão", "porotos", "beans"), obs: T("de molho 8–12 h", "en remojo 8–12 h", "soaked 8–12 h") },
      { q: null, u: "", nome: T("óleo de girassol", "aceite de girasol", "sunflower oil"), escala: false },
      { q: 1, u: "un", alt: { q: 150, u: "g" }, nome: T("cebola", "cebolla", "onion") },
      { q: 5, u: "dente", alt: { q: 20, u: "g" }, nome: T("alho", "ajo", "garlic") },
      { q: 100, u: "g", nome: T("frango", "pollo", "chicken"), obs: T("em cubinhos", "en cubitos", "in small cubes") },
      { q: 200, u: "g", nome: T("cenoura", "zanahoria", "carrot"), obs: T("em cubos de 2 cm", "en cubos de 2 cm", "in 2 cm cubes") },
      { q: 200, u: "g", nome: T("batata", "papa", "potato"), obs: T("em cubos de 2 cm", "en cubos de 2 cm", "in 2 cm cubes") },
      { q: null, u: "", nome: T("água", "agua", "water"), obs: T("até quase cobrir", "hasta casi cubrir", "not quite covering"), escala: false },
      { q: 100, u: "g", nome: T("espinafre", "espinaca", "spinach") },
      { q: null, u: "", nome: T("cominho", "comino", "cumin"), escala: false },
      { q: null, u: "", nome: T("canela", "canela", "cinnamon"), escala: false },
    ],
    grade: [
      { col: 1, de: 0, ate: 0, titulo: T("molho e pressão à parte", "remojo y presión aparte", "soak and pressure, separately"), detalhe: T("20–25 min de pressão", "20–25 min de presión", "20–25 min pressure") },
      { col: 2, de: 1, ate: 4, titulo: T("refogar", "sofreír", "sofrito"), detalhe: T("cebola, alho, frango até perder o rosado", "cebolla, ajo, pollo hasta perder el rosado", "onion, garlic, chicken until no pink remains") },
      { col: 3, de: 0, ate: 7, titulo: T("pressão", "presión", "pressure"), detalhe: T("5 min do chiado", "5 min desde el silbido", "5 min from the hiss") },
      { col: 4, de: 0, ate: 8, titulo: T("sem tampa", "sin tapa", "lid off"), detalhe: T("feijão e espinafre, 2 min", "porotos y espinaca, 2 min", "beans and spinach, 2 min") },
      { col: 5, de: 0, ate: 10, titulo: T("temperar e amassar", "condimentar y machacar", "season and mash") },
    ],
    modo: [
      { t: T("Feijão de molho de véspera; cozinhe sozinho na pressão até desmanchar.", "Porotos en remojo desde la víspera; cocinalos solos a presión hasta que se deshagan.", "Soak the beans overnight; pressure-cook them alone until they collapse."), timer: 1350 },
      { t: T("Óleo, cebola até murchar, alho só até perfumar — cinco dentes é bastante, e tudo bem.", "Aceite, cebolla hasta ablandar, ajo solo hasta perfumar — cinco dientes es bastante, y está bien.", "Oil, onion until soft, garlic just until fragrant — five cloves is a lot, and that's fine."), timer: 420 },
      { t: T("Frango em cubinhos até perder o rosado.", "Pollo en cubitos hasta perder el rosado.", "Chicken in small cubes until no pink remains."), timer: 300 },
      { t: T("Cenoura e batata em cubos, água até quase cobrir. Pressão.", "Zanahoria y papa en cubos, agua hasta casi cubrir. Presión.", "Carrot and potato in cubes, water not quite covering. Pressure."), timer: 300 },
      { t: T("Abra, junte o feijão e o espinafre no calor residual.", "Abrí, sumá los porotos y la espinaca al calor residual.", "Open, add the beans and spinach in the residual heat."), timer: 120 },
      { t: T("Cominho e canela. Amasse na textura da fase.", "Comino y canela. Machacá según la etapa.", "Cumin and cinnamon. Mash to the texture of the stage.") },
      { t: T("Porcione, esfrie rápido e congele no mesmo dia.", "Porcioná, enfriá rápido y congelá el mismo día.", "Portion, cool fast and freeze the same day.") },
    ],
    notas: [
      T("Trocando o frango por 50 g de fígado picado miúdo, refogado junto com a cebola, esta vira a papinha de maior ferro do caderno.",
        "Cambiando el pollo por 50 g de hígado bien picado, sofrito junto con la cebolla, esta pasa a ser la papilla con más hierro del cuaderno.",
        "Swap the chicken for 50 g of finely chopped liver, cooked with the onion, and this becomes the highest-iron purée in the book."),
    ],
  }
);
