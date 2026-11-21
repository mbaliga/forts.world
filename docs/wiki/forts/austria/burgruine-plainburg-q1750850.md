# Burgruine Plainburg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burgruine-plainburg-q1750850` |
| Coordinates | 47.7255, 12.9213 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.7255/12.9213)) |
| Wikidata | [Q1750850](https://www.wikidata.org/wiki/Q1750850) (CC0) |
| Wikidata class | ruin |
| Types | rocca\|castle ruin |
| Administrative area | Großgmain |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 105 elements (outline 1, road 44, wall 2, building 34, zone 17, waterway 7).

Evidence: documented 0, mapped 105, inferred 0, derived 0; heights documented 0, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/112168118 historic=castle Q1750850 18 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.7255/12.9213) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; rocca\|castle ruin; sitelinks=4; wikidata:Q1750850 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 105 elements); data/traces/burgruine-plainburg-q1750850.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
