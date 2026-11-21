# Fort Dansborg

> India · Mayiladuthurai district · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-dansborg-q11964733` |
| Coordinates | 11.0246, 79.8558 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/11.0246/79.8558)) |
| Wikidata | [Q11964733](https://www.wikidata.org/wiki/Q11964733) (CC0) |
| Wikidata class | fort |
| Types | museum\|fort |
| Administrative area | Mayiladuthurai district |
| Inception | 1620 |
| Designations | State Protected Monument |
| Wikipedia language editions | 10 |
| Programme catalogue | confidence medium, significance rank 435; sources wikidata:Q11964733 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 75 elements (outline 1, marker 2, water 3, coastline 1, road 26, waterway 2, building 29, zone 4, wall 7).

Evidence: documented 0, mapped 75, inferred 0, derived 1; heights documented 7, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5637874 historic=fort Q11964733 15 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":511,"medianInside":2.7,"medianOutside":3.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/11.0246/79.8558) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=medium; rank=435; sources=1 Alpha-F batch (2026-11-14): 10 sites spread across A-Z starting at F; see docs/fort-fidelity/batch-alpha-F.csv. \| 2026-11-16: auto-T1 by the model-all pipeline run directly (outline+walls, 75 elements); data/traces/fort-dansborg-q11964733.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
