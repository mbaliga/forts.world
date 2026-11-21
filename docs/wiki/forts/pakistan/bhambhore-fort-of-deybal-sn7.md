# Bhambhore / Fort of Deybal

> Pakistan · Sindh · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bhambhore-fort-of-deybal-sn7` |
| Coordinates | 24.75306, 67.521444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/24.75306/67.521444)) |
| Wikidata | [Q491993](https://www.wikidata.org/wiki/Q491993) (CC0) |
| Programme catalogue | confidence medium, significance rank 5022; sources smith-newton:r7 |
| OSM `historic` | archaeological_site |
| OSM `description` | Archaeological heritage site |

## What the model contains

Tier **T1**, status `outline-only`, 65 elements (outline 1, building 57, water 2, road 4, coastline 1).

Evidence: documented 0, mapped 65, inferred 0, derived 1; heights documented 56, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1340668900 historic=archaeological_site Q491993 126 m from ledger point
- origin moved 138 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1351,"medianInside":0.9,"medianOutside":3.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/24.75306/67.521444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=5022; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 65 elements); data/traces/bhambhore-fort-of-deybal-sn7.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/pakistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
