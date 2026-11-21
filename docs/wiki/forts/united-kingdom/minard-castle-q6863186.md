# Minard Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `minard-castle-q6863186` |
| Coordinates | 56.0979, -5.25967 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.0979/-5.25967)) |
| Wikidata | [Q6863186](https://www.wikidata.org/wiki/Q6863186) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Argyll and Bute |
| Designations | category B listed building |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 16 elements (outline 1, coastline 1, road 5, building 8, water 1).

Evidence: documented 0, mapped 16, inferred 0, derived 1; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/561870652 historic=castle 71 m from ledger point
- origin moved 73 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":11,"medianInside":5,"medianOutside":13.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.0979/-5.25967) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q6863186 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 16 elements); data/traces/minard-castle-q6863186.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
