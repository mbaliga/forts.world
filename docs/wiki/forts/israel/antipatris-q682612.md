# Antipatris

> Israel · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `antipatris-q682612` |
| Coordinates | 32.10505, 34.93 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.10505/34.93)) |
| Wikidata | [Q682612](https://www.wikidata.org/wiki/Q682612) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|fortress\|yes\|human settlement\|archaeological site\|tell |
| Administrative area | Central District |
| Wikipedia language editions | 26 |
| OSM `historic` | ruins |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 59 elements (outline 1, marker 3, road 41, zone 2, water 2, waterway 6, building 3).

Evidence: documented 0, mapped 59, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/247532189 historic=ruins Q682612 6 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.10505/34.93) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|fortress\|yes\|human settlement\|archaeological site\|tell; sitelinks=26; wikidata:Q682612 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 59 elements); data/traces/antipatris-q682612.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/israel.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
