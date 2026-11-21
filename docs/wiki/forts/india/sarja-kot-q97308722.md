# Sarja Kot

> India · Raigad district · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sarja-kot-q97308722` |
| Coordinates | 18.637778, 72.865556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.637778/72.865556)) |
| Wikidata | [Q97308722](https://www.wikidata.org/wiki/Q97308722) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Raigad district |
| Designations | Monument of National Importance |
| Wikipedia language editions | 0 |
| Programme catalogue | confidence medium, significance rank 2797; sources wikidata:Q97308722 |
| OSM `historic` | fort |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 5 elements (outline 1, coastline 2, water 1).

Evidence: documented 0, mapped 5, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/279967258 historic=fort 24 m from ledger point
- origin moved 23 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1508,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.637778/72.865556) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=medium; rank=2797; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 5 elements); data/traces/sarja-kot-q97308722.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
