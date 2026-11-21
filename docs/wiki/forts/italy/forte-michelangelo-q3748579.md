# Forte Michelangelo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-michelangelo-q3748579` |
| Coordinates | 42.09035, 11.79093 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.09035/11.79093)) |
| Wikidata | [Q3748579](https://www.wikidata.org/wiki/Q3748579) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Civitavecchia |
| Inception | 1508 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 163 elements (outline 1, marker 3, road 119, building 28, zone 4, wall 1, retaining-wall 1, coastline 1, water 5).

Evidence: documented 0, mapped 163, inferred 0, derived 5; heights documented 2, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/189913 historic=castle Q3748579 10 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":85,"medianInside":0,"medianOutside":3}
- sea-1: DEM check ok {"cells":40,"medianInside":0,"medianOutside":2.6}
- sea-2: DEM check ok {"cells":3,"medianInside":0,"medianOutside":2.2}
- sea-3: DEM check ok {"cells":18,"medianInside":0,"medianOutside":2.4}
- sea-4: DEM check ok {"cells":10,"medianInside":0,"medianOutside":2.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.09035/11.79093) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q3748579 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 163 elements); data/traces/forte-michelangelo-q3748579.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
