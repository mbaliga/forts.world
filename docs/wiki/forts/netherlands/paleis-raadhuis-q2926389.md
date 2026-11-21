# Paleis-Raadhuis

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `paleis-raadhuis-q2926389` |
| Coordinates | 51.55473, 5.08684 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.55473/5.08684)) |
| Wikidata | [Q2926389](https://www.wikidata.org/wiki/Q2926389) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Tilburg |
| Inception | 1847 |
| Designations | Rijksmonument |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 337 elements (outline 1, marker 12, road 152, building 224, zone 52, water 1, wall 1).

Evidence: documented 0, mapped 337, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/280907288 historic=castle Q2926389 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 224 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 152 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.55473/5.08684) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=6; wikidata:Q2926389 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 337 elements); data/traces/paleis-raadhuis-q2926389.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
