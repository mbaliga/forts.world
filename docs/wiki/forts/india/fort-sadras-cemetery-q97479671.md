# Fort Sadras Cemetery

> India · Sadras · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-sadras-cemetery-q97479671` |
| Coordinates | 12.525657, 80.163588 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/12.525657/80.163588)) |
| Wikidata | [Q97479671](https://www.wikidata.org/wiki/Q97479671) (CC0) |
| Programme catalogue | confidence high, significance rank 590; sources wikidata:Q97479671;wikidata:Q98601601;smith-newton:r2919 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 64 elements (outline 1, road 29, water 2, coastline 1, waterway 1, zone 1, building 28, wall 1).

Evidence: documented 0, mapped 64, inferred 0, derived 1; heights documented 1, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/911713515 historic=fort 10 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":3.2,"medianOutside":9.5}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/12.525657/80.163588) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=high; rank=590; sources=3 \| 2026-11-16: auto-T1 by the model-all pipeline run directly (outline+walls, 64 elements); data/traces/fort-sadras-cemetery-q97479671.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
