# Fort Przyczółek Mostowy

> Poland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-przyczo-ek-mostowy-q11698468` |
| Coordinates | 52.9988, 18.6164 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.9988/18.6164)) |
| Wikidata | [Q11698468](https://www.wikidata.org/wiki/Q11698468) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Toruń |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 379 elements (marker 3, road 609, water 3, building 611, waterway 7, zone 218, wall 4, retaining-wall 4).

Evidence: documented 0, mapped 379, inferred 0, derived 0; heights documented 4, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12425621 historic=yes Q405412 1809 m from ledger point
- site is a site relation of 18 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (7566 x 6832 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 611 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 609 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.9988/18.6164) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q11698468 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 1 elements); data/traces/fort-przyczo-ek-mostowy-q11698468.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
