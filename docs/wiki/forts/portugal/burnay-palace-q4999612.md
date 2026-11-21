# Burnay Palace

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burnay-palace-q4999612` |
| Coordinates | 38.69998, -9.18466 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.69998/-9.18466)) |
| Wikidata | [Q4999612](https://www.wikidata.org/wiki/Q4999612) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Alcântara |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `description` | Mandado edificar no séc. XVIII por D. César de Meneses, principal da Sé de Lisboa, sendo por isso também conhecido por Palácio dos Patriarcas. Foi bastante alterado no séc. XIX, antes de ser adquirido pelo banqueiro Henrique Burnay que o mandou dec |

## What the model contains

Tier **T1**, status `outline+walls`, 288 elements (outline 1, marker 2, road 147, building 89, coastline 1, water 5, wall 20, retaining-wall 8, zone 15).

Evidence: documented 0, mapped 288, inferred 0, derived 0; heights documented 59, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8316064 historic=castle Q4999612 8 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.69998/-9.18466) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=3; wikidata:Q4999612 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 288 elements); data/traces/burnay-palace-q4999612.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
