# Kareng Ghar, Garhgaon

> India · Assam · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kareng-ghar` |
| Coordinates | 26.936406, 94.745188 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.936406/94.745188)) |
| Programme catalogue | confidence high, significance rank 243; sources catalogue:kareng-ghar;wikidata:Q6370156;smith-newton:r447 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 27 elements (outline 1, wall 4, road 1, building 21).

Evidence: documented 0, mapped 27, inferred 0, derived 0; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/656337392 historic=castle 15 m from ledger point
- origin moved 13 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.936406/94.745188) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Ledger note

coords from wikidata (was 26.928,94.738) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 0 elements); data/traces/kareng-ghar.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: the first OSM fetch (2026-11-14) had returned nothing; OSM re-fetched with the same query and 500 m radius (64 elements), terrain tiles unchanged, auto-T1 rebuilt (outline+walls, 27 elements). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
