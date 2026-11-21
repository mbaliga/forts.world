# Dublin city walls, Lamb Alley

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dublin-city-walls-lamb-alley-q115237279` |
| Coordinates | 53.34287, -6.27511 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.34287/-6.27511)) |
| Wikidata | [Q115237279](https://www.wikidata.org/wiki/Q115237279) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Dublin City Council |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |
| OSM `website` | https://www.dublincity.ie/image/libraries/ditd036-city-wall-and-gate |

## What the model contains

Tier **T1**, status `outline+walls`, 334 elements (outline 1, marker 7, road 279, building 209, wall 37, waterway 8, zone 10).

Evidence: documented 0, mapped 334, inferred 0, derived 0; heights documented 79, inferred 0, unknown 79.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/281988717 historic=citywalls 126 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 209 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 279 mapped (trace size budget); minor lanes are not drawn
- origin moved 126 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.34287/-6.27511) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q115237279 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 334 elements); data/traces/dublin-city-walls-lamb-alley-q115237279.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
