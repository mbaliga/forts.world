# Wachturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wachturm-q98495899` |
| Coordinates | 49.67165, 10.09335 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.67165/10.09335)) |
| Wikidata | [Q98495899](https://www.wikidata.org/wiki/Q98495899) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Frickenhausen am Main |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `heritage` | yes |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 373 elements (outline 1, road 87, zone 8, building 269, wall 8).

Evidence: documented 0, mapped 373, inferred 0, derived 0; heights documented 0, inferred 0, unknown 277.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/384310080 historic=yes 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.67165/10.09335) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=0; wikidata:Q98495899 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 373 elements); data/traces/wachturm-q98495899.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
