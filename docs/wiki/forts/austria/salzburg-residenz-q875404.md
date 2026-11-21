# Salzburg Residenz

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `salzburg-residenz-q875404` |
| Coordinates | 47.7983, 13.0458 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.7983/13.0458)) |
| Wikidata | [Q875404](https://www.wikidata.org/wiki/Q875404) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|museum |
| Administrative area | Salzburg |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `website` | https://www.festung-hohensalzburg.at |

## What the model contains

Tier **T1**, status `outline+walls`, 398 elements (outline 1, marker 15, waterway 22, road 288, wall 61, building 352, zone 20, retaining-wall 7, cliff 1, water 1).

Evidence: documented 0, mapped 398, inferred 0, derived 0; heights documented 21, inferred 0, unknown 167.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/58379993 historic=castle Q679292 385 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 352 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 288 mapped (trace size budget); minor lanes are not drawn
- origin moved 385 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.7983/13.0458) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|museum; sitelinks=9; wikidata:Q875404 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 398 elements); data/traces/salzburg-residenz-q875404.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
