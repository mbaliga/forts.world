# Real Cittadella

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `real-cittadella-q3930982` |
| Coordinates | 38.18801, 15.56685 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.18801/15.56685)) |
| Wikidata | [Q3930982](https://www.wikidata.org/wiki/Q3930982) (CC0) |
| Wikidata class | fort |
| Types | star fort |
| Administrative area | Messina |
| Inception | 1680 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 51 elements (outline 1, marker 1, road 10, zone 13, building 14, coastline 1, wall 9, water 2).

Evidence: documented 0, mapped 51, inferred 0, derived 2; heights documented 0, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4003961 historic=fort Q3930982 29 m from ledger point
- origin moved 37 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":89,"medianInside":0,"medianOutside":5.4}
- sea-1: DEM check ok {"cells":19,"medianInside":0.4,"medianOutside":5.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.18801/15.56685) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; star fort; sitelinks=3; wikidata:Q3930982 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 51 elements); data/traces/real-cittadella-q3930982.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
