# Donjon de Niort

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `donjon-de-niort-q15214745` |
| Coordinates | 46.3253, -0.465 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.3253/-0.465)) |
| Wikidata | [Q15214745](https://www.wikidata.org/wiki/Q15214745) (CC0) |
| Wikidata class | castle |
| Types | castle\|keep |
| Administrative area | Niort |
| Inception | 1200 |
| Designations | classified historical monument |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `website` | https://musees.niortagglo.fr/index.html |

## What the model contains

Tier **T1**, status `outline+walls`, 310 elements (outline 1, road 201, building 485, waterway 26, zone 1, water 8, wall 4).

Evidence: documented 0, mapped 310, inferred 0, derived 0; heights documented 21, inferred 0, unknown 103.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/40461822 historic=castle Q15214745 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 485 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 201 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.3253/-0.465) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|keep; sitelinks=4; wikidata:Q15214745 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/donjon-de-niort-q15214745.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
