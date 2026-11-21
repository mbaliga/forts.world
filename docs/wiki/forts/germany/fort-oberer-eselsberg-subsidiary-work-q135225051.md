# Fort Oberer Eselsberg subsidiary work

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-oberer-eselsberg-subsidiary-work-q135225051` |
| Coordinates | 48.42001, 9.94933 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.42001/9.94933)) |
| Wikidata | [Q135225051](https://www.wikidata.org/wiki/Q135225051) (CC0) |
| Wikidata class | fort |
| Types | defence work\|fort |
| Administrative area | Ulm |
| Inception | 1887 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | http://www.festung-ulm.de/ |

## What the model contains

Tier **T1**, status `location-only`, 346 elements (marker 1, road 465, building 90, water 4, zone 66, waterway 17, wall 12, retaining-wall 6).

Evidence: documented 0, mapped 346, inferred 0, derived 0; heights documented 32, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9584658 historic=castle Q50709 3103 m from ledger point
- site is a site relation of 62 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (4857 x 5351 m)
- roads capped: kept the 150 longest of 465 mapped (trace size budget); minor lanes are not drawn
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.42001/9.94933) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; defence work\|fort; sitelinks=1; wikidata:Q135225051 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 346 elements); data/traces/fort-oberer-eselsberg-subsidiary-work-q135225051.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
