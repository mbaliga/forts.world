# Mirabell Palace

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mirabell-palace-q688546` |
| Coordinates | 47.80555, 13.04205 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.80555/13.04205)) |
| Wikidata | [Q688546](https://www.wikidata.org/wiki/Q688546) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Salzburg |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 31 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 325 elements (outline 1, marker 37, road 396, building 102, zone 5, water 3, wall 26, waterway 1).

Evidence: documented 0, mapped 325, inferred 0, derived 0; heights documented 41, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/324384 historic=castle Q688546 5 m from ledger point
- roads capped: kept the 150 longest of 396 mapped (trace size budget); minor lanes are not drawn
- origin moved 8 m from the ledger point to the outline centroid
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.80555/13.04205) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=31; wikidata:Q688546 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 325 elements); data/traces/mirabell-palace-q688546.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
