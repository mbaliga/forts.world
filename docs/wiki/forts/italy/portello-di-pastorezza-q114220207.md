# Portello di Pastorezza

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portello-di-pastorezza-q114220207` |
| Coordinates | 44.41281, 8.93112 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.41281/8.93112)) |
| Wikidata | [Q114220207](https://www.wikidata.org/wiki/Q114220207) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Genoa |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 388 elements (outline 1, marker 35, road 193, building 138, wall 8, zone 5, coastline 1, water 3, retaining-wall 3, waterway 1).

Evidence: documented 0, mapped 388, inferred 0, derived 0; heights documented 21, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28244674 historic=castle Q3889511 676 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 677 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.41281/8.93112) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q114220207 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 388 elements); data/traces/portello-di-pastorezza-q114220207.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
