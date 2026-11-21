# Alcázar (Baeza)

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alcazar-baeza-q43136643` |
| Coordinates | 37.98742, -3.47428 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.98742/-3.47428)) |
| Wikidata | [Q43136643](https://www.wikidata.org/wiki/Q43136643) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Baeza |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 261 elements (outline 1, marker 5, road 71, zone 5, building 161, retaining-wall 5, wall 12).

Evidence: documented 0, mapped 261, inferred 0, derived 0; heights documented 16, inferred 0, unknown 163.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/102850085 historic=citywalls 228 m from ledger point
- origin moved 225 m from the ledger point to the centre of the mapped site
- 42 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.98742/-3.47428) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=0; wikidata:Q43136643 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 261 elements); data/traces/alcazar-baeza-q43136643.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
