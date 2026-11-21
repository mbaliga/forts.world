# Herrenchiemsee

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `herrenchiemsee-q118618` |
| Coordinates | 47.86044, 12.40228 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.86044/12.40228)) |
| Wikidata | [Q118618](https://www.wikidata.org/wiki/Q118618) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace\|château |
| Administrative area | Chiemsee |
| Inception | 1878 |
| Designations | architectural heritage monument in Bavaria\|World Heritage Site |
| Wikipedia language editions | 35 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline-only`, 70 elements (outline 1, road 42, zone 6, building 6, water 5, waterway 10).

Evidence: documented 0, mapped 70, inferred 0, derived 0; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/4605747 historic=castle Q118618 8 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.86044/12.40228) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace\|château; sitelinks=35; wikidata:Q118618 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 70 elements); data/traces/herrenchiemsee-q118618.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
