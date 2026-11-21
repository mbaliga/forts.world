# Lahore Fort (Shahi Qila)

> Pakistan · Punjab · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lahore-fort` |
| Coordinates | 31.590278, 74.309722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/31.590278/74.309722)) |
| Wikidata | [Q613720](https://www.wikidata.org/wiki/Q613720) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Lahore |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 171-001 |
| Wikipedia language editions | 49 |
| Programme catalogue | confidence high, significance rank 10; sources catalogue:lahore-fort;wikidata:Q613720;wikidata:Q155727;osm:w105841051;smith-newton:r17 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | https://whc.unesco.org/en/list/171 |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 11, road 332, building 173, zone 96, wall 20, water 15, retaining-wall 18).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 3, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/105841051 historic=castle Q613720 495 m from ledger point
- pruned to the outline plus 30 m: 666 -> 293 elements
- origin moved 494 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/31.590278/74.309722) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/lahore-fort-pass.md](../../../research/lahore-fort-pass.md)

## Ledger note

src/levels/lahore-fort.trace.js (curation tools/trace/curation/lahore-fort.mjs), level src/levels/lahore-fort-t1.js, registered in alpha-x0.js. Outline is OSM way 105841051 (castle, about 490 x 534 m, Q613720). Missing for T2: A survey plan dated by phase (Mughal, Sikh, British) to place the Alamgiri and Masti gates, Diwan-i-Aam, Moti Masjid, Sheesh Mahal and Picture Wall; wall heights. Research: docs/research/lahore-fort-pass.md. Batch-0 run 2026-11-15; written history not researched. Batch 0 (2026-11-11): alphabetical sweep F-V chosen by user; do first. coords from wikidata (was 31.588,74.315)

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/pakistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
