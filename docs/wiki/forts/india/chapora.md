# Chapora

> India · Goa · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chapora` |
| Coordinates | 15.6059263, 73.7360558 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.6059263/73.7360558)) |
| Wikidata | [Q5073352](https://www.wikidata.org/wiki/Q5073352) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Bardez taluk |
| Designations | Heritage of Portuguese Influence\|State Protected Monument |
| Wikipedia language editions | 8 |
| Programme catalogue | confidence high, significance rank 233; sources catalogue:chapora;wikidata:Q5073352;smith-newton:r89;smith-newton:r568 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 63 elements (outline 1, road 30, wall 3, coastline 3, retaining-wall 2, building 12, water 4, zone 8).

Evidence: documented 0, mapped 63, inferred 0, derived 2; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15959326 historic=castle Q5073352 18 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":8,"medianInside":6.5,"medianOutside":30.8}
- sea-1: DEM check ok {"cells":109,"medianInside":8.9,"medianOutside":31.3}
- 27 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.6059263/73.7360558) | 2026-11-02 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-02 |

## Research notes

- [docs/research/chapora-mapped-perimeter-pass.md](../../../research/chapora-mapped-perimeter-pass.md)
- [docs/research/chapora-pass.md](../../../research/chapora-pass.md)

## Ledger note

src/levels/chapora.trace.js (curation tools/trace/curation/chapora.mjs), level src/levels/chapora.js; eras 1617/1717/today (OSM relation 15959326 perimeter, coast, sea carried back, inferred). No wall face, gate, bastion, tunnel or height drawn: none has a plan position or sourced height. Builder conflict (Portuguese 1617 vs Adil Shah). T2 needs: Lopes 2018 fig 25 opened and registered, conservation survey or orthophoto, wall heights. docs/research/chapora-pass.md

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
