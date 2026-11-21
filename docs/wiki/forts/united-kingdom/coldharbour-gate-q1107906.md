# Coldharbour Gate

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `coldharbour-gate-q1107906` |
| Coordinates | 51.50802, -0.07647 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.50802/-0.07647)) |
| Wikidata | [Q1107906](https://www.wikidata.org/wiki/Q1107906) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|wall\|gatehouse |
| Administrative area | London Borough of Tower Hamlets |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `ruins` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 347 elements (outline 1, marker 39, road 322, building 103, zone 17, wall 13, water 2, waterway 3, retaining-wall 19).

Evidence: documented 0, mapped 347, inferred 0, derived 0; heights documented 57, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1002587185 historic=ruins Q1107906 2 m from ledger point
- roads capped: kept the 150 longest of 322 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.50802/-0.07647) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|wall\|gatehouse; sitelinks=2; wikidata:Q1107906 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 347 elements); data/traces/coldharbour-gate-q1107906.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
