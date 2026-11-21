# Fortin de Tizzano

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortin-de-tizzano-q22949666` |
| Coordinates | 41.54226, 8.84679 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.54226/8.84679)) |
| Wikidata | [Q22949666](https://www.wikidata.org/wiki/Q22949666) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Sartène |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 28 elements (outline 1, road 6, building 16, coastline 2, zone 1, water 2).

Evidence: documented 0, mapped 28, inferred 0, derived 2; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1025981264 historic=castle 4 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":19,"medianInside":0,"medianOutside":5.6}
- sea-1: DEM check ok {"cells":88,"medianInside":0,"medianOutside":6.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.54226/8.84679) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q22949666 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 28 elements); data/traces/fortin-de-tizzano-q22949666.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
