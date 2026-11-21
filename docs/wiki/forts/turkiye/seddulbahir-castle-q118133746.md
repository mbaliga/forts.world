# Seddülbahir Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `seddulbahir-castle-q118133746` |
| Coordinates | 40.04204, 26.18789 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.04204/26.18789)) |
| Wikidata | [Q118133746](https://www.wikidata.org/wiki/Q118133746) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Eceabat |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 157 elements (outline 1, marker 1, coastline 2, road 12, zone 3, building 136, water 2).

Evidence: documented 0, mapped 157, inferred 0, derived 2; heights documented 0, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/844800281 historic=castle 46 m from ledger point
- origin moved 45 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":113,"medianInside":0,"medianOutside":15.8}
- sea-1: DEM check ok {"cells":5,"medianInside":9.5,"medianOutside":12.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.04204/26.18789) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=1; wikidata:Q118133746 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 157 elements); data/traces/seddulbahir-castle-q118133746.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
