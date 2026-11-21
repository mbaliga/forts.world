# Merlinsburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `merlinsburg-q1921928` |
| Coordinates | 50.6272, 10.1614 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.6272/10.1614)) |
| Wikidata | [Q1921928](https://www.wikidata.org/wiki/Q1921928) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Kaltennordheim |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 388 elements (outline 1, road 97, waterway 18, building 434, wall 57, zone 81, water 13, retaining-wall 1).

Evidence: documented 0, mapped 388, inferred 0, derived 0; heights documented 38, inferred 0, unknown 140.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/204207800 historic=castle Q1921928 167 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 434 mapped (trace size budget); the rest of the town is not drawn
- origin moved 165 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.6272/10.1614) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=2; wikidata:Q1921928 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 388 elements); data/traces/merlinsburg-q1921928.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
