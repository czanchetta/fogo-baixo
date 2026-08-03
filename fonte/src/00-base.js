/* ============================================================
   FOGO BAIXO — conteúdo trilíngue
   ------------------------------------------------------------
   T("português", "español", "english") define uma string nos
   três idiomas. Estrutura, quantidades, grades e timers são
   definidos UMA vez só — só o texto é traduzido.

   Para acrescentar uma receita: copie um bloco e preencha.
   Se você só sabe o texto em português, repita o português nos
   três campos — o site não quebra, só fica sem tradução.
   ============================================================ */

const T = (pt, es, en) => ({ pt, es, en });

const IDIOMAS = [
  { cod: "pt", nome: "Português", curto: "PT", htmlLang: "pt-BR" },
  { cod: "es", nome: "Español",   curto: "ES", htmlLang: "es" },
  { cod: "en", nome: "English",   curto: "EN", htmlLang: "en" },
];

/* Unidades por código: [singular, plural] em cada idioma.
   Assim a quantidade e a escala são definidas uma vez só. */
const UNI = {
  un:      { pt: ["un", "un"],             es: ["ud", "ud"],           en: ["", ""] },
  g:       { pt: ["g", "g"],               es: ["g", "g"],             en: ["g", "g"] },
  kg:      { pt: ["kg", "kg"],             es: ["kg", "kg"],           en: ["kg", "kg"] },
  ml:      { pt: ["ml", "ml"],             es: ["ml", "ml"],           en: ["ml", "ml"] },
  l:       { pt: ["l", "l"],               es: ["l", "l"],             en: ["l", "l"] },
  cs:      { pt: ["col. sopa", "col. sopa"], es: ["cda", "cdas"],      en: ["tbsp", "tbsp"] },
  cc:      { pt: ["col. chá", "col. chá"], es: ["cdta", "cdtas"],      en: ["tsp", "tsp"] },
  xic:     { pt: ["xíc.", "xíc."],         es: ["taza", "tazas"],      en: ["cup", "cups"] },
  dente:   { pt: ["dente", "dentes"],      es: ["diente", "dientes"],  en: ["clove", "cloves"] },
  ramo:    { pt: ["ramo", "ramos"],        es: ["rama", "ramas"],      en: ["sprig", "sprigs"] },
  folha:   { pt: ["folha", "folhas"],      es: ["hoja", "hojas"],      en: ["leaf", "leaves"] },
  pitada:  { pt: ["pitada", "pitadas"],    es: ["pizca", "pizcas"],    en: ["pinch", "pinches"] },
  peca:    { pt: ["peça", "peças"],        es: ["pieza", "piezas"],    en: ["piece", "pieces"] },
  tablete: { pt: ["tablete", "tabletes"],  es: ["pastilla", "pastillas"], en: ["cube", "cubes"] },
  maco:    { pt: ["maço", "maços"],        es: ["manojo", "manojos"],  en: ["bunch", "bunches"] },
  pau:     { pt: ["pau", "paus"],          es: ["rama", "ramas"],      en: ["stick", "sticks"] },
};

const LIVRO = {
  titulo: "Fogo Baixo",
  autor: "Celso Zanchetta",
  subtitulo: T(
    "Um caderno pessoal de cozinha",
    "Un cuaderno personal de cocina",
    "A personal cooking notebook"
  ),
  chamada: T(
    "Técnicas e receitas testadas em casa, anotadas com os porquês.",
    "Técnicas y recetas probadas en casa, anotadas con sus porqués.",
    "Techniques and recipes tested at home, written down with the reasons why."
  ),
  chamadaPdf: T(
    "Técnicas e receitas testadas em casa — cada uma em texto corrido e em tabela de cozimento.",
    "Técnicas y recetas probadas en casa — cada una en texto corrido y en tabla de cocción.",
    "Techniques and recipes tested at home — each one as running text and as a cooking table."
  ),
  edicao: T("Edição de julho de 2026", "Edición de julio de 2026", "July 2026 edition"),
};

/* Textos da interface */
const UI = {
  tecnicas:     T("Técnicas", "Técnicas", "Techniques"),
  receitas:     T("Receitas", "Recetas", "Recipes"),
  sumario:      T("Sumário", "Índice", "Contents"),
  tradicional:  T("Tradicional", "Tradicional", "Classic"),
  tabela:       T("Tabela de cozimento", "Tabla de cocción", "Cooking table"),
  interativo:   T("Interativo", "Interactivo", "Interactive"),
  modoCozinha:  T("Modo cozinha ↗", "Modo cocina ↗", "Kitchen mode ↗"),
  ingredientes: T("Ingredientes", "Ingredientes", "Ingredients"),
  preparo:      T("Modo de preparo", "Preparación", "Method"),
  notas:        T("Notas", "Notas", "Notes"),
  rende:        T("Rende", "Rinde", "Serves"),
  porcoes:      T("porções", "porciones", "servings"),
  porcao:       T("porção", "porción", "serving"),
  lotes:        T("lotes", "tandas", "batches"),
  lote:         T("lote", "tanda", "batch"),
  ativo:        T("Ativo", "Activo", "Active"),
  totalT:       T("Total", "Total", "Total"),
  utensilio:    T("Utensílio", "Utensilio", "Vessel"),
  min:          T("min", "min", "min"),
  hAbrev:       T("h", "h", "h"),
  dia:          T("dia", "día", "day"),
  dias:         T("dias", "días", "days"),
  ctlPorcoes:   T("Porções", "Porciones", "Serves"),
  ctlUnidades:  T("Unidades", "Unidades", "Units"),
  ctlLotes:     T("Lotes", "Tandas", "Batches"),
  uCaseiro:     T("Caseiro", "Casero", "Cups"),
  uPeso:        T("Gramas", "Gramos", "Grams"),
  comecar:      T("Começar a cozinhar", "Empezar a cocinar", "Start cooking"),
  passo:        T("PASSO", "PASO", "STEP"),
  de:           T("DE", "DE", "OF"),
  anterior:     T("← Anterior", "← Anterior", "← Previous"),
  proximo:      T("Próximo →", "Siguiente →", "Next →"),
  terminar:     T("Terminar ✓", "Terminar ✓", "Finish ✓"),
  sair:         T("Sair  ✕", "Salir  ✕", "Exit  ✕"),
  iniciar:      T("Iniciar", "Iniciar", "Start"),
  pausar:       T("Pausar", "Pausar", "Pause"),
  continuar:    T("Continuar", "Continuar", "Resume"),
  zerar:        T("Zerar", "Reiniciar", "Reset"),
  hintTabela:   T(
    "Leia da esquerda para a direita: cada bloco reúne os ingredientes que entram naquela etapa.",
    "Se lee de izquierda a derecha: cada bloque reúne los ingredientes que entran en esa etapa.",
    "Read left to right: each block gathers the ingredients that join at that step."
  ),
  hintInterativo: T(
    "Ajuste as porções e as unidades acima — a tabela recalcula sozinha.",
    "Ajusta las porciones y las unidades arriba — la tabla se recalcula sola.",
    "Adjust servings and units above — the table recalculates itself."
  ),
  hintScroll: T(
    "→ A tabela é mais larga que a tela: arraste na horizontal para ver as últimas etapas.",
    "→ La tabla es más ancha que la pantalla: desliza en horizontal para ver las últimas etapas.",
    "→ The table is wider than the screen: scroll sideways to see the last steps."
  ),
  quatroFormatos: T(
    "A mesma receita, quatro formatos",
    "La misma receta, cuatro formatos",
    "The same recipe, four formats"
  ),
  ctaTecnicas:  T("Começar pelas técnicas", "Empezar por las técnicas", "Start with the techniques"),
  ctaReceitas:  T("Ir para as receitas", "Ir a las recetas", "Go to the recipes"),
  ctaPdf:       T("Baixar o PDF", "Descargar el PDF", "Download the PDF"),
  introTecnicas: T(
    "Os princípios que se repetem em quase todas as receitas. Leia uma vez; depois é só consultar.",
    "Los principios que se repiten en casi todas las recetas. Léelos una vez; después solo se consultan.",
    "The principles that recur in nearly every recipe. Read them once; after that they are just reference."
  ),
  introReceitas: T(
    "Cada receita em texto corrido e em tabela de cozimento. A tabela mostra de uma vez o que acontece em paralelo.",
    "Cada receta en texto corrido y en tabla de cocción. La tabla muestra de una vez lo que ocurre en paralelo.",
    "Each recipe as running text and as a cooking table. The table shows at a glance what happens in parallel."
  ),
  parteUm:      T("Parte um", "Parte uno", "Part one"),
  parteDois:    T("Parte dois", "Parte dos", "Part two"),
  sobreLink:    T("Sobre este caderno", "Sobre este cuaderno", "About this notebook"),
  sobreTitulo:  T("Sobre este caderno", "Sobre este cuaderno", "About this notebook"),
  sobreKicker:  T("SOBRE · PROJETO PESSOAL", "SOBRE · PROYECTO PERSONAL", "ABOUT · PERSONAL PROJECT"),
  colofao:      T("Sobre", "Sobre", "About"),
  tema:         T("Tema", "Tema", "Theme"),
  claro:        T("Claro", "Claro", "Light"),
  escuro:       T("Escuro", "Oscuro", "Dark"),
  idioma:       T("Idioma", "Idioma", "Language"),
  assinaturaSide: T(
    "Um caderno pessoal de cozinha, de <strong>Celso Zanchetta</strong>.",
    "Un cuaderno personal de cocina, de <strong>Celso Zanchetta</strong>.",
    "A personal cooking notebook by <strong>Celso Zanchetta</strong>."
  ),
  colofaoTexto: T(
    "<strong>Fogo Baixo</strong> é um caderno pessoal de cozinha de Celso Zanchetta — receitas e técnicas testadas em casa, anotadas para não esquecer. Não é publicação editorial nem consultoria gastronômica.",
    "<strong>Fogo Baixo</strong> es un cuaderno personal de cocina de Celso Zanchetta — recetas y técnicas probadas en casa, anotadas para no olvidarlas. No es una publicación editorial ni asesoría gastronómica.",
    "<strong>Fogo Baixo</strong> is Celso Zanchetta's personal cooking notebook — recipes and techniques tested at home, written down so they don't get lost. It is not an editorial publication or professional culinary advice."
  ),
  projetoPessoal: T(
    "Projeto pessoal, sem fins comerciais.",
    "Proyecto personal, sin fines comerciales.",
    "Personal project, non-commercial."
  ),
  sobreResumo: T(
    "Um arquivo de cozinha próprio, aberto porque não custa nada deixar aberto.",
    "Un archivo de cocina propio, abierto porque no cuesta nada dejarlo abierto.",
    "A cooking archive of my own, public because there is no cost in leaving it public."
  ),
  sobreCorpo: [
    T(
      "Isto não é um livro de receitas no sentido usual. É o caderno onde eu anoto o que deu certo na minha cozinha, com os porquês — por que a frigideira começa fria, por que o sal entra no fim, por que o arroz do fried rice tem que ser o de ontem. As receitas foram feitas, comidas e corrigidas antes de virarem texto.",
      "Esto no es un libro de recetas en el sentido habitual. Es el cuaderno donde anoto lo que funcionó en mi cocina, con sus porqués — por qué la sartén empieza fría, por qué la sal entra al final, por qué el arroz del fried rice tiene que ser el de ayer. Las recetas se hicieron, se comieron y se corrigieron antes de volverse texto.",
      "This is not a cookbook in the usual sense. It is the notebook where I write down what worked in my kitchen, with the reasons why — why the pan starts cold, why salt goes in last, why fried rice needs yesterday's rice. The recipes were cooked, eaten and corrected before they became text."
    ),
    T(
      "Cada receita aparece em quatro formatos, porque a mesma receita serve para coisas diferentes. A visão tradicional é para ler antes. A tabela de cozimento — uma ideia emprestada do Cooking for Engineers — mostra a receita inteira de uma vez, e é a melhor forma de entender o que acontece em paralelo. A visão interativa recalcula porções e unidades. E o modo cozinha é para usar com as mãos sujas, um passo por vez, com os timers das etapas cronometradas.",
      "Cada receta aparece en cuatro formatos, porque la misma receta sirve para cosas distintas. La vista tradicional es para leer antes. La tabla de cocción — una idea tomada de Cooking for Engineers — muestra la receta entera de una vez, y es la mejor forma de entender lo que ocurre en paralelo. La vista interactiva recalcula porciones y unidades. Y el modo cocina es para usar con las manos sucias, un paso a la vez, con temporizadores en las etapas cronometradas.",
      "Each recipe appears in four formats, because the same recipe serves different purposes. The classic view is for reading beforehand. The cooking table — an idea borrowed from Cooking for Engineers — shows the whole recipe at once, and is the best way to see what happens in parallel. The interactive view rescales servings and units. And kitchen mode is for dirty hands: one step at a time, with timers on the timed stages."
    ),
    T(
      "As quantidades são as que eu uso, não as que um teste de cozinha profissional validaria. Onde a receita original não tinha medida, não inventei uma. Onde o tempo depende do seu fogão, o texto diz o que olhar em vez de dar um número.",
      "Las cantidades son las que yo uso, no las que validaría una cocina de pruebas profesional. Donde la receta original no tenía medida, no inventé ninguna. Donde el tiempo depende de tu cocina, el texto dice qué mirar en vez de dar un número.",
      "The quantities are the ones I use, not ones a professional test kitchen validated. Where the original recipe had no measurement, I did not invent one. Where timing depends on your stove, the text tells you what to look for instead of giving a number."
    ),
    T(
      "Se alguma coisa aqui te ajudar, ótimo. Se alguma coisa estiver errada, me avise.",
      "Si algo de esto te sirve, perfecto. Si algo está mal, avísame.",
      "If something here helps you, good. If something is wrong, tell me."
    ),
  ],
  formatos: [
    [T("Tradicional", "Tradicional", "Classic"),
     T("Ingredientes em lista, preparo numerado. Para ler antes de começar.",
       "Ingredientes en lista, preparación numerada. Para leer antes de empezar.",
       "Ingredients as a list, numbered method. To read before you start.")],
    [T("Tabela de cozimento", "Tabla de cocción", "Cooking table"),
     T("A receita inteira de uma vez. Mostra o que acontece em paralelo.",
       "La receta entera de una vez. Muestra lo que ocurre en paralelo.",
       "The whole recipe at once. Shows what happens in parallel.")],
    [T("Interativo", "Interactivo", "Interactive"),
     T("A mesma tabela, com porções e unidades recalculadas ao vivo.",
       "La misma tabla, con porciones y unidades recalculadas al vuelo.",
       "The same table, with servings and units recalculated live.")],
    [T("Modo cozinha", "Modo cocina", "Kitchen mode"),
     T("Um passo por vez, letra grande, timers. Para usar com as mãos sujas.",
       "Un paso a la vez, letra grande, temporizadores. Para usar con las manos sucias.",
       "One step at a time, large type, timers. For dirty hands.")],
  ],
};

const CAPITULOS = [
  { id: "frango",   nome: T("Frango", "Pollo", "Chicken") },
  { id: "carnes",   nome: T("Carnes na chapa e no forno", "Carnes a la plancha y al horno", "Meat on the griddle and in the oven") },
  { id: "feijoada", nome: T("Um dia inteiro: a feijoada", "Un día entero: la feijoada", "A whole day: feijoada") },
  { id: "arroz",    nome: T("Arroz e massas rápidas", "Arroz y pastas rápidas", "Rice and quick pasta") },
  {
    id: "semfogo",
    nome: T("Sem fogo: molhos e acompanhamentos", "Sin fuego: salsas y guarniciones", "No heat: sauces and sides"),
    intro: T(
      "Duas receitas de família, anotadas à mão, que nunca vão ao fogo. Em uma, o ácido e a gordura hidratam a farinha crua; na outra, o liquidificador transforma legume cru em emulsão. As duas vivem da mesma disciplina do resto do caderno: o sal entra no fim, provando.",
      "Dos recetas de familia, anotadas a mano, que nunca van al fuego. En una, el ácido y la grasa hidratan la harina cruda; en la otra, la licuadora convierte verdura cruda en emulsión. Las dos viven de la misma disciplina que el resto del cuaderno: la sal entra al final, probando.",
      "Two family recipes, written by hand, that never see heat. In one, acid and fat hydrate raw flour; in the other, a blender turns raw vegetables into an emulsion. Both live by the same discipline as the rest of the notebook: salt goes in last, by tasting."
    ),
  },
  { id: "conservas",nome: T("Conservas e fermentados", "Conservas y fermentados", "Preserves and ferments") },
  {
    id: "papinhas",
    nome: T("Papinhas: a introdução alimentar", "Papillas: la alimentación complementaria", "Baby food: starting solids"),
    intro: T(
      "Cinco papinhas da série \"Papai Papinha\", recuperadas dos bilhetes manuscritos de junho a agosto de 2023 — foram mais de dezesseis ao todo. Todas na panela de pressão, todas sem sal, todas com a textura ajustada ao mês da criança. As listas são famílias de alimento, não regras: trocar espinafre por couve ou carne moída por fígado é o método funcionando. Onde o bilhete não trazia medida, não se inventou.",
      "Cinco papillas de la serie \"Papai Papinha\", recuperadas de las notas manuscritas de junio a agosto de 2023 — fueron más de dieciséis en total. Todas en olla a presión, todas sin sal, todas con la textura ajustada al mes del bebé. Las listas son familias de alimentos, no reglas: cambiar espinaca por berza o carne molida por hígado es el método funcionando. Donde la nota no traía medida, no se inventó.",
      "Five purées from the \"Papai Papinha\" series, recovered from handwritten notes between June and August 2023 — there were more than sixteen in all. All pressure-cooked, all saltless, all with texture matched to the baby's month. The lists are food families, not rules: swapping spinach for collards or ground beef for liver is the method working. Where the note gave no measurement, none was invented."
    ),
  },
  { id: "beber",    nome: T("Para beber", "Para beber", "To drink") },
];
