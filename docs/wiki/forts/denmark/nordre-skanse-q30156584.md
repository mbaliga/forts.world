# Nordre Skanse

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nordre-skanse-q30156584` |
| Coordinates | 57.45052, 10.54487 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.45052/10.54487)) |
| Wikidata | [Q30156584](https://www.wikidata.org/wiki/Q30156584) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Frederikshavn Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | sconce |

## What the model contains

Tier **T1**, status `outline-only`, 114 elements (outline 1, marker 3, road 49, coastline 2, building 57, zone 1, water 1).

Evidence: documented 0, mapped 114, inferred 0, derived 1; heights documented 0, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/108097275 historic=archaeological_site Q30156584 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":77,"medianInside":-1.4,"medianOutside":3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.45052/10.54487) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=1; wikidata:Q30156584 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 114 elements); data/traces/nordre-skanse-q30156584.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
