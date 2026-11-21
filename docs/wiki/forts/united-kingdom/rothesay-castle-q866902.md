# Rothesay Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rothesay-castle-q866902` |
| Coordinates | 55.83646, -5.05504 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.83646/-5.05504)) |
| Wikidata | [Q866902](https://www.wikidata.org/wiki/Q866902) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Argyll and Bute |
| Designations | scheduled monument |
| Wikipedia language editions | 12 |
| OSM `historic` | ruins |
| OSM `heritage` | https://portal.historicenvironment.scot/designation/SM12970 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, marker 4, road 128, building 182, wall 7, zone 4, coastline 1, water 2).

Evidence: documented 0, mapped 329, inferred 0, derived 2; heights documented 1, inferred 0, unknown 188.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1078267110 historic=ruins Q866902 9 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":43,"medianInside":2.9,"medianOutside":8.6}
- sea-1: DEM check ok {"cells":35,"medianInside":4.1,"medianOutside":8.6}
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.83646/-5.05504) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=12; wikidata:Q866902 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/rothesay-castle-q866902.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
