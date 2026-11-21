# Medieval Area Door, Burgos

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `medieval-area-door-burgos-q43090294` |
| Coordinates | 42.34282, -3.69667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.34282/-3.69667)) |
| Wikidata | [Q43090294](https://www.wikidata.org/wiki/Q43090294) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|monument |
| Administrative area | Burgos |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 397 elements (outline 1, marker 10, road 258, building 223, retaining-wall 37, wall 74, zone 2, water 1, waterway 1).

Evidence: documented 0, mapped 397, inferred 0, derived 0; heights documented 68, inferred 0, unknown 164.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/60260505 historic=citywalls Q26738930 722 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 223 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 258 mapped (trace size budget); minor lanes are not drawn
- origin moved 721 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.34282/-3.69667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|monument; sitelinks=1; wikidata:Q43090294 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 397 elements); data/traces/medieval-area-door-burgos-q43090294.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
