# Palácio Reynolds

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-reynolds-q26257452` |
| Coordinates | 38.84504, -7.58703 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.84504/-7.58703)) |
| Wikidata | [Q26257452](https://www.wikidata.org/wiki/Q26257452) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|palace |
| Administrative area | Estremoz |
| Inception | 1906 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 244 elements (outline 1, marker 5, road 57, water 2, building 334, wall 48, zone 11).

Evidence: documented 0, mapped 244, inferred 0, derived 0; heights documented 0, inferred 0, unknown 168.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/573923635 historic=castle Q26257452 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 334 mapped (trace size budget); the rest of the town is not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.84504/-7.58703) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|palace; sitelinks=2; wikidata:Q26257452 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 244 elements); data/traces/palacio-reynolds-q26257452.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
