# Chepstow Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chepstow-castle-q1070187` |
| Coordinates | 51.6439, -2.6757 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.6439/-2.6757)) |
| Wikidata | [Q1070187](https://www.wikidata.org/wiki/Q1070187) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Chepstow |
| Inception | 1067 |
| Designations | National Monument of Wales\|Grade I listed building\|scheduled monument |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |
| OSM `website` | https://cadw.gov.wales/visit/places-to-visit/chepstow-castle?lang=en#overview |

## What the model contains

Tier **T1**, status `outline+walls`, 342 elements (outline 1, marker 2, road 150, water 2, wall 19, building 151, zone 15, waterway 1, cliff 1).

Evidence: documented 0, mapped 342, inferred 0, derived 0; heights documented 8, inferred 0, unknown 162.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/350627267 historic=castle Q1070187 17 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid
- 13 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.6439/-2.6757) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=18; wikidata:Q1070187 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 342 elements); data/traces/chepstow-castle-q1070187.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
