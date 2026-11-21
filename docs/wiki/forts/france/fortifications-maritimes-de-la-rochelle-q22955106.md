# Fortifications maritimes de La Rochelle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-maritimes-de-la-rochelle-q22955106` |
| Coordinates | 46.15588, -1.15518 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.15588/-1.15518)) |
| Wikidata | [Q22955106](https://www.wikidata.org/wiki/Q22955106) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | La Rochelle |
| Designations | classified historical monument |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 266 elements (outline 1, marker 6, road 117, building 370, waterway 6, water 8, wall 3, coastline 2, zone 3).

Evidence: documented 0, mapped 266, inferred 0, derived 0; heights documented 8, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1645806 historic=castle Q3146071 229 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 370 mapped (trace size budget); the rest of the town is not drawn
- origin moved 230 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.15588/-1.15518) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q22955106 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 266 elements); data/traces/fortifications-maritimes-de-la-rochelle-q22955106.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
