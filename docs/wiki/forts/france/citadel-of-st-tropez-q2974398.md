# Citadel of St. Tropez

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadel-of-st-tropez-q2974398` |
| Coordinates | 43.2722, 6.64458 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.2722/6.64458)) |
| Wikidata | [Q2974398](https://www.wikidata.org/wiki/Q2974398) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Saint-Tropez |
| Designations | monument historique inscrit\|classified historical monument |
| Wikipedia language editions | 6 |
| OSM `historic` | citywalls |
| OSM `barrier` | retaining_wall |

## What the model contains

Tier **T1**, status `outline-only`, 247 elements (outline 1, marker 6, road 114, zone 2, building 311, retaining-wall 2, coastline 1, water 1).

Evidence: documented 0, mapped 247, inferred 0, derived 1; heights documented 46, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/354953957 historic=citywalls 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 311 mapped (trace size budget); the rest of the town is not drawn
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":160,"medianInside":0,"medianOutside":19.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.2722/6.64458) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=6; wikidata:Q2974398 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 247 elements); data/traces/citadel-of-st-tropez-q2974398.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
