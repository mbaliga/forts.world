# Castle Naghten

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-naghten-q27440950` |
| Coordinates | 53.45322, -8.06013 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.45322/-8.06013)) |
| Wikidata | [Q27440950](https://www.wikidata.org/wiki/Q27440950) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | County Roscommon |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | motte |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 16 elements (outline 1, road 4, waterway 4, zone 1, building 2, wall 1, water 3).

Evidence: documented 0, mapped 16, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1125885566 historic=archaeological_site Q27440950 7 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.45322/-8.06013) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=2; wikidata:Q27440950 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 16 elements); data/traces/castle-naghten-q27440950.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
