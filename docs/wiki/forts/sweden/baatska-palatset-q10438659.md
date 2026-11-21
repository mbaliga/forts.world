# Bååtska palatset

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `baatska-palatset-q10438659` |
| Coordinates | 59.33055, 18.07644 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.33055/18.07644)) |
| Wikidata | [Q10438659](https://www.wikidata.org/wiki/Q10438659) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building\|architectural ensemble |
| Administrative area | Stockholm Municipality |
| Inception | 1669 |
| Designations | individual listed building complex |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 270 elements (outline 1, marker 2, road 212, building 46, coastline 2, wall 2, zone 3, water 2).

Evidence: documented 0, mapped 270, inferred 0, derived 2; heights documented 42, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2171352 historic=castle Q10438659 4 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":34,"medianInside":8,"medianOutside":19.1}
- sea-1: DEM check failed {"cells":73,"medianInside":12,"medianOutside":19.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.33055/18.07644) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building\|architectural ensemble; sitelinks=4; wikidata:Q10438659 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 270 elements); data/traces/baatska-palatset-q10438659.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
