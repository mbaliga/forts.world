# Kasteel Nijenbeek

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kasteel-nijenbeek-q17446446` |
| Coordinates | 52.18668, 6.16176 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.18668/6.16176)) |
| Wikidata | [Q17446446](https://www.wikidata.org/wiki/Q17446446) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|building |
| Administrative area | Voorst |
| Inception | 1350 |
| Designations | Rijksmonument |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `ruins` | fortress |
| OSM `website` | https://denijenbeek.nl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 50 elements (outline 1, road 15, zone 18, water 5, waterway 2, building 4, wall 5).

Evidence: documented 0, mapped 50, inferred 0, derived 0; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/287942550 historic=castle Q17446446 3 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.18668/6.16176) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|building; sitelinks=0; wikidata:Q17446446 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 50 elements); data/traces/kasteel-nijenbeek-q17446446.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
