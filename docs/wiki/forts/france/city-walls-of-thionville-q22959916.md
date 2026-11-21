# City walls of Thionville

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-thionville-q22959916` |
| Coordinates | 49.35806, 6.16833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.35806/6.16833)) |
| Wikidata | [Q22959916](https://www.wikidata.org/wiki/Q22959916) (CC0) |
| Wikidata class | fort |
| Types | compound (fortification) |
| Administrative area | Thionville |
| Designations | listed in the general inventory of cultural heritage\|classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 7, road 281, water 1, building 577, wall 12, zone 9, waterway 2, retaining-wall 5).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 0, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/223068136 historic=castle 15 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 577 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 281 mapped (trace size budget); minor lanes are not drawn
- origin moved 15 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.35806/6.16833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; compound (fortification); sitelinks=2; wikidata:Q22959916 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/city-walls-of-thionville-q22959916.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
