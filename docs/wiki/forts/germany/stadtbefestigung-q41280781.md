# Stadtbefestigung

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtbefestigung-q41280781` |
| Coordinates | 49.03477, 11.47372 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.03477/11.47372)) |
| Wikidata | [Q41280781](https://www.wikidata.org/wiki/Q41280781) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage ensemble\|enceinte |
| Administrative area | Beilngries |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `location-only`, 328 elements (marker 8, road 257, water 2, waterway 6, building 814, wall 36, zone 6).

Evidence: documented 0, mapped 328, inferred 0, derived 0; heights documented 0, inferred 0, unknown 156.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13379321 historic=citywalls Q41280781 28 m from ledger point
- site is a site relation of 37 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (324 x 397 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 814 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 257 mapped (trace size budget); minor lanes are not drawn
- origin moved 16 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.03477/11.47372) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage ensemble\|enceinte; sitelinks=1; wikidata:Q41280781 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 328 elements); data/traces/stadtbefestigung-q41280781.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
