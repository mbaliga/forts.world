# Fort St. Anthony of Simbor

> India · Diu district · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-st-anthony-of-simbor-q5472072` |
| Coordinates | 20.763157, 71.151602 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/20.763157/71.151602)) |
| Wikidata | [Q5472072](https://www.wikidata.org/wiki/Q5472072) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Diu district |
| Inception | 1722 |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 5 |
| Programme catalogue | confidence high, significance rank 3264; sources wikidata:Q5472072;smith-newton:r641 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 7 elements (outline 1, coastline 4, water 2).

Evidence: documented 0, mapped 7, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/562260191 historic=castle Q5472072 17 m from ledger point
- island ring (11506 m2) cut out of sea-0
- origin moved 20 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1428,"medianInside":0.2,"medianOutside":1}
- sea-1: DEM check failed {"cells":1569,"medianInside":0.4,"medianOutside":-0.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/20.763157/71.151602) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=high; rank=3264; sources=2 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline-only, 7 elements); data/traces/fort-st-anthony-of-simbor-q5472072.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
