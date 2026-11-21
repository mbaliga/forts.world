# Jungshoved Voldsted

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jungshoved-voldsted-q30145247` |
| Coordinates | 55.07984, 12.12268 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.07984/12.12268)) |
| Wikidata | [Q30145247](https://www.wikidata.org/wiki/Q30145247) (CC0) |
| Wikidata class | fort |
| Types | hillfort |
| Administrative area | Vordingborg Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 60 elements (outline 1, coastline 3, road 39, zone 6, building 6, waterway 3, water 2).

Evidence: documented 0, mapped 60, inferred 0, derived 2; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/376205838 historic=archaeological_site Q30145247 6 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":395,"medianInside":1,"medianOutside":1}
- sea-1: DEM check ok {"cells":239,"medianInside":1,"medianOutside":1.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.07984/12.12268) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort; sitelinks=2; wikidata:Q30145247 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 60 elements); data/traces/jungshoved-voldsted-q30145247.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
