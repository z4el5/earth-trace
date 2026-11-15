# Manual de usuario · EARTH//TRACE

Plataforma: https://z4el5.github.io/earth-trace/

## 🚀 Inicio rápido (3 minutos)

¿Es tu primera vez? Sigue estos cinco pasos y habrás usado todas las funciones clave.

1. Abre **Earth Explorer** en el menú de arriba.
2. Elige una región en las pestañas (por ejemplo, **El Caribe**) y toca un país en el mapa. Tu pasaporte recibe su primer sello.
3. En la ficha del país, desliza la barra de la **Vista satelital** para comparar dos años.
4. Escribe una pregunta en **Pregúntale a EARTH//TRACE**, como «¿Qué está cambiando aquí?».
5. Abre el **Game** y resuelve el Caso 1 para descubrir si un cambio es real.

## 🧭 Cómo moverte

Todo está en la barra superior.

1. **Menú:** Inicio, las cinco secciones, la zona de desarrolladores y este manual.
2. **Rango y XP:** tu progreso. Tócalo para abrir **Mi base**.
3. **EN / ES:** cambia toda la plataforma entre inglés y español.
4. **◐:** cambia entre modo claro y oscuro.
5. En el celular, desliza el menú hacia los lados para ver todas las secciones.

## 🌍 01 · Earth Explorer

Descubre qué está cambiando en 110 países, quién lo mide y cómo lo ven los satélites.

1. Elige una pestaña de región. Los números muestran cuántos países has sellado.
2. Los colores del mapa son tipos de fenómeno. Toca un color de la leyenda para filtrar y leer su analogía.
3. Toca un país (las islas pequeñas son círculos punteados) o búscalo por nombre o institución.
4. Lee la ficha: pregunta de investigación, qué está cambiando, institución oficial y datos de la NASA.
5. En la **Vista satelital**, elige una capa (color real, temperatura, vegetación, nieve, incendios), cambia los dos años y desliza la barra. Si hay nubes, prueba otro año o ábrela en NASA Worldview.
6. Toca **Guardar en mi base** para conservar el país.

## 💬 Hacer preguntas

La caja de preguntas entiende lenguaje cotidiano.

1. Menciona un país o un fenómeno: «¿Quién mide el clima en Kenia?», «¿Qué países pierden hielo?».
2. La plataforma abre sola el país que mencionas.
3. Las respuestas usan solo los datos de la plataforma y siempre incluyen una analogía.
4. Toca una pregunta sugerida si no sabes por dónde empezar.

## 💡 02 · Discovery Center

Cuatro experimentos cortos para entender cómo funciona el planeta.

1. **Lagos que desaparecen:** mueve entradas y salidas y pulsa «Simular 20 años».
2. **Pesar el agua desde el espacio:** pulsa «Más agua» y «Sequía» para ver cómo funciona GRACE.
3. **Cómo ve un satélite las plantas:** prueba los botones de bosque, cultivo, desierto y agua.
4. **¿Real o ruido?:** en cinco rondas, elige la gráfica con tendencia real.
5. Cada experimento completado suma XP.

## 🕵 03 · Juego de detective

Cada caso tiene cinco fases y responde las cuatro preguntas del reto.

1. **Escena:** lee el misterio y tu misión.
2. **Pistas:** elige el instrumento que explica el caso. Una pista equivocada te da una ayuda.
3. **Testigos:** compara con otro lugar y mira si coinciden o se contradicen.
4. **Laboratorio:** apuesta «cambio real» o «solo ruido» y mira el veredicto estadístico. Toca «Escuchar la tendencia» para oírla.
5. **Expediente:** el caso se cierra con su sello y pasa a Global Case Files.

## 📊 04 · Data Lab

Analiza cualquier serie real. Aquí compruebas con estadística si un cambio es significativo.

1. Consigue datos: en NASA Giovanni elige una variable, dibuja el área, elige «Time Series, Area-Averaged», pulsa «Plot Data» y descarga el CSV.
2. En la Serie A toca **Subir CSV**, o pega dos columnas (año o fecha, valor). Los datos mensuales se promedian por año automáticamente.
3. Opcional: carga la Serie B para comparar dos lugares o dos variables.
4. Elige el período con los dos menús de año.
5. Lee las tarjetas: tasa por año (Sen), cambio total, valor p y el semáforo del veredicto.
6. Toca **Guardar como expediente** o descarga el CSV.

## 📁 05 · Global Case Files

La biblioteca de todas las investigaciones.

1. **Casos del juego:** se desbloquean al resolverlos.
2. **Mis expedientes:** lo que guardaste en el Data Lab. Descárgalos en Markdown o bórralos.
3. **Expedientes por país:** uno abierto para cada uno de los 110 países, listo para descargar.

## 🎒 Mi base, XP e insignias

Tu progreso y tus exportaciones.

1. Ganas XP sellando países, comparando imágenes, preguntando, resolviendo casos y completando experimentos.
2. Los rangos van de Cadete espacial a Guardián del planeta. Las insignias muestran tus logros.
3. **Llévatelo a tu espacio de trabajo:** descarga tus países guardados en Markdown (Notion, Google Docs), CSV (Excel, Sheets) o JSON (código).
4. El progreso se guarda solo en este navegador. No hace falta crear cuenta.

## 🧩 API, plugin y Skill

Para docentes, medios y desarrolladores que quieran reutilizar los datos.

1. **API:** cinco archivos JSON con todos los datos. Pruébalos en la zona de desarrolladores.
2. **Plugin:** elige un país, copia las dos líneas de código y pégalas en cualquier web.
3. **Skill:** descarga SKILL.md para enseñarle a un asistente de IA a usar EARTH//TRACE.

## 📖 Glosario

- **Tendencia:** La dirección general de una serie durante muchos años, más allá de las subidas y bajadas.
- **Significativo:** Un cambio tan fuerte y constante que es muy improbable que sea casualidad.
- **Valor p:** La probabilidad de ver un patrón así de fuerte por pura casualidad. Por debajo de 0,05 lo llamamos significativo.
- **Prueba de Mann-Kendall:** Comprueba si la mayoría de los valores posteriores son mayores (o menores) que los anteriores.
- **Pendiente de Sen:** El cambio típico por año, sin dejarse llevar por valores extremos.
- **Anomalía:** La diferencia respecto a un valor de referencia, como la masa de hielo comparada con 2002.
- **NDVI:** Un índice de vegetación de −1 a 1. Más alto significa plantas más verdes y sanas.
- **GRACE / GRACE-FO:** Satélites gemelos que pesan el agua y el hielo a través de la gravedad.
- **Serie de tiempo:** La misma medición repetida en el tiempo, por ejemplo una vez al año.
- **Gt (gigatonelada):** Mil millones de toneladas, aproximadamente un kilómetro cúbico de agua.

## ❓ Preguntas frecuentes

**¿Necesito una cuenta?**

No. Todo funciona en el navegador y tu progreso se guarda en tu propio dispositivo.

**¿Los datos son reales?**

Las imágenes satelitales llegan en vivo desde NASA GIBS. El caso de Groenlandia y el testigo de la Antártida usan la serie oficial de NASA JPL (GRACE). Los casos 1 y 2 usan valores ilustrativos de tendencias documentadas y están marcados así. En el Data Lab puedes analizar cualquier serie real que descargues.

**La imagen satelital sale vacía o con nubes.**

Cada imagen muestra un solo día. Cambia el año o toca «Abrir en NASA Worldview» para elegir otro día.

**¿Por qué aparecen servicios meteorológicos nacionales?**

Los satélites miden todos los países de la misma manera; las estaciones en tierra confirman lo que ven. Las fuentes que no son de la NASA siempre están identificadas.

**¿Puedo usarlo en clase?**

Sí. Una clase sugerida: cada estudiante explora un país, hace dos preguntas, resuelve un caso del juego y presenta su expediente.

**¿Cómo reinicio mi progreso?**

En Mi base, al final, toca «Reiniciar mi progreso».
