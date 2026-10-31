/* =========================================================
   Fora de casa: "Da rua para casa" e o Safari Gastronômico
   Só no site. Não entra nos PDFs: lugares e horários mudam
   mais rápido que receitas.
   `lugar` é o id da parada em safari/ (fonte/safari/safari.json).
   Os mesmos pares e a mesma fila estão em CASA/FILA do gerador do safari.
   ========================================================= */
const SAFARI_URL = "safari/";

const DA_RUA = {
  pares: [
    { receita: "feijoada", lugar: "ita", nome: "Leiteria Ita", bairro: "República",
      nota: T("Balcão de 1953 no centro, com feijoada em dias fixos da semana.",
              "Barra de 1953 en el centro, con feijoada en días fijos de la semana.",
              "A 1953 lunch counter downtown, with feijoada on set days of the week.") },
    { receita: "lasanha-bolonhesa-bechamel", lugar: "roperto", nome: "Empório Cantina Roperto", bairro: "Bixiga",
      nota: T("Lasanha à bolonhesa na primeira cantina da Rua Treze de Maio, aberta em 1942.",
              "Lasaña a la boloñesa en la primera cantina de la Rua Treze de Maio, abierta en 1942.",
              "Lasagna bolognese at the first cantina on Rua Treze de Maio, opened in 1942.") },
    { receita: "fraldinha-forno", lugar: "templo", nome: "Templo da Carne Marcos Bassi", bairro: "Bela Vista",
      nota: T("A fraldinha é uma das especialidades da casa que o açougueiro Marcos Bassi abriu em 1979.",
              "El vacío es una de las especialidades de la casa que el carnicero Marcos Bassi abrió en 1979.",
              "Flap steak is one of the specialties at the steakhouse butcher Marcos Bassi opened in 1979.") },
    { receita: "paella-mista-arborio", lugar: "fuentes", nome: "Fuentes", bairro: "Jardins",
      nota: T("Paella valenciana de uma família espanhola no ramo desde 1954, hoje na terceira geração.",
              "Paella valenciana de una familia española en el oficio desde 1954, hoy en la tercera generación.",
              "Paella valenciana from a Spanish family in the trade since 1954, now in its third generation.") },
  ],
  fila: [
    { prato: T("Baião de dois", "Baião de dois (arroz con frijoles de Ceará)", "Baião de dois (Ceará rice and beans)"),
      lugar: "baiao", nome: "Cantinho do Baião de Dois", bairro: "Pinheiros" },
    { prato: T("Karaage", "Karaage (pollo frito japonés)", "Karaage (Japanese fried chicken)"),
      lugar: "issa", nome: "Izakaya Issa", bairro: "Liberdade" },
    { prato: T("Sanduíche de pernil", "Sándwich de pernil de cerdo", "Roast pork sandwich"),
      lugar: "estadao", nome: "Estadão Bar e Lanches", bairro: "Centro" },
    { prato: T("Bauru", "Bauru (sándwich de rosbif y queso fundido)", "Bauru (roast beef and melted cheese sandwich)"),
      lugar: "pontochic", nome: "Ponto Chic", bairro: "Centro" },
    { prato: T("Esfiha de carne", "Esfiha de carne", "Meat sfiha"),
      lugar: "garabed", nome: "Casa Garabed", bairro: "Santana" },
    { prato: T("Coxinha de frango", "Coxinha de pollo", "Chicken coxinha"),
      lugar: "veloso", nome: "Bar Veloso", bairro: "Vila Mariana" },
    { prato: T("Mafé, ensopado com molho de amendoim", "Mafé, guiso con salsa de maní", "Mafé, peanut stew"),
      lugar: "biyouz", nome: "Biyou'Z", bairro: "Campos Elíseos" },
    { prato: T("Picadinho", "Picadinho (guiso de carne en cubos)", "Picadinho (diced beef stew)"),
      lugar: "onca", nome: "Bar da Dona Onça", bairro: "República" },
  ],
};

Object.assign(UI, {
  foraDeCasa:      T("Fora de casa", "Fuera de casa", "Eating out"),
  daRua:           T("Da rua para casa", "De la calle a casa", "From the street to the kitchen"),
  safari:          T("Safari gastronômico", "Safari gastronómico", "Food safari"),
  daRuaResumo:     T("Receitas deste caderno que têm par numa parada do safari gastronômico por São Paulo, e pratos do safari que ainda não foram testados em casa.",
                     "Recetas de este cuaderno que tienen pareja en una parada del safari gastronómico por São Paulo, y platos del safari que aún no se probaron en casa.",
                     "Recipes in this notebook that have a match at a stop on the São Paulo food safari, and safari dishes not yet tested at home."),
  daRuaPares:      T("Já no caderno", "Ya en el cuaderno", "Already in the notebook"),
  daRuaParesIntro: T("A receita daqui ao lado de onde provar uma versão da rua.",
                     "La receta de aquí junto a dónde probar una versión de la calle.",
                     "The recipe here, next to where to try a street version."),
  daRuaFila:       T("Na fila", "En la fila", "In the queue"),
  daRuaFilaIntro:  T("Pratos das paradas do safari que ainda não foram testados em casa. Só viram receita depois de testados.",
                     "Platos de las paradas del safari que aún no se probaron en casa. Solo se vuelven receta después de probarlos.",
                     "Dishes from safari stops that haven't been tested at home yet. They only become recipes once tested."),
  naoTestado:      T("ainda não testado", "aún sin probar", "not tested yet"),
  ondeProvar:      T("Onde provar", "Dónde probarlo", "Where to try it"),
  ondeProvarSP:    T("Onde provar em São Paulo", "Dónde probarlo en São Paulo", "Where to try it in São Paulo"),
  verNoSafari:     T("ver no safari", "ver en el safari", "see it in the safari"),
  safariTexto:     T("O safari completo, com mapa, roteiros a pé e o que pedir em cada parada, fica numa página à parte, só em português.",
                     "El safari completo, con mapa, rutas a pie y qué pedir en cada parada, está en una página aparte, solo en portugués.",
                     "The full safari, with a map, walking routes and what to order at each stop, is on a separate page, in Portuguese only."),
  abrirSafari:     T("Abrir o safari", "Abrir el safari", "Open the safari"),
  capaFora:        T("Onde provar, em São Paulo, uma versão da rua de algumas receitas daqui, e o que está na fila para virar receita.",
                     "Dónde probar, en São Paulo, una versión de la calle de algunas recetas de aquí, y lo que está en la fila para volverse receta.",
                     "Where to try a street version of some recipes here in São Paulo, and what's queued to become a recipe."),
  paresK:          T("pares", "pares", "matches"),
  filaK:           T("na fila", "en la fila", "queued"),
  capaSafariK:     T("Mapa e roteiros a pé · só em português", "Mapa y rutas a pie · solo en portugués", "Map and walking routes · Portuguese only"),
});
