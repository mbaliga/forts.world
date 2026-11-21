# Tudoburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tudoburg-q2459207` |
| Coordinates | 47.87896, 8.88628 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.87896/8.88628)) |
| Wikidata | [Q2459207](https://www.wikidata.org/wiki/Q2459207) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Eigeltingen |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 43 elements (outline 1, road 27, waterway 9, zone 5, wall 1).

Evidence: documented 0, mapped 43, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1298606045 historic=castle Q2459207 101 m from ledger point
- origin moved 102 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.87896/8.88628) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=2; wikidata:Q2459207 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 43 elements); data/traces/tudoburg-q2459207.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
