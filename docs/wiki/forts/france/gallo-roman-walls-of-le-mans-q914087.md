# Gallo-Roman walls of Le Mans

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gallo-roman-walls-of-le-mans-q914087` |
| Coordinates | 48.00846, 0.19523 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.00846/0.19523)) |
| Wikidata | [Q914087](https://www.wikidata.org/wiki/Q914087) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Le Mans |
| Designations | classified historical monument |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 19, road 420, building 511, waterway 1, wall 131, retaining-wall 80, zone 16, water 1).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 4, inferred 0, unknown 197.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/44521160 historic=yes Q22962590 116 m from ledger point
- pruned to the outline plus 150 m: 1180 -> 606 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 240 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 207 mapped (trace size budget); minor lanes are not drawn
- origin moved 117 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.00846/0.19523) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=4; wikidata:Q914087 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/gallo-roman-walls-of-le-mans-q914087.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
