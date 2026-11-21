# Mehrangarh

> India · Rajasthan · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mehrangarh` |
| Coordinates | 26.298, 73.018 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.298/73.018)) |
| Wikidata | [Q1483099](https://www.wikidata.org/wiki/Q1483099) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Jodhpur |
| Designations | State Protected Monument |
| Wikipedia language editions | 30 |
| Programme catalogue | confidence high, significance rank 183; sources catalogue:mehrangarh;wikidata:Q1483099;wikidata:Q140667484;smith-newton:r77 |
| OSM `historic` | castle |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 130 elements (outline 1, marker 6, water 5, road 153, building 444, zone 3, wall 9, waterway 1).

Evidence: documented 0, mapped 130, inferred 0, derived 0; heights documented 0, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31725311 historic=castle Q1483099 44 m from ledger point
- pruned to the outline plus 40 m: 622 -> 129 elements
- origin moved 43 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.298/73.018) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/mehrangarh-mapped-lakes-pass.md](../../../research/mehrangarh-mapped-lakes-pass.md)
- [docs/research/mehrangarh-pass.md](../../../research/mehrangarh-pass.md)

## Ledger note

src/levels/mehrangarh.trace.js (curation tools/trace/curation/mehrangarh.mjs), level src/levels/mehrangarh-t1.js, registered in alpha-x0.js. Outline is OSM way 31725311 (Q1483099). Missing for T2: A plan of the gate sequence (Jayapol, Fatehpol, Lohapol), the palace courts and phases; wall heights. Research: docs/research/mehrangarh-pass.md. Batch-0 run 2026-11-15; written history not researched. Batch 0 (2026-11-11): alphabetical sweep F-V chosen by user; do first. \| 2026-11-19: the Forts of the World page links this fort's hand-built constructed level, one of the first Ten Forts of India (ten-forts.html?fort=mehrangarh).

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
