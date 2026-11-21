# Clube Militar Naval

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `clube-militar-naval-q90314862` |
| Coordinates | 38.73475, -9.143 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.73475/-9.143)) |
| Wikidata | [Q90314862](https://www.wikidata.org/wiki/Q90314862) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building\|cultural heritage |
| Administrative area | Arroios |
| Designations | Pending classification monument |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 2, road 320, wall 14, building 191, zone 2).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 25, inferred 0, unknown 109.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/99808915 historic=castle Q90314862 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 191 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 320 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.73475/-9.143) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building\|cultural heritage; sitelinks=0; wikidata:Q90314862 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/clube-militar-naval-q90314862.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
