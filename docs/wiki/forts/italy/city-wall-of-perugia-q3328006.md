# City wall of Perugia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-wall-of-perugia-q3328006` |
| Coordinates | 43.11361, 12.39167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.11361/12.39167)) |
| Wikidata | [Q3328006](https://www.wikidata.org/wiki/Q3328006) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Perugia |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 9, road 291, building 386, waterway 1, zone 1, wall 17, retaining-wall 3).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 7, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/283097393 historic=castle Q23924692 146 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 386 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 291 mapped (trace size budget); minor lanes are not drawn
- origin moved 146 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.11361/12.39167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=4; wikidata:Q3328006 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/city-wall-of-perugia-q3328006.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
