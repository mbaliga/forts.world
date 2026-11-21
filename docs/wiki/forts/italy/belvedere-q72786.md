# Belvedere

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `belvedere-q72786` |
| Coordinates | 43.76305, 11.25374 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.76305/11.25374)) |
| Wikidata | [Q72786](https://www.wikidata.org/wiki/Q72786) (CC0) |
| Wikidata class | fort |
| Types | museum\|fortress |
| Administrative area | Florence |
| Inception | 1970 |
| Designations | Italian national heritage |
| Wikipedia language editions | 11 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |
| OSM `website` | http://museicivicifiorentini.comune.fi.it/fortebelvedere/ |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, marker 2, zone 20, road 179, building 77, wall 11, water 3, retaining-wall 7, waterway 2).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 4, inferred 0, unknown 92.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/24879633 historic=fort Q72786 7 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.76305/11.25374) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|fortress; sitelinks=11; wikidata:Q72786 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/belvedere-q72786.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
