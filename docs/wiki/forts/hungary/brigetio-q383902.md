# Brigetio

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brigetio-q383902` |
| Coordinates | 47.7338, 18.1941 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.7338/18.1941)) |
| Wikidata | [Q383902](https://www.wikidata.org/wiki/Q383902) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|ancient Roman structure |
| Administrative area | Nyergesújfalu |
| Wikipedia language editions | 9 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | castrum |
| OSM `heritage` | 2 |
| OSM `description` | 540×430 m méretű római erőd. |

## What the model contains

Tier **T1**, status `outline+walls`, 198 elements (outline 1, marker 3, waterway 1, road 68, building 112, zone 5, wall 7, water 1).

Evidence: documented 0, mapped 198, inferred 0, derived 0; heights documented 13, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/570719401 historic=archaeological_site 123 m from ledger point
- origin moved 89 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.7338/18.1941) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|ancient Roman structure; sitelinks=9; wikidata:Q383902 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 198 elements); data/traces/brigetio-q383902.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
