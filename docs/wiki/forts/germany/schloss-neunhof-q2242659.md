# Schloss Neunhof

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-neunhof-q2242659` |
| Coordinates | 49.51904, 11.05144 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.51904/11.05144)) |
| Wikidata | [Q2242659](https://www.wikidata.org/wiki/Q2242659) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Nuremberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 211 elements (outline 1, marker 1, road 80, building 375, wall 3, retaining-wall 2, zone 4).

Evidence: documented 0, mapped 211, inferred 0, derived 0; heights documented 10, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/561888747 historic=castle Q2242659 40 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 375 mapped (trace size budget); the rest of the town is not drawn
- origin moved 40 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.51904/11.05144) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=3; wikidata:Q2242659 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 211 elements); data/traces/schloss-neunhof-q2242659.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
