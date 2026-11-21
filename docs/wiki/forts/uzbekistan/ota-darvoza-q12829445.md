# Ota darvoza

> Uzbekistan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ota-darvoza-q12829445` |
| Coordinates | 41.37868, 60.35718 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.37868/60.35718)) |
| Wikidata | [Q12829445](https://www.wikidata.org/wiki/Q12829445) (CC0) |
| Wikidata class | fortification |
| Types | rammed earth building\|city gate |
| Administrative area | Khiva |
| Designations | object of tangible cultural heritage of Uzbekistan |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `heritage` | https://whc.unesco.org/en/list/543 |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, marker 10, road 294, wall 20, building 194, zone 12, retaining-wall 1, water 2, waterway 2).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 105, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/185036984 historic=castle Q535577 221 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 194 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 294 mapped (trace size budget); minor lanes are not drawn
- origin moved 232 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.37868/60.35718) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rammed earth building\|city gate; sitelinks=10; wikidata:Q12829445 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/ota-darvoza-q12829445.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/uzbekistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
