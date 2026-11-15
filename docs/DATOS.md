# Datos usados en la plataforma

## Datos reales de la NASA

**Groenlandia y Antártida (juego, caso 3 y testigo; Data Lab).** Promedios anuales de la anomalía de masa de hielo, calculados a partir de los valores mensuales de:

> Wiese, D. N., D.-N. Yuan, C. Boening, F. W. Landerer y M. M. Watkins (2022). *JPL GRACE and GRACE-FO Mascon Ocean, Ice, and Hydrology Equivalent Water Height RL06.1M CRI Filtered Version 3.0*. PO.DAAC. doi:10.5067/TEMSC-3MJ62

Archivos: `greenland_mass_200204_202404.txt` y `antarctica_mass_200204_202404.txt` (NASA Scientific Visualization Studio, Vital Signs). Se excluyen 2002, 2017 y 2018 por estar incompletos (fin de GRACE e inicio de GRACE-FO). La tendencia de Groenlandia que calcula la plataforma (≈ −267 Gt/año) coincide con la publicada por NASA JPL (−267,49 ± 21 Gt/año).

## Valores ilustrativos

**Lago Enriquillo y Mar de Aral (casos 1 y 2).** Reproducen las tendencias documentadas, pero no son una serie oficial. Para reemplazarlos: medir la superficie de agua cada año con Landsat (por ejemplo, con AppEEARS o Giovanni), guardar un CSV `year,value` y cambiar los valores en `index.html` (buscar `id:"enriquillo"` e `id:"aral"`). La plataforma los marca como «valores ilustrativos».

## Imágenes satelitales

NASA GIBS (WMS), mismas capas que NASA Worldview: MODIS Terra Corrected Reflectance, Land Surface Temperature, NDVI 8-Day, Snow Extent 8-Day y Thermal Anomalies.
