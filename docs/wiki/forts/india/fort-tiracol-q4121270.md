# Fort Tiracol

> India · Pernem taluk · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-tiracol-q4121270` |
| Coordinates | 15.7306, 73.682 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.7306/73.682)) |
| Wikidata | [Q4121270](https://www.wikidata.org/wiki/Q4121270) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Pernem taluk |
| Designations | Heritage of Portuguese Influence\|State Protected Monument |
| Wikipedia language editions | 7 |
| Programme catalogue | confidence medium, significance rank 527; sources wikidata:Q4121270 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 10 elements (outline 1, road 3, coastline 3, zone 2, water 1).

Evidence: documented 0, mapped 10, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1157983652 historic=fort Q4121270 1137 m from ledger point
- origin moved 1137 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":539,"medianInside":3.6,"medianOutside":18.1}
- 25 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.7306/73.682) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=medium; rank=527; sources=1 \| 2026-11-16: auto-T1 by the model-all pipeline run directly (outline-only, 10 elements); data/traces/fort-tiracol-q4121270.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
