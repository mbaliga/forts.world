# Anjanvel / Gopalgad

> India · Maharashtra · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `anjanvel-gopalgad-sn2124` |
| Coordinates | 17.570703, 73.151755 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/17.570703/73.151755)) |
| Wikidata | [Q38251240](https://www.wikidata.org/wiki/Q38251240) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Ratnagiri district |
| Wikipedia language editions | 5 |
| Programme catalogue | confidence medium, significance rank 4662; sources smith-newton:r2124 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 3 elements (outline 1, coastline 1, water 1).

Evidence: documented 0, mapped 3, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1019637856 historic=fort Q38251240 68 m from ledger point
- origin moved 77 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":467,"medianInside":9.4,"medianOutside":72.2}
- 71 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/17.570703/73.151755) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=medium; rank=4662; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline-only, 3 elements); data/traces/anjanvel-gopalgad-sn2124.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
