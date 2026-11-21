# Belém Tower

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `belem-tower-q215003` |
| Coordinates | 38.69139, -9.21583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.69139/-9.21583)) |
| Wikidata | [Q215003](https://www.wikidata.org/wiki/Q215003) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|cultural heritage\|tourist attraction\|architectural heritage monument\|fort |
| Administrative area | Belém |
| Inception | 1515 |
| Designations | part of UNESCO World Heritage Site\|National Monument of Portugal |
| UNESCO WHC id | 263bis-002 |
| Wikipedia language editions | 57 |
| OSM `historic` | fort |
| OSM `heritage` | 1 |
| OSM `description` | Monumento Nacional e Património Mundial da UNESCO é um belo exemplar da arquitectura militar em Portugal.Construída em honra do santo patrono de Lisboa,S. Vicente,no local onde estava ancorada a Grande Nau,que cruzava fogo com a fortaleza de S. Sebast |

## What the model contains

Tier **T1**, status `outline+walls`, 115 elements (outline 1, marker 5, road 63, building 16, zone 15, waterway 3, coastline 9, wall 1, water 2).

Evidence: documented 0, mapped 115, inferred 0, derived 1; heights documented 9, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/24341353 historic=fort Q215003 33 m from ledger point
- origin moved 32 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":921,"medianInside":0,"medianOutside":6.3}
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.69139/-9.21583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|cultural heritage\|tourist attraction\|architectural heritage monument\|fort; sitelinks=57; wikidata:Q215003 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 115 elements); data/traces/belem-tower-q215003.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
