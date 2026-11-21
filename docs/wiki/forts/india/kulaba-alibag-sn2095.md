# Kulaba / Alibag

> India · Maharashtra · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kulaba-alibag-sn2095` |
| Coordinates | 18.634212, 72.864338 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.634212/72.864338)) |
| Wikidata | [Q3824083](https://www.wikidata.org/wiki/Q3824083) (CC0) |
| Wikidata class | fort |
| Types | sea fort |
| Administrative area | Raigad district |
| Designations | Monument of National Importance |
| Wikipedia language editions | 9 |
| Programme catalogue | confidence medium, significance rank 6590; sources smith-newton:r2095 |
| OSM `historic` | fort |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 4 elements (outline 1, coastline 1, water 1).

Evidence: documented 0, mapped 4, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/279966812 historic=fort Q3824083 41 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 44 m from the ledger point to the outline centroid
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.634212/72.864338) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=6590; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 4 elements); data/traces/kulaba-alibag-sn2095.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
