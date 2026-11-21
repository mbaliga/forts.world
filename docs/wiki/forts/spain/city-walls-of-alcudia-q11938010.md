# City walls of Alcúdia

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-alcudia-q11938010` |
| Coordinates | 39.85339, 3.12126 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.85339/3.12126)) |
| Wikidata | [Q11938010](https://www.wikidata.org/wiki/Q11938010) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|Historic Ensemble |
| Administrative area | l'Alcúdia |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 1, road 145, building 458, wall 31, zone 3).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 11, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/345096696 historic=citywalls 183 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 458 mapped (trace size budget); the rest of the town is not drawn
- origin moved 183 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.85339/3.12126) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|Historic Ensemble; sitelinks=3; wikidata:Q11938010 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/city-walls-of-alcudia-q11938010.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
