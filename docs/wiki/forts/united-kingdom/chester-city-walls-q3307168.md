# Chester city walls

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chester-city-walls-q3307168` |
| Coordinates | 53.18622, -2.88939 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.18622/-2.88939)) |
| Wikidata | [Q3307168](https://www.wikidata.org/wiki/Q3307168) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Cheshire West and Chester |
| Designations | scheduled monument |
| Wikipedia language editions | 7 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 1, road 126, waterway 12, zone 12, building 255, water 2, wall 20, retaining-wall 1).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 116, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1545574566 historic=citywalls 16 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 255 mapped (trace size budget); the rest of the town is not drawn
- origin moved 17 m from the ledger point to the outline centroid
- 40 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.18622/-2.88939) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=7; wikidata:Q3307168 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/chester-city-walls-q3307168.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
