# Dubno Castle

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dubno-castle-q2658050` |
| Coordinates | 50.41954, 25.74808 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.41954/25.74808)) |
| Wikidata | [Q2658050](https://www.wikidata.org/wiki/Q2658050) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Rivne Oblast |
| Inception | 1492 |
| Designations | architectural monument of national significance of Ukraine\|cultural heritage site in Ukraine |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 237 elements (outline 1, marker 10, road 69, waterway 5, wall 7, building 333, zone 23, cliff 1, water 1).

Evidence: documented 0, mapped 237, inferred 0, derived 0; heights documented 20, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/741307380 historic=castle Q2658050 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 333 mapped (trace size budget); the rest of the town is not drawn
- origin moved 23 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.41954/25.74808) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=16; wikidata:Q2658050 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 237 elements); data/traces/dubno-castle-q2658050.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
