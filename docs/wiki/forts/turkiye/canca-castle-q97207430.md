# Canca Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `canca-castle-q97207430` |
| Coordinates | 40.46977, 39.4527 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.46977/39.4527)) |
| Wikidata | [Q97207430](https://www.wikidata.org/wiki/Q97207430) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Gümüşhane |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 4 elements (outline 1, road 1, wall 1, zone 1).

Evidence: documented 0, mapped 4, inferred 0, derived 0; heights documented 1, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/891063499 historic=castle 15 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.46977/39.4527) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=5; wikidata:Q97207430 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 4 elements); data/traces/canca-castle-q97207430.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
