# Fort of Santo Antonio

> Cape Verde · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-santo-antonio-q91424756` |
| Coordinates | 14.9131, -23.59981 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/14.9131/-23.59981)) |
| Wikidata | [Q91424756](https://www.wikidata.org/wiki/Q91424756) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Ribeira Grande de Santiago |
| Designations | part of UNESCO World Heritage Site |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 76 elements (outline 1, cliff 4, road 29, building 25, retaining-wall 11, waterway 1, coastline 1, zone 2, wall 1).

Evidence: documented 0, mapped 76, inferred 0, derived 0; heights documented 0, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/77275911 historic=castle 401 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 399 m from the ledger point to the centre of the mapped site
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/14.9131/-23.59981) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=0; wikidata:Q91424756 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 76 elements); data/traces/fort-of-santo-antonio-q91424756.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cape-verde.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
