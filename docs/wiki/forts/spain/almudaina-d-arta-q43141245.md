# Almudaina d'Artà

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `almudaina-d-arta-q43141245` |
| Coordinates | 39.69633, 3.35368 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.69633/3.35368)) |
| Wikidata | [Q43141245](https://www.wikidata.org/wiki/Q43141245) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Artà |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 264 elements (outline 1, marker 2, road 62, wall 42, waterway 1, building 294, retaining-wall 35, zone 1).

Evidence: documented 0, mapped 264, inferred 0, derived 0; heights documented 112, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/280418890 historic=castle Q2649795 15 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 294 mapped (trace size budget); the rest of the town is not drawn
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.69633/3.35368) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=3; wikidata:Q43141245 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 264 elements); data/traces/almudaina-d-arta-q43141245.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
