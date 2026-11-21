# Stadttor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadttor-q41355059` |
| Coordinates | 49.8274, 10.20316 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.8274/10.20316)) |
| Wikidata | [Q41355059](https://www.wikidata.org/wiki/Q41355059) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Sommerach |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | no |
| OSM `description` | Runder Befestigungsturm |

## What the model contains

Tier **T1**, status `outline+walls`, 208 elements (outline 1, marker 1, road 52, water 1, zone 7, building 141, waterway 1, wall 4).

Evidence: documented 0, mapped 208, inferred 0, derived 0; heights documented 3, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/366539969 historic=yes 117 m from ledger point
- origin moved 117 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.8274/10.20316) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q41355059 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 208 elements); data/traces/stadttor-q41355059.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
