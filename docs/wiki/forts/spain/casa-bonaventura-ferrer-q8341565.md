# Casa Bonaventura Ferrer

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casa-bonaventura-ferrer-q8341565` |
| Coordinates | 41.39687, 2.15831 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.39687/2.15831)) |
| Wikidata | [Q8341565](https://www.wikidata.org/wiki/Q8341565) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|residential building |
| Administrative area | Vila de Gràcia |
| Designations | Cultural Asset of Local Interest |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.elpalauet.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 7, road 303, building 226, zone 3, waterway 2, wall 3).

Evidence: documented 0, mapped 286, inferred 0, derived 0; heights documented 111, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9160031 historic=castle Q8341565 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 226 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 303 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.39687/2.15831) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|residential building; sitelinks=6; wikidata:Q8341565 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/casa-bonaventura-ferrer-q8341565.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
