# Ramparts of Mont-de-Marsan

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ramparts-of-mont-de-marsan-q3424621` |
| Coordinates | 43.8928, -0.49806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.8928/-0.49806)) |
| Wikidata | [Q3424621](https://www.wikidata.org/wiki/Q3424621) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Mont-de-Marsan |
| Inception | 1200 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `location-only`, 366 elements (marker 6, road 212, building 289, water 3, wall 55, retaining-wall 14, waterway 4, zone 14).

Evidence: documented 0, mapped 366, inferred 0, derived 0; heights documented 112, inferred 0, unknown 77.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7303385 historic=citywalls Q3424621 10 m from ledger point
- site is a site relation of 7 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (42 x 76 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 289 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 212 mapped (trace size budget); minor lanes are not drawn
- origin moved 19 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.8928/-0.49806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q3424621 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 366 elements); data/traces/ramparts-of-mont-de-marsan-q3424621.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
