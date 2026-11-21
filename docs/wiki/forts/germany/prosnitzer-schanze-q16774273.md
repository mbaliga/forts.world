# Prosnitzer Schanze

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `prosnitzer-schanze-q16774273` |
| Coordinates | 54.2715, 13.20075 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.2715/13.20075)) |
| Wikidata | [Q16774273](https://www.wikidata.org/wiki/Q16774273) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Gustow |
| Designations | archaeological monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 20 elements (outline 1, marker 1, waterway 5, water 2, zone 3, road 5, cliff 1, coastline 2).

Evidence: documented 0, mapped 20, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/319127728 historic=fort Q16774273 61 m from ledger point
- origin moved 58 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":316,"medianInside":-1,"medianOutside":0.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.2715/13.20075) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=2; wikidata:Q16774273 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 20 elements); data/traces/prosnitzer-schanze-q16774273.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
