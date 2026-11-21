# Trøjborg

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tr-jborg-q1724011` |
| Coordinates | 55.02139, 8.75403 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.02139/8.75403)) |
| Wikidata | [Q1724011](https://www.wikidata.org/wiki/Q1724011) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Tønder Municipality |
| Inception | 1400 |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |
| OSM `description` | Bortset fra kælder og det meste af sydmuren, blev slottet pga forfald nedrevet i 1854. Der er fri adgang for besøgende. |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 55 elements (outline 1, road 24, building 10, water 3, waterway 7, zone 10).

Evidence: documented 0, mapped 55, inferred 0, derived 0; heights documented 1, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/96755544 historic=ruins Q1724011 10 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.02139/8.75403) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=3; wikidata:Q1724011 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 55 elements); data/traces/tr-jborg-q1724011.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
