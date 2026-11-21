# Pfarrhaus

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pfarrhaus-q20161739` |
| Coordinates | 50.11058, 9.36716 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.11058/9.36716)) |
| Wikidata | [Q20161739](https://www.wikidata.org/wiki/Q20161739) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|human settlement |
| Administrative area | Wiesen |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 379 elements (outline 1, marker 1, road 85, waterway 6, building 283, zone 1, wall 2).

Evidence: documented 0, mapped 379, inferred 0, derived 0; heights documented 1, inferred 0, unknown 284.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/370684056 historic=castle Q20161739 6 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.11058/9.36716) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|human settlement; sitelinks=2; wikidata:Q20161739 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 379 elements); data/traces/pfarrhaus-q20161739.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
