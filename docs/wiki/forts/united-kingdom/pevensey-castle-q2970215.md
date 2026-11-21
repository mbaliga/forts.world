# Pevensey Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pevensey-castle-q2970215` |
| Coordinates | 50.8192, 0.33311 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8192/0.33311)) |
| Wikidata | [Q2970215](https://www.wikidata.org/wiki/Q2970215) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Pevensey |
| Inception | 1066 |
| Designations | scheduled monument |
| Wikipedia language editions | 17 |
| OSM `historic` | ruins |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/pevensey-castle |

## What the model contains

Tier **T1**, status `outline+walls`, 104 elements (outline 1, marker 2, road 48, waterway 6, zone 11, building 14, wall 21, water 1).

Evidence: documented 0, mapped 104, inferred 0, derived 0; heights documented 2, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/67358 historic=ruins Q2970215 76 m from ledger point
- origin moved 64 m from the ledger point to the outline centroid
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8192/0.33311) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=17; wikidata:Q2970215 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 104 elements); data/traces/pevensey-castle-q2970215.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
