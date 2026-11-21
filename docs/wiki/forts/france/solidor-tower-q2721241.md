# Solidor Tower

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `solidor-tower-q2721241` |
| Coordinates | 48.63389, -2.02611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.63389/-2.02611)) |
| Wikidata | [Q2721241](https://www.wikidata.org/wiki/Q2721241) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortified tower\|keep |
| Administrative area | Saint-Malo |
| Designations | classified historical monument |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 276 elements (outline 1, marker 3, road 75, zone 26, building 126, coastline 1, waterway 1, cliff 2, wall 32, retaining-wall 8, water 1).

Evidence: documented 0, mapped 276, inferred 0, derived 1; heights documented 16, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/305880291 historic=castle Q2721241 15 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":277,"medianInside":0,"medianOutside":12.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.63389/-2.02611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortified tower\|keep; sitelinks=9; wikidata:Q2721241 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 276 elements); data/traces/solidor-tower-q2721241.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
