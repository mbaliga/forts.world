# Jaigad Fort

> India · Ratnagiri district · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jaigad-fort-q6123540` |
| Coordinates | 17.302115, 73.220903 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/17.302115/73.220903)) |
| Wikidata | [Q6123540](https://www.wikidata.org/wiki/Q6123540) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Ratnagiri district |
| Designations | Monument of National Importance |
| Wikipedia language editions | 6 |
| Programme catalogue | confidence medium, significance rank 600; sources wikidata:Q6123540 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 50 elements (outline 1, road 6, building 41, coastline 1, water 1).

Evidence: documented 0, mapped 50, inferred 0, derived 1; heights documented 0, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/197388521 historic=fort Q6123540 181 m from ledger point
- origin moved 178 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":571,"medianInside":9,"medianOutside":52.2}
- 40 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/17.302115/73.220903) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=medium; rank=600; sources=1 \| 2026-11-16: auto-T1 by the model-all pipeline run directly (outline-only, 50 elements); data/traces/jaigad-fort-q6123540.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
