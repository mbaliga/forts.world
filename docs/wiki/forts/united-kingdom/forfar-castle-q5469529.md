# Forfar Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forfar-castle-q5469529` |
| Coordinates | 56.646, -2.89 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.646/-2.89)) |
| Wikidata | [Q5469529](https://www.wikidata.org/wiki/Q5469529) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Angus |
| Wikipedia language editions | 5 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 349 elements (outline 1, marker 2, road 145, building 270, wall 58, zone 9, retaining-wall 11, water 2, waterway 1).

Evidence: documented 0, mapped 349, inferred 0, derived 0; heights documented 5, inferred 0, unknown 184.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/406324761 historic=monument 97 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 270 mapped (trace size budget); the rest of the town is not drawn
- origin moved 97 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.646/-2.89) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q5469529 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 349 elements); data/traces/forfar-castle-q5469529.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
