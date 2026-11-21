# Rio Castle

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rio-castle-q4026037` |
| Coordinates | 38.3114, 21.7812 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.3114/21.7812)) |
| Wikidata | [Q4026037](https://www.wikidata.org/wiki/Q4026037) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Municipality of Patras |
| Inception | 1499 |
| Designations | ancient monument in Greece\|protected building in Greece\|archaeological site in Greece |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://efaacha.culture.gov.gr/frourio-riou/ |

## What the model contains

Tier **T1**, status `outline+walls`, 97 elements (outline 1, marker 1, road 54, wall 3, coastline 2, building 22, zone 13, water 1).

Evidence: documented 0, mapped 97, inferred 0, derived 1; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/885311452 historic=castle Q4026037 62 m from ledger point
- origin moved 61 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1985,"medianInside":0,"medianOutside":0.6}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.3114/21.7812) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=9; wikidata:Q4026037 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 97 elements); data/traces/rio-castle-q4026037.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
