# Ribat of Arrifana

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ribat-of-arrifana-q17390062` |
| Coordinates | 37.32031, -8.8761 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.32031/-8.8761)) |
| Wikidata | [Q17390062](https://www.wikidata.org/wiki/Q17390062) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage\|ribat |
| Administrative area | Aljezur |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 6 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 53 elements (outline 1, road 29, zone 11, cliff 9, coastline 1, building 1, water 1).

Evidence: documented 0, mapped 53, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1491320658 historic=ruins 4 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":187,"medianInside":0,"medianOutside":25.1}
- 51 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.32031/-8.8761) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage\|ribat; sitelinks=6; wikidata:Q17390062 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 53 elements); data/traces/ribat-of-arrifana-q17390062.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
