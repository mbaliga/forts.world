# Westhove Castle

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `westhove-castle-q2200004` |
| Coordinates | 51.57111, 3.5219 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.57111/3.5219)) |
| Wikidata | [Q2200004](https://www.wikidata.org/wiki/Q2200004) (CC0) |
| Wikidata class | castle |
| Types | castle\|château\|garden\|youth hostel |
| Administrative area | Veere |
| Inception | 1250 |
| Designations | Rijksmonument |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `description` | Historische buitenplaats |

## What the model contains

Tier **T1**, status `outline-only`, 298 elements (outline 1, road 159, water 20, coastline 1, zone 66, building 48, waterway 3).

Evidence: documented 0, mapped 298, inferred 0, derived 2; heights documented 0, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6761983 historic=castle 71 m from ledger point
- origin moved 32 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":29,"medianInside":0.8,"medianOutside":6.3}
- sea-1: DEM check ok {"cells":15,"medianInside":2.3,"medianOutside":6.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.57111/3.5219) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château\|garden\|youth hostel; sitelinks=5; wikidata:Q2200004 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 298 elements); data/traces/westhove-castle-q2200004.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
