# Korlai

> India · Maharashtra · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `korlai` |
| Coordinates | 18.5377, 72.9074 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.5377/72.9074)) |
| Wikidata | [Q6432353](https://www.wikidata.org/wiki/Q6432353) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Raigad district |
| Inception | 1521 |
| Designations | Heritage of Portuguese Influence\|Monument of National Importance |
| Wikipedia language editions | 6 |
| Programme catalogue | confidence high, significance rank 252; sources catalogue:korlai;wikidata:Q97308963;wikidata:Q6432353;smith-newton:r2094 |
| OSM `historic` | fort |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 12 elements (outline 1, coastline 1, road 3, building 5, water 1).

Evidence: documented 0, mapped 12, inferred 0, derived 1; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/279967536 historic=fort Q6432353 9 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":5670,"medianInside":0.1,"medianOutside":27}
- 1219 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.5377/72.9074) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/korlai-mapped-ridge-pass.md](../../../research/korlai-mapped-ridge-pass.md)
- [docs/research/korlai-pass.md](../../../research/korlai-pass.md)

## Ledger note

src/levels/korlai.trace.js (curation tools/trace/curation/korlai.mjs), level src/levels/korlai-t1.js replaces the old scene by id (the old src/levels/korlai.js is kept, chaul-estuary.js imports it); eras 1680 (mapped line carried back, inferred) and today. OSM way 279967536 strip 735 x 84 m, about 26 m wide on average: the written 27 m breadth agrees, the written 862 m length is 15% more. Drawn: outline and wall line, coast and derived sea, five buildings, three paths. No gate, bastion, cistern, church or height drawn; 1955 lighthouse reported by an earlier pass not re-read. Wikipedia conflicts: 1521/1594 against 1646-1680, Maratha 1739/1740. T2 needs: a survey plan of the ridge fort, gates, 7 bastions, cisterns, church, wall heights. docs/research/korlai-pass.md Alpha-U batch (2026-11-11): 10 forts across A-Z starting at U, work order 5/10; distinct from batch 0 and alpha-I/K/L/T/V/X.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
