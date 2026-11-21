# Torre Atalayola

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-atalayola-q6150534` |
| Coordinates | 38.20954, -0.51391 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.20954/-0.51391)) |
| Wikidata | [Q6150534](https://www.wikidata.org/wiki/Q6150534) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Santa Pola |
| Inception | 1600 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |
| OSM `description` | Base cañones antiaéreos |

## What the model contains

Tier **T1**, status `outline+walls`, 44 elements (outline 1, coastline 1, road 25, zone 6, wall 2, building 9).

Evidence: documented 0, mapped 44, inferred 0, derived 0; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1140192041 historic=yes 251 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 251 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.20954/-0.51391) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=3; wikidata:Q6150534 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 44 elements); data/traces/torre-atalayola-q6150534.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
