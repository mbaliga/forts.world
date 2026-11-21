# Anazarbus

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `anazarbus-q219525` |
| Coordinates | 37.2523, 35.90176 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.2523/35.90176)) |
| Wikidata | [Q219525](https://www.wikidata.org/wiki/Q219525) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site\|ancient city\|Ancient Greek archaeological site |
| Administrative area | Kozan |
| Designations | Tentative World Heritage Site |
| Wikipedia language editions | 26 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 9 elements (outline 1, road 4, cliff 1, wall 1, zone 2).

Evidence: documented 0, mapped 9, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/864298893 historic=archaeological_site Q29002435 465 m from ledger point
- origin moved 468 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.2523/35.90176) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site\|ancient city\|Ancient Greek archaeological site; sitelinks=26; wikidata:Q219525 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 9 elements); data/traces/anazarbus-q219525.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
