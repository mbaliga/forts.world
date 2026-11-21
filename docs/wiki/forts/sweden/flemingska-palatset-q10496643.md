# Flemingska palatset

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `flemingska-palatset-q10496643` |
| Coordinates | 59.32604, 18.07393 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.32604/18.07393)) |
| Wikidata | [Q10496643](https://www.wikidata.org/wiki/Q10496643) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building |
| Administrative area | Stockholm Municipality |
| Inception | 1650 |
| Designations | governmental listed building complex |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 381 elements (outline 1, marker 6, road 191, building 153, retaining-wall 12, coastline 8, wall 7, waterway 1, water 2).

Evidence: documented 0, mapped 381, inferred 0, derived 2; heights documented 85, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/166870842 historic=castle Q10496643 2 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":1,"medianInside":16,"medianOutside":20}
- sea-1: DEM check ok {"cells":85,"medianInside":9.5,"medianOutside":22.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.32604/18.07393) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building; sitelinks=3; wikidata:Q10496643 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 381 elements); data/traces/flemingska-palatset-q10496643.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
