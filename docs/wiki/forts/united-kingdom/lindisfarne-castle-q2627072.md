# Lindisfarne Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lindisfarne-castle-q2627072` |
| Coordinates | 55.66907, -1.78475 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.66907/-1.78475)) |
| Wikidata | [Q2627072](https://www.wikidata.org/wiki/Q2627072) (CC0) |
| Wikidata class | castle |
| Types | castle\|historic house museum |
| Administrative area | Holy Island |
| Inception | 1550 |
| Designations | Grade I listed building |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.nationaltrust.org.uk/lindisfarne-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 76 elements (outline 1, coastline 1, road 49, wall 9, cliff 4, building 7, retaining-wall 1, water 3, zone 1).

Evidence: documented 0, mapped 76, inferred 0, derived 1; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4229902 historic=castle Q2627072 14 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":634,"medianInside":-0.3,"medianOutside":6.3}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.66907/-1.78475) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|historic house museum; sitelinks=16; wikidata:Q2627072 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 76 elements); data/traces/lindisfarne-castle-q2627072.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
