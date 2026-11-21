# Korigad

> India · Pune district · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `korigad-q378531` |
| Coordinates | 18.620278, 73.386111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.620278/73.386111)) |
| Wikidata | [Q378531](https://www.wikidata.org/wiki/Q378531) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Pune district |
| Designations | State Protected Monument |
| Wikipedia language editions | 4 |
| Programme catalogue | confidence high, significance rank 493; sources wikidata:Q378531;smith-newton:r2044 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 17 elements (outline 1, road 11, water 3, building 2).

Evidence: documented 0, mapped 17, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/97391941 historic=fort 78 m from ledger point
- origin moved 78 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.620278/73.386111) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Ledger note

type=fort; confidence=high; rank=493; sources=2 Alpha-H batch (2026-11-14): 10 forts spread across A-Z starting at H, distinct from batch 0 and every other alpha batch. \| 2026-11-16: auto-T1 by the model-all pipeline run directly (outline-only, 18 elements); data/traces/korigad-q378531.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: the first OSM fetch (2026-11-14) had returned nothing; OSM re-fetched with the same query and 600 m radius (20 elements), terrain tiles unchanged, auto-T1 rebuilt (outline-only, 17 elements). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
