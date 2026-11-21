# Liman Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `liman-castle-q28001024` |
| Coordinates | 36.27823, 33.83563 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.27823/33.83563)) |
| Wikidata | [Q28001024](https://www.wikidata.org/wiki/Q28001024) (CC0) |
| Wikidata class | ruin |
| Types | fortress\|castle ruin |
| Administrative area | Silifke |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 20 elements (outline 1, coastline 4, road 5, wall 7, zone 2, water 1).

Evidence: documented 0, mapped 20, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14919603 historic=ruins Q28001024 17 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":64,"medianInside":0,"medianOutside":12.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.27823/33.83563) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; fortress\|castle ruin; sitelinks=3; wikidata:Q28001024 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 20 elements); data/traces/liman-castle-q28001024.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
