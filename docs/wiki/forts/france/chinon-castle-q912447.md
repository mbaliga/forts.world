# Chinon Castle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chinon-castle-q912447` |
| Coordinates | 47.16806, 0.23611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.16806/0.23611)) |
| Wikidata | [Q912447](https://www.wikidata.org/wiki/Q912447) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Chinon |
| Designations | classified historical monument |
| Wikipedia language editions | 30 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `website` | https://forteressechinon.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 304 elements (outline 1, marker 2, road 147, wall 8, building 497, waterway 1, zone 19, retaining-wall 4, cliff 2).

Evidence: documented 0, mapped 304, inferred 0, derived 0; heights documented 1, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/131114399 historic=castle Q912447 34 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 497 mapped (trace size budget); the rest of the town is not drawn
- origin moved 33 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.16806/0.23611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=30; wikidata:Q912447 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 304 elements); data/traces/chinon-castle-q912447.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
