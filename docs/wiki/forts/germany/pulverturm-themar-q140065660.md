# Pulverturm (Themar)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pulverturm-themar-q140065660` |
| Coordinates | 50.50121, 10.61823 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.50121/10.61823)) |
| Wikidata | [Q140065660](https://www.wikidata.org/wiki/Q140065660) (CC0) |
| Wikidata class | fortification |
| Types | city wall tower |
| Administrative area | Themar |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `description` | Halbturm |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, road 72, building 214, waterway 11, wall 3, retaining-wall 1, zone 3).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 0, inferred 0, unknown 218.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/153223723 historic=citywalls 441 m from ledger point
- origin moved 441 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.50121/10.61823) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city wall tower; sitelinks=1; wikidata:Q140065660 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/pulverturm-themar-q140065660.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
