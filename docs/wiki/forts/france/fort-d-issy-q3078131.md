# Fort d'Issy

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-d-issy-q3078131` |
| Coordinates | 48.81694, 2.26889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.81694/2.26889)) |
| Wikidata | [Q3078131](https://www.wikidata.org/wiki/Q3078131) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Issy-les-Moulineaux |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `location-only`, 254 elements (marker 1, road 124, building 305, retaining-wall 3, wall 4, zone 2).

Evidence: documented 0, mapped 254, inferred 0, derived 0; heights documented 1, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20259514 historic=castle Q22924337 721 m from ledger point
- site is a site relation of 3 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (26 x 47 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 305 mapped (trace size budget); the rest of the town is not drawn
- origin moved 720 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.81694/2.26889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q3078131 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 254 elements); data/traces/fort-d-issy-q3078131.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
