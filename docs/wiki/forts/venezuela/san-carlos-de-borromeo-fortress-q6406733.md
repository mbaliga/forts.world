# San Carlos de Borromeo Fortress

> Venezuela · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `san-carlos-de-borromeo-fortress-q6406733` |
| Coordinates | 10.99751, -63.79848 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/10.99751/-63.79848)) |
| Wikidata | [Q6406733](https://www.wikidata.org/wiki/Q6406733) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Municipio Maneiro |
| Designations | National historical monument of Venezuela |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 38 elements (outline 1, coastline 1, road 24, building 11, water 1).

Evidence: documented 0, mapped 38, inferred 0, derived 1; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2732695 historic=castle Q6406733 5 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":129,"medianInside":1,"medianOutside":12.9}
- 15 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/10.99751/-63.79848) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=4; wikidata:Q6406733 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 38 elements); data/traces/san-carlos-de-borromeo-fortress-q6406733.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/venezuela.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
