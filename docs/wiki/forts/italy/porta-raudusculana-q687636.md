# porta Raudusculana

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-raudusculana-q687636` |
| Coordinates | 41.88007, 12.48359 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.88007/12.48359)) |
| Wikidata | [Q687636](https://www.wikidata.org/wiki/Q687636) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Rome |
| Inception | -0400 |
| Wikipedia language editions | 10 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 386 elements (marker 15, road 986, zone 32, building 497, wall 61, retaining-wall 8).

Evidence: documented 0, mapped 386, inferred 0, derived 0; heights documented 10, inferred 0, unknown 179.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20347404 historic=citywalls Q3867314 1528 m from ledger point
- site is a site relation of 146 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (5128 x 4429 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 497 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 986 mapped (trace size budget); minor lanes are not drawn
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.88007/12.48359) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=10; wikidata:Q687636 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 2 elements); data/traces/porta-raudusculana-q687636.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
