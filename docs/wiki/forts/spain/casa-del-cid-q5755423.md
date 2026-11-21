# Casa del Cid

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casa-del-cid-q5755423` |
| Coordinates | 41.49852, -5.754 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.49852/-5.754)) |
| Wikidata | [Q5755423](https://www.wikidata.org/wiki/Q5755423) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building\|monument |
| Administrative area | Zamora |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 240 elements (outline 1, marker 1, road 156, wall 131, building 172, waterway 2, zone 8, retaining-wall 16).

Evidence: documented 0, mapped 240, inferred 0, derived 0; heights documented 62, inferred 0, unknown 94.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/201630036 historic=castle Q5755423 0 m from ledger point
- pruned to the outline plus 150 m: 487 -> 319 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 110 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 109 mapped (trace size budget); minor lanes are not drawn
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.49852/-5.754) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building\|monument; sitelinks=3; wikidata:Q5755423 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 240 elements); data/traces/casa-del-cid-q5755423.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
