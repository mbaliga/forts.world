# Hranice Chateau

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hranice-chateau-q12020648` |
| Coordinates | 49.55, 17.735 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.55/17.735)) |
| Wikidata | [Q12020648](https://www.wikidata.org/wiki/Q12020648) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Hranice I-Město |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, marker 2, road 138, zone 18, building 304, waterway 9, wall 10, retaining-wall 3, water 2).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 52, inferred 0, unknown 81.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/52457828 historic=castle Q12020648 34 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 304 mapped (trace size budget); the rest of the town is not drawn
- origin moved 33 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.55/17.735) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q12020648 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/hranice-chateau-q12020648.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
