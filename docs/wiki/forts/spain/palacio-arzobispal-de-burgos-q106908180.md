# Palacio Arzobispal de Burgos

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-arzobispal-de-burgos-q106908180` |
| Coordinates | 42.33907, -3.70675 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.33907/-3.70675)) |
| Wikidata | [Q106908180](https://www.wikidata.org/wiki/Q106908180) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|archbishop's palace |
| Administrative area | Burgos |
| Inception | 1916 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 368 elements (outline 1, marker 11, road 320, wall 51, building 142, zone 12, retaining-wall 19, waterway 3, water 1).

Evidence: documented 0, mapped 368, inferred 0, derived 0; heights documented 87, inferred 0, unknown 103.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1232020 historic=castle Q106908180 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 142 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 320 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.33907/-3.70675) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|archbishop's palace; sitelinks=1; wikidata:Q106908180 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 368 elements); data/traces/palacio-arzobispal-de-burgos-q106908180.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
