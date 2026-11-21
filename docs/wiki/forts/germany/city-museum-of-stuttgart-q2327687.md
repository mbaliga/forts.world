# City Museum of Stuttgart

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-museum-of-stuttgart-q2327687` |
| Coordinates | 48.77608, 9.18411 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.77608/9.18411)) |
| Wikidata | [Q2327687](https://www.wikidata.org/wiki/Q2327687) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|museum |
| Administrative area | Stuttgart-Mitte |
| Inception | 2018 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | StadtPalais - Museum für Stuttgart |
| OSM `website` | https://www.stadtpalais-stuttgart.de |

## What the model contains

Tier **T1**, status `outline+walls`, 335 elements (outline 1, marker 8, road 400, building 139, zone 27, waterway 2, retaining-wall 12, wall 15).

Evidence: documented 0, mapped 335, inferred 0, derived 0; heights documented 20, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/9837954 historic=castle Q2327687 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 139 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 400 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.77608/9.18411) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|museum; sitelinks=3; wikidata:Q2327687 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 335 elements); data/traces/city-museum-of-stuttgart-q2327687.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
