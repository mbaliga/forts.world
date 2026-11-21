# Bekal

> India · Kerala · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bekal` |
| Coordinates | 12.3926, 75.033 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/12.3926/75.033)) |
| Wikidata | [Q3519346](https://www.wikidata.org/wiki/Q3519346) (CC0) |
| Wikidata class | fort |
| Types | building\|fort |
| Administrative area | Kerala |
| Designations | Monument of National Importance |
| Wikipedia language editions | 13 |
| Programme catalogue | confidence high, significance rank 218; sources catalogue:bekal;wikidata:Q3519346;smith-newton:r86 |
| OSM `historic` | fort |
| OSM `website` | https://www.keralatourism.org/destination/bekal-kasaragod/259 |

## What the model contains

Tier **T1**, status `outline+walls`, 67 elements (outline 1, road 24, coastline 4, building 22, zone 13, wall 1, water 2).

Evidence: documented 0, mapped 67, inferred 0, derived 1; heights documented 7, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/670422415 historic=fort Q3519346 10 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":634,"medianInside":1.9,"medianOutside":22.7}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/12.3926/75.033) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Research notes

- [docs/research/bekal-mapped-fort-pass.md](../../../research/bekal-mapped-fort-pass.md)

## Ledger note

Alpha-D batch (2026-11-14): 10 forts spread across A-Z starting at D (batch-alpha-D.csv). \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 67 elements); data/traces/bekal.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
