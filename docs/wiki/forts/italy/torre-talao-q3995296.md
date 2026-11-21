# Torre Talao

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-talao-q3995296` |
| Coordinates | 39.81256, 15.78818 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.81256/15.78818)) |
| Wikidata | [Q3995296](https://www.wikidata.org/wiki/Q3995296) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Scalea |
| Inception | 1563 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | il palazzo fu abitato dai Palamolla che si trasferirono a Scalea nel XIV secolo per sfruttare l’economia commerciale del tempo attraverso il traffico marino. In tempi più recenti fu sede della caserma dei Carabinieri, poi durante l’ultimo conflitto fu adi |

## What the model contains

Tier **T1**, status `outline+walls`, 215 elements (outline 1, marker 9, road 314, building 339, zone 29, coastline 1, waterway 6, retaining-wall 1, cliff 2, wall 81, water 1).

Evidence: documented 0, mapped 215, inferred 0, derived 0; heights documented 0, inferred 0, unknown 109.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9210765 historic=castle 403 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- pruned to the outline plus 150 m: 784 -> 545 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 259 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 211 mapped (trace size budget); minor lanes are not drawn
- origin moved 403 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.81256/15.78818) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=3; wikidata:Q3995296 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 215 elements); data/traces/torre-talao-q3995296.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
