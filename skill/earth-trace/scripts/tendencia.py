"""Mann-Kendall + pendiente de Sen para una serie anual (CSV con columnas year,value).
Uso: python tendencia.py serie.csv
"""
import csv, math, sys
from statistics import median

def mann_kendall(y):
    n = len(y)
    s = sum((y[j] > y[i]) - (y[j] < y[i]) for i in range(n - 1) for j in range(i + 1, n))
    ties = {}
    for v in y:
        ties[v] = ties.get(v, 0) + 1
    tie = sum(t * (t - 1) * (2 * t + 5) for t in ties.values() if t > 1)
    var = (n * (n - 1) * (2 * n + 5) - tie) / 18
    z = (s - 1) / math.sqrt(var) if s > 0 else (s + 1) / math.sqrt(var) if s < 0 else 0.0
    p = math.erfc(abs(z) / math.sqrt(2))
    return s, z, p

def sen_slope(x, y):
    return median((y[j] - y[i]) / (x[j] - x[i]) for i in range(len(x) - 1) for j in range(i + 1, len(x)))

if __name__ == "__main__":
    rows = list(csv.DictReader(open(sys.argv[1], encoding="utf-8")))
    x = [int(r["year"]) for r in rows]
    y = [float(r["value"]) for r in rows]
    s, z, p = mann_kendall(y)
    slope = sen_slope(x, y)
    nivel = "muy fuerte" if p < 0.01 else "sólida" if p < 0.05 else "débil" if p < 0.1 else "no se distingue del ruido"
    print(f"n={len(y)}  S={s}  Z={z:.2f}  p={p:.4f}  pendiente de Sen={slope:.4f}/año  evidencia: {nivel}")
