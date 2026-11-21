# Fort William

> Ghana · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-william-q5472327` |
| Coordinates | 5.17419, -1.1189 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/5.17419/-1.1189)) |
| Wikidata | [Q5472327](https://www.wikidata.org/wiki/Q5472327) (CC0) |
| Wikidata class | fort |
| Types | fort\|factory |
| Administrative area | Central Region |
| Inception | 1640 |
| Designations | Ghana’s material cultural heritage |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 39 elements (outline 1, coastline 1, road 9, building 27, water 1).

Evidence: documented 0, mapped 39, inferred 0, derived 1; heights documented 0, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/520995071 historic=castle Q5472327 14 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":753,"medianInside":2,"medianOutside":9.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/5.17419/-1.1189) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|factory; sitelinks=8; wikidata:Q5472327 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 39 elements); data/traces/fort-william-q5472327.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ghana.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
