# Fortaleza de São José de Macapá

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortaleza-de-sao-jose-de-macapa-q10283640` |
| Coordinates | 0.03106, -51.04913 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/0.03106/-51.04913)) |
| Wikidata | [Q10283640](https://www.wikidata.org/wiki/Q10283640) (CC0) |
| Wikidata class | fort |
| Types | museum\|cultural heritage\|fortress |
| Administrative area | Macapá |
| Inception | 1998 |
| Designations | heritage asset listed by IPHAN\|Heritage of Portuguese Influence |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 105 elements (outline 1, road 66, building 30, waterway 2, wall 1, water 5).

Evidence: documented 0, mapped 105, inferred 0, derived 0; heights documented 3, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1336144 historic=castle Q10283640 16 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/0.03106/-51.04913) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|cultural heritage\|fortress; sitelinks=3; wikidata:Q10283640 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 105 elements); data/traces/fortaleza-de-sao-jose-de-macapa-q10283640.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
