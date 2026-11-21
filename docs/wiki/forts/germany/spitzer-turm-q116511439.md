# Spitzer Turm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spitzer-turm-q116511439` |
| Coordinates | 49.99034, 8.68281 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.99034/8.68281)) |
| Wikidata | [Q116511439](https://www.wikidata.org/wiki/Q116511439) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Langen |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `heritage` | yes |
| OSM `ruins` | tower |

## What the model contains

Tier **T1**, status `outline+walls`, 249 elements (outline 1, marker 15, road 95, building 483, waterway 9, zone 2, wall 6, water 1).

Evidence: documented 0, mapped 249, inferred 0, derived 0; heights documented 13, inferred 0, unknown 113.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/361977265 historic=ruins Q116511425 168 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 483 mapped (trace size budget); the rest of the town is not drawn
- origin moved 168 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.99034/8.68281) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=1; wikidata:Q116511439 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 249 elements); data/traces/spitzer-turm-q116511439.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
