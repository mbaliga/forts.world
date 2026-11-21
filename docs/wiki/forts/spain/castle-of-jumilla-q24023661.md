# Castle of Jumilla

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-jumilla-q24023661` |
| Coordinates | 38.47956, -1.33333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.47956/-1.33333)) |
| Wikidata | [Q24023661](https://www.wikidata.org/wiki/Q24023661) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Jumilla |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 81 elements (outline 1, marker 2, road 9, zone 2, wall 26, waterway 1, building 37, retaining-wall 2).

Evidence: documented 0, mapped 81, inferred 0, derived 0; heights documented 0, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1024528444 historic=citywalls 27 m from ledger point
- origin moved 27 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.47956/-1.33333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=4; wikidata:Q24023661 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 81 elements); data/traces/castle-of-jumilla-q24023661.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
