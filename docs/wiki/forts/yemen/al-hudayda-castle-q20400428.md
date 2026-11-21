# Al Hudayda Castle

> Yemen · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `al-hudayda-castle-q20400428` |
| Coordinates | 14.7851, 42.9474 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/14.7851/42.9474)) |
| Wikidata | [Q20400428](https://www.wikidata.org/wiki/Q20400428) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Al Hudaydah |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 46 elements (outline 1, road 39, coastline 1, zone 2, building 1, water 2).

Evidence: documented 0, mapped 46, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1173018054 historic=castle Q20400428 8 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":25,"medianInside":2.1,"medianOutside":10.5}
- sea-1: DEM check ok {"cells":66,"medianInside":2.6,"medianOutside":11}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/14.7851/42.9474) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q20400428 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 46 elements); data/traces/al-hudayda-castle-q20400428.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/yemen.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
