# Grand Hotel Continental

> Romania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `grand-hotel-continental-q42772296` |
| Coordinates | 44.43702, 26.09816 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.43702/26.09816)) |
| Wikidata | [Q42772296](https://www.wikidata.org/wiki/Q42772296) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|hotel |
| Administrative area | Bucharest |
| Inception | sf. s |
| Designations | Historic Monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `website` | https://grand-hotel-continental-bucuresti.continentalhotels.ro/en |

## What the model contains

Tier **T1**, status `outline+walls`, 228 elements (outline 1, road 127, building 91, water 2, zone 2, wall 5).

Evidence: documented 0, mapped 228, inferred 0, derived 0; heights documented 74, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/164369116 historic=castle Q42772296 6 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site
- 44 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.43702/26.09816) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|hotel; sitelinks=2; wikidata:Q42772296 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 228 elements); data/traces/grand-hotel-continental-q42772296.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/romania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
