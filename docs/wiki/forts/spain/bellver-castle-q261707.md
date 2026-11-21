# Bellver Castle

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bellver-castle-q261707` |
| Coordinates | 39.56375, 2.61934 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.56375/2.61934)) |
| Wikidata | [Q261707](https://www.wikidata.org/wiki/Q261707) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Palma |
| Inception | 1310 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 28 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 3 |
| OSM `description` | Classic C14th medieval castle. Now houses Palma's city history museum. |
| OSM `website` | https://castelldebellver.palma.es/en/%22 |

## What the model contains

Tier **T1**, status `outline+walls`, 86 elements (outline 1, road 59, wall 9, building 11, waterway 1, retaining-wall 5).

Evidence: documented 0, mapped 86, inferred 0, derived 0; heights documented 4, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6214761 historic=castle Q261707 15 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.56375/2.61934) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=28; wikidata:Q261707 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 86 elements); data/traces/bellver-castle-q261707.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
