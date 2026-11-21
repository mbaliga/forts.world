# Rukhi Fortress

> Georgia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rukhi-fortress-q3651440` |
| Coordinates | 42.56492, 41.854 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.56492/41.854)) |
| Wikidata | [Q3651440](https://www.wikidata.org/wiki/Q3651440) (CC0) |
| Wikidata class | castle |
| Types | castle\|yes\|cultural heritage |
| Inception | 1647 |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 32 elements (outline 1, marker 1, road 15, zone 6, waterway 1, building 7).

Evidence: documented 0, mapped 32, inferred 0, derived 0; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/135691808 historic=castle Q3651440 11 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.56492/41.854) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|yes\|cultural heritage; sitelinks=7; wikidata:Q3651440 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 32 elements); data/traces/rukhi-fortress-q3651440.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/georgia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
