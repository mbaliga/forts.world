# Bentheimerschans

> Netherlands · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bentheimerschans-q115914940` |
| Coordinates | 51.29078, 6.07673 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.29078/6.07673)) |
| Wikidata | [Q115914940](https://www.wikidata.org/wiki/Q115914940) (CC0) |
| Wikidata class | fort |
| Types | fort\|yes\|sconce |
| Administrative area | Beesel |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `description` | WWII series of bunkers |

## What the model contains

Tier **T1**, status `location-only`, 296 elements (marker 1, road 134, waterway 3, water 3, zone 35, building 1022).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13048886 historic=archaeological_site 41632 m from ledger point
- site is a site relation of 47 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (20947 x 54451 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 1022 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.29078/6.07673) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|yes\|sconce; sitelinks=2; wikidata:Q115914940 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 296 elements); data/traces/bentheimerschans-q115914940.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
