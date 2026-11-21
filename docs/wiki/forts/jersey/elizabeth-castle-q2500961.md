# Elizabeth Castle

> Jersey · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `elizabeth-castle-q2500961` |
| Coordinates | 49.175, -2.125 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.175/-2.125)) |
| Wikidata | [Q2500961](https://www.wikidata.org/wiki/Q2500961) (CC0) |
| Wikidata class | castle |
| Types | castle\|independent museum |
| Administrative area | Saint Helier |
| Inception | 1594 |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `barrier` | retaining_wall |
| OSM `website` | https://www.jerseyheritage.org/places-to-visit/elizabeth-castle |

## What the model contains

Tier **T1**, status `outline+walls`, 43 elements (outline 1, coastline 1, road 13, building 18, wall 7, zone 2, water 1).

Evidence: documented 0, mapped 43, inferred 0, derived 1; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/167087489 historic=castle Q2500961 209 m from ledger point
- origin moved 206 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1155,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.175/-2.125) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|independent museum; sitelinks=11; wikidata:Q2500961 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 43 elements); data/traces/elizabeth-castle-q2500961.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/jersey.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
