// QGIS MASTER LAB — contenido didáctico
// Desarrollado por IBQ Luis Manuel. Verifique versión y rutas en la documentación oficial antes de ejecutar en producción.
const courseData = {
  "title": "QGIS MASTER LAB",
  "author": "Desarrollado por IBQ Luis Manuel",
  "version": "1.0.0",
  "referenceVersion": "QGIS 3.44 LTR (referencia didáctica; comprobar versión vigente en el sitio oficial)",
  "updated": "2026-10-12",
  "modules": [
    {
      "id": "M0",
      "title": "Bienvenida y orientación",
      "lessons": [
        {
          "id": "L0_1",
          "title": "Qué es un SIG y cómo piensa un analista ambiental",
          "level": "Principiante absoluto",
          "time": "30",
          "objectives": [
            "Explicar qué hace un Sistema de Información Geográfica y distinguirlo de un simple visor o programa de dibujo.",
            "Relacionar geometría, atributos, coordenadas y operaciones espaciales.",
            "Traducir una pregunta ambiental en una pregunta que pueda responderse con datos."
          ],
          "prerequisites": "Ninguno. Esta lección establece el vocabulario que se usará durante toda la academia.",
          "conceptual": "Un Sistema de Información Geográfica (SIG) es un conjunto de datos, métodos, software, equipos y personas para capturar, administrar, analizar y comunicar información vinculada a una ubicación. QGIS es una aplicación SIG de escritorio de código abierto; no es por sí mismo un sistema gestor de bases de datos, aunque puede conectarse a bases de datos como PostgreSQL/PostGIS y trabajar con formatos como GeoPackage.\n\nUn objeto espacial combina una geometría —punto, línea, polígono o celda ráster— con atributos descriptivos. Un pozo puede ser un punto con campos de profundidad, uso y concentración de nitratos; un tramo de río, una línea con caudal o DBO; una microcuenca, un polígono con superficie y uso del suelo. La ubicación permite formular consultas que una tabla sin coordenadas no puede responder por sí sola.\n\nEl análisis SIG no convierte automáticamente datos incompletos en evidencia. El resultado depende de la calidad, fecha, escala, resolución, sistema de coordenadas y método utilizado. Una superposición puede mostrar proximidad espacial, pero no demuestra causalidad ni incumplimiento normativo sin datos y criterios adicionales.",
          "terminology": "SIG; capa; entidad; geometría; atributo; coordenada; vector; ráster; análisis espacial; metadatos.",
          "toolPath": "Conceptual: no se requiere una herramienta específica. En QGIS Desktop, la idea se concreta mediante el panel Capas, la tabla de atributos y la Caja de herramientas de Procesos.",
          "macOsDiff": "En macOS, QGIS se abre desde Aplicaciones o Launchpad. Los nombres de menús pueden variar ligeramente según idioma y versión; verifica el menú real en la instalación.",
          "winDiff": "En Windows, abre QGIS desde el menú Inicio. El instalador y la ubicación pueden variar según se use el instalador independiente o el gestor OSGeo4W.",
          "steps": [
            "Formula una pregunta concreta: por ejemplo, “¿qué pozos están a menos de 500 m de un cauce?”. Identifica qué datos necesitarías para contestarla.",
            "Separa la pregunta en entidades: pozos (puntos), cauces (líneas) y distancia (operación espacial).",
            "Enumera los atributos necesarios: identificador, fecha, tipo de pozo, fuente de los datos y coordenadas.",
            "Define la unidad espacial y temporal: municipio, cuenca o zona de estudio; fecha de los registros.",
            "Distingue el resultado descriptivo (“está cerca”) de una inferencia causal (“el cauce contaminó el pozo”), que exige evidencia adicional.",
            "Abre un proyecto vacío y localiza el panel Capas, el lienzo del mapa, el panel Navegador y la Caja de herramientas de Procesos.",
            "Guarda el proyecto con un nombre descriptivo; el proyecto guarda la configuración del trabajo, no necesariamente copia todos los archivos fuente.",
            "Registra las fuentes y limitaciones de los datos antes de producir un mapa o una conclusión."
          ],
          "parameters": "No aplica en esta primera lección. Para una pregunta real, define entidad, atributo, escala, fecha, sistema de coordenadas y método de análisis antes de ejecutar herramientas.",
          "expectedResult": "Un esquema de trabajo donde la pregunta ambiental se traduce en capas, atributos, análisis y un resultado verificable.",
          "verification": "Puedes explicar por qué un SIG es más que un mapa, identificar la geometría y atributos de tres entidades ambientales y mencionar al menos dos limitaciones de los datos.",
          "errors": [
            {
              "issue": "Confundir QGIS con un gestor de bases de datos.",
              "fix": "QGIS es una aplicación SIG de escritorio que puede conectarse a distintos gestores y formatos; no sustituye por sí solo a PostgreSQL/PostGIS."
            },
            {
              "issue": "Interpretar proximidad como causalidad.",
              "fix": "Describe el resultado espacial con cautela y busca evidencia temporal, hidrológica, química o documental antes de inferir causa."
            },
            {
              "issue": "Crear un mapa sin documentar la fuente.",
              "fix": "Conserva procedencia, fecha, escala, responsable, método y limitaciones."
            }
          ],
          "quiz": {
            "question": "¿Qué describe mejor el papel de QGIS?",
            "options": [
              "Es exclusivamente un programa para dibujar mapas.",
              "Es una aplicación SIG que permite visualizar, administrar y analizar datos geoespaciales.",
              "Es un sistema de coordenadas y una base de datos al mismo tiempo."
            ],
            "correct": 1,
            "explanation": "QGIS es una aplicación SIG de escritorio. Puede trabajar con diversos formatos y conectarse a bases de datos, pero no debe confundirse con un sistema de referencia ni con un DBMS."
          },
          "sources": [
            {
              "title": "QGIS User Guide",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/introduction/index.html"
            },
            {
              "title": "QGIS — sitio oficial y descargas",
              "url": "https://qgis.org/download/"
            }
          ],
          "case": "Quejas por descargas de aguas residuales: el SIG puede cruzar puntos de descarga, cauces y sitios de muestreo. El cruce sirve para priorizar visitas, pero por sí solo no prueba que una descarga cause una concentración observada.",
          "practice": "Escribe una pregunta ambiental que te interese estudiar y crea una tabla con: fenómeno, geometría, atributos mínimos, escala, fecha, fuente y decisión que podría apoyar."
        }
      ]
    },
    {
      "id": "M1",
      "title": "Fundamentos de los SIG",
      "lessons": [
        {
          "id": "L1_1",
          "title": "Modelos vectorial y ráster, escala y topología",
          "level": "Principiante",
          "time": "35",
          "objectives": [
            "Diferenciar datos vectoriales y ráster según la forma de representar la realidad.",
            "Explicar resolución espacial, escala cartográfica y error geométrico.",
            "Reconocer relaciones topológicas básicas y sus consecuencias en el análisis."
          ],
          "prerequisites": "Lección L0_1.",
          "conceptual": "El modelo vectorial representa entidades discretas mediante puntos, líneas y polígonos. Es apropiado para pozos, estaciones de monitoreo, cauces, parcelas, límites y polígonos de uso del suelo. Cada entidad suele tener una fila de atributos. El modelo ráster divide el espacio en celdas; cada celda almacena un valor, por ejemplo elevación, temperatura, precipitación o reflectancia. La elección depende de cómo se conceptualiza el fenómeno, no solo de la extensión del archivo.\n\nLa resolución ráster es el tamaño del píxel en el terreno. Un píxel de 10 m representa un área de 100 m², pero no implica que el valor sea exacto en cada punto de esa área. La escala cartográfica expresa la relación entre distancia en el mapa y distancia real; no debe confundirse con resolución. Un mapa a escala 1:10 000 suele mostrar más detalle que uno a 1:250 000, siempre que los datos fuente lo permitan.\n\nLa topología describe relaciones como conectividad, adyacencia, contención y ausencia de solapes o huecos no deseados. Una red de drenaje desconectada puede alterar el cálculo de rutas; polígonos catastrales con huecos pueden sesgar áreas. No toda superposición es un error: debe juzgarse según la regla y el fenómeno representado.",
          "terminology": "Vector; ráster; píxel; resolución; escala; topología; conectividad; adyacencia; NoData.",
          "toolPath": "QGIS muestra capas vectoriales y ráster. Para revisar geometrías vectoriales, usa la Caja de herramientas de Procesos y busca herramientas de validez o comprobación de geometría.",
          "macOsDiff": "Las diferencias de sistema operativo no cambian el modelo de datos; cambian algunos atajos y detalles de interfaz.",
          "winDiff": "Las diferencias de sistema operativo no cambian el modelo de datos; cambian algunos atajos y detalles de interfaz.",
          "steps": [
            "Clasifica ejemplos: estación de muestreo (punto), cauce (línea), zona de protección (polígono), elevación (ráster).",
            "Comprueba las unidades de resolución de un ráster en sus propiedades; no asumas que todos los píxeles miden lo mismo en terreno si el CRS es geográfico.",
            "Compara el mismo territorio a dos escalas y anota qué elementos desaparecen o se generalizan.",
            "Abre una capa de polígonos y su tabla; confirma que cada entidad tiene atributos.",
            "Busca geometrías inválidas y revisa qué regla se está comprobando.",
            "Para una red hidrográfica, verifica si las líneas se conectan en las confluencias cuando el análisis depende de conectividad.",
            "Documenta si los huecos o solapes son esperados, por ejemplo cuando dos coberturas pueden coexistir.",
            "Elige el modelo más adecuado y justifica la decisión por el fenómeno, la resolución y el objetivo."
          ],
          "parameters": "Vector: tipo de geometría y campos. Ráster: tamaño de celda, CRS, extensión, tipo de dato y NoData. Topología: regla que se desea evaluar y tolerancia justificable.",
          "expectedResult": "Una decisión fundamentada sobre qué modelo usar y una lista de controles geométricos pertinentes.",
          "verification": "Puedes explicar por qué un ráster de 30 m no es equivalente a una medición exacta cada 30 m, y distinguir una geometría inválida de una relación topológica no deseada.",
          "errors": [
            {
              "issue": "Elegir ráster o vector solo por el tamaño del archivo.",
              "fix": "Elige según el fenómeno, el análisis y la resolución disponible."
            },
            {
              "issue": "Suponer que toda superposición de polígonos es un error.",
              "fix": "Define reglas topológicas propias del modelo de datos y del objetivo."
            },
            {
              "issue": "Interpretar más píxeles como más exactitud automática.",
              "fix": "La resolución no sustituye la exactitud posicional ni la calidad temática."
            }
          ],
          "quiz": {
            "question": "¿Qué modelo es normalmente más adecuado para representar una superficie continua de elevación?",
            "options": [
              "Una capa de puntos sin interpolación.",
              "Un ráster con valores de elevación por celda.",
              "Una tabla sin coordenadas."
            ],
            "correct": 1,
            "explanation": "Un modelo ráster representa una variable continua mediante celdas; la idoneidad depende de la resolución, el origen y el propósito del análisis."
          },
          "sources": [
            {
              "title": "QGIS User Guide: datos ráster",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/working_with_raster/raster_properties.html"
            },
            {
              "title": "QGIS User Guide: geometría vectorial",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/working_with_vector/vector_properties.html"
            }
          ],
          "case": "Para evaluar cobertura vegetal, un ráster de NDVI puede representar variación espacial continua; los polígonos de predios o áreas naturales protegidas se representan mejor como vector.",
          "practice": "Prepara una tabla de 10 capas ambientales que podrías usar y asigna: vector/raster, geometría o resolución, atributos clave, escala y principal limitación."
        }
      ]
    },
    {
      "id": "M2",
      "title": "Instalación y entorno",
      "lessons": [
        {
          "id": "L2_1",
          "title": "Instalación segura en macOS y Windows",
          "level": "Principiante",
          "time": "30",
          "objectives": [
            "Localizar la descarga oficial de QGIS y elegir una versión compatible.",
            "Instalar y abrir QGIS sin desactivar indiscriminadamente protecciones del sistema.",
            "Comprobar versión, proveedor y funcionamiento básico."
          ],
          "prerequisites": "Equipo con permisos para instalar software y conexión a internet.",
          "conceptual": "La instalación debe partir del sitio oficial de QGIS o de un distribuidor reconocido. En la página oficial se muestran las versiones disponibles para cada sistema operativo; las etiquetas de versión cambian con el tiempo. En este curso conviene fijar una versión de referencia y anotar la versión instalada, porque nombres de algoritmos, proveedores y opciones pueden cambiar. La versión de soporte a largo plazo (LTR) prioriza mantenimiento y estabilidad, pero no garantiza que ningún complemento o flujo de trabajo cambie.\n\nEn macOS suele descargarse un paquete para macOS, que puede variar según arquitectura y requisitos de sistema. En Windows puede haber un instalador independiente y opciones del instalador OSGeo4W; no asumas una extensión concreta sin revisar la página actual. Evita descargar ejecutables de sitios de terceros. Si el sistema muestra una advertencia de seguridad, confirma la procedencia y la integridad del archivo; no ejecutes comandos que eliminen recursivamente atributos de seguridad como solución genérica.\n\nTras instalar, abre QGIS, registra la versión desde el menú de información de la aplicación y prueba un proyecto vacío. Instala complementos solo desde repositorios conocidos y revisa su compatibilidad. Para un curso reproducible, anota sistema operativo, versión de QGIS y proveedores de procesamiento disponibles.",
          "terminology": "LTR; versión estable; instalador; arquitectura; firma/notarización; complemento; proveedor de procesamiento.",
          "toolPath": "No aplica: esta lección describe instalación inicial y verificación del entorno.",
          "macOsDiff": "QGIS.org → Download → macOS. Selecciona el paquete que corresponda a tu equipo y sigue las instrucciones publicadas para esa versión.",
          "winDiff": "QGIS.org → Download → Windows. Selecciona el instalador disponible y sigue la guía oficial; el nombre/extensión del archivo puede cambiar.",
          "steps": [
            "Abre la página oficial de descargas y confirma que el dominio sea qgis.org.",
            "Lee los requisitos de sistema de la versión elegida antes de descargar.",
            "Descarga el paquete específico para tu sistema; no copies enlaces antiguos de tutoriales sin verificarlos.",
            "En macOS, abre el instalador descargado y sigue el flujo oficial. Si aparece una advertencia, verifica el origen del archivo y consulta las instrucciones de seguridad oficiales; no desactives protecciones a ciegas.",
            "En Windows, ejecuta el instalador oficial con permisos apropiados y conserva la configuración predeterminada si no tienes una necesidad concreta de cambiarla.",
            "Abre QGIS y registra el número de versión y sistema operativo.",
            "Abre la Caja de herramientas de Procesos y comprueba qué proveedores están disponibles.",
            "Crea y guarda un proyecto de prueba; reinicia QGIS y vuelve a abrirlo para confirmar que funciona."
          ],
          "parameters": "Versión exacta de QGIS; sistema operativo y arquitectura; proveedores activos; ruta de instalación; complementos instalados.",
          "expectedResult": "QGIS abre correctamente y la versión instalada queda documentada para reproducir las prácticas.",
          "verification": "La aplicación inicia, muestra su versión y permite abrir un proyecto nuevo y la Caja de herramientas de Procesos.",
          "errors": [
            {
              "issue": "Descargar desde un portal de software no oficial.",
              "fix": "Descarga desde QGIS.org o sigue los canales que el propio sitio oficial indique."
            },
            {
              "issue": "Desactivar Gatekeeper o antivirus para resolver cualquier advertencia.",
              "fix": "Verifica origen e integridad y consulta la guía oficial; no uses comandos de bypass como remedio genérico."
            },
            {
              "issue": "Asumir que el número de versión del tutorial coincide con el instalado.",
              "fix": "Comprueba versión y documenta diferencias antes de seguir rutas de menú o nombres de algoritmo."
            }
          ],
          "quiz": {
            "question": "Si el sistema operativo advierte sobre un instalador de QGIS, ¿qué debes hacer primero?",
            "options": [
              "Desactivar permanentemente la protección del sistema.",
              "Verificar que el archivo proviene del sitio oficial y seguir las instrucciones de seguridad documentadas.",
              "Descargar cualquier copia de un foro."
            ],
            "correct": 1,
            "explanation": "La procedencia y la integridad del instalador deben verificarse. No es recomendable desactivar indiscriminadamente las protecciones del sistema."
          },
          "sources": [
            {
              "title": "Descargas oficiales de QGIS",
              "url": "https://qgis.org/download/"
            },
            {
              "title": "Guía de instalación de QGIS",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/introduction/getting_started.html"
            }
          ],
          "case": "En un laboratorio ambiental, todos los integrantes deben anotar su versión de QGIS y proveedores para explicar por qué un algoritmo puede no aparecer igual en otro equipo.",
          "practice": "Crea un registro de instalación con sistema operativo, versión, fecha de descarga, enlace oficial y proveedores de procesamiento visibles."
        },
        {
          "id": "L2_2",
          "title": "Perfiles, complementos y entorno reproducible",
          "level": "Principiante–intermedio",
          "time": "30",
          "objectives": [
            "Entender qué guarda un perfil de usuario de QGIS.",
            "Instalar y administrar complementos con criterio de compatibilidad y seguridad.",
            "Preparar un entorno reproducible para un proyecto ambiental."
          ],
          "prerequisites": "QGIS instalado y abierto.",
          "conceptual": "QGIS permite separar configuraciones mediante perfiles: paneles, preferencias y parte del entorno de usuario pueden variar entre perfiles. Un perfil limpio ayuda a diagnosticar conflictos, pero no reemplaza una copia de seguridad de datos y proyectos. Los complementos amplían funciones, aunque son software de terceros en muchos casos; revisa su descripción, mantenimiento, compatibilidad y permisos antes de instalarlos.\n\nUn flujo reproducible debe distinguir archivos de datos, proyecto, complementos, estilos, modelos y documentación. Un proyecto .qgz guarda el estado del proyecto y puede incluir algunos recursos, pero normalmente referencia fuentes externas. Por eso, copiar solo el archivo de proyecto no garantiza que otra persona tenga las capas. Para compartir, conserva una estructura de carpetas clara y usa rutas relativas cuando sea apropiado.\n\nEvita instalar muchos complementos “por si acaso”. Añade solo lo necesario y registra sus versiones. Si QGIS se comporta de manera extraña, prueba un perfil temporal antes de borrar configuraciones; así puedes comparar el entorno original y el limpio sin perder preferencias.",
          "terminology": "Perfil; complemento; repositorio; dependencia; ruta relativa; reproducibilidad; entorno.",
          "toolPath": "Preferencias/Configuración → Perfiles de usuario y Complementos; la ubicación exacta del menú puede variar por versión e idioma.",
          "macOsDiff": "Preferencias/Configuración → Perfiles de usuario y Complementos; la ubicación exacta del menú puede variar por versión e idioma.",
          "winDiff": "En Windows, los perfiles se administran desde la misma función de QGIS; la ruta física de configuración es distinta a la de macOS.",
          "steps": [
            "Abre el administrador de perfiles desde el menú de configuración/preferencias y observa el perfil activo.",
            "Crea un perfil de prueba con un nombre descriptivo, sin modificar el perfil principal.",
            "Reinicia QGIS con el perfil de prueba y comprueba si conserva una configuración independiente.",
            "Abre el administrador de complementos y busca uno por nombre o función.",
            "Antes de instalar, revisa descripción, autor, fecha de actualización, compatibilidad y fuente.",
            "Instala solo el complemento requerido para una práctica y confirma que aparece en el menú o barra correspondiente.",
            "Registra versión de QGIS, nombre y versión del complemento.",
            "Vuelve al perfil principal y verifica que el proyecto y sus datos siguen accesibles."
          ],
          "parameters": "Perfil activo; nombre y versión del complemento; origen del repositorio; dependencias; configuración que se desea reproducir.",
          "expectedResult": "Un perfil de prueba funcional y un inventario mínimo del entorno usado en la academia.",
          "verification": "Puedes cambiar de perfil, localizar un complemento instalado y explicar qué archivos deben acompañar a un proyecto para compartirlo.",
          "errors": [
            {
              "issue": "Instalar complementos sin revisar mantenimiento.",
              "fix": "Evalúa compatibilidad, procedencia y necesidad; elimina complementos no utilizados."
            },
            {
              "issue": "Confundir el perfil con una copia de seguridad del proyecto.",
              "fix": "Respalda por separado proyecto, datos, estilos, modelos y documentos."
            },
            {
              "issue": "Compartir únicamente el .qgz.",
              "fix": "Incluye las fuentes o documenta cómo acceder a ellas; verifica rutas en otro equipo."
            }
          ],
          "quiz": {
            "question": "¿Cuál es la mejor práctica al instalar un complemento?",
            "options": [
              "Instalar todos los resultados de búsqueda.",
              "Revisar compatibilidad, mantenimiento, procedencia y necesidad antes de instalarlo.",
              "Asumir que todos los complementos vienen mantenidos por el equipo central de QGIS."
            ],
            "correct": 1,
            "explanation": "Los complementos tienen ciclos de mantenimiento y compatibilidad distintos; deben evaluarse antes de incorporarlos a un flujo reproducible."
          },
          "sources": [
            {
              "title": "QGIS User Guide",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/introduction/qgis_configuration.html"
            },
            {
              "title": "Repositorio de complementos de QGIS",
              "url": "https://plugins.qgis.org/"
            }
          ],
          "case": "Un proyecto institucional que depende de un complemento abandonado puede dejar de ser reproducible al actualizar QGIS; documentar dependencias permite anticipar ese riesgo.",
          "practice": "Anota los complementos imprescindibles para tu proyecto y escribe un plan de contingencia si uno deja de funcionar."
        }
      ]
    },
    {
      "id": "M3",
      "title": "Interfaz y proyectos",
      "lessons": [
        {
          "id": "L3_1",
          "title": "Interfaz, paneles, selección y navegación",
          "level": "Principiante",
          "time": "35",
          "objectives": [
            "Identificar lienzo, panel Capas, Navegador, tabla de atributos y Caja de herramientas.",
            "Controlar la visibilidad, orden y selección de capas.",
            "Usar búsqueda y propiedades para diagnosticar una capa."
          ],
          "prerequisites": "QGIS instalado.",
          "conceptual": "El lienzo del mapa muestra la representación visual; el panel Capas controla orden, visibilidad y selección de capas; el Navegador permite localizar fuentes; la tabla de atributos presenta registros; las propiedades contienen información, simbología, etiquetas, fuentes y metadatos. La Caja de herramientas de Procesos reúne algoritmos de QGIS y proveedores adicionales.\n\nEl orden de las capas importa: las capas superiores pueden ocultar las inferiores. El ojo controla visibilidad, no existencia. La selección de entidades tampoco equivale a un filtro permanente: una selección resalta registros temporalmente, mientras que un filtro define qué entidades se muestran según una condición. Antes de ejecutar un proceso, comprueba qué capa está activa y cuál se eligió explícitamente como entrada.\n\nLa interfaz es configurable. Si falta un panel, busca la opción correspondiente en el menú Ver/Paneles antes de asumir que la función desapareció. Las rutas de menú y atajos pueden variar entre versiones, idioma y sistema operativo; aprende el nombre de la función y confirma el atajo en tu instalación.",
          "terminology": "Lienzo; panel; capa activa; visibilidad; selección; filtro; extensión; escala de visualización.",
          "toolPath": "Ver → Paneles; clic derecho sobre la capa para abrir tabla o propiedades; Caja de herramientas de Procesos.",
          "macOsDiff": "Ver → Paneles; clic derecho sobre la capa para abrir tabla o propiedades; Caja de herramientas de Procesos.",
          "winDiff": "Windows: sigue la misma secuencia conceptual; comprueba los nombres reales de menús y proveedores en tu instalación de QGIS.",
          "steps": [
            "Carga una capa vectorial y otra ráster desde el Navegador o el administrador de fuentes.",
            "Activa y desactiva la visibilidad de cada capa para observar el efecto.",
            "Arrastra una capa arriba y abajo y explica por qué cambia lo que se ve.",
            "Abre la tabla de atributos y selecciona un registro; localiza su geometría en el lienzo.",
            "Distingue selección temporal de filtro: crea una selección y luego explora las opciones de filtro por expresión.",
            "Abre las propiedades de la capa y localiza fuente, CRS, geometría y extensión.",
            "Abre la Caja de herramientas y busca un algoritmo por nombre o función.",
            "Si desaparece un panel, restáuralo desde Ver/Panales en lugar de reinstalar QGIS."
          ],
          "parameters": "Comprueba capa de entrada, tipo de geometría, CRS y extensión antes de procesar. La selección y los filtros pueden cambiar qué entidades participan según el algoritmo y sus opciones.",
          "expectedResult": "Interfaz organizada y capacidad para encontrar información esencial de una capa sin recurrir a ensayo y error.",
          "verification": "Puedes localizar la fuente de una capa, abrir su tabla, cambiar visibilidad y encontrar un algoritmo desde la Caja de herramientas.",
          "errors": [
            {
              "issue": "Confundir capa seleccionada en el panel con entidad seleccionada en el mapa.",
              "fix": "Distingue selección de capa y selección de registros/entidades."
            },
            {
              "issue": "Ejecutar un algoritmo sobre una capa equivocada.",
              "fix": "Revisa explícitamente el parámetro de entrada en la ventana del algoritmo."
            },
            {
              "issue": "Creer que ocultar una capa la elimina.",
              "fix": "La visibilidad solo controla su dibujo en el lienzo."
            }
          ],
          "quiz": {
            "question": "¿Qué diferencia hay entre ocultar una capa y eliminarla del proyecto?",
            "options": [
              "No existe diferencia.",
              "Ocultarla desactiva su visualización; eliminarla la quita del proyecto, pero no necesariamente borra el archivo fuente.",
              "Ocultarla borra los datos originales."
            ],
            "correct": 1,
            "explanation": "La visibilidad controla el dibujo. Quitar una capa del proyecto no equivale a borrar su archivo fuente del disco."
          },
          "sources": [
            {
              "title": "QGIS User Guide: interfaz",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/introduction/qgis_gui.html"
            }
          ],
          "case": "En la revisión de puntos de descarga, mantener separadas las capas de quejas, cauces y límites municipales reduce el riesgo de editar o procesar la fuente equivocada.",
          "practice": "Abre un proyecto de prueba, reorganiza cuatro capas, identifica su fuente y anota cómo restaurarías tres paneles de la interfaz."
        },
        {
          "id": "L3_2",
          "title": "Proyectos, rutas y estructura de carpetas",
          "level": "Principiante–intermedio",
          "time": "35",
          "objectives": [
            "Distinguir proyecto QGIS y archivos fuente.",
            "Configurar una estructura de carpetas clara y rutas relativas cuando convenga.",
            "Detectar y reparar capas con fuentes no disponibles."
          ],
          "prerequisites": "Lección L3_1.",
          "conceptual": "El archivo de proyecto (.qgs o .qgz) almacena la organización del trabajo: capas, simbología, etiquetas, diseño y referencias a fuentes. El .qgz es un contenedor comprimido del proyecto y recursos asociados; no debe describirse como un archivo que siempre contiene exclusivamente referencias, ni como un paquete que automáticamente incluye todos los datos. La mayoría de los proyectos depende de archivos externos.\n\nUna estructura reproducible puede separar /datos_originales, /datos_procesados, /proyecto, /salidas, /estilos y /documentacion. Conserva los datos originales sin modificarlos y genera salidas en una carpeta distinta. Las rutas relativas pueden facilitar mover el conjunto completo, pero deben comprobarse cuando hay fuentes remotas o rutas mixtas.\n\nSi una capa aparece como no disponible, no la borres sin investigar. Revisa si cambió el nombre o la ubicación del archivo, si la unidad externa está conectada o si la fuente es una base de datos que requiere conexión. Una ruta rota es un problema de referencia, no necesariamente pérdida de los datos.",
          "terminology": ".qgs; .qgz; ruta absoluta; ruta relativa; fuente; datos originales; salida; respaldo.",
          "toolPath": "Proyecto → Propiedades y opciones de guardar; propiedades de capa para revisar fuente; diálogo de reparación de capas no disponibles.",
          "macOsDiff": "Proyecto → Propiedades y opciones de guardar; propiedades de capa para revisar fuente; diálogo de reparación de capas no disponibles.",
          "winDiff": "Windows: sigue la misma secuencia conceptual; comprueba los nombres reales de menús y proveedores en tu instalación de QGIS.",
          "steps": [
            "Crea una carpeta raíz del proyecto y subcarpetas para datos originales, procesados, salidas y documentación.",
            "Guarda el proyecto dentro de la carpeta de proyecto con un nombre que identifique área y fecha.",
            "Carga una fuente desde una subcarpeta y guarda el proyecto.",
            "Comprueba la ruta de la fuente en las propiedades de la capa.",
            "Cierra y vuelve a abrir el proyecto para comprobar que las referencias se mantienen.",
            "Copia la carpeta completa a otra ubicación de prueba y abre la copia; observa si las rutas siguen resolviendo.",
            "Si una capa falla, localiza el archivo original y repara la fuente desde el aviso o propiedades.",
            "Crea una copia de respaldo antes de hacer cambios estructurales importantes."
          ],
          "parameters": "Nombre y ubicación del proyecto; ruta de cada fuente; formato de datos; política de respaldo; uso de rutas relativas.",
          "expectedResult": "Proyecto organizado que vuelve a abrirse correctamente desde su carpeta y tiene identificadas sus dependencias.",
          "verification": "Cierra y vuelve a abrir el proyecto; verifica que no haya capas rotas y que las rutas apunten a la copia esperada.",
          "errors": [
            {
              "issue": "Pensar que guardar el proyecto guarda automáticamente los archivos fuente.",
              "fix": "Guarda y respalda las fuentes por separado salvo que hayas creado deliberadamente un paquete que las incluya."
            },
            {
              "issue": "Borrar una capa no disponible sin localizar su archivo.",
              "fix": "Investiga nombre, ruta, unidad externa y conexión antes de quitarla."
            },
            {
              "issue": "Mezclar originales y salidas.",
              "fix": "Mantén los originales intactos y documenta los productos derivados."
            }
          ],
          "quiz": {
            "question": "¿Qué almacena principalmente un proyecto QGIS?",
            "options": [
              "Siempre copia todos los datos geográficos dentro del proyecto.",
              "La configuración del proyecto y referencias a las fuentes, además de recursos que pueden estar incluidos.",
              "Solo una imagen estática del mapa."
            ],
            "correct": 1,
            "explanation": "El proyecto conserva estado, capas y configuración; las fuentes suelen permanecer en archivos o servicios externos."
          },
          "sources": [
            {
              "title": "QGIS User Guide: proyectos",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/introduction/project_files.html"
            }
          ],
          "case": "Para entregar un análisis a otra persona, un proyecto que abre sin errores es tan importante como una carpeta con datos, resultados y metadatos.",
          "practice": "Prepara una estructura de carpetas para un estudio de calidad del agua y crea una lista de los archivos que deben acompañar la entrega."
        }
      ]
    },
    {
      "id": "M4",
      "title": "Datos y formatos",
      "lessons": [
        {
          "id": "L4_1",
          "title": "Formatos geoespaciales: GeoPackage, Shapefile, GeoJSON y GeoTIFF",
          "level": "Principiante–intermedio",
          "time": "40",
          "objectives": [
            "Elegir un formato vectorial o ráster según los datos y el uso.",
            "Comprender limitaciones prácticas del Shapefile y ventajas de GeoPackage.",
            "Distinguir el archivo de datos de los metadatos y del proyecto."
          ],
          "prerequisites": "Lecciones L3_1 y L3_2.",
          "conceptual": "Un formato define cómo se codifican geometrías, atributos, sistemas de referencia y metadatos. El Shapefile es un conjunto de archivos relacionados —por ejemplo .shp, .shx, .dbf y .prj— y tiene restricciones de nombres de campo, tipos y tamaños. No basta con copiar solo el .shp. GeoPackage es un estándar OGC basado en SQLite que puede almacenar múltiples tablas y capas en un solo archivo; no es ilimitado, pero suele ser una opción robusta para proyectos de escritorio.\n\nGeoJSON es útil para intercambiar datos vectoriales y aplicaciones web, aunque puede ser voluminoso y las coordenadas suelen representarse en orden longitud-latitud bajo el estándar vigente. GeoTIFF es un formato común para ráster georreferenciado; revisa resolución, tipo de dato, CRS, NoData y compresión. CSV puede contener coordenadas, pero debe definirse qué campos representan X e Y y en qué CRS están.\n\nNo existe un único formato “oficial” que sirva para todo. Elige según interoperabilidad, tamaño, restricciones, atributos, necesidad de edición, análisis, intercambio y conservación. Antes de convertir, conserva el original y valida número de registros, campos, geometrías, CRS y valores después de la exportación.",
          "terminology": "GeoPackage; SQLite; Shapefile; GeoJSON; GeoTIFF; CSV; codificación UTF-8; NoData; interoperabilidad.",
          "toolPath": "Clic derecho en capa → Exportar → Guardar objetos como…; selecciona formato, CRS y ruta de salida.",
          "macOsDiff": "Clic derecho en capa → Exportar → Guardar objetos como…; selecciona formato, CRS y ruta de salida.",
          "winDiff": "Windows: sigue la misma secuencia conceptual; comprueba los nombres reales de menús y proveedores en tu instalación de QGIS.",
          "steps": [
            "Carga una capa y abre su tabla de atributos; anota número de entidades y campos.",
            "Usa Exportar → Guardar objetos como… para escribir una copia en GeoPackage.",
            "Define un nombre de archivo y un nombre de capa internos claros.",
            "Revisa el CRS de destino; no lo cambies solo por convertir el formato.",
            "Vuelve a cargar la capa exportada y compara registros, campos, geometría y extensión.",
            "Exporta una copia de intercambio a GeoJSON si el uso lo requiere; confirma orden y CRS de coordenadas.",
            "Para ráster, revisa resolución, tipo de dato, NoData y compresión al exportar a GeoTIFF.",
            "Documenta qué formato elegiste y por qué; conserva el original sin alterarlo."
          ],
          "parameters": "Formato de salida; nombre de capa; CRS; codificación; opción de incluir o no campos; compresión/tipo de dato para ráster.",
          "expectedResult": "Una capa exportada y validada que conserva los registros y atributos esperados.",
          "verification": "Compara recuento de entidades, campos, CRS, extensión, geometrías y algunos valores antes y después de exportar.",
          "errors": [
            {
              "issue": "Copiar solo el archivo .shp.",
              "fix": "Conserva los archivos asociados del Shapefile o exporta a un formato autocontenido."
            },
            {
              "issue": "Suponer que GeoPackage no tiene límites técnicos.",
              "fix": "Considera límites del sistema de archivos, SQLite, rendimiento y tamaño práctico."
            },
            {
              "issue": "Confundir conversión de formato con reproyección.",
              "fix": "El formato y el CRS son decisiones distintas; documenta ambos."
            }
          ],
          "quiz": {
            "question": "¿Cuál es una ventaja común de GeoPackage frente a Shapefile?",
            "options": [
              "Puede almacenar múltiples capas/tablas en un único archivo y admite campos más flexibles.",
              "No tiene ningún límite de tamaño o rendimiento.",
              "Siempre transforma los datos a metros."
            ],
            "correct": 0,
            "explanation": "GeoPackage es un contenedor SQLite normalizado por OGC que facilita almacenar varias capas en un archivo; sigue teniendo límites técnicos y prácticos."
          },
          "sources": [
            {
              "title": "OGC GeoPackage Standard",
              "url": "https://www.ogc.org/standard/geopackage/"
            },
            {
              "title": "GDAL/OGR Documentation",
              "url": "https://gdal.org/user/vector_data/"
            },
            {
              "title": "QGIS User Guide: exportación vectorial",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/working_with_vector/vector_properties.html"
            }
          ],
          "case": "Para inspecciones de campo, GeoPackage facilita mantener puntos, polígonos de influencia y tablas auxiliares en un archivo; para un producto web, GeoJSON puede ser más apropiado.",
          "practice": "Convierte una capa de prueba a GeoPackage y valida que conserva recuento, atributos, CRS y geometría. Escribe cuándo preferirías GeoJSON o GeoTIFF."
        },
        {
          "id": "L4_2",
          "title": "Carga de datos, tablas CSV, servicios WMS/WFS y metadatos",
          "level": "Intermedio",
          "time": "40",
          "objectives": [
            "Cargar capas locales y tablas con coordenadas sin intercambiar X e Y.",
            "Distinguir servicios WMS y WFS.",
            "Documentar origen, fecha, escala y limitaciones de las fuentes."
          ],
          "prerequisites": "Lección L4_1.",
          "conceptual": "Los datos pueden venir de archivos locales, bases de datos o servicios web. Un CSV con coordenadas no es espacial hasta que se indica qué columnas son X e Y y el sistema de referencia de esas coordenadas. En muchos conjuntos geográficos, X corresponde a longitud/Este y Y a latitud/Norte, pero debes leer los metadatos, no inferirlo por el nombre de campo. Una inversión X/Y puede colocar puntos en otro continente o producir ubicaciones inválidas.\n\nWMS sirve imágenes de mapas renderizados por un servidor; es útil para contexto visual, pero normalmente no permite consultar todos los atributos originales como si fuera una capa vectorial local. WFS ofrece entidades vectoriales, según la versión y capacidades del servicio. La disponibilidad, licencia, límites y vigencia dependen del proveedor. Los servicios pueden fallar por red, certificados, límites de solicitudes o cambios en endpoint.\n\nLos metadatos registran quién produjo los datos, cuándo, con qué método, escala/resolución, sistema de coordenadas, licencia, restricciones y calidad. Un dato oficial no es necesariamente adecuado para cualquier escala o fecha. Conserva URL y fecha de consulta, y distingue los datos descargados de los servicios consultados en vivo.",
          "terminology": "CSV; delimitador; decimal; X/Y; WMS; WFS; endpoint; metadatos; licencia; fecha de consulta.",
          "toolPath": "Administrador de fuentes de datos → Texto delimitado para CSV; Navegador → WMS/WMTS o WFS según servicio.",
          "macOsDiff": "Administrador de fuentes de datos → Texto delimitado para CSV; Navegador → WMS/WMTS o WFS según servicio.",
          "winDiff": "Windows: sigue la misma secuencia conceptual; comprueba los nombres reales de menús y proveedores en tu instalación de QGIS.",
          "steps": [
            "Abre un CSV de ejemplo y revisa separador, codificación y separador decimal.",
            "Identifica columnas X e Y y consulta el CRS documentado; no lo adivines por los valores.",
            "Carga el CSV como texto delimitado y comprueba si los puntos caen en el área esperada.",
            "Si los puntos aparecen lejos, revisa orden X/Y, grados frente a metros y CRS asignado.",
            "Añade un servicio WMS desde su URL oficial y selecciona una capa disponible.",
            "Si necesitas geometrías y atributos, comprueba si el proveedor ofrece WFS o descarga vectorial.",
            "Lee las condiciones de uso, fecha, escala y límites del servicio.",
            "Guarda en metadatos del proyecto la fuente, fecha de consulta, licencia y limitaciones."
          ],
          "parameters": "CSV: X, Y, delimitador, codificación y CRS. WMS/WFS: URL, capas, versión/protocolo, autenticación y disponibilidad.",
          "expectedResult": "Puntos cargados en ubicación plausible y una fuente web documentada con su alcance y limitaciones.",
          "verification": "Compara ubicación con una referencia conocida, abre la tabla y comprueba si el servicio entrega imagen o entidades vectoriales.",
          "errors": [
            {
              "issue": "Asignar EPSG:4326 a cualquier CSV con dos columnas numéricas.",
              "fix": "Confirma el sistema de referencia de origen con la documentación del proveedor."
            },
            {
              "issue": "Tratar WMS como una tabla de datos editable.",
              "fix": "WMS entrega representaciones cartográficas; busca WFS o datos descargables para análisis de entidades."
            },
            {
              "issue": "No guardar fecha ni licencia.",
              "fix": "Registra URL, fecha, licencia, responsable y condiciones de reutilización."
            }
          ],
          "quiz": {
            "question": "¿Qué diferencia describe mejor WMS y WFS?",
            "options": [
              "WMS suele entregar mapas renderizados; WFS puede entregar entidades vectoriales.",
              "WMS es siempre más preciso que WFS.",
              "Ambos son formatos de archivo local sin conexión."
            ],
            "correct": 0,
            "explanation": "WMS se orienta a imágenes de mapas; WFS a entidades geográficas, sujeto a las capacidades del servicio."
          },
          "sources": [
            {
              "title": "QGIS User Guide: fuentes de datos",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/managing_data_source/opening_data.html"
            },
            {
              "title": "OGC Web Map Service",
              "url": "https://www.ogc.org/standard/wms/"
            },
            {
              "title": "OGC API Features",
              "url": "https://www.ogc.org/standard/ogcapi-features/"
            }
          ],
          "case": "Un mapa base WMS puede ayudar a orientar una visita, pero una delimitación legal o un cálculo de área debe sustentarse en la fuente y escala apropiadas, no solo en una imagen de referencia.",
          "practice": "Carga un CSV con coordenadas conocidas y documenta qué comprobarías antes de utilizar un servicio WMS o WFS en un informe oficial."
        }
      ]
    },
    {
      "id": "M5",
      "title": "Coordenadas y mediciones",
      "lessons": [
        {
          "id": "L5_1",
          "title": "CRS, datum, EPSG y transformación de coordenadas",
          "level": "Intermedio",
          "time": "45",
          "objectives": [
            "Distinguir CRS geográfico, proyectado y sistema vertical.",
            "Interpretar códigos EPSG sin confundir datum con proyección.",
            "Asignar el CRS correcto de origen y reproyectar cuando corresponda."
          ],
          "prerequisites": "Lecciones L4_1 y L4_2.",
          "conceptual": "Un sistema de referencia de coordenadas (CRS) define cómo se relacionan las coordenadas con la Tierra. Un CRS geográfico expresa posiciones angulares, normalmente longitud y latitud; uno proyectado transforma una superficie curva a un plano y suele usar unidades lineales. Un datum o marco de referencia describe la relación con la Tierra; una proyección es la operación matemática para representar coordenadas planas. No son sinónimos.\n\nEPSG:4326 identifica el CRS geográfico 2D asociado a WGS 84, pero “WGS 84” no significa siempre EPSG:4326: existen CRS proyectados basados en WGS 84 y distintas realizaciones/épocas. Para medir distancias y áreas en una zona local suele convenir un CRS proyectado adecuado a la región y al propósito. En México, las zonas UTM dependen de la longitud; no selecciones una zona solo por el país.\n\nAsignar CRS cambia la interpretación de las coordenadas existentes; reproyectar calcula nuevas coordenadas en otro CRS. Si asignas un CRS equivocado, la capa puede desplazarse. Si reproyectas, conserva la fuente y elige la transformación sugerida por QGIS/PROJ según el área, precisión y disponibilidad de rejillas. Para un trabajo oficial, documenta CRS de origen y destino y transformación utilizada.",
          "terminology": "CRS; datum; marco de referencia; proyección; EPSG; UTM; coordenadas angulares; coordenadas lineales; transformación.",
          "toolPath": "Propiedades de capa → Fuente/Información; clic derecho → Exportar → Guardar objetos como… para reproyectar la salida.",
          "macOsDiff": "Propiedades de capa → Fuente/Información; clic derecho → Exportar → Guardar objetos como… para reproyectar la salida.",
          "winDiff": "Windows: sigue la misma secuencia conceptual; comprueba los nombres reales de menús y proveedores en tu instalación de QGIS.",
          "steps": [
            "Abre las propiedades de una capa y registra su CRS de origen.",
            "Revisa la extensión y las unidades de las coordenadas para comprobar si son plausibles.",
            "Distingue el CRS de la capa del CRS del proyecto; QGIS puede reproyectar al vuelo para visualización.",
            "Si la capa no tiene CRS conocido, busca metadatos del productor antes de asignarlo.",
            "Usa Asignar CRS solo cuando conoces el sistema correcto de las coordenadas existentes.",
            "Para reproyectar, exporta a un nuevo archivo y selecciona un CRS de destino apropiado.",
            "Revisa la transformación de datum propuesta por QGIS/PROJ y documenta la elección si la precisión importa.",
            "Compara la ubicación con una referencia fiable y conserva la capa original."
          ],
          "parameters": "CRS de origen; CRS del proyecto; CRS de destino; área de uso; unidades; transformación geodésica y rejillas disponibles.",
          "expectedResult": "Una capa correctamente interpretada y, cuando procede, una nueva capa reproyectada con metadatos claros.",
          "verification": "Comprueba ubicación, unidades, extensión, CRS en propiedades y si la operación fue asignar o reproyectar.",
          "errors": [
            {
              "issue": "Cambiar el CRS del proyecto pensando que cambia las coordenadas fuente.",
              "fix": "El CRS del proyecto controla la visualización; exporta/reproyecta la capa para crear nuevas coordenadas."
            },
            {
              "issue": "Asignar EPSG:4326 a una capa sin conocer su origen.",
              "fix": "Localiza metadatos del productor; asignar mal el CRS desplaza la capa."
            },
            {
              "issue": "Usar una zona UTM lejana al área de estudio.",
              "fix": "Selecciona CRS por área de uso, distorsión tolerable y finalidad del análisis."
            }
          ],
          "quiz": {
            "question": "¿Qué hace “Asignar CRS” a una capa?",
            "options": [
              "Calcula nuevas coordenadas en otro sistema.",
              "Interpreta las coordenadas existentes bajo un CRS; no las transforma.",
              "Repara todas las geometrías."
            ],
            "correct": 1,
            "explanation": "Asignar un CRS define cómo se interpretan las coordenadas ya almacenadas; reproyectar calcula coordenadas nuevas."
          },
          "sources": [
            {
              "title": "QGIS User Guide: proyecciones",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/working_with_projections/working_with_projections.html"
            },
            {
              "title": "PROJ Documentation",
              "url": "https://proj.org/"
            }
          ],
          "case": "Una capa de pozos en grados no debe tratarse como si sus coordenadas fueran metros. Para un buffer de 500 m, verifica CRS y unidades antes de ejecutar el algoritmo.",
          "practice": "Elige un CRS apropiado para tu municipio o cuenca y justifica su área de uso, unidades, distorsión esperada y finalidad."
        },
        {
          "id": "L5_2",
          "title": "Mediciones, áreas, distancias y unidades",
          "level": "Intermedio",
          "time": "40",
          "objectives": [
            "Diferenciar medición elipsoidal y planar.",
            "Calcular áreas y distancias con unidades coherentes.",
            "Evitar errores por CRS, geometría y configuración del elipsoide."
          ],
          "prerequisites": "Lección L5_1.",
          "conceptual": "Las áreas y distancias no son independientes del sistema de coordenadas y de la configuración de medición. En un CRS geográfico las coordenadas se expresan en grados, por lo que una distancia euclidiana directa entre longitud y latitud no representa metros. QGIS ofrece mediciones que pueden considerar un elipsoide y la configuración del proyecto, mientras que muchos algoritmos de procesamiento operan en las unidades del CRS de entrada o documentan cómo manejan la medición. Revisa la ayuda del algoritmo específico.\n\nPara análisis local, un CRS proyectado apropiado en metros suele simplificar buffers y cálculos planares. La elección depende de la extensión y precisión requerida. La calculadora de campos ofrece expresiones como $area y $length; el valor resultante depende del contexto de medición, CRS y elipsoide configurado. Un campo calculado ordinario no necesariamente se actualiza automáticamente al cambiar la geometría; puede requerir recálculo o un campo virtual/expresión dinámica.\n\nAntes de reportar hectáreas, verifica que el área está en metros cuadrados y divide entre 10 000 únicamente si esa unidad es correcta. No confundas precisión numérica con exactitud: mostrar seis decimales no vuelve exacta una delimitación de origen incierto.",
          "terminology": "Área planar; área elipsoidal; $area; $length; hectárea; metro cuadrado; elipsoide; unidades.",
          "toolPath": "Propiedades del proyecto para CRS/elipsoide; calculadora de campos; herramienta de medición; revisar documentación del algoritmo de procesamiento.",
          "macOsDiff": "Propiedades del proyecto para CRS/elipsoide; calculadora de campos; herramienta de medición; revisar documentación del algoritmo de procesamiento.",
          "winDiff": "Windows: sigue la misma secuencia conceptual; comprueba los nombres reales de menús y proveedores en tu instalación de QGIS.",
          "steps": [
            "Comprueba el CRS y las unidades de la capa que medirás.",
            "Abre las propiedades del proyecto y revisa el elipsoide y las unidades de medición.",
            "Mide una distancia conocida con la herramienta de medición y compárala con la unidad esperada.",
            "Abre la calculadora de campos y crea un campo decimal para un área de prueba.",
            "Usa una expresión adecuada, como $area, y confirma el comportamiento de medición en tu configuración.",
            "Convierte a hectáreas solo si el resultado está expresado en m²; documenta la fórmula usada.",
            "Modifica una geometría de prueba y comprueba si el campo ordinario cambia o necesita recalcularse.",
            "Registra método, CRS, elipsoide, unidades y precisión significativa en el informe."
          ],
          "parameters": "CRS y unidades; elipsoide; tipo y precisión del campo; expresión; unidad final; recalculado o virtual.",
          "expectedResult": "Valores de área y distancia con unidades conocidas y método de cálculo documentado.",
          "verification": "Prueba con un polígono de dimensiones conocidas en un CRS proyectado apropiado; contrasta unidades y orden de magnitud.",
          "errors": [
            {
              "issue": "Dividir $area entre 10 000 sin comprobar unidades.",
              "fix": "Confirma que el área está en m² antes de convertir a hectáreas."
            },
            {
              "issue": "Asumir que $area siempre significa área planar.",
              "fix": "Revisa CRS, elipsoide y contexto de medición en QGIS."
            },
            {
              "issue": "Creer que un campo calculado se actualiza siempre.",
              "fix": "Usa campo virtual o vuelve a calcular el campo almacenado después de editar geometrías."
            }
          ],
          "quiz": {
            "question": "¿Qué debes comprobar antes de convertir un área a hectáreas mediante división entre 10 000?",
            "options": [
              "Que el valor de entrada esté expresado en metros cuadrados.",
              "Que la capa tenga muchos decimales.",
              "Que el proyecto tenga un mapa base."
            ],
            "correct": 0,
            "explanation": "Una hectárea equivale a 10 000 m²; la conversión solo es correcta si la unidad de entrada está confirmada."
          },
          "sources": [
            {
              "title": "QGIS User Guide: calculadora de campos",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/working_with_vector/attribute_table.html"
            },
            {
              "title": "QGIS User Guide: proyecciones y medición",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/working_with_projections/working_with_projections.html"
            }
          ],
          "case": "Para cuantificar una zona de influencia de cauce, reporta área en hectáreas junto con el CRS, método de delimitación y fuente; evita sugerir una precisión mayor que la de los datos.",
          "practice": "Calcula un área de prueba en m² y hectáreas, registra el CRS/elipsoide y describe cómo comprobarías si el valor se actualiza tras editar el polígono."
        }
      ]
    },
    {
      "id": "M6",
      "title": "Edición y atributos",
      "lessons": [
        {
          "id": "L6_1",
          "title": "Edición vectorial, digitalización y ajuste (snapping)",
          "level": "Intermedio",
          "time": "45",
          "objectives": [
            "Crear y editar puntos, líneas y polígonos con atributos.",
            "Configurar ajuste para conectar entidades sin introducir errores.",
            "Guardar ediciones y validar geometrías antes de continuar."
          ],
          "prerequisites": "Capas vectoriales editables y CRS adecuado.",
          "conceptual": "La digitalización transforma información observada en geometrías vectoriales. Antes de editar, confirma que la capa permite edición, que su fuente es la correcta y que existe una copia de seguridad. Los polígonos deben cerrar sus anillos; líneas de una red pueden necesitar extremos coincidentes. La tolerancia de ajuste (snapping) determina qué tan cerca debe estar el cursor de un vértice o segmento para engancharse. Puede definirse en píxeles o unidades del mapa; una tolerancia excesiva puede enganchar a la entidad equivocada.\n\nEl ajuste debe configurarse por capa y tipo de objetivo según la tarea. Para una red hidrográfica, puede ser importante que los tramos conecten en confluencias; para límites administrativos, quizá se requiera coincidencia exacta de bordes. La herramienta de vértices permite mover, insertar o eliminar vértices, pero cada cambio debe respetar el significado de la geometría.\n\nGuardar ediciones y guardar el proyecto son acciones distintas. Guardar ediciones escribe cambios en la fuente de datos; guardar proyecto conserva configuración y referencias. El procesamiento no implica automáticamente corrupción por estar en modo edición, pero es prudente terminar o guardar las ediciones antes de operaciones que dependan de esa capa y verificar el resultado.",
          "terminology": "Digitalización; edición; vértice; segmento; snapping; tolerancia; topología; anillo; edición pendiente.",
          "toolPath": "Activa edición desde la barra de digitalización; configura el ajuste desde Proyecto → Opciones de ajuste o la herramienta equivalente de la versión instalada.",
          "macOsDiff": "Activa edición desde la barra de digitalización; configura el ajuste desde Proyecto → Opciones de ajuste o la herramienta equivalente de la versión instalada.",
          "winDiff": "Windows: sigue la misma secuencia conceptual; comprueba los nombres reales de menús y proveedores en tu instalación de QGIS.",
          "steps": [
            "Crea una copia editable de la capa de práctica y confirma el formato de salida.",
            "Activa la edición y revisa las herramientas disponibles para la geometría de la capa.",
            "Configura snapping solo en las capas relevantes y selecciona vértices/segmentos apropiados.",
            "Empieza con una tolerancia moderada y prueba en una zona de geometrías cercanas.",
            "Digitaliza una entidad y completa los atributos obligatorios.",
            "Usa la herramienta de vértices para corregir un punto mal ubicado sin alterar innecesariamente el resto de la geometría.",
            "Guarda las ediciones y confirma que el indicador de edición pendiente desaparezca.",
            "Ejecuta una comprobación de geometría y revisa visualmente el resultado antes de usarlo en análisis."
          ],
          "parameters": "Capa objetivo; modo de ajuste; tipo de objetivo; tolerancia y unidades; campos obligatorios; formato de almacenamiento.",
          "expectedResult": "Una capa editada, guardada y validada, con conexiones y atributos coherentes con el objetivo.",
          "verification": "Comprueba la tabla, geometría, validez y conectividad; vuelve a abrir la capa si el flujo de trabajo lo exige.",
          "errors": [
            {
              "issue": "Usar una tolerancia demasiado alta.",
              "fix": "Reduce la tolerancia y revisa qué vértice se engancha; ajusta según escala y densidad."
            },
            {
              "issue": "Olvidar guardar ediciones.",
              "fix": "Guarda cambios en la fuente y luego guarda el proyecto."
            },
            {
              "issue": "Editar la fuente original sin respaldo.",
              "fix": "Trabaja sobre una copia cuando el dato sea crítico y documenta las modificaciones."
            }
          ],
          "quiz": {
            "question": "¿Qué puede ocurrir si la tolerancia de snapping es excesiva?",
            "options": [
              "QGIS mejora automáticamente la precisión de todos los datos.",
              "El cursor puede engancharse a un vértice o segmento que no era el objetivo.",
              "La capa se reproyecta a metros."
            ],
            "correct": 1,
            "explanation": "Una tolerancia demasiado alta puede producir enganches no deseados; debe ajustarse a escala, densidad y tarea."
          },
          "sources": [
            {
              "title": "QGIS User Guide: digitalización",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/working_with_vector/editing_geometry_attributes.html"
            },
            {
              "title": "QGIS User Guide: snapping",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/working_with_vector/snapping_tolerances.html"
            }
          ],
          "case": "Para trazar un cauce desde cartografía existente, snapping ayuda a conectar segmentos; no reemplaza la revisión de la fuente ni la verificación de campo.",
          "practice": "Digitaliza un polígono y una línea de prueba, configura snapping, guarda y explica qué reglas topológicas validarías."
        },
        {
          "id": "L6_2",
          "title": "Tablas de atributos, filtros, expresiones y uniones",
          "level": "Intermedio",
          "time": "50",
          "objectives": [
            "Consultar registros y filtrar entidades con expresiones.",
            "Calcular campos con expresiones y comprender tipos de datos.",
            "Unir tablas mediante una clave y detectar registros sin correspondencia."
          ],
          "prerequisites": "Lección L6_1 y una capa con atributos.",
          "conceptual": "La tabla de atributos conecta cada geometría con datos descriptivos. Los tipos de campo importan: números deben almacenarse como numéricos para calcular, fechas como fechas y códigos como texto cuando ceros iniciales sean significativos. La selección por expresión resalta entidades que cumplen una condición; un filtro de capa restringe la visualización y puede influir en procesos según cómo se configure la entrada.\n\nLas expresiones de QGIS permiten combinar condiciones, evaluar valores nulos, transformar texto y calcular campos. Por ejemplo, una condición conceptual para priorizar muestras podría combinar concentración alta y fecha reciente; el umbral debe provenir de un criterio técnico o normativo válido para el parámetro, matriz y uso, no inventarse. Para evitar errores, prueba la expresión con pocos registros y comprueba los resultados manualmente.\n\nUna unión por atributos añade campos de otra tabla usando una clave común, como ID de estación. La clave debe tener formato consistente y, en una relación uno-a-uno, ser única. Espacios, mayúsculas, ceros iniciales o valores duplicados pueden causar coincidencias fallidas. Tras unir, cuenta registros con campos nulos y verifica que no se haya multiplicado el número de entidades de manera inesperada.",
          "terminology": "Tabla de atributos; campo; tipo de dato; expresión; NULL; filtro; selección; clave primaria; join; cardinalidad.",
          "toolPath": "Tabla de atributos → Seleccionar por expresión; Calculadora de campos; Propiedades → Uniones; Caja de herramientas para unir tablas.",
          "macOsDiff": "La lógica de expresiones es la misma en macOS y Windows; confirma los nombres de campo y la sintaxis en el editor de expresiones.",
          "winDiff": "La lógica de expresiones es la misma en macOS y Windows; confirma los nombres de campo y la sintaxis en el editor de expresiones.",
          "steps": [
            "Abre la tabla y revisa nombres, tipos, valores nulos y duplicados de la clave.",
            "Selecciona registros por una condición sencilla y compara el resultado con los valores visibles.",
            "Crea un filtro de capa y observa cómo cambia el conjunto mostrado; elimina el filtro al terminar.",
            "Abre la calculadora de campos y crea un campo nuevo con tipo y precisión apropiados.",
            "Prueba expresiones con NULL, texto y números; evita comparar cadenas numéricas como si fueran cantidades.",
            "Carga una tabla externa y normaliza la clave en ambas fuentes antes de unirlas.",
            "Configura la unión por clave y revisa registros con campos sin correspondencia.",
            "Compara el número de entidades antes y después; exporta el resultado si necesitas una tabla persistente."
          ],
          "parameters": "Campo de clave; tipo de dato; condición; tratamiento de NULL; campo nuevo; campo de unión; cardinalidad esperada.",
          "expectedResult": "Una consulta reproducible, un campo calculado coherente y/o una unión con correspondencias evaluadas.",
          "verification": "Valida casos positivos y negativos manualmente, revisa nulos, duplicados y recuento de entidades.",
          "errors": [
            {
              "issue": "Guardar números como texto.",
              "fix": "Define el tipo de campo según el uso; conserva códigos con ceros iniciales como texto cuando proceda."
            },
            {
              "issue": "Ignorar registros NULL o claves duplicadas.",
              "fix": "Cuantifica faltantes y duplicados y resuelve según la relación esperada."
            },
            {
              "issue": "Interpretar un filtro como borrado de datos.",
              "fix": "Un filtro restringe lo visible; no elimina los registros fuente."
            }
          ],
          "quiz": {
            "question": "¿Qué revisarías primero si una unión no encuentra varios registros?",
            "options": [
              "La escala de la simbología.",
              "La consistencia y unicidad de las claves, incluyendo tipo, espacios, ceros iniciales y valores nulos.",
              "El color del mapa."
            ],
            "correct": 1,
            "explanation": "Las uniones dependen de la coincidencia de claves y de la cardinalidad prevista; las diferencias de formato son una causa frecuente de fallos."
          },
          "sources": [
            {
              "title": "QGIS User Guide: tabla de atributos",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/working_with_vector/attribute_table.html"
            },
            {
              "title": "QGIS User Guide: expresiones",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/expressions/index.html"
            }
          ],
          "case": "Una base de datos de muestreo puede tener concentraciones por estación y fecha. Antes de simbolizar “puntos críticos”, valida unidades, límites de detección, claves y criterio técnico aplicable.",
          "practice": "Crea una consulta por expresión, un campo calculado y una unión de prueba. Escribe qué controles aplicarías para detectar coincidencias incorrectas."
        }
      ]
    },
    {
      "id": "M7",
      "title": "Simbología y cartografía",
      "lessons": [
        {
          "id": "L7_1",
          "title": "Simbología temática y clasificación cartográfica",
          "level": "Intermedio",
          "time": "40",
          "objectives": [
            "Elegir simbología según tipo de variable y pregunta.",
            "Diferenciar categorías, graduado, símbolos proporcionales y mapas de calor.",
            "Interpretar correctamente intervalos y leyendas."
          ],
          "prerequisites": "Lección L6_2 y atributos revisados.",
          "conceptual": "La simbología comunica patrones; no corrige datos ni valida hipótesis. Para variables nominales —tipo de estación o uso del suelo— suele convenir categorización. Para variables numéricas —concentración, superficie o población— puede usarse simbología graduada. El tamaño proporcional comunica magnitud con cuidado; un mapa de calor estima densidad de puntos y no debe confundirse con concentración medida de un contaminante.\n\nLos métodos de clasificación responden a preguntas distintas. Intervalos iguales facilitan comparar magnitudes absolutas; cuantiles distribuyen aproximadamente el mismo número de entidades por clase, pero pueden agrupar valores similares o separar valores cercanos; Jenks busca reducir variación dentro de clases y aumentar diferencias entre clases, aunque sus límites dependen de los datos. Ningún método demuestra un umbral ecológico o legal.\n\nUna leyenda debe declarar variable, unidad, periodo, método de clasificación y fuente. Revisa valores extremos, datos faltantes y tamaño de muestra. Si comparas mapas entre años o municipios, usa límites comparables y documenta el método para no atribuir cambios reales a una reclasificación distinta.",
          "terminology": "Simbología categorizada; graduada; cuantiles; intervalos iguales; Jenks; mapa de calor; leyenda; variable nominal/continua.",
          "toolPath": "Propiedades de capa → Simbología; seleccionar tipo de representación y campo; revisar clasificación y leyenda.",
          "macOsDiff": "Propiedades de capa → Simbología; seleccionar tipo de representación y campo; revisar clasificación y leyenda.",
          "winDiff": "Windows: sigue la misma secuencia conceptual; comprueba los nombres reales de menús y proveedores en tu instalación de QGIS.",
          "steps": [
            "Inspecciona la distribución del campo y comprueba unidades y valores nulos.",
            "Selecciona categorizada para clases nominales o graduada para una variable numérica.",
            "Elige una rampa legible y accesible; evita depender solo del color para distinguir categorías.",
            "Compara intervalos iguales, cuantiles o Jenks en una copia y anota qué historia visual produce cada método.",
            "Revisa valores extremos: no elimines ni ocultes atípicos sin una justificación documentada.",
            "Edita las etiquetas de la leyenda para incluir unidades y límites comprensibles.",
            "Si comparas dos periodos, conserva un esquema de clasificación comparable o explica por qué cambió.",
            "Comprueba que el mapa no induce a leer categorías cartográficas como límites normativos."
          ],
          "parameters": "Campo; tipo de representación; método de clasificación; número de clases; rampa; tratamiento de NULL; unidad y periodo.",
          "expectedResult": "Un mapa temático legible cuya leyenda comunica variable, unidades, periodo y método sin exagerar las conclusiones.",
          "verification": "Comprueba que cada clase corresponde al intervalo indicado, que no faltan valores sin explicación y que los colores se distinguen.",
          "errors": [
            {
              "issue": "Usar Jenks como si identificara automáticamente categorías ambientales reales.",
              "fix": "Descríbelo como método cartográfico exploratorio; usa criterios normativos/ecológicos validados cuando proceda."
            },
            {
              "issue": "Usar colores de semáforo sin justificar umbrales.",
              "fix": "Explica los límites y su fuente; no inventes categorías de riesgo."
            },
            {
              "issue": "Comparar mapas con intervalos distintos sin advertirlo.",
              "fix": "Estandariza clasificación o explica explícitamente la diferencia."
            }
          ],
          "quiz": {
            "question": "¿Qué afirmación sobre la clasificación Jenks es correcta?",
            "options": [
              "Demuestra por sí misma qué valores incumplen la ley.",
              "Es un método cartográfico que agrupa valores según la distribución de los datos, no un criterio normativo.",
              "Siempre produce el mismo número de entidades en cada clase."
            ],
            "correct": 1,
            "explanation": "Jenks busca reducir la variación dentro de clases; los umbrales regulatorios deben proceder de normas o criterios técnicos pertinentes."
          },
          "sources": [
            {
              "title": "QGIS User Guide: simbología vectorial",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/working_with_vector/vector_properties.html"
            },
            {
              "title": "QGIS User Guide: diseño cartográfico",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/print_composer/index.html"
            }
          ],
          "case": "Un mapa de DQO debe incluir unidades, fecha y fuente de los límites de interpretación; una rampa roja no sustituye el análisis de cumplimiento normativo.",
          "practice": "Clasifica una variable ambiental de forma categórica y otra numérica; compara dos métodos de clasificación y explica sus efectos en la lectura."
        },
        {
          "id": "L7_2",
          "title": "Etiquetas, diseño de impresión y mapas listos para informe",
          "level": "Intermedio",
          "time": "45",
          "objectives": [
            "Configurar etiquetas que eviten saturar el mapa.",
            "Construir un diseño con mapa, escala, norte, leyenda y fuentes.",
            "Exportar y revisar un producto cartográfico."
          ],
          "prerequisites": "Lección L7_1.",
          "conceptual": "Un mapa para informe debe responder una pregunta con jerarquía visual y trazabilidad. El diseño de impresión permite colocar el mapa, título, leyenda, escala gráfica, flecha norte cuando sea útil, fuente, autor, fecha, CRS, notas metodológicas y mapas de localización. No todos los mapas requieren los mismos elementos; cada uno debe ayudar a interpretar el producto.\n\nLas etiquetas se deben configurar por prioridad, escala, tamaño y posibles conflictos. Etiquetar todas las entidades puede producir un mapa ilegible. Usa reglas o expresiones para priorizar nombres y evita que las etiquetas oculten elementos relevantes. La leyenda debe reflejar las capas visibles y usar nombres comprensibles. La escala gráfica es útil cuando se cambia el tamaño de impresión; una escala numérica aislada puede dejar de ser válida si el documento se redimensiona.\n\nExportar a PDF o imagen no termina el control de calidad. Revisa texto, resolución, márgenes, símbolos, fuentes, datos sensibles y coherencia entre el mapa y el informe. Guarda el diseño dentro del proyecto y conserva la exportación final junto con una nota de versión y fuentes.",
          "terminology": "Diseño de impresión; composición; etiqueta; escala gráfica; leyenda; mapa de localización; DPI; PDF; metadatos.",
          "toolPath": "Proyecto → Nuevo diseño de impresión; agregar mapa, leyenda, escala y etiquetas; exportar a PDF.",
          "macOsDiff": "Proyecto → Nuevo diseño de impresión; agregar mapa, leyenda, escala y etiquetas; exportar a PDF.",
          "winDiff": "Windows: sigue la misma secuencia conceptual; comprueba los nombres reales de menús y proveedores en tu instalación de QGIS.",
          "steps": [
            "Antes de diseñar, fija la pregunta del mapa, audiencia y escala de salida.",
            "Abre un diseño de impresión nuevo y asigna un nombre descriptivo.",
            "Añade el mapa y ajusta extensión, escala y marco.",
            "Añade título, leyenda, escala gráfica y fuente; incorpora norte solo si aporta orientación.",
            "Configura etiquetas para priorizar entidades importantes y reducir solapamientos.",
            "Incluye fecha, autor, CRS y limitaciones relevantes sin llenar el mapa de texto.",
            "Exporta a PDF con resolución apropiada para el uso final.",
            "Abre el PDF exportado y revisa legibilidad, recortes, fuentes, leyenda, escala y consistencia con los datos."
          ],
          "parameters": "Tamaño de página; orientación; escala; extensión; resolución de exportación; fuentes; leyenda; márgenes.",
          "expectedResult": "PDF cartográfico que puede leerse sin abrir QGIS y que documenta fuentes y método de manera suficiente.",
          "verification": "Revisa el archivo exportado a tamaño real y comprueba que el título, unidades, leyenda y fuentes sean legibles.",
          "errors": [
            {
              "issue": "Llenar el mapa de etiquetas.",
              "fix": "Usa reglas, prioridades y escalas; elimina etiquetas no esenciales."
            },
            {
              "issue": "Olvidar las fuentes y la fecha.",
              "fix": "Incluye procedencia, fecha de datos y fecha de elaboración."
            },
            {
              "issue": "Confiar solo en la vista previa de QGIS.",
              "fix": "Revisa el PDF exportado, que es el producto que verá la audiencia."
            }
          ],
          "quiz": {
            "question": "¿Qué control es indispensable después de exportar un mapa a PDF?",
            "options": [
              "Ninguno si la vista previa se veía bien.",
              "Abrir el PDF y revisar legibilidad, recortes, leyenda, escala y fuentes.",
              "Cambiar el CRS del proyecto aunque no exista motivo."
            ],
            "correct": 1,
            "explanation": "La exportación puede introducir problemas de tipografía, recorte o resolución que no siempre se detectan en el lienzo."
          },
          "sources": [
            {
              "title": "QGIS User Guide: diseños de impresión",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/print_composer/index.html"
            }
          ],
          "case": "Un mapa para un expediente de inspección debe separar claramente los hechos observados, las capas de referencia y la zona de influencia analizada; incluir fuentes y fecha evita confusiones.",
          "practice": "Elabora un diseño de una página con título, mapa, leyenda, escala, fuente, fecha y una nota de limitaciones; revisa el PDF a tamaño real."
        }
      ]
    },
    {
      "id": "M8",
      "title": "Geoprocesamiento y calidad",
      "lessons": [
        {
          "id": "L8_1",
          "title": "Geoprocesamiento vectorial: buffer, clip, intersect y dissolve",
          "level": "Intermedio–avanzado",
          "time": "50",
          "objectives": [
            "Explicar la pregunta que responde cada operación.",
            "Ejecutar buffer, clip, intersect y dissolve con parámetros coherentes.",
            "Validar unidades, atributos y geometrías de salida."
          ],
          "prerequisites": "Lecciones L5_1, L5_2 y L6_2.",
          "conceptual": "El geoprocesamiento crea resultados a partir de una o más capas. Buffer genera una zona a una distancia definida alrededor de geometrías; su distancia depende de las unidades y del comportamiento del algoritmo. Clip recorta la geometría de una capa de entrada usando el área de otra capa y suele conservar los atributos de la entrada. Intersect produce las partes superpuestas y combina atributos de ambas entradas. Dissolve agrupa geometrías según un campo o sin campo, eliminando fronteras internas donde corresponda. Intersect no es destructivo respecto de las capas fuente si se guarda como salida separada.\n\nCada herramienta responde una pregunta distinta. “Qué puntos están cerca” puede resolverse con buffer y selección espacial; “qué parte de un polígono cae dentro de otra zona” puede requerir clip; “qué entidades coinciden y qué atributos tienen ambas” puede requerir intersect. El nombre del algoritmo y sus opciones pueden variar según proveedor; revisa la ayuda del algoritmo seleccionado.\n\nAntes de procesar, valida CRS, geometrías, unidades, selección/filtros, extensión y salida. Después compara recuento, área, longitud, campos y ubicación. Guarda resultados con nombres explícitos y evita sobrescribir fuentes originales.",
          "terminology": "Buffer; clip; intersect; dissolve; capa de entrada; superposición; tolerancia; salida; geometría inválida.",
          "toolPath": "Caja de herramientas de Procesos → buscar Buffer, Clip, Intersect o Dissolve; leer la ayuda del algoritmo y seleccionar salida.",
          "macOsDiff": "Caja de herramientas de Procesos → buscar Buffer, Clip, Intersect o Dissolve; leer la ayuda del algoritmo y seleccionar salida.",
          "winDiff": "Windows: sigue la misma secuencia conceptual; comprueba los nombres reales de menús y proveedores en tu instalación de QGIS.",
          "steps": [
            "Formula la pregunta analítica antes de elegir herramienta.",
            "Comprueba que las capas usan CRS y unidades adecuados para la distancia o área que necesitas.",
            "Ejecuta Buffer sobre una copia de puntos o líneas con distancia justificada.",
            "Usa Clip para recortar una capa por un polígono y verifica que conserva los atributos esperados de la entrada.",
            "Usa Intersect para generar la superposición y revisar atributos de ambas capas.",
            "Usa Dissolve por un campo cuando necesites agrupar entidades; comprueba si el resultado multipart es apropiado.",
            "Guarda cada salida en un archivo nuevo con nombre que identifique operación, área y fecha.",
            "Compara recuento de entidades, campos, extensión, área y geometría antes de aceptar el resultado."
          ],
          "parameters": "Capa(s) de entrada; distancia y unidades para buffer; capa de superposición; campo de disolución; salida temporal o archivo persistente; manejo de geometrías inválidas.",
          "expectedResult": "Una salida espacial que responde a la pregunta planteada y puede reproducirse con parámetros documentados.",
          "verification": "Inspecciona visualmente la salida y la tabla; revisa número de entidades, CRS, unidades, campos y validez geométrica.",
          "errors": [
            {
              "issue": "Ejecutar buffer en una capa con coordenadas en grados creyendo que la distancia es metros.",
              "fix": "Usa un CRS proyectado adecuado o un método geodésico explícitamente documentado."
            },
            {
              "issue": "Confundir Clip con Intersect.",
              "fix": "Clip recorta según una máscara; Intersect combina la geometría y atributos de las entradas superpuestas."
            },
            {
              "issue": "Sobrescribir la fuente.",
              "fix": "Guarda la salida separada y conserva originales."
            }
          ],
          "quiz": {
            "question": "¿Qué describe mejor Intersect?",
            "options": [
              "Elimina de forma permanente las entidades originales.",
              "Genera una salida con las partes superpuestas y atributos de las capas participantes.",
              "Solo cambia el color de una capa."
            ],
            "correct": 1,
            "explanation": "Intersect crea una capa de salida derivada; no destruye las fuentes si se configura y guarda como resultado separado."
          },
          "sources": [
            {
              "title": "QGIS User Guide: caja de herramientas de Procesos",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/processing/index.html"
            },
            {
              "title": "QGIS User Guide: geometría vectorial",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/working_with_vector/vector_properties.html"
            }
          ],
          "case": "Para priorizar pozos cercanos a cauces, un buffer puede ser una herramienta exploratoria. La distancia debe justificarse por el objetivo y no presentarse automáticamente como una zona legal de protección.",
          "practice": "Ejecuta Buffer, Clip e Intersect con capas de prueba y redacta qué pregunta responde cada una, qué atributos conserva y qué validaciones aplicarías."
        },
        {
          "id": "L8_2",
          "title": "Calidad geométrica, validez y control de resultados",
          "level": "Avanzado",
          "time": "45",
          "objectives": [
            "Detectar geometrías inválidas y explicar por qué importan.",
            "Aplicar comprobaciones antes y después de procesos.",
            "Diseñar una bitácora de calidad y conservar trazabilidad."
          ],
          "prerequisites": "Lección L8_1.",
          "conceptual": "La calidad geométrica incluye validez, consistencia topológica y adecuación a la escala de uso. Un polígono puede ser inválido por anillos autointersectados o estructura incorrecta; una línea puede ser válida pero estar desconectada de otra línea cuando el modelo exige continuidad. Por eso, “geometría válida” y “topología correcta” son conceptos relacionados pero distintos.\n\nLa Caja de herramientas incluye herramientas para comprobar validez y, en ciertos casos, reparar geometrías. Reparar puede cambiar la estructura o dividir entidades; no aceptes el resultado sin revisar qué cambió. Conserva una copia de la fuente y registra el algoritmo, parámetros, proveedor y número de entidades afectadas.\n\nEl control de calidad debe incluir tanto pruebas automatizables como inspección visual y conocimiento del fenómeno. Revisa campos nulos, duplicados, rangos imposibles, CRS, extensión, unidades y consistencia con fuentes independientes. Un resultado técnicamente válido puede seguir siendo temáticamente erróneo si la fuente está desactualizada o mal interpretada.",
          "terminology": "Validez; autointersección; anillo; multipart; topología; tolerancia; QA/QC; bitácora; trazabilidad.",
          "toolPath": "Caja de herramientas → Check Validity/Comprobar validez y Fix Geometries/Reparar geometrías; los nombres dependen del proveedor y versión.",
          "macOsDiff": "Caja de herramientas → Check Validity/Comprobar validez y Fix Geometries/Reparar geometrías; los nombres dependen del proveedor y versión.",
          "winDiff": "Windows: sigue la misma secuencia conceptual; comprueba los nombres reales de menús y proveedores en tu instalación de QGIS.",
          "steps": [
            "Crea una copia de trabajo de la capa y registra su recuento inicial.",
            "Ejecuta la herramienta de comprobación de validez y revisa el reporte de errores.",
            "Identifica el tipo de error y localiza algunas geometrías en el mapa.",
            "Si decides reparar, ejecuta la reparación sobre una salida nueva y no sobre la única copia de la fuente.",
            "Compara número de entidades, partes, campos y extensión antes y después.",
            "Comprueba reglas topológicas específicas, como huecos no deseados o continuidad de una red.",
            "Revisa campos obligatorios, duplicados y valores fuera de rango.",
            "Documenta errores detectados, método de corrección, limitaciones y validación final."
          ],
          "parameters": "Algoritmo/proveedor; tolerancia si aplica; salida separada; recuento inicial/final; reglas de validez y topología; bitácora.",
          "expectedResult": "Una capa validada o una lista explícita de problemas pendientes con evidencia y acciones realizadas.",
          "verification": "Compara el reporte de validez, la tabla, la geometría en mapa y el recuento de entidades tras la reparación.",
          "errors": [
            {
              "issue": "Asumir que reparar geometrías garantiza datos correctos.",
              "fix": "Revisa resultados y calidad temática; la reparación no corrige errores de interpretación o atributos."
            },
            {
              "issue": "Aplicar reglas topológicas genéricas sin considerar el fenómeno.",
              "fix": "Define reglas según la estructura de datos y el análisis que se pretende realizar."
            },
            {
              "issue": "No conservar la fuente original.",
              "fix": "Mantén originales inmutables y documenta cada producto derivado."
            }
          ],
          "quiz": {
            "question": "¿Cuál es la diferencia entre validez geométrica y calidad temática?",
            "options": [
              "Son exactamente lo mismo.",
              "Una geometría puede ser válida y aun así representar información incorrecta, desactualizada o mal clasificada.",
              "La validez geométrica confirma que los atributos son verdaderos."
            ],
            "correct": 1,
            "explanation": "La validez describe propiedades geométricas; la calidad temática requiere comprobar significado, atributos, procedencia y vigencia."
          },
          "sources": [
            {
              "title": "QGIS User Guide: geometría vectorial",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/working_with_vector/vector_properties.html"
            },
            {
              "title": "QGIS User Guide: Procesamiento",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/processing/index.html"
            }
          ],
          "case": "Una zona de influencia puede tener un polígono geométricamente válido pero estar trazada desde una fuente inadecuada. El informe debe distinguir validez técnica y validez administrativa/legal.",
          "practice": "Crea una lista de control QA/QC para una capa de inspecciones: geometría, CRS, atributos, duplicados, fecha, fuente y evidencia de validación."
        }
      ]
    },
    {
      "id": "M9",
      "title": "Análisis ráster",
      "lessons": [
        {
          "id": "L9_1",
          "title": "Ráster, DEM, resolución y álgebra de mapas",
          "level": "Avanzado",
          "time": "50",
          "objectives": [
            "Interpretar tamaño de celda, extensión, tipo de dato y NoData.",
            "Usar calculadora ráster con capas alineadas.",
            "Comprender diferencias entre DEM, DSM y DTM."
          ],
          "prerequisites": "Lecciones L1_1, L5_1 y L5_2.",
          "conceptual": "Un ráster es una matriz georreferenciada de celdas. Sus propiedades clave incluyen CRS, extensión, tamaño de píxel, número de filas y columnas, tipo de dato, bandas y valor NoData. Antes de combinar rásteres, revisa si comparten CRS, resolución, extensión y alineación de la cuadrícula. Dos rásteres con el mismo tamaño de píxel pueden tener orígenes de celda distintos; el análisis celda a celda puede entonces combinar ubicaciones no equivalentes.\n\nUn modelo digital de elevación (DEM/MDE) es un término general cuyo uso varía entre fuentes. Un DSM puede incluir edificios y vegetación; un DTM intenta representar el terreno desnudo. Revisa definición, método, resolución, fecha y unidades verticales. La resolución horizontal y las unidades verticales deben ser coherentes para análisis de pendiente y relieve.\n\nLa calculadora ráster permite operar celdas, por ejemplo crear una máscara con una condición o combinar criterios binarios. NoData requiere atención: una celda sin dato no equivale a cero. Antes de sumar capas de criterios, alinea las cuadrículas, define cómo tratar faltantes y comprueba que las expresiones producen el rango esperado.",
          "terminology": "Ráster; banda; DEM/MDE; DSM; DTM; resolución; extensión; alineación; NoData; álgebra de mapas.",
          "toolPath": "Propiedades de capa ráster; Caja de herramientas → Warp/Reproject, Align Rasters o Calculadora ráster según la versión y proveedor.",
          "macOsDiff": "Propiedades de capa ráster; Caja de herramientas → Warp/Reproject, Align Rasters o Calculadora ráster según la versión y proveedor.",
          "winDiff": "Windows: sigue la misma secuencia conceptual; comprueba los nombres reales de menús y proveedores en tu instalación de QGIS.",
          "steps": [
            "Abre las propiedades del DEM y registra CRS, resolución, extensión, tipo de dato, banda y NoData.",
            "Comprueba si los valores verticales están en metros u otra unidad y lee la ficha técnica del proveedor.",
            "Si combinarás rásteres, compara CRS, tamaño de celda, extensión y alineación.",
            "Reproyecta o alinea copias cuando el análisis lo requiera; selecciona método de remuestreo apropiado para variable continua o categórica.",
            "Abre la calculadora ráster y prueba una expresión simple sobre una sola banda.",
            "Crea una máscara binaria a partir de un umbral y revisa que las salidas sean solo 0/1 o NoData según la expresión.",
            "Si combinas dos criterios, verifica la interpretación de la suma y el tratamiento de NoData.",
            "Documenta datos fuente, resolución, remuestreo, expresión y limitaciones."
          ],
          "parameters": "Rásteres de entrada; banda; CRS; resolución; extensión; alineación; remuestreo; NoData; unidades verticales; expresión.",
          "expectedResult": "Una salida ráster alineada y con valores que corresponden a la lógica definida, con fuente y parámetros documentados.",
          "verification": "Revisa estadísticas, histograma, rango de valores, NoData, extensión y una muestra de celdas conocidas.",
          "errors": [
            {
              "issue": "Tratar NoData como cero sin decidirlo.",
              "fix": "Define explícitamente si la ausencia de datos debe excluirse, propagarse o imputarse con una justificación."
            },
            {
              "issue": "Sumar rásteres desalineados.",
              "fix": "Alinea cuadrículas y comprueba resolución, extensión y origen de celda."
            },
            {
              "issue": "Suponer que todo DEM es terreno desnudo.",
              "fix": "Consulta metadatos para distinguir DSM, DTM y modelos de elevación de significado incierto."
            }
          ],
          "quiz": {
            "question": "¿Qué debes comprobar antes de sumar dos rásteres celda a celda?",
            "options": [
              "Solo que tengan el mismo nombre.",
              "Que sus CRS, resolución, extensión y alineación sean compatibles, y que NoData esté tratado.",
              "Que ambos tengan la misma rampa de color."
            ],
            "correct": 1,
            "explanation": "La aritmética ráster requiere correspondencia espacial entre celdas y una política explícita para valores NoData."
          },
          "sources": [
            {
              "title": "QGIS User Guide: análisis ráster",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/processing_algs/qgis/rasteranalysis.html"
            },
            {
              "title": "GDAL Documentation",
              "url": "https://gdal.org/"
            }
          ],
          "case": "Para identificar zonas con pendiente alta y cobertura vegetal escasa, alinea las capas ráster y revisa resolución, unidades y fechas antes de combinarlas.",
          "practice": "Escribe una expresión ráster de máscara binaria para un umbral de prueba e indica qué revisarías para asegurar que la salida está alineada y no confunde NoData con cero."
        },
        {
          "id": "L9_2",
          "title": "Pendiente, sombreado, reclasificación y modelo de riesgo ambiental",
          "level": "Avanzado",
          "time": "60",
          "objectives": [
            "Interpretar pendiente y hillshade sin confundir visualización con medición.",
            "Reclasificar un ráster con criterios explícitos.",
            "Diseñar una superposición multicriterio y validar sus supuestos."
          ],
          "prerequisites": "Lección L9_1 y un DEM documentado.",
          "conceptual": "La pendiente se deriva de cambios de elevación entre celdas vecinas y suele expresarse en grados o porcentaje; no son unidades intercambiables. El sombreado de relieve (hillshade) simula iluminación para ayudar a interpretar formas del terreno, pero no representa una variable física de exposición o riesgo por sí mismo. La precisión del resultado depende de la resolución, calidad del DEM, método, unidades horizontales y verticales y tratamiento de bordes.\n\nLa reclasificación asigna categorías a rangos de valores. Los límites deben proceder de una metodología publicada, norma aplicable o hipótesis explícita de investigación. Una clasificación “baja/media/alta” no adquiere validez científica solo por aparecer en una leyenda. En una evaluación multicriterio, las capas deben tener significado comparable, escala compatible y reglas de combinación justificadas. Una suma de máscaras binarias produce un índice de conteo de criterios, no necesariamente una probabilidad de riesgo.\n\nAntes de interpretar un mapa de riesgo, separa amenaza, exposición, vulnerabilidad y consecuencias según el marco empleado. Documenta pesos, umbrales, fuentes, incertidumbre y validación. Compara el resultado con observaciones independientes y realiza análisis de sensibilidad cuando los pesos o límites influyan en la prioridad de zonas.",
          "terminology": "Pendiente; grados; porcentaje; hillshade; reclasificación; máscara; multicriterio; amenaza; exposición; vulnerabilidad; incertidumbre.",
          "toolPath": "Caja de herramientas → análisis de terreno/Slope/Hillshade; calculadora ráster; reclasificación por tabla o expresión. El proveedor disponible depende de la instalación.",
          "macOsDiff": "Caja de herramientas → análisis de terreno/Slope/Hillshade; calculadora ráster; reclasificación por tabla o expresión. El proveedor disponible depende de la instalación.",
          "winDiff": "Windows: sigue la misma secuencia conceptual; comprueba los nombres reales de menús y proveedores en tu instalación de QGIS.",
          "steps": [
            "Revisa metadatos y unidades del DEM y confirma que el análisis de terreno es adecuado para su resolución.",
            "Ejecuta pendiente y selecciona unidades explícitas (grados o porcentaje) según la pregunta.",
            "Genera hillshade como apoyo de interpretación visual; no lo uses como sustituto de una variable medida.",
            "Define clases de pendiente con fuente o justificación antes de reclasificar.",
            "Transforma criterios ambientales en capas comparables y documenta qué significa cada clase.",
            "Si sumas máscaras binarias, interpreta el resultado como número de criterios satisfechos, no como probabilidad salvo que exista un modelo probabilístico válido.",
            "Evalúa sensibilidad cambiando de forma razonada un umbral o peso y compara las zonas prioritarias.",
            "Valida el mapa con observaciones independientes y declara incertidumbre y limitaciones."
          ],
          "parameters": "Algoritmo y proveedor; unidades de pendiente; factor/unidades Z; tabla de reclasificación; pesos; NoData; resolución común; criterio de validación.",
          "expectedResult": "Productos de terreno y un índice ambiental interpretable, con supuestos, unidades, pesos y límites explícitos.",
          "verification": "Comprueba rango y unidades de pendiente, patrón de NoData, estabilidad frente a cambios de parámetros y concordancia con observaciones.",
          "errors": [
            {
              "issue": "Usar un factor Z fijo sin comprobar unidades y latitud.",
              "fix": "Revisa unidades horizontales/verticales y documentación del algoritmo; reproyecta adecuadamente cuando corresponda."
            },
            {
              "issue": "Presentar un índice multicriterio como probabilidad de riesgo.",
              "fix": "Describe qué mide realmente el índice y valida antes de darle interpretación probabilística."
            },
            {
              "issue": "Elegir umbrales solo porque generan un mapa atractivo.",
              "fix": "Justifica límites con fuentes, teoría, normativa pertinente o hipótesis explícitas."
            }
          ],
          "quiz": {
            "question": "¿Qué significa sumar tres rásteres binarios de criterios?",
            "options": [
              "Siempre calcula la probabilidad de desastre.",
              "Cuenta cuántos criterios se cumplen por celda, si están alineados y se definieron adecuadamente.",
              "Corrige automáticamente errores del DEM."
            ],
            "correct": 1,
            "explanation": "La suma de máscaras binarias genera un conteo de criterios satisfechos; no equivale automáticamente a una probabilidad ni a un riesgo validado."
          },
          "sources": [
            {
              "title": "QGIS User Guide: análisis ráster",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/processing_algs/qgis/rasteranalysis.html"
            },
            {
              "title": "QGIS User Guide: análisis de terreno",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/processing_algs/qgis/rasterterrainanalysis.html"
            }
          ],
          "case": "Un mapa de susceptibilidad a erosión puede combinar pendiente, cobertura y tipo de suelo, pero sus pesos y umbrales deben justificarse y validarse; la suma visual no basta para afirmar causalidad.",
          "practice": "Diseña un índice de tres criterios con definición, fuente, unidad, regla de reclasificación, fórmula, manejo de NoData y método de validación. Aclara si el resultado es conteo, índice o probabilidad."
        }
      ]
    },
    {
      "id": "M10",
      "title": "Aplicaciones ambientales integradas",
      "lessons": [
        {
          "id": "L10_1",
          "title": "Hidrología básica con SIG: cuencas, drenaje y zona de influencia",
          "level": "Avanzado aplicado",
          "time": "60",
          "objectives": [
            "Explicar el flujo general para derivar drenaje desde un DEM.",
            "Identificar condicionamientos del DEM y parámetros sensibles.",
            "Distinguir un análisis hidrológico exploratorio de una delimitación oficial."
          ],
          "prerequisites": "Lecciones L5_1, L9_1 y L9_2.",
          "conceptual": "Un flujo hidrológico derivado de un DEM suele incluir preparación del modelo, tratamiento de depresiones según el método, dirección de flujo, acumulación, umbral para definir cauces, red de drenaje y delimitación de cuencas desde un punto de salida. Los algoritmos y nombres cambian según proveedor (QGIS, GRASS, SAGA u otros); no todos están instalados por defecto. Consulta la ayuda de la herramienta y documenta proveedor y versión.\n\nLa calidad del resultado depende de resolución, errores del DEM, infraestructura que interrumpe el flujo, alcantarillas, barreras, unidades y ubicación del punto de salida. Un umbral bajo crea más cauces; uno alto reduce la densidad. En terrenos planos o modificados, el DEM puede no representar adecuadamente el drenaje real. La delimitación automatizada es un insumo técnico, no sustituye por sí sola la cartografía hidrológica oficial, la verificación de campo ni los procedimientos legales de delimitación de cauce o zona federal.\n\nPara zonas de influencia, diferencia un buffer geométrico elegido para el análisis de una franja establecida por ley o resolución. Documenta el propósito, la fuente, el método, la escala y las incertidumbres; no etiquetes una zona como federal solo porque se generó una distancia en QGIS.",
          "terminology": "Cuenca; DEM; dirección de flujo; acumulación; umbral; punto de salida; red de drenaje; acondicionamiento; zona de influencia.",
          "toolPath": "Caja de herramientas → proveedores de análisis hidrológico disponibles; inspecciona la ayuda del algoritmo y el modelo de elevación de entrada.",
          "macOsDiff": "Caja de herramientas → proveedores de análisis hidrológico disponibles; instala proveedores solo si son compatibles y necesarios.",
          "winDiff": "Windows: sigue la misma secuencia conceptual; comprueba los nombres reales de menús y proveedores en tu instalación de QGIS.",
          "steps": [
            "Define si el objetivo es exploratorio, de planeación o un producto con consecuencias administrativas.",
            "Revisa el DEM: resolución, fecha, unidades, NoData y correspondencia con el área de estudio.",
            "Identifica el punto de salida usando cartografía y conocimiento del terreno; evita colocarlo sobre una celda arbitraria.",
            "Prepara el DEM con el método de acondicionamiento documentado por el algoritmo elegido.",
            "Calcula dirección y acumulación de flujo según el proveedor disponible.",
            "Prueba un umbral para extraer drenajes y compara cómo cambia la densidad de la red.",
            "Delimita la cuenca desde el punto de salida y verifica si coincide razonablemente con topografía y cartografía independiente.",
            "Registra proveedor, versión, parámetros, fecha del DEM, validaciones y limitaciones; no confundas una zona de influencia analítica con una delimitación legal."
          ],
          "parameters": "DEM y resolución; proveedor/algoritmo; método de acondicionamiento; dirección de flujo; umbral; punto de salida; extensión; CRS; validación externa.",
          "expectedResult": "Una cuenca y red de drenaje exploratorias con parámetros reproducibles y una declaración clara de su alcance.",
          "verification": "Compara límites con cartografía de referencia y evidencia de campo; prueba sensibilidad del umbral y verifica el punto de salida.",
          "errors": [
            {
              "issue": "Asumir que el resultado del DEM es una delimitación oficial.",
              "fix": "Contrasta con fuentes oficiales y procedimientos aplicables; describe el resultado como análisis técnico exploratorio si corresponde."
            },
            {
              "issue": "Usar un umbral sin evaluar su efecto.",
              "fix": "Compara varios umbrales y documenta cómo cambia la red de drenaje."
            },
            {
              "issue": "Ignorar barreras o infraestructura.",
              "fix": "Revisa puentes, alcantarillas, terraplenes y errores del DEM que puedan bloquear el flujo."
            }
          ],
          "quiz": {
            "question": "¿Qué es correcto afirmar sobre una cuenca delimitada automáticamente desde un DEM?",
            "options": [
              "Siempre es jurídicamente definitiva.",
              "Es un resultado condicionado por DEM, algoritmo y parámetros, que debe validarse para el uso previsto.",
              "No depende de la resolución."
            ],
            "correct": 1,
            "explanation": "La delimitación automática depende de datos y supuestos; su uso administrativo o legal requiere validación y fuentes/procedimientos adecuados."
          },
          "sources": [
            {
              "title": "QGIS User Guide: Procesamiento",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/processing/index.html"
            },
            {
              "title": "GRASS GIS documentation",
              "url": "https://grass.osgeo.org/grass-stable/manuals/"
            },
            {
              "title": "SAGA GIS documentation",
              "url": "https://saga-gis.sourceforge.io/saga_tool_doc/"
            }
          ],
          "case": "Para estudiar aportes potenciales a un tramo del río Lerma, la cuenca permite estructurar el análisis espacial, pero no reemplaza mediciones de calidad del agua ni la evaluación de fuentes contaminantes.",
          "practice": "Elabora un diagrama del flujo DEM → acondicionamiento → dirección → acumulación → drenaje → cuenca y señala tres fuentes de incertidumbre y una validación independiente."
        },
        {
          "id": "L10_2",
          "title": "Proyecto integrador: diagnóstico ambiental reproducible",
          "level": "Avanzado",
          "time": "90",
          "objectives": [
            "Integrar datos vectoriales, ráster, tablas, geoprocesamiento y cartografía en un flujo auditable.",
            "Diseñar controles de calidad y comunicar limitaciones.",
            "Entregar proyecto, datos derivados, mapa y bitácora reproducibles."
          ],
          "prerequisites": "Todas las lecciones anteriores. Se recomienda completar las prácticas de CRS, tablas, geoprocesamiento y ráster.",
          "conceptual": "Un diagnóstico ambiental reproducible comienza con una pregunta y un protocolo, no con una colección de herramientas. Define área y periodo, indicadores, fuentes, criterios de inclusión, CRS, unidades, operaciones, salidas y controles. Conserva los datos originales y genera productos derivados identificables. Registra qué transformaciones se hicieron y por qué.\n\nEl proyecto integrador de la academia propone priorizar sitios de monitoreo o inspección cerca de cauces combinando puntos de observación, red hidrográfica, límites administrativos y un indicador ráster opcional. La proximidad puede ayudar a organizar el trabajo, pero no demuestra causalidad ni incumplimiento. Cualquier umbral normativo debe corresponder al parámetro, matriz, uso, jurisdicción y norma vigente. Cuando el dato no existe, reporta “sin información” en lugar de convertirlo en cero.\n\nLa entrega final debe permitir que otra persona reproduzca el análisis: proyecto QGIS, datos usados o instrucciones de acceso, resultados derivados, diseño cartográfico, tabla de parámetros, bitácora de QA/QC y fuentes con fecha de consulta. El informe debe separar hallazgos observados, inferencias, incertidumbre y recomendaciones. Un mapa claro es importante, pero la trazabilidad y la honestidad metodológica son esenciales.",
          "terminology": "Protocolo; trazabilidad; QA/QC; indicador; criterio; incertidumbre; reproducibilidad; salida derivada; evidencia; limitación.",
          "toolPath": "Usa herramientas vistas: administrador de fuentes, calculadora de campos, simbología, Caja de herramientas, diseño de impresión y exportación.",
          "macOsDiff": "El proyecto debe poder abrirse en macOS o Windows con rutas documentadas; evita depender de rutas absolutas personales o complementos no indispensables.",
          "winDiff": "El proyecto debe poder abrirse en macOS o Windows con rutas documentadas; evita depender de rutas absolutas personales o complementos no indispensables.",
          "steps": [
            "Redacta la pregunta, alcance espacial/temporal y decisión que el diagnóstico puede apoyar.",
            "Crea la estructura de carpetas y un inventario de datos con fuente, fecha, licencia, CRS, escala/resolución y limitaciones.",
            "Carga capas y valida geometrías, claves, unidades y valores faltantes.",
            "Define un CRS apropiado para el análisis y documenta transformaciones.",
            "Ejecuta solo las operaciones necesarias; guarda cada salida separada y registra parámetros.",
            "Construye una tabla de resultados con identificadores estables, unidades y criterios de interpretación documentados.",
            "Diseña un mapa con leyenda, escala, fuente, fecha, CRS y nota metodológica.",
            "Realiza QA/QC: conteos, campos, geometrías, rangos, valores nulos, visualización y contraste con referencia independiente.",
            "Escribe un informe que separe observaciones, inferencias, limitaciones e incertidumbre.",
            "Cierra y vuelve a abrir el proyecto desde la carpeta de entrega; comprueba que las capas se resuelven y que otra persona puede seguir la bitácora."
          ],
          "parameters": "Protocolo; CRS; formatos; parámetros de procesamiento; criterios de clasificación; controles; salidas; documentación; estructura de entrega.",
          "expectedResult": "Una carpeta de proyecto reproducible con proyecto QGIS, datos y resultados identificados, mapa final, bitácora y un informe breve.",
          "verification": "Una persona ajena al proyecto debe poder abrir el archivo, ubicar fuentes, repetir una operación clave y entender qué significan —y qué no significan— los resultados.",
          "errors": [
            {
              "issue": "Construir un índice opaco sin explicar variables o pesos.",
              "fix": "Publica fórmula, unidades, fuentes, pesos y limitaciones."
            },
            {
              "issue": "Presentar correlación espacial como causalidad.",
              "fix": "Separa descripción, hipótesis y evidencia causal; identifica qué datos faltan."
            },
            {
              "issue": "Entregar un mapa sin datos ni parámetros.",
              "fix": "Incluye archivos fuente o instrucciones de acceso, parámetros y bitácora de QA/QC."
            }
          ],
          "quiz": {
            "question": "¿Qué caracteriza un diagnóstico SIG ambiental reproducible?",
            "options": [
              "Un mapa atractivo sin fuentes.",
              "Un flujo documentado con datos, CRS, parámetros, controles, salidas y limitaciones verificables.",
              "Una sola operación ejecutada sin revisar resultados."
            ],
            "correct": 1,
            "explanation": "La reproducibilidad requiere trazabilidad de fuentes y decisiones, controles de calidad y comunicación transparente de limitaciones."
          },
          "sources": [
            {
              "title": "QGIS User Guide",
              "url": "https://docs.qgis.org/3.44/en/docs/user_manual/"
            },
            {
              "title": "OGC GeoPackage Standard",
              "url": "https://www.ogc.org/standard/geopackage/"
            },
            {
              "title": "PROJ Documentation",
              "url": "https://proj.org/"
            },
            {
              "title": "GDAL Documentation",
              "url": "https://gdal.org/"
            }
          ],
          "case": "Producto de referencia: mapa de priorización de estaciones/inspecciones en una subcuenca, con variables observadas, proximidad espacial, criterios explícitos y un anexo de incertidumbre.",
          "practice": "Entrega: proyecto .qgz, carpeta de datos, resultados GeoPackage/GeoTIFF, PDF cartográfico, tabla de parámetros, bitácora QA/QC y una página de conclusiones que diferencie evidencia de hipótesis."
        }
      ]
    }
  ]
};
