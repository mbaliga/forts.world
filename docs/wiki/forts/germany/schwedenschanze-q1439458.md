# Schwedenschanze

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schwedenschanze-q1439458` |
| Coordinates | 54.3332, 13.0785 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.3332/13.0785)) |
| Wikidata | [Q1439458](https://www.wikidata.org/wiki/Q1439458) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Stralsund |
| Designations | archaeological monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 259 elements (outline 1, road 121, building 121, zone 9, cliff 1, wall 1, coastline 2, water 3).

Evidence: documented 0, mapped 259, inferred 0, derived 2; heights documented 29, inferred 0, unknown 93.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/79795613 historic=fort Q1439458 20 m from ledger point
- origin moved 20 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":9,"medianInside":0.9,"medianOutside":12.4}
- sea-1: DEM check ok {"cells":28,"medianInside":0,"medianOutside":12.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.3332/13.0785) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=1; wikidata:Q1439458 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 259 elements); data/traces/schwedenschanze-q1439458.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
