# Paris Gate, Reims

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `paris-gate-reims-q20240637` |
| Coordinates | 49.255, 4.02214 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.255/4.02214)) |
| Wikidata | [Q20240637](https://www.wikidata.org/wiki/Q20240637) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Reims |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, marker 1, road 204, zone 6, building 268, water 2, waterway 2, wall 19).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 10, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/92294579 historic=yes Q2974263 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 268 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 204 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.255/4.02214) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q20240637 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/paris-gate-reims-q20240637.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
