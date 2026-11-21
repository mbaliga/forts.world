# Plymouth Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `plymouth-castle-q17647415` |
| Coordinates | 50.3659, -4.13449 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.3659/-4.13449)) |
| Wikidata | [Q17647415](https://www.wikidata.org/wiki/Q17647415) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | City of Plymouth |
| Designations | scheduled monument\|Grade II listed building |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, marker 7, water 3, road 365, building 237, wall 10, zone 9, coastline 4, retaining-wall 4).

Evidence: documented 0, mapped 308, inferred 0, derived 1; heights documented 17, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2368840 historic=castle Q7373944 261 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 237 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 365 mapped (trace size budget); minor lanes are not drawn
- origin moved 255 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":390,"medianInside":1.2,"medianOutside":22.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.3659/-4.13449) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q17647415 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/plymouth-castle-q17647415.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
