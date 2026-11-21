# Brodie Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brodie-castle-q625533` |
| Coordinates | 57.59841, -3.70896 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.59841/-3.70896)) |
| Wikidata | [Q625533](https://www.wikidata.org/wiki/Q625533) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Moray |
| Inception | 1567 |
| Designations | category A listed building |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |
| OSM `website` | https://www.nts.org.uk/Property/Brodie-Castle |

## What the model contains

Tier **T1**, status `outline+walls`, 90 elements (outline 1, road 55, waterway 4, zone 9, building 13, wall 8).

Evidence: documented 0, mapped 90, inferred 0, derived 0; heights documented 1, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5375551 historic=castle Q625533 11 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.59841/-3.70896) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=11; wikidata:Q625533 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 90 elements); data/traces/brodie-castle-q625533.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
