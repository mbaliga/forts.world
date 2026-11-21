# Tellicherry Fort

> India · Kerala · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tellicherry-fort-q3523380` |
| Coordinates | 11.748167, 75.486544 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/11.748167/75.486544)) |
| Wikidata | [Q3523380](https://www.wikidata.org/wiki/Q3523380) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Kerala |
| Designations | Monument of National Importance |
| Wikipedia language editions | 6 |
| Programme catalogue | confidence high, significance rank 419; sources wikidata:Q3523380;smith-newton:r162 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 168 elements (outline 1, marker 1, road 33, building 128, zone 3, coastline 1, water 1).

Evidence: documented 0, mapped 168, inferred 0, derived 1; heights documented 33, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/383475134 historic=castle 10 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":500,"medianInside":3.8,"medianOutside":14.1}
- 10 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/11.748167/75.486544) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=high; rank=419; sources=2 Alpha-R batch (2026-11-11): 10 forts spread across A-Z starting at R, distinct from batch 0 and other alphabet batches. \| 2026-11-16: auto-T1 by the model-all pipeline run directly (outline-only, 168 elements); data/traces/tellicherry-fort-q3523380.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
