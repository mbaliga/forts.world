# All Hallows Staining

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `all-hallows-staining-q4728804` |
| Coordinates | 51.51151, -0.08034 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.51151/-0.08034)) |
| Wikidata | [Q4728804](https://www.wikidata.org/wiki/Q4728804) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|church building\|church tower |
| Administrative area | City of London |
| Inception | 1150 |
| Designations | Grade I listed building |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |
| OSM `website` | https://www.sanctuaryinthecity.net/ |

## What the model contains

Tier **T1**, status `outline+walls`, 279 elements (outline 1, marker 3, road 277, building 114, wall 4, zone 5, retaining-wall 1, waterway 1).

Evidence: documented 0, mapped 279, inferred 0, derived 0; heights documented 43, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/276186370 historic=ruins Q4728804 5 m from ledger point
- roads capped: kept the 150 longest of 277 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.51151/-0.08034) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|church building\|church tower; sitelinks=3; wikidata:Q4728804 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 279 elements); data/traces/all-hallows-staining-q4728804.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
