# Schloss Rosenegg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-rosenegg-q15275669` |
| Coordinates | 47.48761, 12.53167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.48761/12.53167)) |
| Wikidata | [Q15275669](https://www.wikidata.org/wiki/Q15275669) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|hotel\|château\|Gasthaus\|estate |
| Administrative area | Fieberbrunn |
| Inception | 1634 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 250 elements (outline 1, road 64, building 167, waterway 5, zone 10, water 2, wall 1).

Evidence: documented 0, mapped 250, inferred 0, derived 0; heights documented 0, inferred 0, unknown 168.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/161898124 historic=castle Q15275669 10 m from ledger point
- origin moved 10 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.48761/12.53167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|hotel\|château\|Gasthaus\|estate; sitelinks=2; wikidata:Q15275669 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 250 elements); data/traces/schloss-rosenegg-q15275669.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
