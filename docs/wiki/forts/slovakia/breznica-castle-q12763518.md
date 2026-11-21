# Breznica Castle

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `breznica-castle-q12763518` |
| Coordinates | 48.37861, 18.62778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.37861/18.62778)) |
| Wikidata | [Q12763518](https://www.wikidata.org/wiki/Q12763518) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Tekovská Breznica |
| Inception | 1300 |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://sketchfab.com/3d-models/hrad-tekovska-breznica-64b0d090084441e5a68c1ac1772b6e6f |

## What the model contains

Tier **T1**, status `outline+walls`, 36 elements (outline 1, marker 1, road 19, zone 2, waterway 1, cliff 5, wall 7).

Evidence: documented 0, mapped 36, inferred 0, derived 0; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1340064328 historic=castle Q12763518 69 m from ledger point
- origin moved 67 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.37861/18.62778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=4; wikidata:Q12763518 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 36 elements); data/traces/breznica-castle-q12763518.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
