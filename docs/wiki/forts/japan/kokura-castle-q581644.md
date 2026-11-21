# Kokura Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kokura-castle-q581644` |
| Coordinates | 33.88444, 130.87426 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.88444/130.87426)) |
| Wikidata | [Q581644](https://www.wikidata.org/wiki/Q581644) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle\|umijiro |
| Administrative area | Jōnai |
| Inception | 1602 |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |
| OSM `castle_type` | shiro |

## What the model contains

Tier **T1**, status `outline+walls`, 268 elements (outline 1, marker 29, waterway 1, road 131, building 61, wall 12, water 7, zone 12, retaining-wall 14).

Evidence: documented 0, mapped 268, inferred 0, derived 0; heights documented 4, inferred 0, unknown 83.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/153209407 historic=castle Q581644 11 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- 12 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.88444/130.87426) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle\|umijiro; sitelinks=18; wikidata:Q581644 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 268 elements); data/traces/kokura-castle-q581644.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
