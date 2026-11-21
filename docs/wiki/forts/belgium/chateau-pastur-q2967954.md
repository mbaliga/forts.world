# Château Pastur

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-pastur-q2967954` |
| Coordinates | 50.72442, 4.86692 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.72442/4.86692)) |
| Wikidata | [Q2967954](https://www.wikidata.org/wiki/Q2967954) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|hôtel de ville |
| Administrative area | Jodoigne |
| Inception | C13 |
| Designations | protected heritage property in Wallonia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 5, road 125, waterway 1, building 744, cliff 2, wall 29, water 1, zone 9, retaining-wall 4).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 2, inferred 0, unknown 151.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/197419726 historic=castle Q2967954 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 744 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.72442/4.86692) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|hôtel de ville; sitelinks=2; wikidata:Q2967954 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/chateau-pastur-q2967954.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
