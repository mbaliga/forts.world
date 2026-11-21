# Castra Albana

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-albana-q3663109` |
| Coordinates | 41.72902, 12.66021 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.72902/12.66021)) |
| Wikidata | [Q3663109](https://www.wikidata.org/wiki/Q3663109) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|ancient Roman structure |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |
| OSM `castle_type` | castra |
| OSM `ruins` | yes |
| OSM `website` | https://theses.gla.ac.uk/779/1/2002cowanphd.pdf?utm_source=chatgpt.com |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 4, road 279, building 257, water 2, retaining-wall 8, wall 12, zone 8).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 2, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21720286 historic=archaeological_site Q3663109 123 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 257 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 279 mapped (trace size budget); minor lanes are not drawn
- origin moved 118 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.72902/12.66021) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|ancient Roman structure; sitelinks=4; wikidata:Q3663109 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 227 elements); data/traces/castra-albana-q3663109.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 305 elements; outline osm:relation/21720286 historic=archaeological_site Q3663109 123 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
