# Shinoridate

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `shinoridate-q11491132` |
| Coordinates | 41.76572, 140.82239 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.76572/140.82239)) |
| Wikidata | [Q11491132](https://www.wikidata.org/wiki/Q11491132) (CC0) |
| Wikidata class | ruin |
| Types | Japanese castle\|castle ruin in Japan |
| Administrative area | Hakodate |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 275 elements (marker 5, road 65, building 199, waterway 2, retaining-wall 1, coastline 1, water 2).

Evidence: documented 0, mapped 275, inferred 0, derived 2; heights documented 0, inferred 0, unknown 200.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":9,"medianInside":1.3,"medianOutside":12.9}
- sea-1: DEM check ok {"cells":14,"medianInside":2.3,"medianOutside":13.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.76572/140.82239) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; Japanese castle\|castle ruin in Japan; sitelinks=4; wikidata:Q11491132 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 275 elements); data/traces/shinoridate-q11491132.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
