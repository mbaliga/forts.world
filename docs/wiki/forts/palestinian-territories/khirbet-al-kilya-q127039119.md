# Khirbet al-Kilya

> Palestinian Territories · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `khirbet-al-kilya-q127039119` |
| Coordinates | 31.93211, 35.34347 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/31.93211/35.34347)) |
| Wikidata | [Q127039119](https://www.wikidata.org/wiki/Q127039119) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|castrum |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `barrier` | wall |
| OSM `website` | https://survey.antiquities.org.il/#/MapSurvey/73/site/10579 |

## What the model contains

Tier **T1**, status `outline+walls`, 95 elements (outline 1, marker 1, road 18, waterway 1, zone 2, building 71).

Evidence: documented 0, mapped 95, inferred 0, derived 0; heights documented 0, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/744842075 historic=ruins 33 m from ledger point
- origin moved 36 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/31.93211/35.34347) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|castrum; sitelinks=1; wikidata:Q127039119 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 95 elements); data/traces/khirbet-al-kilya-q127039119.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/palestinian-territories.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
