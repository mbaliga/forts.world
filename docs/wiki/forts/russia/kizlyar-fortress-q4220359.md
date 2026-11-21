# Kizlyar Fortress

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kizlyar-fortress-q4220359` |
| Coordinates | 43.849, 46.708 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.849/46.708)) |
| Wikidata | [Q4220359](https://www.wikidata.org/wiki/Q4220359) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 207 elements (outline 1, marker 1, road 27, building 176, waterway 2).

Evidence: documented 0, mapped 207, inferred 0, derived 0; heights documented 1, inferred 0, unknown 175.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/114007929 historic=ruins 44 m from ledger point
- origin moved 44 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.849/46.708) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=1; wikidata:Q4220359 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 207 elements); data/traces/kizlyar-fortress-q4220359.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
