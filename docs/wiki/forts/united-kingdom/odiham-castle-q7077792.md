# Odiham Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `odiham-castle-q7077792` |
| Coordinates | 51.26141, -0.96159 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.26141/-0.96159)) |
| Wikidata | [Q7077792](https://www.wikidata.org/wiki/Q7077792) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Odiham |
| Inception | 1207 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www3.hants.gov.uk/hampshire-countryside/odiham-castle.htm |

## What the model contains

Tier **T1**, status `outline+walls`, 40 elements (outline 1, road 15, waterway 10, wall 1, water 6, zone 7).

Evidence: documented 0, mapped 40, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/236177284 historic=castle Q7077792 4 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.26141/-0.96159) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=9; wikidata:Q7077792 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 40 elements); data/traces/odiham-castle-q7077792.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
