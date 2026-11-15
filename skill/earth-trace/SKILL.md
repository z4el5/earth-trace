---
name: earth-trace
description: Investigate how a country's environment is changing using the EARTH//TRACE open API (NASA Space Apps 2026). Use when someone asks what is changing in a country, which official agency measures it, which NASA datasets apply, or whether a change is a statistically significant trend.
---

# EARTH//TRACE skill

## What this skill does
Answers "what changes, where, how much, and is it significant?" for the 110 countries in EARTH//TRACE, using its open JSON API and NASA datasets.

## Steps
1. Find the country code (ISO-2) in `https://z4el5.github.io/earth-trace/api/v1/countries.json`.
2. Read `https://z4el5.github.io/earth-trace/api/v1/profiles.json` and take `profiles[CODE]`: phenomena, research question, official agency and NASA datasets.
3. If the user asks "how much" or "is it significant", run `scripts/tendencia.py` on the time series (CSV with columns year,value). It applies the Mann-Kendall test and Sen's slope.
4. Answer in plain language, include one everyday analogy, cite the NASA dataset and the official agency, and state limitations.

## Rules
- Never invent numbers. Without a time series, say a trend test is needed and point to the EARTH//TRACE Data Lab.
- Keep NASA data and complementary sources (national services, NOAA, KNMI, CSA) clearly labeled.
- Link to NASA Worldview using `worldview_url` so the user can see the imagery.
