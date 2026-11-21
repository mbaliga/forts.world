# Fort de la Chartreuse

> Belgium · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-la-chartreuse-q2568743` |
| Coordinates | 50.63201, 5.59878 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.63201/5.59878)) |
| Wikidata | [Q2568743](https://www.wikidata.org/wiki/Q2568743) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Liège |
| Designations | protected heritage property in Wallonia |
| Wikipedia language editions | 8 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `location-only`, 296 elements (marker 5, road 94, building 266, wall 59, zone 17, water 1).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 23, inferred 0, unknown 156.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11047551 historic=fort Q2568743 97 m from ledger point
- site is a site relation of 8 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (274 x 232 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 266 mapped (trace size budget); the rest of the town is not drawn
- origin moved 48 m from the ledger point to the centre of the mapped site
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.63201/5.59878) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=8; wikidata:Q2568743 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 154 elements); data/traces/fort-de-la-chartreuse-q2568743.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
