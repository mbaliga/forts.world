# Belogradchik Fortress

> Bulgaria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `belogradchik-fortress-q2915222` |
| Coordinates | 43.62333, 22.67722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.62333/22.67722)) |
| Wikidata | [Q2915222](https://www.wikidata.org/wiki/Q2915222) (CC0) |
| Wikidata class | fort |
| Types | museum\|fortress |
| Administrative area | Belogradchik |
| Wikipedia language editions | 25 |
| OSM `historic` | castle |
| OSM `ruins` | yes |
| OSM `website` | https://belogradchishki-skali.com |

## What the model contains

Tier **T1**, status `outline+walls`, 189 elements (outline 1, marker 1, road 62, building 103, cliff 4, zone 13, wall 5).

Evidence: documented 0, mapped 189, inferred 0, derived 0; heights documented 1, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/203829495 historic=castle Q2915222 93 m from ledger point
- origin moved 95 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.62333/22.67722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|fortress; sitelinks=25; wikidata:Q2915222 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 189 elements); data/traces/belogradchik-fortress-q2915222.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bulgaria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
