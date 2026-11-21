# Schloss Polheim Wels

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-polheim-wels-q2242953` |
| Coordinates | 48.15738, 14.02265 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.15738/14.02265)) |
| Wikidata | [Q2242953](https://www.wikidata.org/wiki/Q2242953) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|chapel\|château |
| Administrative area | Wels |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive;stately |
| OSM `website` | https://www.wels.at/Kultur-und-Bildung/Museen-der-Stadt-Wels/Burg-Wels |

## What the model contains

Tier **T1**, status `outline+walls`, 271 elements (outline 1, marker 3, road 139, building 259, waterway 4, wall 1, water 3).

Evidence: documented 0, mapped 271, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23697066 historic=castle Q1014536 407 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 259 mapped (trace size budget); the rest of the town is not drawn
- origin moved 408 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.15738/14.02265) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|chapel\|château; sitelinks=4; wikidata:Q2242953 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 271 elements); data/traces/schloss-polheim-wels-q2242953.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
