# Enceinte of Philippe-Auguste (146-150 rue Saint-Honoré)

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enceinte-of-philippe-auguste-146-150-rue-saint-h-q42663705` |
| Coordinates | 48.86201, 2.3402 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.86201/2.3402)) |
| Wikidata | [Q42663705](https://www.wikidata.org/wiki/Q42663705) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | 1st arrondissement of Paris |
| Designations | classified historical monument |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `website` | https://www.louvre.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 270 elements (outline 1, marker 77, road 1423, building 300, zone 26, wall 21, water 2, retaining-wall 38, waterway 13).

Evidence: documented 0, mapped 270, inferred 0, derived 0; heights documented 52, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3262297 historic=castle Q1075988 299 m from ledger point
- pruned to the outline plus 150 m: 1901 -> 1261 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 143 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 988 mapped (trace size budget); minor lanes are not drawn
- origin moved 376 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.86201/2.3402) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q42663705 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 270 elements); data/traces/enceinte-of-philippe-auguste-146-150-rue-saint-h-q42663705.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
