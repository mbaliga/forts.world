# Donjon Lacataye

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `donjon-lacataye-q3036702` |
| Coordinates | 43.89222, -0.49889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.89222/-0.49889)) |
| Wikidata | [Q3036702](https://www.wikidata.org/wiki/Q3036702) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Mont-de-Marsan |
| Designations | monument historique inscrit |
| Wikipedia language editions | 5 |
| OSM `historic` | tower |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 367 elements (outline 1, marker 6, road 259, building 354, water 4, wall 56, retaining-wall 16, waterway 4, zone 10).

Evidence: documented 0, mapped 367, inferred 0, derived 0; heights documented 103, inferred 0, unknown 89.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/45103483 historic=tower Q3036702 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 354 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 259 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.89222/-0.49889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q3036702 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 366 elements); data/traces/donjon-lacataye-q3036702.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 367 elements; outline osm:way/45103483 historic=tower Q3036702 12 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
