# EARTH//TRACE — The Planet Leaves Evidence

**NASA Space Apps Challenge 2026 · Desafío de Ciencias de la Tierra · Santiago, República Dominicana · Equipo Earth Explorer 67**

🌍 Plataforma: https://z4el5.github.io/earth-trace/

EARTH//TRACE es una plataforma web gamificada para investigar cómo cambia la Tierra en 110 países: **qué cambia, dónde, cuánto y si es estadísticamente significativo**, con datos de satélites de la NASA y fuentes oficiales de cada país.

## Qué incluye

| Parte | Qué hace |
|---|---|
| `index.html` | La plataforma completa: globo 3D; **Earth Explorer** (110 países, preguntas en lenguaje natural, visor satelital antes/después con NASA GIBS); **Discovery Center** (4 experimentos interactivos); **Game** (3 casos de detective en 5 fases); **Data Lab** (Mann-Kendall y Sen sobre CSV de Giovanni/AppEEARS, comparación de dos series); **Global Case Files**; XP, rangos, insignias, pasaporte y "Mi base". |
| `api/v1/` | **API abierta** en JSON estático: `countries.json`, `profiles.json`, `regions.json`, `datasets.json`, `categories.json`. |
| `widget/` | **Plugin**: muestra la ficha de un país en cualquier web con dos líneas de código (ver `widget/ejemplo.html`). |
| `skill/earth-trace/` | **Skill** para asistentes de IA (formato Agent Skills): instrucciones + `scripts/tendencia.py` (Mann-Kendall y pendiente de Sen). |
| `python/procesar_datos.py` | Descarga datos de la NASA con `earthaccess` y calcula tendencias. |
| `data/fuentes_por_pais.csv` | Las 110 fuentes oficiales investigadas por el equipo. |
| `docs/USER_GUIDE.md` · `docs/MANUAL_USUARIO.md` | Manual de usuario en inglés y español (también dentro de la plataforma, sección Guide). |
| `docs/REVISION_FUENTES.md` | Enlaces con observaciones que el equipo debe confirmar. |
| `prototipos/juego-v1.html` | Primer prototipo del juego (ya integrado en la sección Game). |

## Publicar en GitHub Pages

1. Crea un repositorio **público** llamado `earth-trace` y sube todo el contenido de esta carpeta.
2. En **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`. Guarda.
3. En unos minutos la plataforma estará en `https://z4el5.github.io/earth-trace/`.
5. Enlaza el repositorio en la página del proyecto de Space Apps.

> En GitHub Pages las imágenes satelitales de NASA GIBS se cargan directamente. Las preguntas usan el motor local de datos (sin IA), porque una clave de API no puede publicarse en una página pública.

## Datos de la NASA usados

Landsat 8–9 / HLS · MODIS (MOD11A2, MOD13Q1, MOD10A1, MCD64A1) · GPM IMERG · SMAP · GRACE / GRACE-FO · FIRMS · Jason-3 / Sentinel-6 · MUR SST · SWOT · ICESat-2 · OMPS / OMI · NSIDC Sea Ice Index · NISAR · imágenes de NASA GIBS / Worldview.

Fuentes complementarias (no NASA, siempre identificadas): servicios meteorológicos nacionales de los 110 países, NOAA, KNMI y la Agencia Espacial Canadiense.

## Método

1. **Satélites de la NASA:** miden el fenómeno igual en todos los países y durante décadas.
2. **Servicios nacionales:** aportan estaciones en tierra para comparar y validar.
3. **Estadística:** prueba de Mann-Kendall y pendiente de Sen para saber si un cambio es una tendencia real o variación normal.

## Estado honesto del proyecto

- ✅ 110 países con fuente oficial, fenómeno, pregunta de investigación y datos NASA asignados.
- ✅ Visor satelital, API, plugin, Skill, gamificación y exportación.
- ✅ Data Lab funcional: analiza cualquier serie real descargada de NASA Giovanni o AppEEARS.
- ✅ Caso de Groenlandia y testigo de la Antártida con datos reales de NASA JPL (GRACE / GRACE-FO). Ver `docs/DATOS.md`.
- ⏳ Casos de Enriquillo y Aral: valores ilustrativos, marcados así en la plataforma.
- ⏳ Procesar series por país y marcarlas como analizadas en la API.
- ⏳ Los fenómenos de cada país deben verificarse y citarse (ver `docs/REVISION_FUENTES.md`).

## Uso de inteligencia artificial

Siguiendo las reglas de Space Apps, declaramos el uso de IA:

- **Claude (Anthropic)** se usó para: estructurar las ideas del proyecto, generar el código base de la plataforma, la API, el plugin y el Skill, redactar textos y analogías, y revisar las fuentes que reunió el equipo.
- Dentro de la plataforma (solo en la versión de claude.ai), las preguntas se responden con Claude a partir de los datos de la plataforma, y cada respuesta lo indica.
- La investigación de fuentes oficiales, las decisiones de diseño y la validación de datos fueron hechas por el equipo.

## Licencia

Código: MIT. Datos de la NASA: dominio público según la política de datos abiertos de la NASA. Las fuentes nacionales conservan sus propias condiciones de uso.
