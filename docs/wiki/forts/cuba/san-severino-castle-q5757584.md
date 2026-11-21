# San Severino Castle

> Cuba · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `san-severino-castle-q5757584` |
| Coordinates | 23.05599, -81.56166 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.05599/-81.56166)) |
| Wikidata | [Q5757584](https://www.wikidata.org/wiki/Q5757584) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Matanzas |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.ecured.cu/Castillo_de_San_Severino |

## What the model contains

Tier **T1**, status `outline+walls`, 36 elements (outline 1, marker 2, coastline 3, road 15, zone 1, building 11, wall 2, water 1).

Evidence: documented 0, mapped 36, inferred 0, derived 1; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/135468209 historic=castle 234 m from ledger point
- origin moved 234 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":103,"medianInside":3,"medianOutside":11.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.05599/-81.56166) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q5757584 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 36 elements); data/traces/san-severino-castle-q5757584.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cuba.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
