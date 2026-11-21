# Buckingham Palace

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `buckingham-palace-q42182` |
| Coordinates | 51.50083, -0.14266 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.50083/-0.14266)) |
| Wikidata | [Q42182](https://www.wikidata.org/wiki/Q42182) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|historic house museum\|art collection\|country house\|royal palace\|Residence of the British Royal Family |
| Administrative area | City of Westminster |
| Inception | 1703 |
| Designations | Grade I listed building |
| Wikipedia language editions | 95 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `website` | https://www.royalcollection.org.uk/visit/the-state-rooms-buckingham-palace |

## What the model contains

Tier **T1**, status `outline+walls`, 353 elements (outline 1, marker 4, road 256, building 58, zone 13, waterway 3, retaining-wall 3, wall 15).

Evidence: documented 0, mapped 353, inferred 0, derived 0; heights documented 2, inferred 0, unknown 74.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5208404 historic=castle Q42182 17 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.50083/-0.14266) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|historic house museum\|art collection\|country house\|royal palace\|Residence of the British Royal Family; sitelinks=95; wikidata:Q42182 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 353 elements); data/traces/buckingham-palace-q42182.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
