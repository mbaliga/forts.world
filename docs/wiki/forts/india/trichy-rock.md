# Tiruchirappalli Rock Fort

> India · Tamil Nadu · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `trichy-rock` |
| Coordinates | 10.828, 78.697 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/10.828/78.697)) |
| Wikidata | [Q7809304](https://www.wikidata.org/wiki/Q7809304) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Tiruchirappalli |
| Wikipedia language editions | 7 |
| Programme catalogue | confidence low, significance rank 3229; sources catalogue:trichy-rock |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 184 elements (outline 1, road 52, cliff 3, building 862, wall 2, water 3, waterway 1, zone 2).

Evidence: documented 0, mapped 184, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/100787187 historic=fort Q7809304 39 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 862 mapped (trace size budget); the rest of the town is not drawn
- origin moved 36 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/10.828/78.697) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 184 elements); data/traces/trichy-rock.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
