# Tauride Palace

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tauride-palace-q676093` |
| Coordinates | 59.94792, 30.37589 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.94792/30.37589)) |
| Wikidata | [Q676093](https://www.wikidata.org/wiki/Q676093) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|location of an event\|event venue |
| Administrative area | Saint Petersburg |
| Inception | 1783 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 30 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 12, road 368, building 71, wall 8, waterway 3, zone 30, retaining-wall 21).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 30, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3801092 historic=castle Q676093 6 m from ledger point
- roads capped: kept the 150 longest of 368 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.94792/30.37589) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|location of an event\|event venue; sitelinks=30; wikidata:Q676093 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/tauride-palace-q676093.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
