# Marktbefestigung

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `marktbefestigung-q41359680` |
| Coordinates | 49.90354, 9.82014 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.90354/9.82014)) |
| Wikidata | [Q41359680](https://www.wikidata.org/wiki/Q41359680) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Zellingen |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 225 elements (outline 1, road 91, building 313, waterway 6, cliff 2, wall 2, retaining-wall 1, zone 2).

Evidence: documented 0, mapped 225, inferred 0, derived 0; heights documented 1, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/118298769 historic=building 52 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 313 mapped (trace size budget); the rest of the town is not drawn
- origin moved 52 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.90354/9.82014) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q41359680 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 225 elements); data/traces/marktbefestigung-q41359680.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
