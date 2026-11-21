# Castro of Fazouro

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castro-of-fazouro-q8342716` |
| Coordinates | 43.60333, -7.29881 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.60333/-7.29881)) |
| Wikidata | [Q8342716](https://www.wikidata.org/wiki/Q8342716) (CC0) |
| Wikidata class | fort |
| Types | hillfort\|archaeological site |
| Administrative area | Foz |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 24 elements (outline 1, road 13, zone 7, coastline 1, water 2).

Evidence: documented 0, mapped 24, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/939982234 historic=ruins 49 m from ledger point
- origin moved 49 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":392,"medianInside":0,"medianOutside":0}
- sea-1: DEM check ok {"cells":277,"medianInside":0,"medianOutside":11.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.60333/-7.29881) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort\|archaeological site; sitelinks=4; wikidata:Q8342716 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 24 elements); data/traces/castro-of-fazouro-q8342716.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
