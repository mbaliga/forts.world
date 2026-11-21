# Castra of Seligenstadt

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-of-seligenstadt-q1735420` |
| Coordinates | 50.0441, 8.97587 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0441/8.97587)) |
| Wikidata | [Q1735420](https://www.wikidata.org/wiki/Q1735420) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|archaeological site\|ancient Roman structure |
| Administrative area | Seligenstadt |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 396 elements (outline 1, marker 74, road 182, zone 17, building 602, wall 27, retaining-wall 1, waterway 6).

Evidence: documented 0, mapped 396, inferred 0, derived 0; heights documented 36, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/193584118 historic=yes 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 602 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 182 mapped (trace size budget); minor lanes are not drawn
- origin moved 20 m from the ledger point to the centre of the mapped site
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0441/8.97587) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|archaeological site\|ancient Roman structure; sitelinks=3; wikidata:Q1735420 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 396 elements); data/traces/castra-of-seligenstadt-q1735420.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
