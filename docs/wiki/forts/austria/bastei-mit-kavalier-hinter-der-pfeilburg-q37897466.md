# Bastei mit Kavalier hinter der Pfeilburg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastei-mit-kavalier-hinter-der-pfeilburg-q37897466` |
| Coordinates | 47.04923, 16.07553 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.04923/16.07553)) |
| Wikidata | [Q37897466](https://www.wikidata.org/wiki/Q37897466) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Fürstenfeld |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `website` | http://www.museum-pfeilburg.at/ |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, building 162, road 246, waterway 1, wall 7, zone 19, water 3, retaining-wall 1, cliff 1).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 2, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/195194080 historic=castle Q37875555 64 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 162 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 246 mapped (trace size budget); minor lanes are not drawn
- origin moved 64 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.04923/16.07553) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q37897466 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/bastei-mit-kavalier-hinter-der-pfeilburg-q37897466.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
