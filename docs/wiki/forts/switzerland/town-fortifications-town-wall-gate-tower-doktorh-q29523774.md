# Town fortifications (town wall, gate tower, “Doktorhaus”)

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `town-fortifications-town-wall-gate-tower-doktorh-q29523774` |
| Coordinates | 47.16832, 9.46304 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.16832/9.46304)) |
| Wikidata | [Q29523774](https://www.wikidata.org/wiki/Q29523774) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|gate tower\|city walls |
| Administrative area | Grabs |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://schloss-werdenberg.ch/ |

## What the model contains

Tier **T1**, status `outline+walls`, 310 elements (outline 1, road 133, zone 3, building 143, waterway 1, wall 14, retaining-wall 15).

Evidence: documented 0, mapped 310, inferred 0, derived 0; heights documented 24, inferred 0, unknown 148.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/46332024 historic=castle Q2244076 107 m from ledger point
- origin moved 109 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.16832/9.46304) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|gate tower\|city walls; sitelinks=1; wikidata:Q29523774 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/town-fortifications-town-wall-gate-tower-doktorh-q29523774.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
