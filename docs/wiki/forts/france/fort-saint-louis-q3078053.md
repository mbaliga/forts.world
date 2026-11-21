# Fort Saint-Louis

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-saint-louis-q3078053` |
| Coordinates | 43.1069, 5.93877 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.1069/5.93877)) |
| Wikidata | [Q3078053](https://www.wikidata.org/wiki/Q3078053) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Toulon |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 297 elements (outline 1, road 43, waterway 1, building 249, coastline 1, water 2).

Evidence: documented 0, mapped 297, inferred 0, derived 2; heights documented 4, inferred 0, unknown 245.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/145361807 historic=castle Q3078053 8 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":398,"medianInside":0,"medianOutside":10.9}
- sea-1: DEM check ok {"cells":251,"medianInside":0,"medianOutside":12.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.1069/5.93877) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q3078053 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 297 elements); data/traces/fort-saint-louis-q3078053.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
