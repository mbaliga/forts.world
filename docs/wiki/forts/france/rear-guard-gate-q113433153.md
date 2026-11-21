# Rear Guard Gate

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rear-guard-gate-q113433153` |
| Coordinates | 48.39651, -4.50694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.39651/-4.50694)) |
| Wikidata | [Q113433153](https://www.wikidata.org/wiki/Q113433153) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Brest |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 194 elements (outline 1, water 3, road 68, building 82, wall 17, waterway 14, zone 9).

Evidence: documented 0, mapped 194, inferred 0, derived 0; heights documented 0, inferred 0, unknown 99.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/867464992 historic=ruins 485 m from ledger point
- origin moved 485 m from the ledger point to the centre of the mapped site
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.39651/-4.50694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q113433153 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 194 elements); data/traces/rear-guard-gate-q113433153.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
