# Gut Loxten

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gut-loxten-q107615338` |
| Coordinates | 52.59314, 7.86977 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.59314/7.86977)) |
| Wikidata | [Q107615338](https://www.wikidata.org/wiki/Q107615338) (CC0) |
| Wikidata class | castle |
| Types | manor estate\|water castle |
| Administrative area | Nortrup |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 57 elements (outline 1, marker 1, road 27, water 2, building 11, zone 7, waterway 7).

Evidence: documented 0, mapped 57, inferred 0, derived 0; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/300792272 historic=castle 4 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.59314/7.86977) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; manor estate\|water castle; sitelinks=1; wikidata:Q107615338 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 57 elements); data/traces/gut-loxten-q107615338.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
