# Panhala

> India · Maharashtra · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `panhala` |
| Coordinates | 16.808889, 74.109167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/16.808889/74.109167)) |
| Wikidata | [Q7131008](https://www.wikidata.org/wiki/Q7131008) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Kolhapur district |
| Inception | 1178 |
| Designations | part of UNESCO World Heritage Site\|Monument of National Importance |
| Wikipedia language editions | 12 |
| Programme catalogue | confidence high, significance rank 223; sources catalogue:panhala;wikidata:Q7131008;smith-newton:r81 |
| OSM `historic` | fort |
| OSM `heritage` | https://whc.unesco.org/en/list/1739 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 45 elements (outline 1, marker 5, road 31, water 1, zone 1, building 6).

Evidence: documented 0, mapped 45, inferred 0, derived 0; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/120880303 historic=fort Q7131008 133 m from ledger point
- origin moved 147 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/16.808889/74.109167) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/panhala-pass.md](../../../research/panhala-pass.md)

## Ledger note

src/levels/panhala.trace.js (curation tools/trace/curation/panhala.mjs), level src/levels/panhala-t1.js, registered in alpha-x0.js. Outline is OSM way 120880303 (36 vertices, Q7131008); a second way, Pavangad (120880304), lies beside it and was not drawn. Missing for T2: A plan with the wall circuit, Teen Darwaza, Char Darwaza, granaries and the Pavangad outwork; wall heights. Research: docs/research/panhala-pass.md. Batch-0 run 2026-11-15; written history not researched. Batch 0 (2026-11-11): alphabetical sweep F-V chosen by user; do first. coords from wikidata (was 16.812,74.11)

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
