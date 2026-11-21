# Belfort citadel

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `belfort-citadel-q2974379` |
| Coordinates | 47.63694, 6.86556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.63694/6.86556)) |
| Wikidata | [Q2974379](https://www.wikidata.org/wiki/Q2974379) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Belfort |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `location-only`, 363 elements (marker 17, road 539, building 585, zone 28, wall 141, retaining-wall 34, water 1, waterway 2).

Evidence: documented 0, mapped 363, inferred 0, derived 0; heights documented 5, inferred 0, unknown 230.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1103959 historic=fort Q2974379 36 m from ledger point
- site is a site relation of 24 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (693 x 957 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 585 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 539 mapped (trace size budget); minor lanes are not drawn
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.63694/6.86556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=3; wikidata:Q2974379 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 363 elements); data/traces/belfort-citadel-q2974379.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
