# Hofmansgave

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hofmansgave-q12316989` |
| Coordinates | 55.53756, 10.48256 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.53756/10.48256)) |
| Wikidata | [Q12316989](https://www.wikidata.org/wiki/Q12316989) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|manor house |
| Administrative area | Nordfyn Municipality |
| Inception | 1483 |
| Designations | monument on Kulturstyrelsen register |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `website` | https://www.hofmansgave.dk/default.aspx |

## What the model contains

Tier **T1**, status `outline+walls`, 70 elements (outline 1, road 41, zone 7, building 15, water 1, coastline 1, wall 2, waterway 2).

Evidence: documented 0, mapped 70, inferred 0, derived 0; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/168706412 historic=castle Q12316989 7 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.53756/10.48256) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|manor house; sitelinks=2; wikidata:Q12316989 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 70 elements); data/traces/hofmansgave-q12316989.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
