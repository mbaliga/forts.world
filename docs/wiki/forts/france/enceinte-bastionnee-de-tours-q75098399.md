# Enceinte bastionnée de Tours

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enceinte-bastionnee-de-tours-q75098399` |
| Coordinates | 47.38971, 0.68907 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.38971/0.68907)) |
| Wikidata | [Q75098399](https://www.wikidata.org/wiki/Q75098399) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Tours |
| Inception | 1591 |
| Wikipedia language editions | 3 |
| OSM `historic` | building |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 2, road 202, zone 13, building 386, water 1, wall 6).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 14, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/40705392 historic=building 352 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 386 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 202 mapped (trace size budget); minor lanes are not drawn
- origin moved 353 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.38971/0.68907) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q75098399 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/enceinte-bastionnee-de-tours-q75098399.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
