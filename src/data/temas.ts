import type { CategorySlug } from "@/data/categories";
import type { ConceptNode } from "@/components/ConceptMap";

export type Parte = {
  slug: string;
  nombre: string;
};

export type Seccion = {
  titulo: string;
  contenido: string[];
};

export type Tema = {
  slug: string;
  categoria: CategorySlug;
  parte: string;
  titulo: string;
  resumen: string;
  mapaConceptual: ConceptNode;
  secciones: Seccion[];
};

export const temas: Tema[] = [
  {
    slug: "teoria-celular",
    categoria: "biologia",
    parte: "Teoría celular, genética y procesos",
    titulo: "Teoría celular",
    resumen:
      "La célula como unidad básica de la vida: tipos de células, orgánulos, y cómo se organizan en tejidos.",
    mapaConceptual: {
      label: "Teoría celular",
      children: [
        { label: "¿Qué es la Biología?", children: [{ label: "Origen del término" }, { label: "Definiciones" }] },
        { label: "Postulados", children: [{ label: "Anatómico" }, { label: "Fisiológico" }, { label: "Origen" }] },
        { label: "Eucariota vs procariota", children: [{ label: "ADN" }, { label: "Orgánulos" }] },
        { label: "Orgánulos", children: [{ label: "Núcleo y citoplasma" }, { label: "Retículo y Golgi" }, { label: "Mitocondria" }, { label: "Citoesqueleto" }] },
        { label: "Animal vs vegetal", children: [{ label: "Pared y cloroplastos" }, { label: "Energía" }] },
        { label: "Niveles de organización", children: [{ label: "Átomo → organismo" }] },
        { label: "Tipos de tejido", children: [{ label: "Epitelial" }, { label: "Muscular" }, { label: "Conectivo" }, { label: "Nervioso" }] },
        { label: "Coordinación de sistemas", children: [{ label: "Nervioso vs endocrino" }, { label: "Ej: adrenalina" }] },
      ],
    },
    secciones: [
      {
        titulo: "¿Qué es la Biología?",
        contenido: [
          "Biología proviene del griego \"BIOS\" (= Vida) + el sufijo \"-Logía\" (= Estudio/Tratado) = \"Estudio de la Vida\".",
          "\"La ciencia de la vida y de los organismos vivos, incluyendo su estructura, función, crecimiento, evolución, distribución y taxonomía\" — Sociedad Real de Biología.",
          "\"La ciencia que estudia la estructura, función, crecimiento, origen, evolución y distribución de los seres vivos y sus partes componentes, así como la interacción entre ellos y con el entorno\" — Sociedad Americana de Biología Celular.",
        ],
      },
      {
        titulo: "Teoría celular",
        contenido: [
          "Célula: unidad básica de la vida. Las células pueden vivir independientemente, constituyendo organismos unicelulares, o agrupadas formando parte de organismos pluricelulares.",
          "Postulados de la Teoría Celular:",
          "→ Anatómico: todos los seres vivos están formados por 1 o más células.",
          "→ Fisiológico: en la célula se llevan a cabo todas las reacciones metabólicas.",
          "→ Origen: las nuevas células se forman por la división de células preexistentes.",
          "Organismos unicelulares: hongos, protozoos, amebas, algas, bacterias, etc.",
          "Organismos pluricelulares: plantas, algas pluricelulares, setas y otros hongos pluricelulares, animales vertebrados e invertebrados, ser humano.",
        ],
      },
      {
        titulo: "Tipos de células: eucariota vs. procariota",
        contenido: [
          "ADN — Eucariota: el material genético está encerrado en una membrana formando un núcleo. Procariota: el material genético está disperso en el citoplasma, no existe núcleo celular.",
          "Orgánulos — Eucariota: contiene muchos orgánulos distintos, algunos rodeados de membranas. Procariota: solo posee pequeños orgánulos llamados ribosomas.",
          "Organismos — Eucariota: esta organización la presentan todos los seres vivos que no son bacterias. Procariota: este tipo de organización solo se da en las bacterias.",
        ],
      },
      {
        titulo: "Célula eucariota",
        contenido: [
          "Siempre presenta un citoplasma compartimentado por membranas lipídicas y un núcleo celular organizado, que contiene el material genético.",
          "El citoplasma está organizado en compartimentos separados, con organelas limitadas por membranas de la misma naturaleza que la membrana plasmática.",
        ],
      },
      {
        titulo: "Orgánulos de la célula animal",
        contenido: [
          "1. Membrana plasmática: delimita la célula y la separa de su entorno. Es hidrofóbica (rechaza el agua), semipermeable/selectiva (regula qué entra y sale) y bicapa lipídica (2 capas formadas por lípidos).",
          "2. Núcleo: contiene el ADN que constituye el genoma. Capa bilipídica (membrana nuclear) que lo separa del citoplasma. El ADN nunca sale del núcleo; sí lo hace el ARN, por los poros. La transcripción se hace en el nucléolo (donde se concentra la cromatina).",
          "3. Citoplasma: interior de la célula, formado por agua, organelas, y nutrientes — sustancias orgánicas disueltas (glucosa, proteínas, ácidos grasos, nucleótidos) e inorgánicas (iones).",
          "4. Retículo endoplasmático: en contacto con el núcleo, forma parte de la doble membrana nuclear. Está constituido por muchos pliegues. Se clasifica en rugoso (numerosos ribosomas) o liso. Genera ribosomas que sintetizan proteínas.",
          "5. Aparato de Golgi: trabaja junto al retículo endoplasmático para sintetizar proteínas y crear vesículas de transporte, que almacena. Transporta y crea lisosomas: responsables de la degradación de proteínas y otras sustancias orgánicas (enzimas digestivas, fagocitan los desechos de la célula).",
          "6. Mitocondria: produce y almacena energía mediante la síntesis de ATP (adenosín trifosfato, principal fuente de energía).",
          "7. Citoesqueleto: permite que la célula mantenga su estructura. Tres tipos: microfilamentos (citocinesis, fagocitosis y locomoción celular), microtúbulos (transportan organelas, muy presentes en la mitosis) y filamentos intermedios (resisten tensiones mecánicas, sostienen la célula).",
          "8. Nucléolo: donde se concentra la cromatina.",
          "9. Centríolos: presentes en la mitosis/meiosis.",
        ],
      },
      {
        titulo: "Célula animal vs. célula vegetal",
        contenido: [
          "Pared celular — Animal: no presenta, solo membrana plasmática. Vegetal: presenta pared celular que rodea a la membrana plasmática.",
          "Cloroplastos — Animal: no posee. Vegetal: contiene cloroplastos, donde se produce la fotosíntesis.",
          "Energía — Animal: la obtiene de las mitocondrias. Vegetal: la obtiene de la fotosíntesis (cloroplastos), y también tiene mitocondrias.",
          "Reserva de energía — Animal: glucógeno. Vegetal: almidón.",
          "Vacuolas — Animal: pocas y pequeñas. Vegetal: de gran tamaño.",
          "Núcleo — Animal: en el centro de la célula. Vegetal: en la periferia.",
          "Forma — Animal: la dan los centríolos, adoptan formas diversas, estructura diversa. Vegetal: carece de centríolos, la forma la da la vacuola, generalmente prismática, estructura más firme/rígida.",
        ],
      },
      {
        titulo: "Niveles de organización",
        contenido: [
          "Átomos → Moléculas → Macromoléculas → Orgánulos → Células → Tejidos (se asocian varias células) → Órganos (conjunto de tejidos) → Sistemas de órganos → Organismo.",
          "Los organismos multicelulares necesitan sistemas especializados, y los distintos sistemas dependen unos de otros.",
          "Tejidos: conjuntos de células con una misma función determinada. En cada nivel de organización la estructura está estrechamente relacionada con la función que cumple.",
        ],
      },
      {
        titulo: "Tipos de tejido",
        contenido: [
          "Tejido epitelial: recubre el exterior del organismo y aísla algunos órganos (ej. piel, interior del cachete). Sus células pueden ser planas, cúbicas o cilíndricas, están fuertemente unidas entre sí (sin espacios intercelulares) y polarizadas: polo apical (hacia una cavidad o el exterior) y polo basal (hacia las células subyacentes).",
          "Tejido muscular: mantiene al cuerpo erguido y en movimiento, sus células son alargadas y se contraen. Músculo liso: no estriado, involuntario, en vasos sanguíneos, tracto digestivo, vejiga. Músculo cardíaco: estriado, involuntario, células multinucleadas conectadas por discos intercalados que transmiten el impulso eléctrico. Músculo esquelético/estriado: se une a los huesos por tendones, permite el movimiento voluntario.",
          "Tejido conectivo: conecta y sostiene otros tejidos; células suspendidas en una matriz extracelular (sólida, líquida o gelatinosa). Laxo: el más común, sostiene órganos y vasos sanguíneos. Denso: en tendones y ligamentos, conecta músculos con huesos y huesos entre sí. Especializados: tejido adiposo, huesos, cartílagos.",
          "Tejido nervioso: recibe, procesa y emite información a través de impulsos nerviosos. Forma el Sistema Nervioso Central y Periférico. Formado por 2 tipos de células: Neuronas y Neuroglia.",
        ],
      },
      {
        titulo: "Cómo se coordinan los sistemas",
        contenido: [
          "Los conjuntos de tejidos forman órganos → aparatos y sistemas.",
          "3 enunciados sobre cómo se relacionan los sistemas de órganos:",
          "1. Partes de un sistema pueden desempeñar distintas funciones en otro sistema. Ej: la boca cumple distintas funciones y pertenece al Sistema Digestivo y al Sistema Respiratorio.",
          "2. Existe superposición funcional entre distintos sistemas. Ej: el Sistema Nervioso trabaja en conjunto con el Sistema Endocrino y el Sistema Circulatorio.",
          "3. Los sistemas de órganos también trabajan juntos.",
          "Control y coordinación: todo es coordinado, controlado y regulado por los sistemas endocrino y nervioso.",
          "El Sistema Nervioso envía información mediante la liberación rápida de neurotransmisores. El Sistema Endocrino libera hormonas de forma lenta y con un efecto duradero; éstas dependen del Sistema Circulatorio para viajar a través de la sangre.",
          "Ambos (hormonas + neurotransmisores = sustancias químicas) afectan el estado de ánimo, las conductas, cuestiones metabólicas, las emociones, los pensamientos y demás aspectos.",
          "Ejemplo: \"Estoy caminando y escuchamos un ruido. El sonido es captado por nuestros oídos y es transformado en impulsos nerviosos que llegan hasta el cerebro. El cerebro envía un mensaje a las glándulas suprarrenales para que liberen adrenalina, que es la hormona que nos pone en estado de alerta aumentando la frecuencia cardíaca y respiratoria\".",
          "Estímulo → Médula Espinal + Cerebro → Glándulas Suprarrenales = Respuestas Fisiológicas + Sangre a todo el cuerpo + Oxígeno para hacer frente al estímulo.",
          "Pánico y ansiedad: se pone en alerta el sistema cuando no hay alerta real. Antítesis: meditación y relajación.",
        ],
      },
    ],
  },
  {
    slug: "genetica",
    categoria: "biologia",
    parte: "Teoría celular, genética y procesos",
    titulo: "Genética",
    resumen:
      "Leyes de Mendel, vocabulario genético, teoría cromosómica de la herencia, cromosomas y estructura del ADN.",
    mapaConceptual: {
      label: "Genética",
      children: [
        { label: "Leyes de Mendel", children: [{ label: "Uniformidad" }, { label: "Segregación" }, { label: "Combinación independiente" }] },
        { label: "Vocabulario genético", children: [{ label: "Fenotipo / Genotipo" }, { label: "Homo/heterocigota" }, { label: "Alelo" }] },
        { label: "Interacciones génicas", children: [{ label: "Codominancia" }, { label: "Pleiotropismo" }, { label: "Epistasia" }] },
        { label: "Teoría cromosómica", children: [{ label: "Locus" }, { label: "Cariotipo" }] },
        { label: "Cromosomas", children: [{ label: "Autosomas" }, { label: "Sexuales (X/Y)" }, { label: "Trisomías" }] },
        { label: "Gen y alelo", children: [{ label: "Unidad hereditaria" }] },
        { label: "ADN: estructura", children: [{ label: "Doble hélice" }, { label: "Complementariedad" }, { label: "Histonas" }] },
        { label: "ADN vs ARN", children: [{ label: "Bases y cadenas" }, { label: "Tipos de ARN" }] },
      ],
    },
    secciones: [
      {
        titulo: "Genética, Mendel y teoría cromosómica de la herencia",
        contenido: [
          "Nace en 1902 como ciencia. Gregor Mendel es su padre fundador → estudia la transmisión, expresión y evolución de los genes.",
        ],
      },
      {
        titulo: "Leyes de Mendel",
        contenido: [
          "1. Ley de la Uniformidad: indica que cuando se cruzan dos líneas puras/homocigotas (AA / aa) que difieren en las variantes de un determinado carácter (aspecto que se estudia), todos los individuos de la F1 presentan el mismo fenotipo (lo que se observa). P = generación parental. F1 = generación filial 1 (todos iguales). Ej: va a ser roja (A) por genotipo dominante = Aa, genotipo dominante > genotipo recesivo.",
          "2. Ley de la Segregación: indica que en la segunda generación filial (F2) reaparece el fenotipo recesivo con una proporción 3:1 (25%).",
          "3. Ley de la Combinación Independiente: estudiando dos caracteres distintos juntos, Mendel descubrió que cada variante de cada carácter se combina independientemente.",
          "Cuadro de Punnett (el orden no altera el producto): permite observar las posibles combinaciones para expresar los alelos dominantes y recesivos. Ejemplo: Padre Aa, Madre AA → Genotipo: 50% heterocigota, 50% homocigota dominante. Fenotipo: 100% A.",
          "Ejemplo — cruzar dos heterocigotas: P = Aa x Aa → F1 = AA, Aa, Aa, aa. Fenotipo: 75% color, 25% sin color. Genotipo: 50% heterocigota, 25% homocigota dominante, 25% homocigota recesiva.",
        ],
      },
      {
        titulo: "Vocabulario genético",
        contenido: [
          "Carácter: aspecto determinado que se estudia de algo (el color de las flores / el tallo de las flores).",
          "Fenotipo: rasgo observable (flores rojas y violetas / tallo liso y rugoso).",
          "Genotipo: constitución genética en relación a 1 carácter o a todos los caracteres → material genético heredado. Puede ser homocigota (\"raza pura\", alelos iguales: dominante AA o recesivo aa) o heterocigota (los 2 alelos son distintos, Aa).",
          "Alelo: se refiere a la variante, pero en términos genéticos (A/a).",
        ],
      },
      {
        titulo: "Variaciones de las interacciones génicas",
        contenido: [
          "Codominancia: en algunos casos los híbridos pueden manifestar ambos fenotipos simultáneamente.",
          "Dominancia intermedia: del cruce de dos líneas puras se obtiene una F1 con un fenotipo intermedio entre el de los dos progenitores. Ej: de una flor blanca y una roja salen flores rosas.",
          "Pleiotropismo: son los genotipos que afectan a más de un fenotipo — un solo locus afecta varios rasgos. Ej: el albinismo afecta al pigmento en el cabello, de los ojos y de la piel.",
          "Epistasia: la interacción entre dos genes que determinan distintos rasgos hace que un gen enmascare el efecto del otro (se contradice la Tercera Ley de Mendel). Ej: el gen de la calvicie enmascara el gen del pelo rubio o colorado.",
        ],
      },
      {
        titulo: "Teoría cromosómica de la herencia",
        contenido: [
          "Los genes están ordenados de forma lineal sobre los cromosomas.",
          "Los cromosomas son estructuras que se encuentran en el núcleo de las células y transportan fragmentos largos de ADN (+ proteína). ADN empaquetado.",
          "El lugar que ocupa cada gen en el cromosoma → locus (su plural es loci).",
          "Están constituidos por cromatina: combinación de ácido desoxirribonucleico (ADN) y de proteínas.",
          "El conjunto de todos los cromosomas de una célula → cariotipo. 23 pares de cromosomas.",
        ],
      },
      {
        titulo: "Cromosomas",
        contenido: [
          "1 al 22 = Autosomas → información genética de todo el organismo a excepción de los caracteres sexuales. Son células diploides: contienen dos juegos de cada cromosoma, un juego heredado por parte de la madre y otro por parte del padre. Todas las células de nuestro cuerpo son diploides a excepción de los gametos.",
          "23 = Par de Cromosomas Sexuales → X / Y. Son células haploides, contienen los gametos (óvulos y espermatozoides). En cada óvulo habrá una X y en cada espermatozoide habrá una X o una Y. Cuando ambos gametos se unen produciendo la fecundación, sólo habrá dos tipos de combinaciones posibles: XX (mujer) o XY (varón).",
          "Trisomía 21: cromosoma extra que produce el síndrome de Down. Trisomía 18: cromosoma extra que produce el síndrome de Edwards.",
        ],
      },
      {
        titulo: "Gen y alelo",
        contenido: [
          "Un GEN es una partícula del material genético que determina la aparición de los caracteres hereditarios en los seres vivos → en el cromosoma (cromatina: ADN enrollado alrededor de proteínas llamadas histonas), en un segmento del ADN.",
          "Un alelo (heterocigoto/homocigoto) es cada una de las dos o más variantes de un gen. Un individuo hereda dos alelos para cada gen: uno del padre y el otro de la madre.",
        ],
      },
      {
        titulo: "ADN (Ácido Desoxirribonucleico)",
        contenido: [
          "Es una biomolécula formada por un conjunto de genes.",
          "Guarda la información hereditaria que se transmite de generación en generación.",
          "La unión entre las dos cadenas de nucleótidos que forman el ADN se lleva a cabo a través de puentes de hidrógeno que se establecen entre las bases pirimidínicas (T/C) de una cadena y las bases púricas (G/A) de la otra. Estas uniones siguen un principio de complementariedad: Adenina ↔ Timina (las une dos puentes), Guanina ↔ Citosina (las unen tres puentes) / Uracilo en el ARN.",
          "Tiene una estructura de doble hélice en espiral, constituida por una doble cadena de nucleótidos.",
          "Compuestos por: Fosfato (unidos a los 3' o 5' de los carbonos), Desoxirribosa (compuesta por 5 átomos de carbono) y Base nitrogenada.",
          "El ADN debe enrollarse porque si no mide casi dos metros. Histona: función de enrollar la proteína en 1 orden. Son muchas, a su vez se enrollan entre sí = nucleosoma. El ADN se enrolla alrededor.",
          "Cadenas antiparalelas: se dice que las dos hebras del ADN son antiparalelas, porque una va en dirección de 5' a 3' y la otra va en dirección de 3' a 5'.",
        ],
      },
      {
        titulo: "ADN vs. ARN",
        contenido: [
          "Bases nitrogenadas — ADN: A-T-C-G. ARN: A-U-C-G.",
          "Número de cadenas — ADN: 2 cadenas. ARN: 1 cadena.",
          "Longitud — ADN: más larga. ARN: más corta.",
          "Ubicación — ADN: dentro del núcleo (también mitocondrias), no puede salir del núcleo. ARN: libre en el citoplasma, puede salir del núcleo.",
          "Composición — ADN: nucleótido = 1 fosfato, 1 desoxirribosa (H), 1 base nitrogenada. ARN: nucleótido = 1 fosfato, 1 ribosa (OH), 1 base nitrogenada.",
          "Función — ADN: contener la información genética. ARN: permitir la expresión de la información genética.",
          "Tipos de ARN: mensajero, ribosomal, de transferencia. 1. ARN mensajero: lleva el mensaje desde el núcleo al citoplasma. 2. ARN ribosomal: el que lee la secuencia del ARN mensajero para traducirla en aminoácidos. 3. ARN de transferencia: transporta los aminoácidos.",
        ],
      },
    ],
  },
  {
    slug: "procesos",
    categoria: "biologia",
    parte: "Teoría celular, genética y procesos",
    titulo: "Procesos",
    resumen:
      "Ciclo celular y replicación del ADN, expresión génica (transcripción y traducción), potencial de acción y sinapsis.",
    mapaConceptual: {
      label: "Procesos",
      children: [
        { label: "Ciclo celular y división", children: [{ label: "Interfase / Fase M" }, { label: "Replicación del ADN" }, { label: "Mitosis" }, { label: "Meiosis" }] },
        { label: "Expresión génica", children: [{ label: "Tipos de genes" }, { label: "Transcripción" }, { label: "Código genético" }, { label: "Traducción" }] },
        { label: "Señales neuronales", children: [{ label: "Eléctricas / químicas" }, { label: "Potencial de membrana" }, { label: "Potencial de reposo" }] },
        { label: "Potencial de acción", children: [{ label: "Despolarización" }, { label: "Repolarización" }, { label: "Conducción saltatoria" }] },
        { label: "Sinapsis", children: [{ label: "Excitadora/inhibidora" }, { label: "Química" }, { label: "Eléctrica" }] },
        { label: "Neurotransmisores", children: [{ label: "Neuromoduladores" }, { label: "Clases" }, { label: "Farmacología" }] },
      ],
    },
    secciones: [
      {
        titulo: "Ciclo celular",
        contenido: [
          "Permite el crecimiento y desarrollo de los organismos, la sustitución de células muertas y la regeneración de tejidos dañados.",
          "Ciclo celular: conjunto de procesos que llevan al crecimiento de la célula y a su posterior división. El ciclo celular es la serie ordenada de pasos por los que tiene que pasar una célula desde que nace por división de otra célula hasta que ella misma madura y se divide en dos.",
          "Dos fases: 1. Interfase, se subdivide en tres: G1 (la célula crece en tamaño por la alta producción de proteínas, aumenta su cantidad de orgánulos y se prepara para la duplicación de su ADN), S (la célula replica su ADN) y G2 (continúa aumentando su tamaño y se prepara para la división, sintetizando proteínas).",
          "2. Fase M = división celular: hay dos tipos — Mitosis (división del material genético en células somáticas) y Meiosis (división del material genético en células sexuales: óvulo y espermatozoide).",
        ],
      },
      {
        titulo: "Replicación del ADN",
        contenido: [
          "Para formar una nueva célula. Ubicación de 2 enzimas = Topoisomerasa (desenrolla la hebra) y Helicasa (rompe los puentes) → conjunto enzimático. Unas van a ir hacia la izquierda y otras a la derecha. Dentro del ADN hay varios orígenes.",
          "1. Origen de replicación: comienza en sitios específicos del ADN. En las células eucariotas hay múltiples orígenes de replicación.",
          "2. Desenrollamiento del ADN: la enzima Helicasa separa las hebras de ADN cortando los puentes de hidrógeno que unen las bases nitrogenadas, así se crea la burbuja de replicación. La Topoisomerasa mantiene a las hebras de ADN desenrolladas, evitando el superenrollamiento. Las proteínas SSB se unen a las hebras de ADN y evitan que se vuelvan a unir.",
          "3. Replicación: la enzima Primasa se posiciona sobre 2 bases nitrogenadas y sintetiza un corto fragmento de ARN llamado Primer (o Cebador). Luego, a partir del Primer, la enzima Polimerasa va construyendo la nueva hebra de ADN a partir de la hebra molde/original, añadiendo los nucleótidos según la regla de complementariedad de bases. La ADN polimerasa solo puede leer la hebra molde en dirección 3'→5', por eso solo una de las hebras (la adelantada) puede ser leída en la misma dirección en que construye la polimerasa, mientras que en la hebra rezagada debe ir construyendo a cortos segmentos, llamados Segmentos de Okazaki. Estos segmentos luego son unidos por la enzima Ligasa.",
          "4. Finalización de la replicación: cuando el proceso concluye, las dos nuevas moléculas de ADN se separan. Ambas llevan una hebra antigua y una nueva. La doble hélice se desenrolla y separa gracias a la acción de las enzimas y se forma una burbuja de replicación. Una ARN primasa sintetiza un pequeño fragmento de ARN (cebador) y sobre este la ADN polimerasa va añadiendo nucleótidos complementarios a la cadena que usa como molde. La horquilla de replicación avanza en los dos sentidos creando dos moléculas de ADN idénticas entre sí y a la molécula parental. Al finalizar el proceso se liberan dos moléculas idénticas de ADN, cada una con una hebra vieja y otra nueva.",
        ],
      },
      {
        titulo: "Mitosis (división celular)",
        contenido: [
          "\"La Mitosis es el proceso de división celular que produce dos células hijas genéticamente idénticas a la célula madre\".",
          "Profase: el ADN condensado forma cromosomas, compuestos por dos cromátidas. La membrana nuclear se desintegra, dejando a los cromosomas libres en el citoplasma, y los centríolos se mueven hacia los polos de la célula (Prometafase).",
          "Metafase: los cromosomas se acomodan en el plano ecuatorial, es decir, se alinean en el centro de la célula para que luego los husos mitóticos, que parten de los centríolos, se les unan.",
          "Anafase: los microtúbulos que forman los husos mitóticos se cortan, haciendo que las cromátidas que componen a los cromosomas se separen, y cada una se dirige hacia un polo opuesto de la célula.",
          "Telofase: una vez reunidas todas las cromátidas en los polos de la célula, se forma de nuevo la membrana nuclear, envolviendo los cromosomas.",
          "Citocinesis: el citoplasma se divide en dos, por el centro de la célula, para formar dos células idénticas.",
        ],
      },
      {
        titulo: "Meiosis (división celular)",
        contenido: [
          "\"Es el proceso de división celular (célula diploide: 46 cromosomas) en donde una célula experimenta dos divisiones sucesivas (células haploides: mitad de los cromosomas) dando origen a cuatro células con la mitad de la información genética de la célula original\".",
          "Meiosis I — Profase I: el ADN ya está condensado formando cromosomas. Se desintegra la membrana nuclear. Los centrosomas comienzan a alejarse del núcleo hacia los polos de la célula. Ocurre el entrecruzamiento: los cromosomas homólogos (uno del padre y otro de la madre) se aparean y se produce el intercambio del material genético.",
          "Metafase I: los microtúbulos de los centrosomas se adhieren a los cinetocoros de los cromosomas (ya entrecruzados) llevándolos hacia el ecuador de la célula.",
          "Anafase I: los microtúbulos que forman los husos mitóticos se cortan, haciendo que cada cromosoma se divida de su homólogo y cada uno se dirige hacia un polo opuesto de la célula.",
          "Telofase I: los cromosomas llegan a los polos de las células y se forma nuevamente la membrana nuclear.",
          "Citocinesis I: es la división del citoplasma, formando dos células idénticas entre sí.",
          "Meiosis II: se organiza a partir de las células resultantes de la meiosis I. Este proceso es casi idéntico al de la mitosis: Profase II, Metafase II, Anafase II, Telofase II.",
          "Citocinesis II: a partir de una única célula diploide se generan cuatro células haploides (con 23 cromosomas), genéticamente distintas a la célula original y entre ellas mismas.",
        ],
      },
      {
        titulo: "Gen y expresión del gen",
        contenido: [
          "Un gen es la unidad mínima de información genética que contiene el ADN de un ser vivo. Todos los genes en su conjunto forman el genoma, es decir, la información genética de la especie. Cada gen lleva la información para un proceso celular concreto.",
          "Cada gen ocupa una posición específica, denominada locus. Para cada gen existe una copia, denominada alelo.",
          "Tipos de genes: genes estructurales (estructura de la célula, genes codificantes de proteínas), genes operadores o reguladores (no codifican proteínas pero regulan la actividad de otros genes), genes constitutivos (siempre deben expresarse) y genes no constitutivos (no siempre deben expresarse) → genes inducibles (se activan) y genes reprimibles (se apagan).",
          "Estructura del gen: exones (contienen el ADN codificante, lo que se conserva) e intrones (no contienen ADN codificante, lo que se elimina).",
          "Expresión genética: la síntesis de proteínas → el ADN contiene la información acerca de qué proteína debe sintetizar el cuerpo y qué debe hacer. Proteína → molécula grande y compleja formada por aminoácidos (moléculas que se combinan para formarla = polipéptido), unidos entre sí mediante enlaces peptídicos.",
        ],
      },
      {
        titulo: "Transcripción",
        contenido: [
          "Ocurre en el núcleo de la célula (la maquinaria necesaria está en el citoplasma). Se realiza cuando es necesaria la producción de un determinado polipéptido: la información de su secuencia de aminoácidos es copiada desde el gen correspondiente a un ácido ribonucleico. En esta fase la información del ADN se copia en una molécula de ARN mensajero (ARNm).",
          "1. La ARN polimerasa, una enzima, se une al ADN en una región llamada promotor, situada delante del gen que se va a transcribir. La doble hélice del ADN se desenrolla y se separa localmente: burbuja de transcripción.",
          "2. La ARN polimerasa se desplaza a lo largo de la hebra molde del ADN en dirección 3' a 5', sintetizando una cadena de ARN en dirección 5' a 3'. Usando la hebra molde del ADN como referencia, la ARN polimerasa sintetiza una cadena de ARNm complementaria (cambiando timina por uracilo en el ARN).",
          "3. Cuando la ARN polimerasa llega a una región al final del ADN llamada secuencia de fin, se detiene la síntesis. El ARNm resultante (transcrito primario) se procesa (se eliminan intrones y se colocan exones) para convertirse en ARNm maduro, que luego sale del núcleo al citoplasma.",
        ],
      },
      {
        titulo: "Código genético y traducción",
        contenido: [
          "Código genético: conjunto de reglas mediante las cuales se establece la relación de ordenamiento lineal de nucleótidos de la molécula de ADN y ordenación lineal de aminoácidos de los polipéptidos. La base es triple o codón, constituido por una secuencia cualquiera de 3 nucleótidos de los 4 posibles. Las distintas ordenaciones sirven para especificar los aminoácidos de los polipéptidos.",
          "Traducción: ocurre en el citoplasma. Proceso por el cual la información contenida en el ARNm, siguiendo las reglas del código, se convierte al alfabeto de las 20 letras de los polipéptidos = secuencia de aminoácidos. En esta fase el ARNm se usa como plantilla para ensamblar una proteína.",
          "1. Luego de la transcripción, el ARN mensajero viaja fuera del núcleo celular, guiado por proteínas de transporte, hasta llegar al citoplasma y unirse a los ribosomas.",
          "2. El ARN mensajero se une al ribosoma y éste, mediante el ARN ribosomal, reconoce de a tripletes lo que el ARN mensajero contiene. De esta manera, el ARN de transferencia se complementa al codón de inicio del ARN mensajero con su anticodón, trayendo consigo el aminoácido correspondiente.",
          "3. Los ARNt continúan trayendo aminoácidos al ribosoma. Cada anticodón del ARNt se empareja con un codón complementario del ARNm, añadiendo un aminoácido a la cadena creciente. El ribosoma mueve el ARNm hacia adelante (proceso conocido como translocación).",
          "4. Cuando el ribosoma encuentra un codón de terminación, la síntesis de la proteína se detiene. La proteína recién formada (llamada polipéptido) se libera y se pliega para adquirir su forma y función.",
        ],
      },
      {
        titulo: "Señales eléctricas y químicas",
        contenido: [
          "La información procedente del medio ambiente: órdenes motoras, información más compleja → traducidas a un código único utilizado por las células nerviosas para comunicarse entre sí y con otros. Se utiliza para representar información diversa, enviar órdenes y representar un pensamiento o emoción.",
          "Código basado en 2 tipos de señales: Eléctricas (se producen en las neuronas y en otras células del organismo, debido a propiedades eléctricas que presentan sus membranas celulares; transmiten información a larga distancia, a partir de otras señales; se originan en las dendritas y soma y algunos en los axones; la señal eléctrica se origina en el axón y es conducida a lo largo del mismo hasta alcanzar los terminales presinápticos / botones terminales, donde desencadena la liberación de sustancias químicas al espacio extracelular) y Químicas (actúan como mediadores en la transmisión de información a otras neuronas).",
          "Cada neurona lleva a cabo un proceso de integración de información variada cuyo resultado dependerá de si emite respuesta o no → si emite = señal eléctrica; si falla la señal, la comunicación nerviosa se altera o se interrumpe, afectando la conducta.",
        ],
      },
      {
        titulo: "Potencial eléctrico de membrana",
        contenido: [
          "Excitabilidad: capacidad de la célula de responder mediante señales eléctricas → propiedades de la membrana capaces de transformar señales de forma que puedan ser transmitidas a otras neuronas.",
          "Todas las células mantienen a través de sus membranas una diferencia de potencial eléctrico entre el interior y el exterior (fundamental para la excitabilidad), por la distribución de moléculas que existe a ambos lados de la membrana celular. Cada una de estas moléculas presenta una carga eléctrica → ion: la distribución determina las cargas positivas y negativas a ambos lados de la membrana.",
          "El interior de la célula suele ser más negativo que el exterior, debido a la presencia de más aniones (iones con carga negativa). La compensación de cargas no existe → se establece una diferencia de potencial = PM, redistribución de iones. Cuando no hay diferencia de potencial = 0 mV → ausencia de diferencia de cargas, no es estable.",
          "Las fuerzas de difusión (gradiente de concentración) determinan el movimiento de las partículas desde regiones de mayor concentración a menor → movimiento a favor del gradiente, espontáneo por diferencia de concentración. Gradiente electroquímico: el movimiento de una partícula se ve afectado por la fuerza eléctrica + química → los iones son atraídos por áreas con carga opuesta.",
          "Los movimientos iónicos están determinados por la permeabilidad de la membrana a los distintos iones → canales iónicos: proteínas que regulan el movimiento a través de la membrana permitiendo o no el acceso, más bombas iónicas que utilizan el ATP permitiendo la entrada de sodio (Na+) y salida de potasio (K+).",
        ],
      },
      {
        titulo: "Potencial de reposo",
        contenido: [
          "Neurona en estado de reposo = inactiva = diferencia de potencial entre los -60 y -70 milivoltios.",
          "El potasio es más permeable que el sodio, hay más canales de fuga para el K → concentración de potasio en el interior y sodio en el exterior.",
          "El potencial de reposo es mantenido por la acción de las bombas de sodio-potasio, que transportan activamente iones a través de la membrana para contrarrestar la tendencia de los iones a moverse a favor de su gradiente de concentración.",
          "El PM en estado de reposo se debe al movimiento de iones de K hacia el exterior de la célula. El grado de permeabilidad que presenta la membrana al cloro es intermedio. Aniones orgánicos: impermeable (carga negativa). El K+ y Cl- pueden atravesar la membrana porque es permeable → el gradiente electroquímico determinará el movimiento.",
        ],
      },
      {
        titulo: "Potencial de acción",
        contenido: [
          "Potencial de Acción (PA): la llegada de información procedente de otras neuronas (estímulo) produce cambios en el PM.",
          "1. Apertura de los canales de Na+ = entrada masiva de iones Na+ al interior. La diferencia de potencial entre el interior y el exterior hace que el interior sea negativo y adopte valores de -50mV/-20mV → despolarización, y mayor probabilidad de que la neurona responda/transmita información a otras neuronas = PA o impulso nervioso (elemento básico para la sinapsis, se origina en el cono axónico).",
          "2. Fase de despolarización ascendente: la entrada rápida de Na+ a la célula provoca una despolarización continua hasta que el potencial de membrana alcanza un valor positivo, aproximadamente +50 mV.",
          "3. Fase de repolarización: los canales de Na+ se cierran y se abren los canales de K+ = el potencial de membrana vuelve a valores negativos.",
          "4. La salida de K+ continúa y el potencial de membrana puede llegar a ser más negativo que el potencial de reposo, entre -80 o -90 mV → hiperpolarización: se encuentra más polarizada que en estado de reposo, la neurona queda más inactiva y es más difícil que pueda responder/transmitir información a otras neuronas.",
          "Período refractario absoluto: comienza en la fase descendente del PA, los canales de Na+ no pueden ser abiertos y no se genera PA para responder. Período refractario relativo: caída brusca del PM hasta -90mV; durante este período se requiere un estímulo más fuerte de lo normal para generar un nuevo PA, debido a que la membrana está hiperpolarizada y los canales de Na+ están recuperando su estado de reposo.",
          "PA → rápida inversión del potencial de membrana de forma que el interior de la neurona se vuelve positivo en relación al exterior. Es importante que se dé una despolarización inicial determinada, sino la neurona no responde (≤ 15mV, entre -50/-70mV). Si el cambio en la diferencia de polarización es mayor a 15 mV (-55mV en adelante) el interior de la neurona se vuelve positivo y el exterior negativo. Esto es suficiente para que se dé el umbral de excitación o potencial de umbral. Ley de todo o nada: se produce en su totalidad o no se produce en absoluto.",
          "Explicación: los cambios se dan como consecuencia de los cambios de permeabilidad que experimenta la membrana a los iones de Na+/K+ en respuesta a la despolarización inicial y a la apertura y cierre de los canales iónicos. Los iones de K+ son empujados hacia el exterior por la presión electrostática. El cambio de proporción de iones que entran y salen de la neurona se produce cuando se alcanza el umbral de excitación. Por encima del umbral → el número de iones de Na+ que entra es mayor que los de K+ que salen.",
        ],
      },
      {
        titulo: "Conductancias y propagación del potencial de acción",
        contenido: [
          "Conductancias = permeabilidad. Se emplea para describir el flujo de iones a través de la membrana → depende de la permeabilidad del ion. La conductancia para el ion de Na+ aumenta y disminuye alcanzando su máximo valor en 1 milisegundo. La conductancia de K+ aumenta más lentamente en el PA y decrece progresivamente.",
          "Propagación del potencial de acción: la propagación (conducción del PA) inicia en el cono axónico a lo largo del axón hacia los botones terminales sin sufrir modificaciones. El PA se regenera a lo largo del axón propagándose de forma activa. Se realiza en 1 sola dirección → soma → terminal presináptico y hacia adelante.",
          "Esto se debe a que tras la generación del PA hay un período en el que la membrana es incapaz de responder = período refractario, por 2 fenómenos: inactivación de los canales de Na+ (una vez que se activan es necesario un tiempo para que pasen al estado cerrado y queden disponibles) e hiperpolarización tras el disparo de PA (no es capaz de generar un nuevo potencial en zonas donde la membrana se acaba de regenerar, disparando únicamente en zonas donde las corrientes despolarizantes son suficientes para alcanzar el umbral de excitación).",
          "Conducción saltatoria: la mielina no cubre de forma continua el axón, sino que está interrumpida por los nódulos de Ranvier. Actúa como un aislante que mejora la calidad del impulso, mejorando la velocidad de la conducción. En los axones mielinizados el PA solo se produce en los nódulos, ya que salta de nódulo en nódulo → conducción saltatoria. La corriente fluye en el interior del axón hasta alcanzar un nódulo donde se dispara un nuevo PA. Potenciales locales: cada señal circunscribe al lugar en el que se origina. Ventajas: velocidad y mayor eficacia en la respuesta, ahorro de energía (solo se regenera en los nódulos), adaptación en el espacio.",
        ],
      },
      {
        titulo: "Sinapsis",
        contenido: [
          "\"Contactos funcionales por medio de los cuales las neuronas se comunican entre sí y con otras células no nerviosas (células musculares o células glandulares) para transmitir información\".",
          "Usan un código para transmitir información: Sinapsis Eléctrica y Sinapsis Química.",
          "Tipos de transmisión sináptica: Transmisión excitadora (aumenta la probabilidad de que la neurona postsináptica genere un PA; contactos entre botones terminales y dendritas), Transmisión inhibidora (disminuye la probabilidad de que la neurona postsináptica genere un PA, hay diferencia en la morfología de las vesículas sinápticas) y Transmisión moduladora (no genera directamente potenciales postsinápticos excitatorios o inhibitorios, sino que modula la actividad de otras sinapsis, cambiando el patrón y/o frecuencia de la actividad producida).",
        ],
      },
      {
        titulo: "Sinapsis química",
        contenido: [
          "\"Sinapsis en la que la neurona presináptica libera un neurotransmisor a la hendidura sináptica, que actúa sobre los receptores específicos de la neurona postsináptica\". Es unidireccional, más lenta y transmite 1 PA a la vez.",
          "Los neurotransmisores se sintetizan en el botón terminal o presináptico → son transportados y almacenados en vesículas sinápticas (producidas por el Aparato de Golgi). Las vesículas son transportadas desde el soma hacia el botón terminal por los microfilamentos. Los neurotransmisores son liberados en la hendidura sináptica, alcanzando los receptores postsinápticos, donde interactúan con proteínas situadas en la membrana postsináptica.",
          "Mecanismos de transmisión de la sinapsis química:",
          "1. Síntesis y almacenamiento de los neurotransmisores: las vesículas sinápticas se transportan a lo largo de todo el axón gracias a los microfilamentos que las van conduciendo. Una vez que llegan al botón, se liberan a la hendidura sináptica, alcanzando la membrana postsináptica donde interaccionan con receptores. Luego, los neurotransmisores terminan de sintetizarse; en algunos casos la neurona es capaz de almacenar en el botón terminal y reutilizar los neurotransmisores liberados anteriormente.",
          "2. Liberación del neurotransmisor: cuando el PA alcanza los botones terminales se produce la despolarización de la membrana y la apertura de los canales de calcio (Ca+). Los iones de calcio pasan al interior del terminal empujados por el gradiente electroquímico → facilitan la unión de las vesículas sinápticas con la membrana presináptica, se fusionan con ella, se abren y liberan su contenido a la hendidura sináptica.",
          "3. Interacción del neurotransmisor con sus receptores: una vez liberado, el neurotransmisor se une a unas proteínas llamadas receptores específicos, en la membrana postsináptica. Unión específica = cada neurotransmisor encaja perfectamente con su receptor (distintos receptores para cada Nt). La unión produce la activación del receptor generando distintos efectos en la neurona postsináptica.",
          "4. Inactivación del neurotransmisor: esto hace que la sinapsis finalice, y se puede dar por dos mecanismos: a. Inactivación enzimática (las enzimas específicas degradan/metabolizan a cada neurotransmisor, descomponiendo sus elementos) y b. Recaptación del neurotransmisor (el neurotransmisor que fue liberado a la hendidura sináptica es transportado al interior del botón terminal para ser reutilizado, llevado a cabo por proteínas transportadoras en la membrana del botón terminal).",
        ],
      },
      {
        titulo: "Sinapsis eléctrica",
        contenido: [
          "\"Tipo de sinapsis en la que las corrientes eléctricas pasan de una neurona a otra debido a que sus membranas presentan canales iónicos que se encuentran muy próximos\". Bidireccional, más rápida, varios PA a la vez.",
          "No involucra neurotransmisores, sino la transmisión de iones (moléculas cargadas eléctricamente) de una neurona a otra mediante uniones en hendidura.",
        ],
      },
      {
        titulo: "Neurotransmisores",
        contenido: [
          "\"Es una sustancia química que permite la transmisión de información de una neurona a otra, hacia una célula muscular o una glándula\". Regulan la vida cognitiva y afectiva de la persona.",
          "Neuromoduladores → modulan la eficacia de las células postsinápticas producidas en los receptores asociados a canales iónicos (efectos lentos en distintos neurotransmisores). Todos aquellos neurotransmisores que actúan sobre neuronas postsinápticas mediante receptores metabotrópicos deben ser considerados neuromoduladores. En los botones terminales pueden coexistir 2 o más neurotransmisores.",
          "Clases de neurotransmisores (regulación de estados afectivos y función cerebral): Adrenalina (a partir de la noradrenalina en botones terminales de neuronas del SNC; estrés, alerta, sudoración y palpitaciones, ansiedad → pánico). Noradrenalina (en todo el encéfalo; atención y concentración, más flujo sanguíneo = más energía en el cerebro). Dopamina (SNC; sensación placentera, adicciones). Serotonina (SNC y ME; felicidad, deporte y ejercicio, exposición a la luz, bienestar general). GABA (SNP; calma — a mayor concentración, menor ansiedad). Acetilcolina (SNC y SNP; fomenta el desarrollo de nuevas sinapsis, aprendizaje y atención). Glutamato (a partir de la glucosa; memoria, desarrollo de nuevas conexiones neuronales). Endorfinas (altos grados de excitación; según su liberación, desarrollo normal, y exceso o falta de liberación deriva en patologías).",
          "Farmacología: afecta el proceso proporcionando a la neurona más cantidad de sustancia precursora. Ejemplo: enfermedad de Parkinson, con sustancias precursoras de dopamina.",
          "Dos tipos de antagonistas: Irreversibles (la sustancia se une al receptor y llega a destruirlo) y Reversibles (la sustancia bloqueante se separa del receptor). Agonistas: sustancias que imitan la acción del neurotransmisor. Inactivación del neurotransmisor: fármacos antidepresivos, sustancias que degradan los neurotransmisores o impiden su recaptación, anfetaminas o drogas de abuso.",
        ],
      },
    ],
  },
  {
    slug: "partes-sistema-nervioso",
    categoria: "biologia",
    parte: "Anatómica",
    titulo: "Partes del sistema nervioso",
    resumen:
      "Organización del SNC y SNP, meninges, médula espinal, tronco encefálico, cerebelo, diencéfalo, hemisferios cerebrales, ganglios basales, corteza y sistema límbico, y la neurona como unidad estructural.",
    mapaConceptual: {
      label: "Partes del sistema nervioso",
      children: [
        { label: "SNP y protección", children: [{ label: "Somático / Autónomo" }, { label: "Simpático / Parasimpático" }, { label: "Meninges" }] },
        { label: "Médula espinal", children: [{ label: "Funciones" }, { label: "Sustancia blanca" }, { label: "Sustancia gris" }] },
        { label: "Tronco encefálico", children: [{ label: "Bulbo / Puente / Mesencéfalo" }, { label: "Formación reticular" }] },
        { label: "División del encéfalo", children: [{ label: "Telencéfalo" }, { label: "Diencéfalo" }, { label: "Meten/Mielencéfalo" }] },
        { label: "Cerebelo", children: [{ label: "Corteza cerebelosa" }, { label: "Núcleos profundos" }, { label: "Aferencias/eferencias" }] },
        { label: "Diencéfalo", children: [{ label: "Tálamo" }, { label: "Epitálamo" }, { label: "Hipotálamo" }] },
        { label: "Hemisferios y corteza", children: [{ label: "Ganglios basales" }, { label: "Allocorteza/Neocorteza" }] },
        { label: "Sistema límbico", children: [{ label: "Circuito de Papez" }, { label: "Vías corticoespinales" }] },
        { label: "Ejes y planos", children: [{ label: "Rostral/Caudal" }, { label: "Cortes anatómicos" }] },
        { label: "Neurona y neuroglia", children: [{ label: "Estructura" }, { label: "Clasificación" }, { label: "Tipos de glía" }] },
      ],
    },
    secciones: [
      {
        titulo: "Sistema Nervioso Periférico: somático y autónomo",
        contenido: [
          "Sistema Nervioso Somático: nos permite sentir e interactuar con el mundo que nos rodea. Nervios aferentes: llevan información hacia el SNC. Nervios eferentes: llevan información desde el SNC.",
          "Sistema Nervioso Autónomo: regula el ambiente interno del organismo según las condiciones a las que está sometido. Nervios aferentes: información desde órganos hacia el SNC. Nervios eferentes: desde el SNC hacia distintos órganos.",
          "Sistema Nervioso Simpático: se activa en situaciones de peligro para estimular ciertas funciones de los órganos (acción y aceleración/ansiedad).",
          "Sistema Nervioso Parasimpático: comienza a funcionar cuando ya pasó ese estado de activación/ansiedad, generando en los órganos y el cuerpo un estado de calma (descanso y relajación).",
        ],
      },
      {
        titulo: "Meninges",
        contenido: [
          "El sistema nervioso está protegido por las membranas meníngeas.",
          "1. Meninges: evitan el contacto directo con el hueso.",
          "2. Duramadre: lámina más externa → tejido grueso y resistente. Incluye capa perióstica externa y capa meníngea interna.",
          "3. Aracnoides: membrana esponjosa.",
          "4. Piamadre: adherida al encéfalo y a la médula espinal.",
          "Espacio subaracnoideo: entre la aracnoides y la piamadre, ocupado por el líquido cefalorraquídeo.",
          "Los dos componentes del sistema nervioso (SNC y SNP) difieren en su localización pero no están separados a nivel atómico → están relacionados.",
        ],
      },
      {
        titulo: "Funciones generales del SNC y SNP",
        contenido: [
          "Función del Sistema Nervioso Periférico: transmitir al SNC información (estímulos) que capta del ambiente interno y externo por los órganos sensoriales, y llevar señales desde el SNC a todas las estructuras corporales que inerva la extensa red de nervios que lo compone.",
          "Función del Sistema Nervioso Central: sistema general de control del comportamiento. Muchas estructuras (componentes en constante interacción) se comunican entre ellas y con otras divididas, enviando y recibiendo señales por medio de vías que se establecen entre ellas. Depende de la integridad de todas sus divisiones para gestionar tareas.",
          "Estructura y función son inseparables. La médula espinal y el tronco reciben la mayoría de las señales que transmiten el SNP y el SNC → en las divisiones se localizan neuronas cuyos axones forman parte del SNP.",
          "Organización anatómica = agrupación de las neuronas en estructuras + interacción entre distintas estructuras. Distintas estructuras se agrupan en dos grupos: núcleos y estructuras laminadas. Las funciones sensoriales y motoras, junto con su organización anatómica, están relacionadas con la organización y función del SNP.",
        ],
      },
      {
        titulo: "Médula espinal (ME): funciones",
        contenido: [
          "Está en constante interacción con el SNP y tiene gran relevancia en dos funciones básicas: las sensoriales y las motoras.",
          "1. Recibe la información sensorial que el SNP le transmite desde el tronco y las extremidades, la procesa, y canaliza una parte importante de esta información al encéfalo.",
          "2. Utiliza a nivel local otra parte de la información sensorial, de manera instantánea e independiente del encéfalo, para ejecutar respuestas motoras estereotipadas (reflejos) → eficaces para una respuesta inmediata (ejemplo: cuando se retira una mano de algo que quema).",
          "3. Ejecuta las órdenes que le envía el encéfalo para controlar el sistema musculoesquelético y los órganos internos de esas zonas del cuerpo.",
        ],
      },
      {
        titulo: "Médula espinal: aspecto externo",
        contenido: [
          "Protegida por la columna vertebral, por cuyo canal desciende desde la 1ra vértebra cervical (C1) hasta la 2da lumbar (L2). Tiene forma redondeada y un grosor similar al del dedo meñique.",
          "Se caracteriza por la inserción de los nervios espinales = segmento medular. Estructura continua → 31 segmentos relacionados con los 31 pares de nervios espinales. A través de los nervios espinales, la ME recibe la información sensorial y ejecuta el control motor somático y visceral del tronco, y el control somático de las extremidades.",
          "Mayor grosor en los ensanchamientos cervical y lumbar, donde se insertan los nervios espinales que inervan los brazos y las piernas.",
          "Cono medular = los nervios espinales forman la cola de caballo, que se extiende en los niveles lumbares y sacro hasta el cóccix.",
        ],
      },
      {
        titulo: "Médula espinal: sustancia blanca",
        contenido: [
          "Se dispone en la parte externa → los axones mielínicos largos de las neuronas. Tres columnas a cada lado de la línea media:",
          "Columna blanca dorsal: fibras aferentes somáticas de los nervios espinales que ascienden por la ME sin realizar sinapsis en su trayecto hasta el bulbo raquídeo. Se agrupan en dos fascículos: delgado y cuneado. Grácil: formado por fibras de los segmentos sacros, lumbares y torácicos. Cuneiforme: formado por fibras que entran por los segmentos torácicos y cervicales.",
          "Columna blanca lateral y ventral: formadas por tractos ascendentes y descendentes. Tractos ascendentes: formados por axones de neuronas sensoriales somáticas y viscerales, transmiten al encéfalo información sensorial somática y visceral del tronco y extremidades. Se clasifican en vías viscerales ascendentes (originadas en neuronas sensoriales viscerales de la zona intermedia, terminan en el diencéfalo/hipotálamo) y vías somáticas ascendentes (originadas en las neuronas sensoriales somáticas del asta dorsal y zona intermedia, transmiten sus señales al tronco encefálico y cerebelo). Son cruzadas → aportan información al lado colateral contrario.",
          "Tractos descendentes: descienden desde distintos centros del encéfalo. Se clasifican en vías motoras somáticas (originadas en la corteza cerebral y el tronco encefálico, transmiten órdenes hasta neuronas motoras somáticas del asta ventral para controlar el sistema musculoesquelético en mantenimiento de posturas y movimientos), vías descendentes de modulación sensorial (originadas en el encéfalo, terminan en interneuronas del asta dorsal modificando la transmisión de información sensorial en las vías que ascienden al encéfalo) y vías motoras viscerales (autónomas, descienden por la columna blanca lateral y terminan sobre neuronas motoras viscerales de la zona intermedia).",
          "Formada por millones de prolongaciones de neuronas. Fibras periféricas + axones se agrupan formando tractos: ascendentes (transmiten al encéfalo información que proviene del SNP) y descendentes (el encéfalo transmite órdenes a la ME).",
        ],
      },
      {
        titulo: "Médula espinal: sustancia gris",
        contenido: [
          "Forma la parte central → cuerpos de las células nerviosas, las dendritas y los axones cortos. Su tamaño y forma varían en los distintos segmentos medulares (parece una mariposa o letra H).",
          "En las secciones transversales aparece como dos extensiones simétricas a cada lado de la línea media, unidas en el centro por la comisura gris, por la que desciende el canal central del sistema ventricular. Se parcela en tres zonas: asta dorsal (posterior), asta ventral (anterior) y, entre ambas, la zona intermedia o de transición.",
          "Formada por varios millones de neuronas. Interneuronas: cuyos axones no salen de la ME, son locales. Interneuronas propioespinales: envían sus axones a otros segmentos distantes de la ME. Neuronas de proyección: envían sus axones fuera de la ME → al encéfalo (SNC) o fuera del SNC (SNP).",
          "Se clasifican en 4 categorías: Neuronas de proyección sensoriales (somáticas y viscerales, ubicadas en el asta dorsal y zona intermedia; desde el SNP les llegan señales de las fibras aferentes somáticas y viscerales del tronco y las extremidades; envían sus axones al encéfalo para transmitir información; sobre ellas convergen vías eferentes desde el encéfalo para modular la información sensorial que transmiten) y Neuronas motoras somáticas y viscerales (de proyección periférica, en distintas zonas de la sustancia gris).",
          "Motoras somáticas: envían axones al músculo, reciben señales a través de las interneuronas de la periferia (circuitos locales), se localizan en el asta ventral, ejecutan movimientos voluntarios. Motoras viscerales: en la parte lateral de la zona intermedia, envían información a los órganos, convergen vías descendentes del encéfalo.",
          "Interneuronas: actúan como eslabones intermedios que transmiten las influencias de las neuronas sensoriales y motoras, regulando las señales que reciben. Parte de la información que recibe la ME llega de la periferia y se procesa en circuitos locales → reflejos.",
        ],
      },
      {
        titulo: "Encéfalo y tronco encefálico (TE)",
        contenido: [
          "Encéfalo: se empieza a gestar en el embrión como tubo neural repleto de líquido. Cerebro: órgano biológico complejo con capacidad de cómputo, constituye nuestras experiencias sensibles, regula pensamientos y emociones y controla acciones.",
          "Tronco del encéfalo: en el embrión hay 3 ensanchamientos (Prosencéfalo, Mesencéfalo, Rombencéfalo) + la ME. Se divide en 5: Telencéfalo, Diencéfalo, Mesencéfalo, Metencéfalo, Mielencéfalo.",
          "Funciones sensoriales y motoras: recibe información del tronco y las extremidades por las vías que ascienden por la ME y los nervios craneales del SNP, y la transmite a otras estructuras del encéfalo. Controla actos motores reflejos con independencia del encéfalo, a través de neuronas craneales. Es zona de intercomunicación entre la ME y el resto del encéfalo, y centro por el cual los hemisferios cerebrales se comunican con el cerebro.",
          "Formado por 3 estructuras: Mesencéfalo, Puente/Protuberancia y Bulbo. Está debajo del cerebro y pegado al cerebelo. Mide entre 6 y 7 cm. Conecta la ME con el cerebro anterior.",
          "3 funciones: 1. Conducto para los tractos ascendentes y descendentes que conectan la ME con distintas partes de los centros superiores en el encéfalo. 2. Importantes centros de actos reflejos asociados a la respiración, sistema cardiovascular y control de conciencia. 3. Contiene núcleos importantes.",
        ],
      },
      {
        titulo: "Tronco encefálico: estructura interna",
        contenido: [
          "1. La sustancia gris se ubica en el centro, bordeada por sustancia blanca.",
          "2. La sustancia gris está muy parcelada formando numerosos núcleos.",
          "3. Las 3 divisiones tienen 2 componentes comunes: nervios craneales y formación reticular.",
          "4. Cada división tiene un núcleo propio que recibe información sensorial del cuerpo e interviene en funciones motoras.",
          "5. Se organiza alrededor de un acueducto cerebral → el 4to ventrículo y el canal central, en 3 zonas: Techo (dorsal a las cavidades del sistema ventricular), Tegmento (zona ventral) y Base (formada por la zona más ventral de los tres niveles).",
          "Núcleos propios de cada división — sustancia gris: núcleos propios de los pares craneales. Sustancia blanca: haces.",
          "1. Bulbo raquídeo: columnas blancas dorsales y sus núcleos delgado y cuneados + 4to ventrículo. Oliva inferior. La base está constituida por pirámides → tractos que descienden desde la corteza cerebral hasta la ME.",
          "2. Puente: techo del puente. En la base, núcleos pontinos, mediante los que transitan señales contralaterales. En el tegmento (entre base y techo), complejo de la oliva superior → información auditiva. Núcleos parabraquiales y locus coeruleus.",
          "3. Mesencéfalo: en el techo, 2 parejas de núcleos — a. Colículos inferiores: procesamiento de la información auditiva, sus células en láminas concéntricas superpuestas. b. Colículos superiores: procesamiento visual, organizados en capas, donde termina el tracto óptico, reciben vías descendentes de la corteza cerebral e intervienen en el movimiento de ojos y cabeza. En la base: pedúnculos cerebelosos (base + tegmento). Núcleos: 1. Sustancia gris periacueductal (zona de integración de señales neuroendocrinas y sensoriales). 2. Núcleo rojo (estructura redondeada de color rojizo, control motor). 3. Sustancia negra (parte ventral del tegmento, numerosas neuronas de pigmento negro).",
        ],
      },
      {
        titulo: "Formación reticular",
        contenido: [
          "Se distribuye longitudinalmente por la extensión del tronco encefálico. Está compuesta por una serie de núcleos propios (sustancia gris) conectados por fibras neuronales → sistema de filtrado de información sensorial proveniente de la ME, que viaja hasta el tálamo y el cerebelo.",
          "Es fundamental para la supervivencia; se encarga de funciones primitivas como atención, alerta, asociación y coordinación de información sensorial y motora, ciclos circadianos (sueño/vigilia), modulación del dolor y consciencia.",
          "Lugar de convergencia de señales: sistema ascendente de activación. Núcleos relacionados: núcleos del rafe, locus coeruleus, área tegmental y sustancia negra lateral y ventral.",
          "Núcleos de los nervios craneales, columnas longitudinales: columna paramediana (adyacente al núcleo del rafe, en el bulbo y puente), columna medial (abundan las células grandes, interviene en el control motor) y columna lateral (intervienen células pequeñas). Las neuronas reticulares tienen características morfológicas y funcionales similares a las interneuronas de la ME. Las neuronas de los núcleos de rafe liberan el neurotransmisor serotonina; es fundamental por su cercanía al tálamo e hipotálamo.",
          "Vías ascendentes: los núcleos de las columnas dorsales del bulbo (grácil y cuneiforme) transmiten información somática del cuerpo hasta el diencéfalo (tálamo). Se origina un tracto importante, el lemnisco medial, que lleva información sensitiva al diencéfalo. Reciben influencias descendentes de niveles más rostrales del encéfalo. Las vías ascendentes de los núcleos sensoriales de los nervios craneales transmiten la información somática hacia el diencéfalo; las neuronas sensoriales viscerales transmiten la información visceral general de los órganos internos y la información gustativa también al diencéfalo (tálamo + hipotálamo).",
          "Vías descendentes: el tronco encefálico participa en el control motor del tronco y las extremidades mediante vías que descienden directamente a la ME. 1. Vías motoras somáticas: originadas en el mesencéfalo, formación reticular y núcleos vestibulares, descienden por la columna blanca lateral y ventral. 2. Vías motoras viscerales autónomas: descienden desde la ME y constituyen las vías por las que el tronco encefálico influye sobre las funciones viscerales, se originan en distintos niveles del tronco. 3. Vías de modulación sensorial: forman parte de los mecanismos con los que cuenta el SNC para protegerse de una estimulación excesiva; se controlan mediante vías descendentes de la ME y modulan la información sensorial aferente.",
          "Vías del tronco encefálico hacia el cerebelo: suministran parte de la información que recibe el cerebelo, importante para el control motor. Se originan en la oliva inferior y núcleos pontinos. 1. Oliva inferior: aferencias motoras y núcleo de proyecciones al cerebelo contralateral; cuando entran al cerebelo se convierten en fibras trepadoras. 2. Núcleos pontinos: reciben señales de la corteza cerebral, son estación de relevo entre la corteza cerebral y el cerebelo contralateral; cuando entran al cerebelo, fibras musgosas.",
          "En el tronco se procesan funciones vitales como el control de la respiración y del ritmo cardíaco, y sirve como principal vía para la información que fluye entre el cerebro y la ME, la vigilia y el sueño, y coordina movimientos oculares y del cuerpo en respuesta a estímulos visuales y auditivos.",
        ],
      },
      {
        titulo: "División del encéfalo",
        contenido: [
          "1. Telencéfalo (viene del Prosencéfalo): hemisferios cerebrales, unidos por el Cuerpo Calloso y separados por la Cisura Longitudinal. Estructuras corticales y subcorticales (sistema límbico y ganglios basales). Tiene 4 lóbulos: Lóbulo Frontal (la Cisura Central lo divide del Parietal, área premotora), Lóbulo Parietal (corteza somatosensorial, corteza motora primaria), Lóbulo Temporal (la Cisura Lateral lo divide del Frontal y Parietal, sector cognitivo lingüístico) y Lóbulo Occipital (corteza visual).",
          "2. Diencéfalo: Tálamo + hipotálamo.",
          "3. Mesencéfalo: Tectum + Tegmentum. Dorsal → formación reticular: sustancia gris periacueductal, sustancia negra y núcleo rojo. Ventral → tubérculos cuadrigéminos: 1 par superior y otro inferior.",
          "4. Metencéfalo: Protuberancia + cerebelo. Formación reticular.",
          "5. Mielencéfalo: Bulbo raquídeo + formación reticular.",
        ],
      },
      {
        titulo: "Cerebelo",
        contenido: [
          "Influye en la actividad motora que desciende desde el tronco y la corteza cerebral. Se lo denomina modulador de funciones motoras. Se localiza bajo los hemisferios cerebrales, envolviendo la cara dorsal del tronco encefálico, al que se une por 3 pares de tractos (pedúnculos cerebelosos: superior, medio e inferior) que conectan al cerebelo con el tronco encefálico.",
          "Recibe información colateral del sistema nervioso sensorial. Función cognitiva y emocional (lenguaje, atención, memoria y emociones) y coordina movimientos voluntarios y equilibrio a través de conexiones vestibulares y de la médula espinal.",
          "Aspecto exterior: parte dorsal ligeramente aplanada. Se aprecian pliegues (folias: hojas o láminas dispuestas transversalmente y paralelas entre sí). Entre ellas hay surcos o cisuras que lo dividen en 3 lóbulos: Anterior, Posterior y Floculonodular, separados por la cisura más profunda del cerebelo. Los lóbulos se forman por lobulillos más pequeños que se agrupan en numerosas folias.",
          "Longitudinalmente, en la cara dorsal del cerebelo se distingue una estrecha banda central (Vermis) que une 2 grandes masas laterales: los hemisferios cerebelosos. Es laminar y se encuentra en la fosa craneal superior, detrás del 4to ventrículo, protuberancia y bulbo raquídeo, separándose del lóbulo occipital.",
          "Organización interna: la mayor parte de la sustancia gris forma parte de la corteza cerebelosa, que envuelve a la sustancia blanca. Dentro de la sustancia blanca hay 3 pares de núcleos de sustancia gris: núcleos profundos del cerebelo.",
          "Corteza del cerebelo, 3 capas horizontales: 1. Capa granular: interneuronas (células granulares y de Golgi). 2. Capa molecular: la más externa, donde se localizan los axones de las células granulares, formada por interneuronas. 3. Capa de Purkinje: únicas células de proyección de la corteza cerebelosa.",
          "Núcleos profundos: a través de ellos pasan las señales que llegan desde la corteza cerebelosa y todas las que salen de esta. Cada uno se relaciona con la zona de la corteza equivalente, en 3 zonas: Media (Vermis + Núcleo fastigio), Intermedia (zona media de los hemisferios cerebelosos + núcleos interpuestos, cerca del núcleo emboliforme y núcleo globoso) y Lateral (zona lateral + núcleo dentado).",
          "Aferencias y eferencias: el cerebelo recibe aferencias que se originan en la ME (llegan a la zona media e intermedia), el tronco encefálico (núcleos pontinos hasta la zona lateral, y desde la oliva inferior hasta las 3 zonas) y el órgano vestibular (lóbulo floculonodular). Fibras de la oliva inferior → fibras trepadoras. Fibras musgosas → núcleos pontinos.",
          "Eferencias originadas en 3 vías fundamentales: 1. Zona lateral → se dirige al tálamo. 2. Zona intermedia → termina en el núcleo rojo. 3. Zona media → doble trayectoria al tronco encefálico. Vestibulocerebelo (zonas media e intermedia, relación con la ME), Espinocerebelo (lateral, relación con la corteza cerebral) y Cerebrocerebelo (control motor).",
        ],
      },
      {
        titulo: "Diencéfalo: tálamo",
        contenido: [
          "El diencéfalo ocupa una posición central en el encéfalo, entre los hemisferios cerebrales y el tronco encefálico. Es una estructura anatomofuncional formada por 4 componentes. Se origina de manera ventral y alrededor del 3er ventrículo, y se extiende hasta el agujero interventricular y la lámina terminal. En la superficie del encéfalo, la zona ventral del diencéfalo pertenece al hipotálamo y al quiasma óptico (nervio óptico, único que entra al diencéfalo).",
          "1. Tálamo: componente más dorsal. Centro de coordinación sensorial. Recibe información de todos los sentidos, de la ME, el tronco encefálico y el diencéfalo, y canaliza las aferencias que llegan a la corteza cerebral. Transmite información del hipotálamo a la corteza cerebral. Formado por 2 cuerpos ovoides a cada lado del 3er ventrículo, unidos por un puente de sustancia gris: la masa intermedia.",
          "Clave para mantener la actividad cortical. Organización interna: alrededor de una estrecha banda de sustancia blanca (lámina medular interna) que atraviesa el tálamo en su extensión anterior con forma de Y, y lo divide en anterior, medial y lateral. Varios núcleos: anterior, medial, lateral, ventral, reticular, intralaminar y de la línea media, con distinta organización citoarquitectónica. Células uniformes y otras no → heterogeneidad; algunas están organizadas en láminas.",
          "La conectividad de los núcleos talámicos y sus características funcionales es clave para conocer información anatomofuncional del SNC. La conexión entre el tálamo y la corteza cerebral es recíproca, ya que la corteza devuelve sus proyecciones al tálamo. Los núcleos del tálamo se clasifican en núcleos de relevo y de proyección difusa.",
          "Núcleos talámicos de relevo: estaciones intermedias de procesamiento en el tránsito de la información. La división más grande del tálamo, relacionada con la transmisión de señales a áreas concretas de la corteza cerebral. Grupo ventral: recibe aferentes sensoriales → experiencia sensorial consciente. Cada núcleo de relevo sensorial interviene en el procesamiento de una modalidad sensorial distinta → núcleos del lóbulo límbico y parietal, occipital, temporal y la ínsula. Reciprocidad: la corteza cerebral regula la información que recibe según la actividad que se desarrolla. Núcleos de relevo motor: transmiten información de carácter motor recibida desde centros como el cerebelo y el cuerpo estriado. Grupo anterior y ventral: información convergente en el hipotálamo hacia la corteza cerebral. Grupo lateral: recibe aferencias desde la corteza cerebral y transmite sus señales a las mismas zonas corticales de las que la recibe.",
          "Núcleos de proyección difusa: actividad sin restricción a áreas concretas, envían proyecciones hacia regiones subcorticales. Incluye el grupo intralaminar, el de la línea media y el grupo reticular. Información sobre distintas zonas del encéfalo y la ME se distribuye a la corteza cerebral sin respetar límites. Núcleo reticular: función de control de la actividad cortical.",
        ],
      },
      {
        titulo: "Diencéfalo: epitálamo, subtálamo e hipotálamo",
        contenido: [
          "2. Epitálamo: en el techo del 3er ventrículo. Integrado por: Habénula (estructura triangular a ambos lados de la glándula pineal, adyacente al tálamo, converge sus proyecciones desde el encéfalo anterior y el mesencéfalo) y Glándula pineal (estructura importante en la línea media del encéfalo, entre los colículos superiores del mesencéfalo; sus células, pinealocitos, son células glandulares que segregan la hormona melatonina de forma endocrina; sensible al cambio de luz, funciona como reloj biológico).",
          "3. Subtálamo: debajo del tálamo y posterior al hipotálamo.",
          "4. Hipotálamo: ventral al tálamo, separado por el surco hipotalámico. Coordina sistemas efectores motores y endocrinos → sistema nervioso autónomo y somático. Se extiende desde el entorno de la lámina terminal hasta los cuerpos o neuronas mamilares. Tiene forma de protuberancia que se prolonga y bordea el suelo del 3er ventrículo, hasta formar un embudo que se une al tallo hipofisario, continuando en la hipófisis (glándula endocrina formada por 2 lóbulos: tejido glandular + tejido nervioso). Recibe información desde las neuronas sensoriales viscerales de la ME, el tronco encefálico y diversas estructuras del encéfalo anterior.",
          "Orientación interna: se diferencian varios núcleos junto a una matriz de células heterogéneas denominadas áreas. Se organiza en el eje anteroposterior en 3 regiones: anterior (desde un nivel algo rostral a la lámina terminal hasta el extremo posterior del quiasma óptico), tuberal (superficie ventral que se une a la hipófisis) y posterior (presencia de los cuerpos mamilares). En el eje medio-lateral: zona periventricular (bordea el 3er ventrículo), zona media (adyacente al 3er ventrículo, distintos núcleos) y zona lateral (más núcleos y fibras).",
          "Vías principales eferentes del hipotálamo: el hipotálamo recibe información de todo el cuerpo e influye en el sistema nervioso autónomo, el sistema endocrino y las conductas motivacionales.",
        ],
      },
      {
        titulo: "Hemisferios cerebrales",
        contenido: [
          "Parte voluminosa del SNC. Cubre el diencéfalo, parte del tronco encefálico y el cerebelo. Se establecen multitud de circuitos en los que se analiza, asocia y almacena información.",
          "Aspecto externo: numerosos pliegues marcan la superficie externa, formada por la corteza cerebral. Pequeñas hendiduras (cisuras) marcan límites entre su superficie: Cisura Central, Lateral y Parieto-occipital → dividen el cerebro en 4 lóbulos, denominados según el hueso craneal: Frontal, Parietal, Occipital y Temporal. Giros o circunvoluciones cerebrales: superficies elevadas entre cisuras. Los hemisferios cerebrales están separados por la Cisura Longitudinal y unidos por la comisura más grande: el Cuerpo Calloso. En la cara lateral, en la cisura lateral, hay 2 hemisferios no visibles: la Ínsula y el lóbulo límbico. En la cara ventral: circunvoluciones orbitarias del lóbulo frontal y bulbos olfatorios.",
          "Organización interna: los hemisferios se organizan alrededor de los ventrículos. Formada por sustancia gris (la corteza cerebral) y, debajo de ella, sustancia blanca formada por estructuras subcorticales, con 2 sistemas neuronales: ganglios basales y sistema límbico.",
          "Estructuras subcorticales: cuerpo estriado + núcleo de la estría terminal + núcleos septales/basales del encéfalo anterior → núcleo basal de Meynert + amígdala.",
        ],
      },
      {
        titulo: "Ganglios basales",
        contenido: [
          "1. Núcleo Caudado: dorsal al tálamo, su cola termina en el lóbulo temporal, se une con el Putamen.",
          "2. Putamen: lateral en los hemisferios cerebrales, bajo el lóbulo de la ínsula. Núcleo Caudado + Núcleo Putamen = Neoestriado.",
          "3. Globo Pálido: medial al putamen y lateral a la cápsula interna. Globo Pálido + Putamen = Núcleo Lenticular.",
          "Ganglios basales: cuerpo estriado formado por sustancia gris del mesencéfalo y el núcleo subtalámico del diencéfalo. Circuitos neurales: control de movimientos voluntarios. Entre el ventrículo lateral y la comisura anterior hay una estructura subcortical interna: el Núcleo de la Estría Terminal.",
          "Parte ventral de los hemisferios: núcleos basales del encéfalo anterior → Núcleo basal de Meynert (proyecciones que se distribuyen por la corteza cerebral, relacionado con el Alzheimer). Profundidad del lóbulo temporal: Amígdala, con 3 unidades (Cortical, Medial, Central y Basolateral), que controlan conductas, emociones y motivaciones.",
          "Sustancia blanca de los hemisferios cerebrales: formada por 3 tipos de fibras que interconectan, de proyección y de asociación. 1. Interhemisféricas: comisura anterior y cuerpo calloso, cruzan la línea media en la lámina terminal e interconectan los bulbos olfatorios y las regiones inferiores del lóbulo temporal entre ambos hemisferios. 2. Fibras de proyección: los axones ascienden hacia la corteza y van al encéfalo y la ME, gran tracto que irradia a los hemisferios cerebrales — a nivel superior se distribuyen en forma de abanico (Corona Radiada), en niveles más ventrales (Cápsula Interna).",
        ],
      },
      {
        titulo: "Corteza cerebral (CC)",
        contenido: [
          "Tiene sus células organizadas en capas horizontales. Células de proyección típicas: células piramidales.",
          "2 cortezas: Allocorteza (filogenéticamente más antigua: corteza olfatoria/paleocorteza, corteza del lóbulo límbico/arquicorteza — en la cara medial del lóbulo temporal, 3 capas, pertenece a la información hipocampal: hipocampo, giro dentado, complejo del subículo y corteza entorrinal; el hipocampo tiene continuidad en el fórnix, tracto de proyección hipocampal, 3 capas — molecular, piramidal y polimórfica —, componente de circuitos neurales, interviene en la memoria y el aprendizaje) y Neocorteza (6 capas y células piramidales, manto de sustancia gris en la superficie externa de los hemisferios; las capas 1, 2 y 4 son receptoras de las aferencias corticales, y reciben aferencias originadas en muchas partes del SNC; las eferencias se originan en las capas 2, 3, 5 y 6).",
          "Organización anatomofuncional: 1. Interacción vertical y horizontal: los colaterales axónicos de las neuronas piramidales y los axones de las interneuronas permiten las interacciones entre neuronas corticales. 2. Sus células tienden a orientarse verticalmente, formando cilindros de tejido cortical (organización columnar).",
          "Áreas de la neocorteza: no es uniforme, hay numerosos mapas citoarquitectónicos (áreas), divididas en 3 tipos: Sensoriales (lóbulo parietal, temporal, occipital y de la ínsula; cada sentido tiene su propia área sensorial, con área primaria —aferencias desde los núcleos— y secundaria —aferencias desde áreas sensoriales primarias—; tiene una capa granular interna (4) prominente y una capa 5 muy delgada), Motoras (lóbulo frontal, adyacente a la cisura central; área motora primaria: órdenes que descienden desde las neuronas para ejecutar movimientos en distintas partes del cuerpo; área premotora: proyecciones motoras descendentes; se originan los tractos motores descendentes desde la corteza hasta el tronco y la ME para controlar los músculos) y de Asociación (integración superior, depende de la capacidad de atender estímulos y planificar movimientos internos y externos; personalidad, lenguaje, escritura y pensamiento; se divide en 3 áreas: Corteza de asociación Parietal —estímulos complejos interior y exterior—, Prefrontal —planificar comportamientos en función de la experiencia acumulada— y Temporal —procesamiento auditivo y visual + atención—, que sirven de nexo a otras partes; se conectan a través de comisuras interhemisféricas y fibras de asociación cortical).",
          "Fibras de asociación cortical: salen de las áreas de la corteza en que se originan y pasan a formar parte de la sustancia blanca hasta llegar a otras zonas de corteza en el mismo hemisferio. Fibras de asociación cortas o en U: conectan regiones cercanas. Fibras de asociación larga: comunicación a áreas más lejanas.",
          "Relaciones entre las estructuras hemisféricas y vías eferentes de la corteza cerebral: en los hemisferios hay 2 grandes bloques de conectividad (relacionan la corteza cerebral con estructuras subcorticales). 1. Formado por la allocorteza y varias estructuras incluidas en 2 sistemas funcionales relacionados con el olfato y el sistema límbico. 2. Entre la neocorteza y los ganglios basales. Vías olfatorias y sistema límbico: la vía olfatoria llega a la corteza olfatoria primaria (piriforme) sin hacer relevo en el tálamo; las señales siguen 2 vías que se distribuyen a nivel central hacia zonas del encéfalo que intervienen en distintas funciones: corteza olfatoria primaria e hipotálamo medial.",
        ],
      },
      {
        titulo: "Sistema límbico",
        contenido: [
          "Varias estructuras del encéfalo anterior forman parte del circuito. J. W. Papez propuso un circuito que unía la función hipocampal, los núcleos mamilares del hipotálamo y la corteza del cíngulo, a través del núcleo anterior del tálamo.",
          "Sistema límbico: McLean, en 1949, amplió el circuito y acuñó el término. Añadió la amígdala y los núcleos septales. No existe un acuerdo común entre las estructuras, ni sobre si es un sistema funcional unitario. A través de su acción sobre sistemas efectores autónomos, endocrinos y somáticos (hipotálamo + amígdala), integra emociones y motivaciones.",
          "Conectividad entre corteza y ganglios basales: todas las regiones de la corteza proyectan al cuerpo estriado. La neocorteza proyecta al neoestriado (principal área receptora). Las áreas de asociación proyectan al núcleo caudado. La corteza somatosensorial, motora, visual/auditiva envían sus proyecciones al Putamen. La corteza límbica envía sus proyecciones al estriado ventral. La proyección que recibe el neoestriado desde la sustancia negra compacta es otra gran fuente de señales, que se canalizan hacia 2 segmentos: globo pálido y sustancia negra reticulada, principales efectores del sistema de ganglios basales. Las señales se dirigen a núcleos talámicos, que transmiten a la corteza motora y de asociación prefrontal, formando vías de retroalimentación a la corteza. La conectividad entre ganglios basales y corteza forma un sistema modular de control motor fundamental para la planificación y desarrollo de movimientos.",
          "Vías de proyección descendentes de la corteza al tronco encefálico y la ME: las más largas descienden por la Cápsula Interna y, al llegar al mesencéfalo, se agrupan en pedúnculos cerebrales. Las áreas corticales que proyectan a los núcleos pónticos del tronco encefálico forman las vías corticopontinas, parte del núcleo por el que se comunican la corteza y el cerebelo. Los axones de la corteza motora terminan en varios núcleos a nivel del tronco encefálico; los que terminan en los núcleos de los nervios craneales forman el tracto corticobulbar. Los axones descendentes de la corteza somatosensorial llegan a varios núcleos sensoriales de los nervios craneales y a los núcleos de relevo sensorial delgado y cuneado del tronco encefálico. Los axones que descienden desde la corteza a la ME forman el tracto corticoespinal, la vía más larga del SNC, originada en la corteza motora y el lóbulo parietal.",
          "A nivel del puente, los axones de estas áreas de la corteza se disponen en núcleos pontinos, y en el bulbo se reagrupan formando pirámides bulbares. Los axones cruzados descienden por la columna vertebral formando el tracto corticoespinal lateral. Los axones que no cruzan la línea media descienden por la columna ventral de la ME formando el tracto corticoespinal ventral. Los que se originan en el lóbulo parietal corresponden a fibras del tracto corticoespinal lateral que terminan en el asta dorsal de la ME y regulan la transmisión de información sensorial de ese nivel.",
        ],
      },
      {
        titulo: "Ejes y planos de referencia",
        contenido: [
          "Rostro-caudal: neuroeje, desde la parte frontal del encéfalo hasta el final de la ME. Se sitúa en el eje dorsoventral.",
          "Estructuras próximas a la línea media: mediales. Estructuras que se encuentran fuera: laterales. Rostral: hacia la nariz. Caudal: hacia atrás de la cabeza. Ventral: hacia la mandíbula. Dorsal: parte superior del cráneo.",
          "Cortes: medio sagital (plano vertical a lo largo de la línea media, divide al sistema nervioso en 2 mitades simétricas, derecha e izquierda; los cortes paralelos son parasagitales), horizontal (plano paralelo al suelo, divide al encéfalo en superior e inferior), frontal/coronal o transversal (divide al sistema nervioso en rostral y caudal, perpendicular al neuroeje).",
          "Vías eferentes: desde el SNC hacia áreas periféricas. Vías aferentes: fibras que llevan información hasta el SNC.",
        ],
      },
      {
        titulo: "Neurona",
        contenido: [
          "Célula del Sistema Nervioso. Elemento estructural y funcional del cerebro. Unidad de transmisión de señales, mediante transmisión sináptica.",
          "La conducta depende de la conexión entre circuitos neuronales. Cajal: comunicación → cada célula dispone de un campo receptivo (dendritas), un segmento conductor (axón) y un extremo transmisor (terminal axónico).",
          "Principio de especificidad: cada neurona se comunica con otras neuronas específicas para llevar a cabo funciones particulares, no de forma aleatoria.",
          "Características estructurales y funcionales: Cuerpo celular (Soma): produce proteínas para mantener la vida y funciones de la neurona, envuelto por una membrana neuronal que delimita el interior y exterior, genera fenómenos eléctricos y señales químicas (neurotransmisores). Dendritas: prolongación del soma, constituyen áreas receptoras de la información neuronal, captan el mensaje y lo conducen al cuerpo neuronal (zona de transferencia: sinapsis). Axón: prolongación del soma, propaga información: célula → fibra nerviosa, formado por cono axónico + axón + botón axónico.",
          "Clasificación morfológica (según cantidad de prolongaciones = axón + dendritas): Multipolares (muchas prolongaciones — neurona estrellada del cerebelo, neurona piramidal de la corteza motora, neurona sensorial cutánea, células de Purkinje del cerebelo), Bipolares (2 prolongaciones en lugares opuestos, ej. retina), Unipolares (una sola prolongación) y Pseudounipolares (una sola prolongación bifurcada en dos extremos).",
          "Función de la neurona: Sensoriales (captan información del entorno y la conducen al SNC), Motoras (axones del SNC a los músculos) e Interneuronas (procesan información localmente desde distintas partes del sistema y comunican distintas estructuras).",
          "Anatomía (partes): membrana plasmática/neuronal, citoplasma, lisosomas, mitocondrias, aparato de Golgi, vesículas sinápticas, etc.",
        ],
      },
      {
        titulo: "Neuroglia",
        contenido: [
          "Células encargadas de mantener a las neuronas en las condiciones óptimas que aseguren su adecuado funcionamiento y su supervivencia, proporcionándoles soporte estructural y metabólico.",
          "Astrocitos: estructuralmente separan, aíslan y retienen los neurotransmisores. Transmiten nutrientes y fagocitan. Forma estrellada, múltiples acciones. 2 formas: Fibrosos (sustancia blanca) y Protoplasmáticos (sustancia gris, más abundantes).",
          "Oligodendrocitos: emiten prolongaciones que se enrollan alrededor de los axones, formando una capa de membranas que los envuelve → mielina.",
          "Células de Schwann: en el Sistema Nervioso Periférico, cumplen la misma función que las células gliales del SNC.",
          "Microglías: funcionan como elementos del sistema inmunológico, protegiendo al organismo de agresiones externas e internas. Cuando hay una lesión, regeneran el tejido.",
        ],
      },
    ],
  },
  {
    slug: "desarrollo-sistema-nervioso",
    categoria: "biologia",
    parte: "Anatómica",
    titulo: "Desarrollo del sistema nervioso",
    resumen:
      "Origen embriológico del sistema nervioso: capas germinativas, neurulación, y los procesos de proliferación, migración, diferenciación, crecimiento, sinaptogénesis, poda neural y mielinización.",
    mapaConceptual: {
      label: "Desarrollo del SN",
      children: [
        { label: "Origen embriológico", children: [{ label: "Capas germinativas" }, { label: "Neurulación" }] },
        {
          label: "Procesos posteriores",
          children: [
            { label: "Proliferación" },
            { label: "Migración" },
            { label: "Agrupación" },
            { label: "Diferenciación" },
            { label: "Crecimiento" },
            { label: "Sinaptogénesis" },
            { label: "Poda neural" },
            { label: "Mielinización" },
          ],
        },
      ],
    },
    secciones: [
      {
        titulo: "Origen embriológico",
        contenido: [
          "En el embrión de los vertebrados, el tejido que se transforma en el SNC puede verse como un tubo repleto de líquido (tubo neural).",
          "Fertilización → Gastrulación. Durante la gastrulación, el embrión forma tres capas germinativas: Ectodermo (capa superficial, dará origen al sistema nervioso y a la piel), Mesodermo (capa del medio, formará músculos, huesos y el sistema circulatorio) y Endodermo (capa interna, dará lugar a órganos internos, hígado o intestino).",
          "Neurulación: la placa neural al principio es recta, luego comienza a plegarse hasta formar el tubo neural. El tubo neural debe cerrarse correctamente para dar lugar a un sistema nervioso saludable.",
        ],
      },
      {
        titulo: "Procesos posteriores a la formación del tubo neural",
        contenido: [
          "Proliferación: formación de neuronas y glías del sistema nervioso; su cantidad aumenta extraordinariamente, no se produce de modo simultáneo en todas las partes del tubo.",
          "Migración: traslado de células a su destino apropiado. Las células todavía están inmaduras, carecen de axón y dendritas. Se divide en dos tipos: Radial y Tangencial.",
          "Agrupación: se forman las estructuras/redes neuronales. Ej: las neuronas de la corteza se agrupan formando las seis capas diferentes que la componen.",
          "Diferenciación.",
          "Crecimiento: la célula empieza a madurar, se desarrollan los axones y las dendritas.",
          "Sinaptogénesis.",
          "Muerte neuronal: poda neural, proceso mediante el cual se destruyen los axones y dendritas de las sinapsis neuronales. Aumenta la eficiencia de las transmisiones sinápticas: se pulen las conexiones y se consolidan solamente las necesarias para llevar a cabo los procesos cognitivos, eliminando las no necesarias.",
          "Mielinización: formación de la vaina de mielina alrededor de los axones de las neuronas, lo que permite una transmisión más rápida de los impulsos nerviosos. Este proceso empieza en la médula espinal y progresa hacia el encéfalo.",
        ],
      },
    ],
  },
];
