# Arvfurstens palats

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arvfurstens-palats-q717105` |
| Coordinates | 59.32903, 18.06756 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.32903/18.06756)) |
| Wikidata | [Q717105](https://www.wikidata.org/wiki/Q717105) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|building of public administration |
| Administrative area | Stockholm Municipality |
| Inception | 1794 |
| Designations | governmental listed building complex |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, road 235, coastline 8, building 42, waterway 3, wall 6, retaining-wall 5, water 2, zone 9).

Evidence: documented 0, mapped 311, inferred 0, derived 1; heights documented 38, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/279567 historic=castle Q717105 10 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":20,"medianInside":12.4,"medianOutside":20.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.32903/18.06756) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|building of public administration; sitelinks=11; wikidata:Q717105 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/arvfurstens-palats-q717105.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
