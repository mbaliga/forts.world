# St Andrews Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-andrews-castle-q2287936` |
| Coordinates | 56.34218, -2.79006 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.34218/-2.79006)) |
| Wikidata | [Q2287936](https://www.wikidata.org/wiki/Q2287936) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Fife |
| Inception | 1200 |
| Designations | scheduled monument |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www.historicenvironment.scot/visit-a-place/places/st-andrews-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 248 elements (outline 1, marker 1, coastline 2, road 91, building 87, zone 12, cliff 3, wall 48, retaining-wall 1, water 2).

Evidence: documented 0, mapped 248, inferred 0, derived 2; heights documented 5, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/232578467 historic=castle Q2287936 9 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":2,"medianInside":2.8,"medianOutside":8.8}
- sea-1: DEM check ok {"cells":713,"medianInside":3.5,"medianOutside":15.5}
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.34218/-2.79006) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=12; wikidata:Q2287936 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 248 elements); data/traces/st-andrews-castle-q2287936.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
