# Suvarnadurg

> India · Maharashtra · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `suvarnadurg` |
| Coordinates | 17.816389, 73.084444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/17.816389/73.084444)) |
| Programme catalogue | confidence medium, significance rank 262; sources catalogue:suvarnadurg;wikidata:Q2099096 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 6 elements (outline 1, coastline 1, road 3, water 1).

Evidence: documented 0, mapped 6, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/925343385 historic=fort 655 m from ledger point
- origin moved 653 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":384,"medianInside":2.6,"medianOutside":9.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/17.816389/73.084444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Research notes

- [docs/research/suvarnadurg-mapped-island-pass.md](../../../research/suvarnadurg-mapped-island-pass.md)

## Ledger note

2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 6 elements); data/traces/suvarnadurg.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
