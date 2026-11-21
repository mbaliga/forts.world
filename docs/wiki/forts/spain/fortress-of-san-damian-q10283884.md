# Fortress of San Damián

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortress-of-san-damian-q10283884` |
| Coordinates | 43.5465, -7.03616 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.5465/-7.03616)) |
| Wikidata | [Q10283884](https://www.wikidata.org/wiki/Q10283884) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Lugo Province |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `barrier` | retaining_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 60 elements (outline 1, marker 1, road 37, cliff 4, coastline 6, wall 7, building 3, water 1).

Evidence: documented 0, mapped 60, inferred 0, derived 1; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1245823 historic=fort Q10283884 12 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":155,"medianInside":0,"medianOutside":20.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.5465/-7.03616) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q10283884 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 60 elements); data/traces/fortress-of-san-damian-q10283884.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
