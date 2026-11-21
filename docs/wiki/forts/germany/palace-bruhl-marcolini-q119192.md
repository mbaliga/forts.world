# Palace Brühl-Marcolini

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palace-bruhl-marcolini-q119192` |
| Coordinates | 51.05953, 13.71878 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.05953/13.71878)) |
| Wikidata | [Q119192](https://www.wikidata.org/wiki/Q119192) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Dresden |
| Inception | ~1727 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |
| OSM `description` | In Folgejahren, mehrere Anbauten und Erweiterungen. Ab 1849 , Nutzung als Krankenhaus. Heute Intern Haus A. |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 11, road 245, building 144, zone 24, wall 11, water 2, retaining-wall 2).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 76, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/692275561 historic=castle Q119192 33 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 144 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 245 mapped (trace size budget); minor lanes are not drawn
- origin moved 32 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.05953/13.71878) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=5; wikidata:Q119192 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/palace-bruhl-marcolini-q119192.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
