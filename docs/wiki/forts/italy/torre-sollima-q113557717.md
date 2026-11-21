# Torre Sollima

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-sollima-q113557717` |
| Coordinates | 37.9706, 15.38977 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.9706/15.38977)) |
| Wikidata | [Q113557717](https://www.wikidata.org/wiki/Q113557717) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|tower |
| Administrative area | Roccalumera |
| Inception | C15 |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 382 elements (outline 1, road 123, coastline 1, building 649, wall 321, zone 18, retaining-wall 78, water 1).

Evidence: documented 0, mapped 382, inferred 0, derived 0; heights documented 0, inferred 0, unknown 295.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/315173719 historic=castle Q113557717 0 m from ledger point
- pruned to the outline plus 150 m: 1192 -> 739 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 417 mapped (trace size budget); the rest of the town is not drawn
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.9706/15.38977) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|tower; sitelinks=1; wikidata:Q113557717 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 382 elements); data/traces/torre-sollima-q113557717.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
