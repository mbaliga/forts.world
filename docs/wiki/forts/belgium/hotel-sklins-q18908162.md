# Hôtel Sklins

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hotel-sklins-q18908162` |
| Coordinates | 50.64698, 5.57735 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.64698/5.57735)) |
| Wikidata | [Q18908162](https://www.wikidata.org/wiki/Q18908162) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|private mansion |
| Administrative area | Liège |
| Inception | 1765 |
| Designations | protected heritage property in Wallonia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, marker 7, road 161, building 566, zone 7, retaining-wall 17, waterway 2, wall 23).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 11, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/167790622 historic=castle Q18908162 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 566 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 161 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.64698/5.57735) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|private mansion; sitelinks=3; wikidata:Q18908162 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/hotel-sklins-q18908162.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
