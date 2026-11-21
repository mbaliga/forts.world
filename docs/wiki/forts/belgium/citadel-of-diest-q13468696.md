# citadel of diest

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadel-of-diest-q13468696` |
| Coordinates | 50.98316, 5.04474 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.98316/5.04474)) |
| Wikidata | [Q13468696](https://www.wikidata.org/wiki/Q13468696) (CC0) |
| Wikidata class | castle |
| Types | castle\|citadel\|building |
| Administrative area | Diest |
| Inception | 1844 |
| Designations | beschermd monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |
| OSM `heritage` | 4 |
| OSM `description` | citadel, in de vorm van een gebastioneerde vijfhoek |
| OSM `website` | https://www.citadeldiest.be/ |

## What the model contains

Tier **T1**, status `outline-only`, 312 elements (outline 1, marker 1, road 192, building 171, waterway 5, zone 20, retaining-wall 8, water 7).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 0, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12739470 historic=castle Q13468696 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 171 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 192 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.98316/5.04474) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|citadel\|building; sitelinks=2; wikidata:Q13468696 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 312 elements); data/traces/citadel-of-diest-q13468696.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
