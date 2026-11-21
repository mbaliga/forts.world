# Fort Sokolnického

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-sokolnickeho-q9261649` |
| Coordinates | 52.26836, 20.98972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.26836/20.98972)) |
| Wikidata | [Q9261649](https://www.wikidata.org/wiki/Q9261649) (CC0) |
| Wikidata class | fort |
| Types | architectural heritage monument\|fort |
| Administrative area | Żoliborz |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `website` | http://nowyfort.pl |

## What the model contains

Tier **T1**, status `outline+walls`, 398 elements (outline 1, marker 12, road 279, building 123, zone 108, wall 7).

Evidence: documented 0, mapped 398, inferred 0, derived 0; heights documented 122, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/404091961 historic=fort Q9261649 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 123 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 279 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.26836/20.98972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; architectural heritage monument\|fort; sitelinks=3; wikidata:Q9261649 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 398 elements); data/traces/fort-sokolnickeho-q9261649.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
