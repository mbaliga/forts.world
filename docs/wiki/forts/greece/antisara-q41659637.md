# Antisara

> Greece · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `antisara-q41659637` |
| Coordinates | 40.9241, 24.38941 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.9241/24.38941)) |
| Wikidata | [Q41659637](https://www.wikidata.org/wiki/Q41659637) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|archaeological site |
| Administrative area | Kavala |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 86 elements (marker 1, road 51, building 29, coastline 1, zone 1, water 3).

Evidence: documented 0, mapped 86, inferred 0, derived 3; heights documented 1, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":7,"medianInside":-0.3,"medianOutside":11.4}
- sea-1: DEM check ok {"cells":2,"medianInside":5.3,"medianOutside":11.4}
- sea-2: DEM check ok {"cells":69,"medianInside":0.2,"medianOutside":13.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.9241/24.38941) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|archaeological site; sitelinks=2; wikidata:Q41659637 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 86 elements); data/traces/antisara-q41659637.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
