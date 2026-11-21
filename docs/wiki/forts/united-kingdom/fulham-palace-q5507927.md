# Fulham Palace

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fulham-palace-q5507927` |
| Coordinates | 51.47054, -0.21565 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.47054/-0.21565)) |
| Wikidata | [Q5507927](https://www.wikidata.org/wiki/Q5507927) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|historic house museum\|independent museum |
| Administrative area | London Borough of Hammersmith and Fulham |
| Designations | Grade II* listed park and garden\|Grade I listed building |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `website` | https://www.fulhampalace.org/ |

## What the model contains

Tier **T1**, status `outline+walls`, 111 elements (outline 1, road 92, building 12, waterway 2, water 1, wall 2, zone 1).

Evidence: documented 0, mapped 111, inferred 0, derived 0; heights documented 2, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3609581 historic=castle Q5507927 2 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.47054/-0.21565) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|historic house museum\|independent museum; sitelinks=7; wikidata:Q5507927 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 111 elements); data/traces/fulham-palace-q5507927.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
