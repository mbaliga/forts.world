# Fuerte de Victoria Chica

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fuerte-de-victoria-chica-q30905691` |
| Coordinates | 35.29614, -2.93704 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.29614/-2.93704)) |
| Wikidata | [Q30905691](https://www.wikidata.org/wiki/Q30905691) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Melilla |
| Inception | 1732 |
| Designations | Historic Ensemble\|bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 198 elements (outline 1, marker 4, road 112, building 52, coastline 1, wall 13, zone 3, cliff 2, retaining-wall 7, water 3).

Evidence: documented 0, mapped 198, inferred 0, derived 1; heights documented 2, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/302022984 historic=castle Q30905691 7 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":35,"medianInside":3.5,"medianOutside":20.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.29614/-2.93704) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q30905691 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 198 elements); data/traces/fuerte-de-victoria-chica-q30905691.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
