# Henriques Palace

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `henriques-palace-q66813806` |
| Coordinates | 38.39514, -8.15485 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.39514/-8.15485)) |
| Wikidata | [Q66813806](https://www.wikidata.org/wiki/Q66813806) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Alcáçovas |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 191 elements (outline 1, road 59, wall 11, building 466).

Evidence: documented 0, mapped 191, inferred 0, derived 0; heights documented 0, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/553493704 historic=castle Q66813806 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 466 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.39514/-8.15485) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=2; wikidata:Q66813806 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 191 elements); data/traces/henriques-palace-q66813806.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
