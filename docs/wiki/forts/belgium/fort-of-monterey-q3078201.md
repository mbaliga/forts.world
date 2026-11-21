# Fort of Monterey

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-monterey-q3078201` |
| Coordinates | 50.8275, 4.34405 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8275/4.34405)) |
| Wikidata | [Q3078201](https://www.wikidata.org/wiki/Q3078201) (CC0) |
| Wikidata class | fort |
| Types | citadel\|destroyed building or structure |
| Administrative area | Saint-Gilles |
| Inception | 1672 |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 380 elements (outline 1, marker 7, road 322, building 671, wall 60, zone 35, retaining-wall 7).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 0, inferred 0, unknown 187.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1366237722 historic=yes 254 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 671 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 322 mapped (trace size budget); minor lanes are not drawn
- origin moved 254 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8275/4.34405) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel\|destroyed building or structure; sitelinks=3; wikidata:Q3078201 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 380 elements); data/traces/fort-of-monterey-q3078201.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
