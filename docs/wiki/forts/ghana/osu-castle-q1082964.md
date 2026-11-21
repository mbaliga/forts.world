# Osu Castle

> Ghana · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `osu-castle-q1082964` |
| Coordinates | 5.5466, -0.1827 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/5.5466/-0.1827)) |
| Wikidata | [Q1082964](https://www.wikidata.org/wiki/Q1082964) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Accra Metropolitan District |
| Inception | 1659 |
| Designations | Ghana’s material cultural heritage\|part of UNESCO World Heritage Site |
| Wikipedia language editions | 27 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 218 elements (outline 1, marker 1, coastline 2, road 89, water 2, building 627, waterway 3).

Evidence: documented 0, mapped 218, inferred 0, derived 1; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/11827738 historic=castle 171 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 627 mapped (trace size budget); the rest of the town is not drawn
- origin moved 167 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3053,"medianInside":0,"medianOutside":9.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/5.5466/-0.1827) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=27; wikidata:Q1082964 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 218 elements); data/traces/osu-castle-q1082964.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ghana.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
