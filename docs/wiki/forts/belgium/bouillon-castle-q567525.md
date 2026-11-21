# Bouillon Castle

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bouillon-castle-q567525` |
| Coordinates | 49.7932, 5.0662 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.7932/5.0662)) |
| Wikidata | [Q567525](https://www.wikidata.org/wiki/Q567525) (CC0) |
| Wikidata class | castle |
| Types | château\|hill castle |
| Designations | Exceptional heritage property of Wallonia\|protected heritage property in Wallonia |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 354 elements (outline 1, marker 1, road 202, zone 20, building 272, waterway 3, wall 38, retaining-wall 12, cliff 8).

Evidence: documented 0, mapped 354, inferred 0, derived 0; heights documented 5, inferred 0, unknown 166.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/93662137 historic=castle Q567525 62 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 272 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 202 mapped (trace size budget); minor lanes are not drawn
- origin moved 62 m from the ledger point to the outline centroid
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.7932/5.0662) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; château\|hill castle; sitelinks=16; wikidata:Q567525 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 354 elements); data/traces/bouillon-castle-q567525.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
