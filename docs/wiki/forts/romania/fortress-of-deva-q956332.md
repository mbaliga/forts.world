# Fortress of Deva

> Romania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortress-of-deva-q956332` |
| Coordinates | 45.88861, 22.89722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.88861/22.89722)) |
| Wikidata | [Q956332](https://www.wikidata.org/wiki/Q956332) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Hunedoara County |
| Inception | 1242 |
| Designations | Historic Monument |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 153 elements (outline 1, marker 2, road 74, zone 8, building 57, wall 7, cliff 2, retaining-wall 1, waterway 1).

Evidence: documented 0, mapped 153, inferred 0, derived 0; heights documented 1, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19141226 historic=castle 77 m from ledger point
- origin moved 62 m from the ledger point to the outline centroid
- 13 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.88861/22.89722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=11; wikidata:Q956332 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 153 elements); data/traces/fortress-of-deva-q956332.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/romania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
