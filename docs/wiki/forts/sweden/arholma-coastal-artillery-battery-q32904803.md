# Arholma Coastal Artillery Battery

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arholma-coastal-artillery-battery-q32904803` |
| Coordinates | 59.86169, 19.12272 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.86169/19.12272)) |
| Wikidata | [Q32904803](https://www.wikidata.org/wiki/Q32904803) (CC0) |
| Wikidata class | fort |
| Types | fortification\|coastal battery |
| Administrative area | Norrtälje Municipality |
| Inception | 1968 |
| Designations | governmental listed building complex |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 35 elements (outline 1, coastline 2, road 16, building 13, zone 1, water 2).

Evidence: documented 0, mapped 35, inferred 0, derived 2; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/292553960 historic=yes 35 m from ledger point
- origin moved 31 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":38,"medianInside":5.7,"medianOutside":8.8}
- sea-1: DEM check ok {"cells":104,"medianInside":-2,"medianOutside":11.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.86169/19.12272) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|coastal battery; sitelinks=2; wikidata:Q32904803 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 35 elements); data/traces/arholma-coastal-artillery-battery-q32904803.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
