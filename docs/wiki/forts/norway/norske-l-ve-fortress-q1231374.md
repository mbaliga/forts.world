# Norske Løve Fortress

> Norway · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `norske-l-ve-fortress-q1231374` |
| Coordinates | 59.4432, 10.4899 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.4432/10.4899)) |
| Wikidata | [Q1231374](https://www.wikidata.org/wiki/Q1231374) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Horten Municipality |
| Inception | 1852 |
| Wikipedia language editions | 5 |

## What the model contains

Tier **T1**, status `location-only`, 9 elements (coastline 1, road 3, zone 1, building 1, water 3).

Evidence: documented 0, mapped 9, inferred 0, derived 3; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":4,"medianInside":0,"medianOutside":0.1}
- sea-1: DEM check failed {"cells":400,"medianInside":0.1,"medianOutside":0}
- sea-2: DEM check ok {"cells":186,"medianInside":0,"medianOutside":1.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.4432/10.4899) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q1231374 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 9 elements); data/traces/norske-l-ve-fortress-q1231374.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
