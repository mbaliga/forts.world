# Gefechtsturm Stiftskaserne

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gefechtsturm-stiftskaserne-q60660068` |
| Coordinates | 48.20175, 16.35612 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.20175/16.35612)) |
| Wikidata | [Q60660068](https://www.wikidata.org/wiki/Q60660068) (CC0) |
| Wikidata class | fortification |
| Types | flak tower\|high-rise bunker |
| Administrative area | Neubau |
| Inception | 1944 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 342 elements (outline 1, marker 16, road 421, building 114, zone 56, retaining-wall 3, wall 2).

Evidence: documented 0, mapped 342, inferred 0, derived 0; heights documented 94, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/57997 historic=castle Q471908 446 m from ledger point
- roads capped: kept the 150 longest of 421 mapped (trace size budget); minor lanes are not drawn
- origin moved 446 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.20175/16.35612) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; flak tower\|high-rise bunker; sitelinks=1; wikidata:Q60660068 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 342 elements); data/traces/gefechtsturm-stiftskaserne-q60660068.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
