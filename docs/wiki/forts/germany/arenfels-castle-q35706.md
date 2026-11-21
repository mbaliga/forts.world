# Arenfels Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arenfels-castle-q35706` |
| Coordinates | 50.5219, 7.30722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.5219/7.30722)) |
| Wikidata | [Q35706](https://www.wikidata.org/wiki/Q35706) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bad Hönningen |
| Inception | 1201 |
| Designations | cultural heritage monument in Rhineland-Palatinate |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `website` | https://www.schloss-arenfels.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 102 elements (outline 1, road 45, zone 3, building 47, wall 4, cliff 1, retaining-wall 1).

Evidence: documented 0, mapped 102, inferred 0, derived 0; heights documented 0, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29007240 historic=castle Q35706 31 m from ledger point
- origin moved 31 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.5219/7.30722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q35706 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 102 elements); data/traces/arenfels-castle-q35706.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
