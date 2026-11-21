# Pratapgad

> India · Maharashtra · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pratapgad` |
| Coordinates | 17.936, 73.578 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/17.936/73.578)) |
| Wikidata | [Q3582929](https://www.wikidata.org/wiki/Q3582929) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Satara district |
| Inception | 1656 |
| Designations | part of UNESCO World Heritage Site |
| Wikipedia language editions | 12 |
| Programme catalogue | confidence high, significance rank 292; sources catalogue:pratapgad;wikidata:Q3582929;smith-newton:r93 |
| OSM `historic` | fort |
| OSM `heritage` | https://whc.unesco.org/en/list/1739 |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 20 elements (outline 1, marker 1, road 11, building 4, water 2).

Evidence: documented 0, mapped 20, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1569578753 historic=fort Q3582929 59 m from ledger point
- origin moved 59 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/17.936/73.578) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/pratapgad-pass.md](../../../research/pratapgad-pass.md)

## Ledger note

src/levels/pratapgad.trace.js (curation tools/trace/curation/pratapgad.mjs), level src/levels/pratapgad.js replaces the generated scene by id (old scene kept in maratha.js); eras 1659 (outline and Bhavani temple site carried back, inferred) and today. OSM way 1569578753 (World Heritage tags, ref:whc 1739-007) outline 645 x 328 m (8.7 ha); grid reads 1,060 m against the written 1,080 m. Drawn: outline and wall line, three temples, guest house (today only), two water bodies, paths, SH 72. No gate, bastion or height drawn; today build takes about 3.7 s (under the 6 s gate). T2 needs: plans from the World Heritage nomination file (ref 1739), gate and bastion positions, wall heights. docs/research/pratapgad-pass.md Alpha-U batch (2026-11-11): 10 forts across A-Z starting at U, work order 8/10; distinct from batch 0 and alpha-I/K/L/T/V/X.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
