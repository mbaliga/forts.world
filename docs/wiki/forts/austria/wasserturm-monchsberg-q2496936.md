# Wasserturm Mönchsberg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wasserturm-monchsberg-q2496936` |
| Coordinates | 47.80114, 13.03814 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.80114/13.03814)) |
| Wikidata | [Q2496936](https://www.wikidata.org/wiki/Q2496936) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|tower |
| Administrative area | Salzburg |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 384 elements (outline 1, marker 8, road 215, building 109, wall 10, zone 32, waterway 7, cliff 2).

Evidence: documented 0, mapped 384, inferred 0, derived 0; heights documented 89, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/64055673 historic=castle Q2496936 2 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.80114/13.03814) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|tower; sitelinks=3; wikidata:Q2496936 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 384 elements); data/traces/wasserturm-monchsberg-q2496936.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
