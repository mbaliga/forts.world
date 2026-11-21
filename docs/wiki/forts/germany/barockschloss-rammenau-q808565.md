# Barockschloss Rammenau

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `barockschloss-rammenau-q808565` |
| Coordinates | 51.15879, 14.12791 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.15879/14.12791)) |
| Wikidata | [Q808565](https://www.wikidata.org/wiki/Q808565) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Rammenau |
| Inception | 1721 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.barockschloss-rammenau.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 144 elements (outline 1, marker 1, water 3, road 69, building 38, waterway 7, wall 4, zone 21).

Evidence: documented 0, mapped 144, inferred 0, derived 0; heights documented 0, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/47377404 historic=castle Q808565 1 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.15879/14.12791) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=4; wikidata:Q808565 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 144 elements); data/traces/barockschloss-rammenau-q808565.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
