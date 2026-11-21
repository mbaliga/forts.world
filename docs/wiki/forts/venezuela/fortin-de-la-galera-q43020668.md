# Fortín de La Galera

> Venezuela · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortin-de-la-galera-q43020668` |
| Coordinates | 11.08814, -63.975 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/11.08814/-63.975)) |
| Wikidata | [Q43020668](https://www.wikidata.org/wiki/Q43020668) (CC0) |
| Wikidata class | fort |
| Types | fort\|cultural property |
| Administrative area | Municipio Marcano |
| Designations | National historical monument of Venezuela |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 78 elements (outline 1, marker 4, road 38, coastline 1, building 26, water 3, zone 3, waterway 2).

Evidence: documented 0, mapped 78, inferred 0, derived 2; heights documented 0, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/583335872 historic=castle 29 m from ledger point
- origin moved 30 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":8,"medianInside":3.5,"medianOutside":9.1}
- sea-1: DEM check ok {"cells":7,"medianInside":2.8,"medianOutside":9.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/11.08814/-63.975) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|cultural property; sitelinks=2; wikidata:Q43020668 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 78 elements); data/traces/fortin-de-la-galera-q43020668.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/venezuela.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
