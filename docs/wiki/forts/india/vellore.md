# Vellore

> India · Tamil Nadu · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vellore` |
| Coordinates | 12.921, 79.13 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/12.921/79.13)) |
| Wikidata | [Q3390913](https://www.wikidata.org/wiki/Q3390913) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Vellore district |
| Designations | Monument of National Importance |
| Wikipedia language editions | 11 |
| Programme catalogue | confidence high, significance rank 227; sources catalogue:vellore;wikidata:Q3390913;smith-newton:r112 |
| OSM `historic` | fort |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 149 elements (outline 1, marker 4, road 68, wall 6, building 60, zone 7, waterway 2).

Evidence: documented 0, mapped 149, inferred 0, derived 0; heights documented 0, inferred 0, unknown 67.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/557512110 historic=fort Q3390913 167 m from ledger point
- origin moved 168 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/12.921/79.13) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/vellore-pass.md](../../../research/vellore-pass.md)

## Ledger note

src/levels/vellore.trace.js (curation tools/trace/curation/vellore.mjs), level src/levels/vellore-t1.js, registered in alpha-x0.js. Outline is OSM way 557512110 (273 vertices, Q3390913). Missing for T2: A survey plan or historic view for the bastions, gate and drawbridge, Jalakandeswarar temple, church and mosque, moat width; wall heights. Research: docs/research/vellore-pass.md. Batch-0 run 2026-11-15; written history not researched. Batch 0 (2026-11-11): alphabetical sweep F-V chosen by user; do first.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
