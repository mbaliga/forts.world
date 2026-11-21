# Strassberg Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `strassberg-castle-q251766` |
| Coordinates | 46.8064, 9.53375 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.8064/9.53375)) |
| Wikidata | [Q251766](https://www.wikidata.org/wiki/Q251766) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Canton of the Grisons |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://burgstrassbergmalix.ch/ |

## What the model contains

Tier **T1**, status `outline+walls`, 46 elements (outline 1, waterway 2, road 18, zone 2, building 19, wall 4).

Evidence: documented 0, mapped 46, inferred 0, derived 0; heights documented 1, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/394753500 historic=castle Q251766 7 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.8064/9.53375) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=5; wikidata:Q251766 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 46 elements); data/traces/strassberg-castle-q251766.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
