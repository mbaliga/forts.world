# Rabí Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rabi-castle-q366087` |
| Coordinates | 49.27878, 13.61837 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.27878/13.61837)) |
| Wikidata | [Q366087](https://www.wikidata.org/wiki/Q366087) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Rabí |
| Inception | 1400 |
| Designations | national cultural monument of the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www.hrad-rabi.cz |

## What the model contains

Tier **T1**, status `outline+walls`, 343 elements (outline 1, marker 4, road 100, zone 19, building 176, waterway 3, wall 32, cliff 6, retaining-wall 2).

Evidence: documented 0, mapped 343, inferred 0, derived 0; heights documented 109, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31009452 historic=castle Q366087 52 m from ledger point
- origin moved 51 m from the ledger point to the outline centroid
- 23 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.27878/13.61837) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=8; wikidata:Q366087 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 343 elements); data/traces/rabi-castle-q366087.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
