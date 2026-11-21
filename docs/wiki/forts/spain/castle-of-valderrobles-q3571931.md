# Castle of Valderrobles

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-valderrobles-q3571931` |
| Coordinates | 40.87583, 0.15472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.87583/0.15472)) |
| Wikidata | [Q3571931](https://www.wikidata.org/wiki/Q3571931) (CC0) |
| Wikidata class | castle |
| Types | castle\|Monument (Spain) |
| Administrative area | Valderrobres |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `website` | http://www.castillodevalderrobres.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 358 elements (outline 1, marker 3, road 143, building 509, waterway 2, water 2, wall 82, retaining-wall 2, zone 3).

Evidence: documented 0, mapped 358, inferred 0, derived 0; heights documented 2, inferred 0, unknown 202.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/143684909 historic=castle Q3571931 34 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 509 mapped (trace size budget); the rest of the town is not drawn
- origin moved 36 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.87583/0.15472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Monument (Spain); sitelinks=4; wikidata:Q3571931 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 358 elements); data/traces/castle-of-valderrobles-q3571931.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
