# Altenburg Castle (Thüringen)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `altenburg-castle-thuringen-q319046` |
| Coordinates | 50.98836, 12.43928 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.98836/12.43928)) |
| Wikidata | [Q319046](https://www.wikidata.org/wiki/Q319046) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|museum\|château\|royal palace |
| Administrative area | Altenburg |
| Designations | Heritage monument in Thuringia |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |
| OSM `website` | https://www.residenzschloss-altenburg.de |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 9, road 154, waterway 3, building 391, water 2, retaining-wall 20, wall 9, zone 1).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 12, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/39785014 historic=castle Q319046 17 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 391 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 154 mapped (trace size budget); minor lanes are not drawn
- origin moved 20 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.98836/12.43928) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|museum\|château\|royal palace; sitelinks=7; wikidata:Q319046 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/altenburg-castle-thuringen-q319046.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
