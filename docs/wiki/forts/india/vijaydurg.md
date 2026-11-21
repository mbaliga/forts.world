# Vijaydurg

> India · Maharashtra · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vijaydurg` |
| Coordinates | 16.560833, 73.333333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/16.560833/73.333333)) |
| Wikidata | [Q3827850](https://www.wikidata.org/wiki/Q3827850) (CC0) |
| Wikidata class | fort |
| Types | sea fort |
| Administrative area | Ratnagiri district |
| Designations | part of UNESCO World Heritage Site\|Monument of National Importance |
| Wikipedia language editions | 7 |
| Programme catalogue | confidence high, significance rank 247; sources catalogue:vijaydurg;wikidata:Q3827850;smith-newton:r116 |
| OSM `historic` | fort |
| OSM `heritage` | https://whc.unesco.org/en/list/1739 |

## What the model contains

Tier **T1**, status `outline+walls`, 19 elements (outline 1, marker 1, road 3, wall 9, coastline 3, building 1, water 1).

Evidence: documented 0, mapped 19, inferred 0, derived 1; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9158821 historic=fort Q3827850 81 m from ledger point
- origin moved 79 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":529,"medianInside":1.3,"medianOutside":6}
- 100 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/16.560833/73.333333) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Research notes

- [docs/research/vijaydurg-mapped-wall-pass.md](../../../research/vijaydurg-mapped-wall-pass.md)

## Ledger note

Alpha-V batch (2026-11-11): 10 forts spread across A-Z starting at V (seq 1/10), checked against all other batch files at push time. Alpha-V batch (2026-11-11): 10 forts spread across A-Z starting at V (seq 1/10), distinct from batch 0, alpha-K, alpha-L, alpha-X and the H set. \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 0 elements); data/traces/vijaydurg.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: the first OSM fetch (2026-11-14) had returned nothing; OSM re-fetched with the same query and 800 m radius (23 elements), terrain tiles unchanged, auto-T1 rebuilt (outline+walls, 19 elements). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
