# Sigiriya

> Sri Lanka · Central · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sigiriya` |
| Coordinates | 7.957, 80.76 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/7.957/80.76)) |
| Programme catalogue | confidence high, significance rank 7; sources catalogue:sigiriya;wikidata:Q272153;unesco:202 |
| OSM `historic` | archaeological_site |
| OSM `description` | 1860 marches à monter afin d'atteindre le sommet (~1h30) |

## What the model contains

Tier **T1**, status `outline-only`, 157 elements (outline 1, marker 4, road 70, building 57, water 19, zone 5, waterway 1).

Evidence: documented 0, mapped 157, inferred 0, derived 0; heights documented 0, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23810659 historic=archaeological_site 21 m from ledger point
- origin moved 19 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/7.957/80.76) | 2026-11-15 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-15 |

## Research notes

- [docs/research/sigiriya-pass.md](../../../research/sigiriya-pass.md)

## Ledger note

src/levels/sigiriya.trace.js (curation tools/trace/curation/sigiriya.mjs), level src/levels/sigiriya-t1.js, registered in alpha-x0.js. Geometry: the first fetch (2026-11-11) failed, re-fetched by the Actions pipeline on 2026-11-15. Missing for T2: A survey plan of the summit palace, the terraced and water gardens, the ramparts and moat, the Mirror Wall and gates; dated phases; a finer terrain model for the rock. Research: docs/research/sigiriya-pass.md. Batch-0 run 2026-11-15; written history not researched. Batch 0 (2026-11-11): alphabetical sweep F-V chosen by user; do first.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sri-lanka.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
