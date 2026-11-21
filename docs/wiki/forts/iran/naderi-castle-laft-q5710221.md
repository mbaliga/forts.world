# Naderi Castle (Laft)

> Iran · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `naderi-castle-laft-q5710221` |
| Coordinates | 26.89394, 55.76203 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.89394/55.76203)) |
| Wikidata | [Q5710221](https://www.wikidata.org/wiki/Q5710221) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural property |
| Administrative area | Qeshm County |
| Designations | Iranian National Heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 16 elements (outline 1, marker 1, road 11, coastline 2, water 1).

Evidence: documented 0, mapped 16, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/673885474 historic=ruins 7 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":68,"medianInside":1.4,"medianOutside":7}
- 29 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.89394/55.76203) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural property; sitelinks=3; wikidata:Q5710221 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 16 elements); data/traces/naderi-castle-laft-q5710221.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/iran.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
