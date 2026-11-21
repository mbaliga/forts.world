# City walls of Porto

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-porto-q10333277` |
| Coordinates | 41.14262, -8.61137 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.14262/-8.61137)) |
| Wikidata | [Q10333277](https://www.wikidata.org/wiki/Q10333277) (CC0) |
| Wikidata class | castle |
| Types | castle\|city walls |
| Administrative area | Porto |
| Wikipedia language editions | 4 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |
| OSM `website` | https://portodeantanho.blogspot.com/2016/11/5-muralhas.html |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 24, road 511, building 509, wall 114, retaining-wall 84, zone 14, water 3, cliff 15, waterway 4).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 13, inferred 0, unknown 154.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21597536 historic=citywalls Q10333260 18 m from ledger point
- pruned to the outline plus 150 m: 1279 -> 722 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 240 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 334 mapped (trace size budget); minor lanes are not drawn
- origin moved 116 m from the ledger point to the outline centroid
- 22 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.14262/-8.61137) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|city walls; sitelinks=4; wikidata:Q10333277 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/city-walls-of-porto-q10333277.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
