# Arnala Fort

> India · Palghar district · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arnala-fort-q3778583` |
| Coordinates | 19.46577, 72.73247 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/19.46577/72.73247)) |
| Wikidata | [Q3778583](https://www.wikidata.org/wiki/Q3778583) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Palghar district |
| Designations | Heritage of Portuguese Influence\|Monument of National Importance |
| Wikipedia language editions | 10 |
| Programme catalogue | confidence high, significance rank 332; sources wikidata:Q3778583;smith-newton:r202 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 14 elements (outline 1, marker 1, coastline 1, wall 1, building 1, road 6, water 3).

Evidence: documented 0, mapped 14, inferred 0, derived 2; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6538186 historic=castle Q3778583 22 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":104,"medianInside":3.3,"medianOutside":4.2}
- sea-1: DEM check ok {"cells":821,"medianInside":1.8,"medianOutside":5}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/19.46577/72.73247) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Ledger note

src/levels/arnala-fort-q3778583.trace.js (curation tools/trace/curation/arnala-fort-q3778583.mjs), level src/levels/arnala-fort-q3778583.js; eras 1737 (mapped line carried back, inferred) and today. Drawn: OSM relation 6538186 outline (about 239 x 219 m), wall way 122375460, island coast and derived sea, mapped reservoir, one building, six paths. No gate, bastion or height drawn: none has a plan position or sourced height. Wikipedia conflicts: Maratha end 1817/1818, Portuguese tower at the west or south end. T2 needs: a plan of the Maratha fort, the 10 bastion and the north gate positions, wall heights. docs/research/arnala-pass.md Alpha-U batch (2026-11-11): 10 forts across A-Z starting at U, work order 2/10; distinct from batch 0 and alpha-I/K/L/T/V/X.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
