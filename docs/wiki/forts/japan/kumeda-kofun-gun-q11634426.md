# Kumeda-Kofun-gun

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kumeda-kofun-gun-q11634426` |
| Coordinates | 34.45959, 135.40992 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.45959/135.40992)) |
| Wikidata | [Q11634426](https://www.wikidata.org/wiki/Q11634426) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 4, road 167, water 4, zone 30, building 649, wall 180, waterway 7, retaining-wall 11).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 125, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/573964535 historic=archaeological_site 26 m from ledger point
- pruned to the outline plus 150 m: 1053 -> 711 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 445 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 101 mapped (trace size budget); minor lanes are not drawn
- origin moved 24 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.45959/135.40992) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=2; wikidata:Q11634426 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/kumeda-kofun-gun-q11634426.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
