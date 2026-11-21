# Weberov dom

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `weberov-dom-q112100169` |
| Coordinates | 49.00043, 21.24279 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.00043/21.24279)) |
| Wikidata | [Q112100169](https://www.wikidata.org/wiki/Q112100169) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|house |
| Administrative area | Prešov |
| Inception | 1900 |
| Designations | cultural heritage of Slovakia |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 320 elements (outline 1, marker 17, road 200, zone 1, building 208, wall 30, retaining-wall 1).

Evidence: documented 0, mapped 320, inferred 0, derived 0; heights documented 14, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/82142962 historic=castle Q112100169 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 208 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 200 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.00043/21.24279) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|house; sitelinks=0; wikidata:Q112100169 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 320 elements); data/traces/weberov-dom-q112100169.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
