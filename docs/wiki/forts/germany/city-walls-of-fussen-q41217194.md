# city walls of Füssen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-fussen-q41217194` |
| Coordinates | 47.56802, 10.70359 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.56802/10.70359)) |
| Wikidata | [Q41217194](https://www.wikidata.org/wiki/Q41217194) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage ensemble\|fortification system\|city walls |
| Administrative area | Füssen |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 330 elements (outline 1, marker 12, road 142, zone 36, building 274, waterway 1, wall 17).

Evidence: documented 0, mapped 330, inferred 0, derived 0; heights documented 51, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/216253115 historic=citywalls 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 274 mapped (trace size budget); the rest of the town is not drawn
- origin moved 13 m from the ledger point to the centre of the mapped site
- 28 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.56802/10.70359) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage ensemble\|fortification system\|city walls; sitelinks=1; wikidata:Q41217194 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 330 elements); data/traces/city-walls-of-fussen-q41217194.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
