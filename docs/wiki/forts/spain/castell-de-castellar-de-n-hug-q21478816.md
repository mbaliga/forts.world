# Castell de Castellar de n'Hug

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-castellar-de-n-hug-q21478816` |
| Coordinates | 42.28322, 2.01615 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.28322/2.01615)) |
| Wikidata | [Q21478816](https://www.wikidata.org/wiki/Q21478816) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Castellar de n'Hug |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |
| OSM `website` | https://camiramaderdemarina.cat/ |

## What the model contains

Tier **T1**, status `location-only`, 93 elements (marker 1, road 123, waterway 17, building 220, zone 1, cliff 1, wall 2, retaining-wall 1).

Evidence: documented 0, mapped 93, inferred 0, derived 0; heights documented 0, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15557473 historic=yes Q51881900 50059 m from ledger point
- site is a route relation of 1423 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (45285 x 139262 m)
- present-day buildings capped: kept the 30 nearest the outline centre of 220 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 123 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.28322/2.01615) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q21478816 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 93 elements); data/traces/castell-de-castellar-de-n-hug-q21478816.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
