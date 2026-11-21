# Palacio Zuloaga

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-zuloaga-q12269481` |
| Coordinates | 43.36281, -1.79145 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.36281/-1.79145)) |
| Wikidata | [Q12269481](https://www.wikidata.org/wiki/Q12269481) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|monument |
| Administrative area | Hondarribia |
| Designations | Basque government heritage site\|bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 365 elements (outline 1, marker 4, road 155, building 171, waterway 2, wall 24, coastline 1, water 2, zone 4, retaining-wall 1).

Evidence: documented 0, mapped 365, inferred 0, derived 1; heights documented 19, inferred 0, unknown 177.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/246332656 historic=castle Q12269481 5 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":1,"medianInside":-0.9,"medianOutside":12.8}
- 44 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.36281/-1.79145) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|monument; sitelinks=2; wikidata:Q12269481 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 365 elements); data/traces/palacio-zuloaga-q12269481.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
