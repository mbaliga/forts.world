# Brolio Fortress

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brolio-fortress-q113550433` |
| Coordinates | 43.4131, 11.46273 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.4131/11.46273)) |
| Wikidata | [Q113550433](https://www.wikidata.org/wiki/Q113550433) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Gaiole in Chianti |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 50 elements (outline 1, road 32, wall 7, waterway 2, building 5, zone 3).

Evidence: documented 0, mapped 50, inferred 0, derived 0; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/118951913 historic=castle Q774984 72 m from ledger point
- origin moved 72 m from the ledger point to the centre of the mapped site
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.4131/11.46273) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=0; wikidata:Q113550433 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 50 elements); data/traces/brolio-fortress-q113550433.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
