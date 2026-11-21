# Tjolöholm Castle

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tjoloholm-castle-q2243801` |
| Coordinates | 57.39858, 12.10304 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.39858/12.10304)) |
| Wikidata | [Q2243801](https://www.wikidata.org/wiki/Q2243801) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château\|architectural ensemble |
| Administrative area | Kungsbacka Municipality |
| Inception | 1904 |
| Designations | individual listed building complex |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `website` | https://www.tjoloholm.se/ |

## What the model contains

Tier **T1**, status `outline+walls`, 63 elements (outline 1, road 46, water 2, wall 5, zone 4, coastline 3, building 2).

Evidence: documented 0, mapped 63, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/54607994 historic=castle Q2243801 5 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":31,"medianInside":4,"medianOutside":12.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.39858/12.10304) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château\|architectural ensemble; sitelinks=13; wikidata:Q2243801 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 63 elements); data/traces/tjoloholm-castle-q2243801.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
