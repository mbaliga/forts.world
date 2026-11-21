# Bamburgh Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bamburgh-castle-q2026185` |
| Coordinates | 55.60936, -1.711 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.60936/-1.711)) |
| Wikidata | [Q2026185](https://www.wikidata.org/wiki/Q2026185) (CC0) |
| Wikidata class | castle |
| Types | castle\|historic house museum |
| Administrative area | Bamburgh |
| Designations | Grade I listed building |
| Wikipedia language editions | 29 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | wall |
| OSM `website` | https://www.bamburghcastle.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 165 elements (outline 1, marker 2, road 74, wall 11, building 52, zone 18, coastline 1, cliff 2, retaining-wall 2, water 1).

Evidence: documented 0, mapped 165, inferred 0, derived 1; heights documented 1, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/301645315 historic=castle Q2026185 57 m from ledger point
- origin moved 58 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":466,"medianInside":1.2,"medianOutside":13.7}
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.60936/-1.711) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|historic house museum; sitelinks=29; wikidata:Q2026185 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 165 elements); data/traces/bamburgh-castle-q2026185.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
