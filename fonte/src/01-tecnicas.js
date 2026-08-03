/* ============================================================
   TÉCNICAS
   ============================================================ */
const TECNICAS = [
  {
    id: "principio-pele",
    titulo: T("O princípio da pele crocante", "El principio de la piel crujiente", "The crisp-skin principle"),
    kicker: T("TÉCNICA · VALE PARA TODA AVE COM PELE", "TÉCNICA · SIRVE PARA CUALQUIER AVE CON PIEL", "TECHNIQUE · WORKS FOR ANY BIRD WITH SKIN"),
    resumo: T(
      "Frigideira fria, fogo baixo e paciência produzem pele vidrada. Pressa produz borracha.",
      "Sartén fría, fuego bajo y paciencia producen piel vidriada. La prisa produce goma.",
      "Cold pan, low heat and patience produce glassy skin. Hurry produces rubber."
    ),
    corpo: [
      {
        h: T("A gordura precisa sair antes de a superfície dourar",
             "La grasa tiene que salir antes de que la superficie dore",
             "The fat has to render before the surface browns"),
        p: T(
          "Sob a pele existe uma camada de gordura. Se a superfície doura antes de essa gordura derreter, ela fica presa: a pele endurece por fora e continua flácida por baixo. Começar com a frigideira fria e subir o calor devagar dá tempo para a gordura render e escapar — a pele então frita na própria gordura e vitrifica.",
          "Bajo la piel hay una capa de grasa. Si la superficie dora antes de que esa grasa se derrita, queda atrapada: la piel endurece por fuera y sigue fláccida por debajo. Empezar con la sartén fría y subir el calor despacio da tiempo a que la grasa se derrita y escape — la piel entonces se fríe en su propia grasa y se vidria.",
          "Under the skin there is a layer of fat. If the surface browns before that fat melts, it stays trapped: the skin hardens on the outside and remains flabby underneath. Starting with a cold pan and raising the heat slowly gives the fat time to render and escape — the skin then fries in its own fat and turns to glass."
        ),
      },
      {
        h: T("Água é a inimiga", "El agua es la enemiga", "Water is the enemy"),
        p: T(
          "Enquanto houver umidade na superfície, a pele não passa de 100 °C, e nada doura a 100 °C: toda a energia do fogo vai para evaporar água em vez de tostar. Secar com papel toalha não é capricho, é a etapa que mais muda o resultado. Frango que ficou marinando precisa de cuidado dobrado — o tempero deixa a pele encharcada.",
          "Mientras haya humedad en la superficie, la piel no pasa de 100 °C, y nada dora a 100 °C: toda la energía del fuego se va en evaporar agua en vez de tostar. Secar con papel de cocina no es un capricho, es la etapa que más cambia el resultado. El pollo que estuvo marinando necesita el doble de cuidado — el adobo deja la piel empapada.",
          "As long as there is moisture on the surface, the skin never gets past 100 °C, and nothing browns at 100 °C: all the heat goes into evaporating water instead of toasting. Patting dry with paper towel is not fussiness, it is the step that changes the result most. Chicken that has been marinating needs twice the care — the marinade leaves the skin soaked."
        ),
      },
      {
        h: T("Contato total", "Contacto total", "Full contact"),
        p: T(
          "A pele encolhe e empena ao esquentar, e o meio dela deixa de tocar a frigideira. Um peso por cima — outra panela, uma leiteira com água — mantém a superfície inteira em contato com o metal. Sem peso, o resultado é uma coroa dourada com um centro pálido.",
          "La piel encoge y se comba al calentarse, y su parte central deja de tocar la sartén. Un peso encima — otra olla, un cazo con agua — mantiene toda la superficie en contacto con el metal. Sin peso, el resultado es una corona dorada con un centro pálido.",
          "Skin shrinks and buckles as it heats, and its middle stops touching the pan. A weight on top — another pan, a saucepan filled with water — keeps the whole surface against the metal. Without weight you get a browned rim around a pale centre."
        ),
      },
      {
        h: T("Não cutuque", "No lo toques", "Don't poke it"),
        p: T(
          "Cada vez que a peça é levantada, o vapor entra por baixo e amolece o que já estava crocante. Doze a quinze minutos sem tocar parece muito tempo na primeira vez. É o tempo certo.",
          "Cada vez que levantas la pieza, el vapor entra por debajo y ablanda lo que ya estaba crujiente. Doce a quince minutos sin tocar parecen mucho la primera vez. Es el tiempo correcto.",
          "Every time you lift the piece, steam gets underneath and softens what was already crisp. Twelve to fifteen minutes without touching feels like a long time the first time. It is the right time."
        ),
      },
      {
        h: T("Açúcar queima antes", "El azúcar se quema antes", "Sugar burns first"),
        p: T(
          "Mel, shoyu e molho barbecue caramelizam bem antes de a pele terminar. Para este método, tempero seco: sal, ervas, pimenta, páprica, alho. Doce entra depois, no prato, se entrar.",
          "Miel, salsa de soja y salsa barbacoa caramelizan mucho antes de que la piel termine. Para este método, adobo seco: sal, hierbas, pimienta, pimentón, ajo. Lo dulce entra después, en el plato, si es que entra.",
          "Honey, soy sauce and barbecue sauce caramelise long before the skin is done. For this method, dry seasoning only: salt, herbs, pepper, paprika, garlic. Sweetness goes on later, at the table, if at all."
        ),
      },
    ],
    notas: [
      T("Ponto certo: 75 °C no centro é o que garante segurança. O osso soltando fácil da carne é só um sinal a mais, não substitui o termômetro.",
        "Punto correcto: 75 °C en el centro es lo que garantiza seguridad. El hueso soltándose fácil de la carne es solo una señal extra, no reemplaza el termómetro.",
        "Doneness: 75 °C at the centre is what actually guarantees safety. The bone pulling free easily is a bonus sign, not a substitute for a thermometer."),
      T("Frango cru temperado dura 1 a 2 dias na geladeira, mantido sempre a até 4 °C. Cheiro e textura indicam deterioração, mas não confirmam segurança — na dúvida sobre o tempo ou a temperatura de conservação, descarte.",
        "El pollo crudo ya sazonado dura 1 a 2 días en la nevera, siempre a 4 °C o menos. El olor y la textura indican deterioro, pero no confirman seguridad — ante la duda sobre el tiempo o la temperatura de conservación, descártalo.",
        "Seasoned raw chicken keeps 1 to 2 days in the fridge, held continuously at 4 °C or below. Smell and texture signal spoilage but do not confirm safety — when in doubt about time or temperature, discard it."),
      T("Marinada líquida atrapalha. Se usar, escorra e seque bem antes de levar ao fogo.",
        "La marinada líquida estorba. Si la usas, escurre y seca bien antes de llevar al fuego.",
        "A wet marinade works against you. If you use one, drain and dry thoroughly before it hits the heat."),
    ],
  },

  {
    id: "disciplina-do-sal",
    titulo: T("A disciplina do sal", "La disciplina de la sal", "Salt discipline"),
    kicker: T("TÉCNICA · A REGRA QUE ATRAVESSA O LIVRO INTEIRO", "TÉCNICA · LA REGLA QUE ATRAVIESA TODO EL LIBRO", "TECHNIQUE · THE RULE THAT RUNS THROUGH THE WHOLE BOOK"),
    resumo: T(
      "Quase toda receita daqui tem três ou quatro fontes de sódio escondidas. Prove antes, sempre.",
      "Casi toda receta de aquí tiene tres o cuatro fuentes de sodio escondidas. Prueba antes, siempre.",
      "Almost every recipe here has three or four hidden sources of sodium. Taste first, always."
    ),
    corpo: [
      {
        h: T("O sal quase nunca vem só do saleiro", "La sal casi nunca viene solo del salero", "Salt almost never comes only from the salt cellar"),
        p: T(
          "Olhe o padrão. A feijoada tem carne seca, costela salgada, orelha, rabo, paio e calabresa — seis fontes antes de qualquer pitada. O fried rice tem bacon, calabresa, shoyu e aji-no-moto. O risone tem tablete de caldo, hondashi e lemon pepper. A marinada da fraldinha tem shoyu, molho inglês, nam pla e sal. Os medalhões têm shoyu no molho. O escabeche tem o peixe e o banho de vinagre já salgados. Em todos esses casos, salgar no começo é apostar às cegas.",
          "Mira el patrón. La feijoada lleva carne seca, costilla salada, oreja, rabo, paio y chorizo calabresa — seis fuentes antes de cualquier pizca. El fried rice lleva bacon, calabresa, salsa de soja y glutamato. El risoni lleva pastilla de caldo, hondashi y lemon pepper. La marinada del vacío lleva salsa de soja, salsa Worcestershire, salsa de pescado y sal. Los medallones llevan salsa de soja en la salsa. El escabeche tiene el pescado y el baño de vinagre ya salados. En todos estos casos, salar al principio es apostar a ciegas.",
          "Look at the pattern. Feijoada has dried salted beef, salted ribs, ear, tail, paio and calabresa sausage — six sources before any pinch. Fried rice has bacon, calabresa, soy sauce and MSG. The orzo has a stock cube, hondashi and lemon pepper. The flap steak marinade has soy sauce, Worcestershire, fish sauce and salt. The pork medallions have soy sauce in the sauce. The escabeche has both the fish and the vinegar bath already salted. In every one of these, salting at the start is betting blind."
        ),
      },
      {
        h: T("A regra prática", "La regla práctica", "The practical rule"),
        p: T(
          "Sal entra no fim, depois de provar — e frequentemente não entra. Nas receitas com redução (o molho dos medalhões, a redução da marinada da fraldinha), lembre que concentrar o líquido concentra o sal junto: um molho equilibrado no meio da redução fica salgado no fim.",
          "La sal entra al final, después de probar — y muchas veces no entra. En las recetas con reducción (la salsa de los medallones, la reducción de la marinada del vacío), recuerda que concentrar el líquido concentra la sal con él: una salsa equilibrada a media reducción queda salada al final.",
          "Salt goes in at the end, after tasting — and often it does not go in at all. In recipes with a reduction (the medallion sauce, the reduced steak marinade), remember that concentrating the liquid concentrates the salt with it: a sauce that tastes right halfway through the reduction will be salty by the end."
        ),
      },
      {
        h: T("As exceções são poucas e claras", "Las excepciones son pocas y claras", "The exceptions are few and clear"),
        p: T(
          "Carne que vai selar leva sal generoso na superfície, só na hora de ir para a chapa — ali o sal faz crosta, não tempero interno. Batata cozida leva sal na água, porque é a única chance de temperar por dentro; depois, sal leve por cima. Salada leva sal só na hora de servir, senão vira sopa. Vinagrete, idem.",
          "La carne que se va a sellar lleva sal generosa en la superficie, solo justo antes de ir a la plancha — ahí la sal hace costra, no sazón interior. La patata cocida lleva sal en el agua, porque es la única oportunidad de sazonarla por dentro; después, sal ligera por encima. La ensalada lleva sal solo al momento de servir, si no se vuelve sopa. El vinagreta, igual.",
          "Meat that will be seared takes generous salt on the surface, only as it goes to the griddle — there the salt builds crust, not interior seasoning. Boiled potatoes take salt in the water, because that is the only chance to season them inside; afterwards, a light sprinkle. Salad takes salt only as it is served, or it turns to soup. Same for vinaigrette."
        ),
      },
      {
        h: T("Quando o sal já foi longe demais", "Cuando la sal ya fue demasiado lejos", "When the salt has already gone too far"),
        p: T(
          "Nas carnes salgadas, o controle é a dessalga: 24 horas na geladeira em bastante água, trocando a cada 3 a 4 horas. Se o tempo foi menor, cozinhe uma amostra pequena em água e prove depois de completamente cozida — nunca crua — para decidir; se ainda estiver salgado, pré-cozinhe 15 minutos em vez de 10 e troque a água no meio.",
          "En las carnes saladas, el control es el desalado: 24 horas en la nevera en abundante agua, cambiándola cada 3 o 4 horas. Si el tiempo fue menor, cociná una muestra pequeña en agua y probá una vez bien cocida — nunca cruda — para decidir; si sigue salado, precociná 15 minutos en vez de 10 y cambiá el agua a mitad.",
          "With salted meats, the control is the soak: 24 hours in the fridge in plenty of water, changed every 3 to 4 hours. If you had less time, cook a small sample in water and taste it once fully cooked — never raw — to decide; if it is still salty, pre-boil for 15 minutes instead of 10 and change the water halfway."
        ),
      },
    ],
    notas: [
      T("Marinada que encostou em carne crua não se prova nem vira molho direto: reserve uma parte antes de colocar a carne, ou ferva o líquido usado por completo antes de reduzir e provar.",
        "La marinada que tocó carne cruda no se prueba ni se convierte en salsa directamente: reservá una parte antes de poner la carne, o herví el líquido usado por completo antes de reducir y probar.",
        "Marinade that touched raw meat is not tasted or turned straight into a sauce: set a portion aside before adding the meat, or bring the used liquid to a full boil before reducing and tasting."),
      T("Se o molho leva shoyu, alivie o sal de tudo o que vai junto no prato — carne e acompanhamentos.",
        "Si la salsa lleva salsa de soja, alivia la sal de todo lo que va junto en el plato — carne y guarniciones.",
        "If the sauce has soy sauce in it, ease off the salt everywhere else on the plate — meat and sides."),
      T("Salgar no fim é corrigível. Salgar no começo, não.",
        "Salar al final tiene arreglo. Salar al principio, no.",
        "Salting at the end can be corrected. Salting at the start cannot."),
    ],
  },

  {
    id: "ponto-sem-termometro",
    titulo: T("Ponto de carne sem termômetro", "Punto de la carne sin termómetro", "Doneness without a thermometer"),
    kicker: T("TÉCNICA · CUT-AND-PEEK, DESCANSO E O CENTRO FRIO", "TÉCNICA · CORTAR Y MIRAR, REPOSO Y EL CENTRO FRÍO", "TECHNIQUE · CUT-AND-PEEK, RESTING AND THE COLD CENTRE"),
    resumo: T(
      "Três hábitos resolvem o ponto sem instrumento: tirar da geladeira antes, olhar por dentro, e descansar.",
      "Tres hábitos resuelven el punto sin instrumento: sacar de la nevera antes, mirar por dentro y dejar reposar.",
      "Three habits solve doneness without a gadget: take it out of the fridge early, look inside, and let it rest."
    ),
    corpo: [
      {
        h: T("O centro frio é o maior inimigo", "El centro frío es el mayor enemigo", "The cold centre is the biggest enemy"),
        p: T(
          "Carne que sai da geladeira direto para o fogo cozinha de fora para dentro com uma diferença enorme entre superfície e miolo — quando o centro chega ao ponto, a borda já passou. Peça fina de chapa: 20 a 30 minutos fora da geladeira. Peça alta: 30 a 40 minutos. Fraldinha inteira para o forno: uma hora cheia. Não é frescura; é o que torna o tempo previsível.",
          "La carne que va de la nevera directa al fuego se cocina de fuera hacia dentro con una diferencia enorme entre superficie y centro — cuando el centro llega al punto, el borde ya se pasó. Pieza fina de plancha: 20 a 30 minutos fuera de la nevera. Pieza alta: 30 a 40 minutos. Vacío entero al horno: una hora completa. No es manía; es lo que hace previsible el tiempo.",
          "Meat that goes from fridge straight to fire cooks outside-in with a huge gap between surface and middle — by the time the centre is right, the edge is overdone. Thin cut for the griddle: 20 to 30 minutes out of the fridge. Thick cut: 30 to 40 minutes. A whole flap steak for the oven: a full hour. This is not fussiness; it is what makes timing predictable."
        ),
      },
      {
        h: T("Cut-and-peek", "Cortar y mirar", "Cut and peek"),
        p: T(
          "Sem termômetro, o método é olhar. Faça um corte pequeno no ponto mais grosso e leia a cor: vermelho frio no centro significa que falta; rosa quente é mal para ao ponto; levemente rosado, quase sem rosa e ainda úmido é o ponto+ — que costuma agradar mais em peça servida quente; cinza por igual é bem passado, e daí não volta. O corte perde alguns sucos e não tem importância nenhuma perto do prejuízo de errar o ponto.",
          "Sin termómetro, el método es mirar. Haz un corte pequeño en la parte más gruesa y lee el color: rojo frío en el centro significa que falta; rosa caliente es entre poco hecho y al punto; apenas rosado, casi sin rosa y todavía jugoso es el punto+ — el que suele gustar más en pieza servida caliente; gris parejo es muy hecho, y de ahí no se vuelve. El corte pierde algunos jugos y eso no tiene ninguna importancia frente al perjuicio de errar el punto.",
          "Without a thermometer, the method is to look. Make a small cut at the thickest point and read the colour: cold red in the middle means it needs more; warm pink is rare to medium-rare; barely pink, almost no pink and still moist is medium-well — which usually pleases most people in a piece served hot; even grey is well done, and there is no coming back. The cut loses a little juice, which matters not at all next to the cost of getting doneness wrong."
        ),
      },
      {
        h: T("Seco doura, úmido cozinha no vapor", "Seco dora, húmedo se cuece al vapor", "Dry browns, wet steams"),
        p: T(
          "O mesmo princípio da pele do frango vale para toda carne selada. Papel toalha na superfície antes de qualquer coisa — especialmente depois de marinada, que encharca. Panela de fundo fino e carne úmida é a combinação que faz a peça soltar água e cozinhar em vez de dourar.",
          "El mismo principio de la piel del pollo vale para toda carne sellada. Papel de cocina en la superficie antes que nada — sobre todo después de marinar, que empapa. Sartén de fondo fino más carne húmeda es la combinación que hace que la pieza suelte agua y se cueza en vez de dorarse.",
          "The same principle as chicken skin applies to any seared meat. Paper towel on the surface before anything else — especially after marinating, which soaks it. A thin-bottomed pan plus wet meat is the combination that makes the piece release water and stew instead of browning."
        ),
      },
      {
        h: T("O descanso não é opcional", "El reposo no es opcional", "Resting is not optional"),
        p: T(
          "Cinco minutos para peça fina, oito a dez para peça alta ou para uma fraldinha inteira. É nesse tempo que os sucos redistribuem. Fatiar antes disso esvazia a tábua e resseca a carne — e, no caso da fraldinha, o corte fino contra as fibras vale mais para a maciez do que qualquer outra coisa que você faça na receita.",
          "Cinco minutos para pieza fina, ocho a diez para pieza alta o para un vacío entero. Es en ese tiempo que los jugos se redistribuyen. Cortar antes vacía la tabla y reseca la carne — y, en el caso del vacío, el corte fino a contrafibra vale más para la terneza que cualquier otra cosa que hagas en la receta.",
          "Five minutes for a thin cut, eight to ten for a thick one or a whole flap steak. That is when the juices redistribute. Slicing sooner floods the board and dries out the meat — and with flap steak, slicing thin against the grain does more for tenderness than anything else in the recipe."
        ),
      },
      {
        h: T("O que não reaquece", "Lo que no se recalienta", "What does not reheat"),
        p: T(
          "Carne servida ao ponto não volta ao fogo: fraldinha ao ponto requentada vira borracha. Se não dá para servir na hora, mude de método — braseado a 150–160 °C por 2h30 a 3h com líquido cobrindo reaquece perfeitamente. Rosbife frio é o outro caminho válido: asse até o ponto, refrigere, fatie fino e sirva em temperatura ambiente. Nunca reaqueça.",
          "La carne servida al punto no vuelve al fuego: un vacío al punto recalentado se vuelve goma. Si no puedes servir al momento, cambia de método — el braseado a 150–160 °C durante 2h30 a 3h con líquido cubriendo se recalienta perfectamente. El rosbif frío es el otro camino válido: asa hasta el punto, refrigera, corta fino y sirve a temperatura ambiente. Nunca lo recalientes.",
          "Meat served medium does not go back on the heat: reheated medium flap steak turns to rubber. If you cannot serve immediately, change method — braised at 150–160 °C for 2.5 to 3 hours with liquid covering it reheats perfectly. Cold roast beef is the other valid path: roast to temperature, chill, slice thin and serve at room temperature. Never reheat."
        ),
      },
    ],
    notas: [
      T("Referência de termômetro, quando houver: ~63 °C para suíno rosado, com o descanso; 75 °C para frango.",
        "Referencia de termómetro, si lo tienes: ~63 °C para cerdo rosado, contando el reposo; 75 °C para pollo.",
        "Thermometer reference, if you have one: ~63 °C for pink pork, counting the rest; 75 °C for chicken."),
      T("Pimenta-do-reino queima na chapa: entra depois de selar.",
        "La pimienta negra se quema en la plancha: entra después de sellar.",
        "Black pepper burns on the griddle: add it after searing."),
      T("Sal generoso na superfície só na hora de ir para o fogo.",
        "Sal generosa en la superficie solo justo antes de ir al fuego.",
        "Generous surface salt only as it goes to the heat."),
    ],
  },

  {
    id: "chapa-e-fogo",
    titulo: T("Chapa, panela e a boca de 4,5 kW", "Plancha, sartén y el quemador de 4,5 kW", "Griddle, pan and the 4.5 kW burner"),
    kicker: T("TÉCNICA · REGULE PELO QUE VOCÊ VÊ, NÃO PELO REGISTRO", "TÉCNICA · REGULA POR LO QUE VES, NO POR EL MANDO", "TECHNIQUE · JUDGE BY WHAT YOU SEE, NOT BY THE DIAL"),
    resumo: T(
      "Fogo forte demais é o erro mais comum de quem tem uma boca turbo. Escolha da panela e calor de recuperação valem mais que potência.",
      "Fuego demasiado fuerte es el error más común de quien tiene un quemador potente. La elección de la sartén y el calor de recuperación valen más que la potencia.",
      "Too much heat is the commonest mistake for anyone with a powerful burner. Pan choice and heat recovery matter more than raw power."
    ),
    corpo: [
      {
        h: T("Calor de recuperação", "Calor de recuperación", "Heat recovery"),
        p: T(
          "O que importa quando a carne fria toca o metal não é a temperatura máxima, é o quanto a superfície aguenta sem despencar. Chapa removível sobre a boca alta, ferro fundido e inox de fundo grosso seguram calor e formam um fond bonito. Alumínio de fundo fino serve, mas perde temperatura na hora: contorne pré-aquecendo bem e selando em lotes pequenos, deixando a panela recuperar entre um lote e outro.",
          "Lo que importa cuando la carne fría toca el metal no es la temperatura máxima, sino cuánto aguanta la superficie sin desplomarse. Plancha desmontable sobre el quemador potente, hierro fundido e inox de fondo grueso retienen calor y forman un buen fondo. El aluminio de fondo fino sirve, pero pierde temperatura al instante: compénsalo precalentando bien y sellando en tandas pequeñas, dejando que la sartén se recupere entre una y otra.",
          "What matters when cold meat hits the metal is not peak temperature but how much the surface holds without collapsing. A removable griddle over the big burner, cast iron and heavy-bottomed stainless hold heat and build good fond. Thin aluminium works, but drops temperature instantly: compensate by preheating well and searing in small batches, letting the pan recover between them."
        ),
      },
      {
        h: T("Regule pelo que você vê", "Regula por lo que ves", "Judge by what you see"),
        p: T(
          "Numa boca de 4,5 kW, 'médio' é bem menos chama do que parece. Olhe o borbulhar do risone, o chiado da carne, a cor do alho — não a posição do registro. A panela esquenta muito e segura calor: dê o comando e espere ela responder, em vez de ir no máximo e correr atrás do estrago.",
          "En un quemador de 4,5 kW, «medio» es mucha menos llama de lo que parece. Mira el burbujeo del risoni, el chisporroteo de la carne, el color del ajo — no la posición del mando. La sartén se calienta mucho y retiene calor: da la orden y espera a que responda, en vez de ir al máximo y luego correr detrás del estropicio.",
          "On a 4.5 kW burner, 'medium' is far less flame than it looks. Watch the orzo bubbling, the meat sizzling, the colour of the garlic — not the dial position. The pan gets very hot and holds heat: give the command and wait for it to respond, instead of going to maximum and then chasing the damage."
        ),
      },
      {
        h: T("O alho queima em segundos", "El ajo se quema en segundos", "Garlic burns in seconds"),
        p: T(
          "Aparece em quase toda receita deste livro e é a coisa que mais estraga um refogado. Fogo médio-baixo, e tire do fogo antes do que parece necessário — a panela quente continua cozinhando depois que você desliga. Alho escuro amarga o prato inteiro.",
          "Aparece en casi toda receta de este libro y es lo que más arruina un sofrito. Fuego medio-bajo, y retíralo del fuego antes de lo que parece necesario — la sartén caliente sigue cocinando después de apagar. El ajo oscuro amarga el plato entero.",
          "It appears in nearly every recipe here and it is the thing that most often ruins a base. Medium-low heat, and take it off sooner than seems necessary — the hot pan keeps cooking after you turn it off. Dark garlic makes the whole dish bitter."
        ),
      },
      {
        h: T("Pré-aqueça e teste", "Precalienta y prueba", "Preheat and test"),
        p: T(
          "Chapa: 5 a 8 minutos em registro baixo-médio para o calor espalhar. A chama concentra no centro, então sele no centro mesmo. O teste é a gota d'água — ela deve dançar e sumir em 1 a 2 segundos. Some instantaneamente: ainda não está quente o bastante para o modo Leidenfrost. Fica parada fervendo: falta muito.",
          "Plancha: 5 a 8 minutos a fuego bajo-medio para que el calor se reparta. La llama se concentra en el centro, así que sella justo en el centro. La prueba es la gota de agua — debe bailar y desaparecer en 1 o 2 segundos. Si desaparece al instante: todavía no está lo bastante caliente para el efecto Leidenfrost. Si se queda quieta hirviendo: falta mucho.",
          "Griddle: 5 to 8 minutes on low-medium so the heat spreads. The flame concentrates in the centre, so sear in the centre. The test is a drop of water — it should skitter and vanish in 1 to 2 seconds. Vanishing instantly means it is not yet hot enough for the Leidenfrost effect. Sitting there boiling means it has a long way to go."
        ),
      },
      {
        h: T("Antiaderente não faz molho", "El antiadherente no hace salsa", "Non-stick makes no sauce"),
        p: T(
          "Quase não forma fond, e o revestimento degrada em fogo alto. Se o molho vem do fundo da panela — e neste livro vem, quase sempre —, use inox ou ferro.",
          "Casi no forma fondo, y el recubrimiento se degrada a fuego alto. Si la salsa sale del fondo de la sartén — y en este libro sale, casi siempre —, usa inox o hierro.",
          "It barely builds fond, and the coating degrades over high heat. If the sauce comes from the bottom of the pan — and in this book it almost always does — use stainless or iron."
        ),
      },
    ],
    notas: [
      T("Fond que gruda no fundo não é erro, é sabor. Deglaceie com água, cachaça, cerveja ou shoyu e raspe.",
        "El fondo pegado no es un error, es sabor. Desglasa con agua, cachaça, cerveza o salsa de soja y raspa.",
        "Fond stuck to the bottom is not a mistake, it is flavour. Deglaze with water, cachaça, beer or soy sauce and scrape."),
      T("Panela larga e baixa evapora e absorve por igual; panela funda e estreita empilha e abafa.",
        "Sartén ancha y baja evapora y absorbe de forma pareja; olla honda y estrecha amontona y ahoga.",
        "A wide, shallow pan evaporates and absorbs evenly; a deep, narrow one piles up and smothers."),
      T("Álcool em panela muito quente pode inflamar: tire do fogo antes de acrescentar cachaça ou vinho.",
        "El alcohol en una sartén muy caliente puede inflamarse: retira del fuego antes de añadir cachaça o vino.",
        "Alcohol in a very hot pan can ignite: take it off the heat before adding cachaça or wine."),
    ],
  },

  {
    id: "fermentacao-segura",
    titulo: T("Fermentar em salmoura sem medo", "Fermentar en salmuera sin miedo", "Brine fermenting without fear"),
    kicker: T("TÉCNICA · SAL A 3%, TUDO SUBMERSO, O PH CONFIRMA", "TÉCNICA · SAL AL 3%, TODO SUMERGIDO, EL PH CONFIRMA", "TECHNIQUE · 3% SALT, EVERYTHING SUBMERGED, PH CONFIRMS"),
    resumo: T(
      "Lacto-fermentação é simples e segura quando três regras são obedecidas. A quarta regra é saber quando descartar.",
      "La lacto-fermentación es simple y segura cuando se obedecen tres reglas. La cuarta regla es saber cuándo desechar.",
      "Lacto-fermentation is simple and safe when three rules are followed. The fourth rule is knowing when to throw it out."
    ),
    corpo: [
      {
        h: T("Como funciona", "Cómo funciona", "How it works"),
        p: T(
          "Legumes submersos em salmoura fermentam pela ação de bactérias láticas, que acidificam o meio e protegem contra tudo o que estraga. O sal e o ácido fazem a conservação; o tempo só aprofunda o sabor, deixando mais azedo e mais redondo. Por isso o prazo é flexível: uma semana dá um resultado fresco, alguns meses dão um resultado complexo, e nenhum dos dois é mais seguro que o outro.",
          "Las verduras sumergidas en salmuera fermentan por acción de bacterias lácticas, que acidifican el medio y protegen contra todo lo que estropea. La sal y el ácido hacen la conservación; el tiempo solo profundiza el sabor, dejándolo más ácido y más redondo. Por eso el plazo es flexible: una semana da un resultado fresco, unos meses dan un resultado complejo, y ninguno es más seguro que el otro.",
          "Vegetables submerged in brine ferment through lactic acid bacteria, which acidify the environment and protect against everything that spoils. Salt and acid do the preserving; time only deepens flavour, making it more sour and more rounded. That is why the timeline is flexible: a week gives a fresh result, a few months give a complex one, and neither is safer than the other."
        ),
      },
      {
        h: T("Sal a 3% do peso total", "Sal al 3% del peso total", "Salt at 3% of total weight"),
        p: T(
          "Três por cento do peso de vegetal mais água, não só da água. Pese o conjunto no pote e calcule daí. Sal comum funciona: o iodo, na quantidade que existe no sal de mesa, não atrapalha as bactérias — no máximo deixa a salmoura um pouco turva.",
          "Tres por ciento del peso de vegetal más agua, no solo del agua. Pesa el conjunto en el frasco y calcula desde ahí. La sal común funciona: el yodo, en la cantidad que hay en la sal de mesa, no molesta a las bacterias — como mucho deja la salmuera algo turbia.",
          "Three per cent of the weight of vegetable plus water, not water alone. Weigh the whole thing in the jar and calculate from there. Ordinary salt works: iodine, at the levels found in table salt, does not bother the bacteria — at most it makes the brine slightly cloudy."
        ),
      },
      {
        h: T("Tudo submerso", "Todo sumergido", "Everything submerged"),
        p: T(
          "É acima da linha do líquido que mofa. Um saquinho limpo cheio de salmoura a 3% — não de água pura, para o caso de vazar — enfiado no gargalo faz peso e isola do ar. Tampa frouxa: a fermentação solta CO₂ e pote cheio transborda nos primeiros dias. Deixe num pratinho, longe do sol. Vai turvar e borbulhar: é o certo.",
          "Es por encima de la línea del líquido donde aparece el moho. Una bolsita limpia llena de salmuera al 3% — no de agua pura, por si gotea — metida en el cuello hace peso y aísla del aire. Tapa floja: la fermentación suelta CO₂ y un frasco lleno se desborda los primeros días. Déjalo sobre un platito, lejos del sol. Se pondrá turbio y burbujeará: es lo correcto.",
          "It is above the liquid line that mould appears. A clean bag filled with 3% brine — not plain water, in case it leaks — pushed into the neck acts as a weight and seals off the air. Loose lid: fermentation releases CO₂ and a full jar overflows in the first days. Keep it on a small plate, away from sunlight. It will turn cloudy and bubble: that is correct."
        ),
      },
      {
        h: T("Kahm ou mofo", "Kahm o moho", "Kahm or mould"),
        p: T(
          "Película branca lisa na superfície é kahm, uma levedura inofensiva — retire com a colher e siga. Qualquer coisa felpuda ou peluda, de qualquer cor, é mofo: descarte o lote inteiro, sem tentar raspar para salvar. O cheiro tem que ser azedo e agradável, tipo picles; pútrido significa descarte. Fita de pH abaixo de 4 confirma que está seguro.",
          "Una película blanca lisa en la superficie es kahm, una levadura inofensiva — retírala con la cuchara y sigue. Cualquier cosa afelpada o peluda, de cualquier color, es moho: desecha el lote entero, sin intentar raspar para salvarlo. El olor tiene que ser ácido y agradable, tipo encurtido; pútrido significa desechar. Una tira de pH por debajo de 4 confirma que está seguro.",
          "A smooth white film on the surface is kahm, a harmless yeast — spoon it off and carry on. Anything fuzzy or hairy, of any colour, is mould: discard the whole batch, no scraping to save it. The smell must be sour and pleasant, like pickles; putrid means discard. A pH strip below 4 confirms it is safe."
        ),
      },
    ],
    notas: [
      T("Comece a provar do quinto ao sétimo dia. O ponto é o gosto, não o calendário.",
        "Empieza a probar del quinto al séptimo día. El punto es el gusto, no el calendario.",
        "Start tasting from day five to seven. The endpoint is taste, not the calendar."),
      T("Processador só no fim. A versão mash — purê fermentado, sal sobre o peso da pasta, sem água — é outro método, que fermenta mais rápido e seca no topo se descuidar.",
        "Procesadora solo al final. La versión mash — puré fermentado, sal sobre el peso de la pasta, sin agua — es otro método, que fermenta más rápido y se seca arriba si te descuidas.",
        "Blender only at the end. The mash version — fermented purée, salt calculated on the paste's weight, no water — is a different method: it ferments faster and dries out on top if neglected."),
      T("Fermentar não tira ardência, só arredonda. Calibre o calor provando o blend cru: dá para subir, não para descer.",
        "Fermentar no quita picante, solo lo redondea. Calibra el calor probando la mezcla cruda: se puede subir, no bajar.",
        "Fermenting does not remove heat, it only rounds it. Calibrate the heat by tasting the raw blend: you can go up, not down."),
    ],
  },
];
