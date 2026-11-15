"""
EARTH//TRACE — Procesamiento de datos NASA
NASA Space Apps Challenge 2026 · Santiago, RD

Qué hace:
  1. (Opcional) Descarga datos reales de la NASA con `earthaccess`.
  2. Calcula la tendencia con la prueba de Mann-Kendall y la pendiente de Sen
     (los MISMOS cálculos que hace el juego en JavaScript).
  3. Guarda un JSON por caso, listo para pegar en el juego.

Instalar:
  pip install numpy scipy xarray netCDF4 earthaccess

Uso rápido con un CSV propio (columnas: year,value):
  python procesar_datos.py --csv enriquillo.csv --id enriquillo --unit km2 --src "Landsat / HLS"

Uso con GRACE-FO (Groenlandia), requiere cuenta gratuita de Earthdata:
  python procesar_datos.py --grace --id greenland
"""
import argparse
import json
import math

import numpy as np
from scipy.stats import norm


# ---------------------------------------------------------------
# Estadística (idéntica a la del juego)
# ---------------------------------------------------------------
def mann_kendall(y):
    """Prueba de Mann-Kendall con corrección por empates."""
    y = np.asarray(y, dtype=float)
    n = len(y)
    s = 0
    for i in range(n - 1):
        s += np.sign(y[i + 1:] - y[i]).sum()
    _, counts = np.unique(y, return_counts=True)
    ties = sum(t * (t - 1) * (2 * t + 5) for t in counts if t > 1)
    var_s = (n * (n - 1) * (2 * n + 5) - ties) / 18
    if s > 0:
        z = (s - 1) / math.sqrt(var_s)
    elif s < 0:
        z = (s + 1) / math.sqrt(var_s)
    else:
        z = 0.0
    p = 2 * (1 - norm.cdf(abs(z)))
    return {"S": int(s), "Z": float(z), "p": float(p)}


def sen_slope(x, y):
    """Pendiente de Sen: mediana de todas las pendientes entre pares."""
    x, y = np.asarray(x, float), np.asarray(y, float)
    slopes = [(y[j] - y[i]) / (x[j] - x[i])
              for i in range(len(x) - 1) for j in range(i + 1, len(x))]
    slope = float(np.median(slopes))
    intercept = float(np.median(y - slope * x))
    return {"slope": slope, "intercept": intercept}


def analizar(years, values):
    mk = mann_kendall(values)
    sen = sen_slope(years, values)
    if mk["p"] < 0.01:
        nivel = "muy fuerte"
    elif mk["p"] < 0.05:
        nivel = "sólida"
    elif mk["p"] < 0.1:
        nivel = "débil"
    else:
        nivel = "no se distingue del ruido"
    return {**mk, **sen,
            "cambio_total": sen["slope"] * (years[-1] - years[0]),
            "evidencia": nivel}


# ---------------------------------------------------------------
# Fuentes de datos
# ---------------------------------------------------------------
def leer_csv(path):
    data = np.genfromtxt(path, delimiter=",", names=True)
    return data["year"].astype(int).tolist(), data["value"].astype(float).tolist()


def grace_groenlandia():
    """
    Masa de hielo de Groenlandia con GRACE / GRACE-FO (JPL Mascons).
    Devuelve el promedio anual de la anomalía de masa en Gt.
    """
    import earthaccess
    import xarray as xr

    earthaccess.login()  # pide usuario y contraseña de Earthdata
    results = earthaccess.search_data(
        short_name="TELLUS_GRAC-GRFO_MASCON_CRI_GRID_RL06.3_V4",
        cloud_hosted=True,
    )
    files = earthaccess.download(results, "./datos_nasa")
    ds = xr.open_dataset(files[0])

    # Caja aproximada de Groenlandia; para el análisis final usar la máscara de tierra
    box = ds["lwe_thickness"].sel(lat=slice(59, 84), lon=slice(285, 350))
    # lwe_thickness está en cm de agua equivalente -> masa (Gt)
    area = (111_000 ** 2) * 0.25 * np.cos(np.deg2rad(box.lat))  # m² por celda de 0.5°
    masa_gt = (box / 100 * area).sum(dim=["lat", "lon"]) / 1e12
    anual = masa_gt.groupby("time.year").mean()
    years = anual.year.values.astype(int).tolist()
    values = (anual.values - anual.values[0]).round(1).tolist()
    return years, values, "GRACE / GRACE-FO (NASA JPL Mascons)", "Gt"


# ---------------------------------------------------------------
# Programa principal
# ---------------------------------------------------------------
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--csv")
    ap.add_argument("--grace", action="store_true")
    ap.add_argument("--id", required=True)
    ap.add_argument("--unit", default="")
    ap.add_argument("--src", default="NASA")
    a = ap.parse_args()

    if a.grace:
        years, values, src, unit = grace_groenlandia()
    elif a.csv:
        years, values = leer_csv(a.csv)
        src, unit = a.src, a.unit
    else:
        ap.error("Usa --csv o --grace")

    res = analizar(years, values)
    salida = {"id": a.id, "src": src, "unit": unit,
              "years": years, "values": values, "analisis": res}
    with open(f"{a.id}.json", "w", encoding="utf-8") as f:
        json.dump(salida, f, ensure_ascii=False, indent=2)

    print(f"Guardado {a.id}.json")
    print(f"Tendencia: {res['slope']:.2f} {unit}/año · Z = {res['Z']:.2f} · "
          f"p = {res['p']:.4f} · evidencia {res['evidencia']}")


if __name__ == "__main__":
    main()
