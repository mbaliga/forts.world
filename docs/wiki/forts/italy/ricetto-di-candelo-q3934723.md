# Ricetto di Candelo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ricetto-di-candelo-q3934723` |
| Coordinates | 45.54593, 8.11293 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.54593/8.11293)) |
| Wikidata | [Q3934723](https://www.wikidata.org/wiki/Q3934723) (CC0) |
| Wikidata class | fortification |
| Types | ricetto\|ethnographic museum\|military museum building\|specialized museum\|museum of a public entity |
| Administrative area | Candelo |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 212 elements (outline 1, road 77, building 684, waterway 2, wall 8, zone 3).

Evidence: documented 0, mapped 212, inferred 0, derived 0; heights documented 0, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/279406612 historic=citywalls 19 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 684 mapped (trace size budget); the rest of the town is not drawn
- origin moved 19 m from the ledger point to the centre of the mapped site
- 20 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.54593/8.11293) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; ricetto\|ethnographic museum\|military museum building\|specialized museum\|museum of a public entity; sitelinks=3; wikidata:Q3934723 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 212 elements); data/traces/ricetto-di-candelo-q3934723.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
