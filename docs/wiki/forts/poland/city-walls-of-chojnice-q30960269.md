# City walls of Chojnice

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-chojnice-q30960269` |
| Coordinates | 53.69547, 17.56149 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.69547/17.56149)) |
| Wikidata | [Q30960269](https://www.wikidata.org/wiki/Q30960269) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Chojnice |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 325 elements (outline 1, marker 2, road 208, building 401, waterway 1, wall 12, zone 38, retaining-wall 1).

Evidence: documented 0, mapped 325, inferred 0, derived 0; heights documented 3, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/66744524 historic=yes 146 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 401 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 208 mapped (trace size budget); minor lanes are not drawn
- origin moved 145 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.69547/17.56149) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q30960269 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 325 elements); data/traces/city-walls-of-chojnice-q30960269.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
