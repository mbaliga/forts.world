# Alsnö hus

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alsno-hus-q835168` |
| Coordinates | 59.3608, 17.53576 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.3608/17.53576)) |
| Wikidata | [Q835168](https://www.wikidata.org/wiki/Q835168) (CC0) |
| Wikidata class | ruin |
| Types | castle\|ruins\|kongsgård |
| Administrative area | Ekerö Municipality |
| Inception | 1270 |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 10 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 80 elements (outline 1, marker 4, zone 5, road 30, building 39, wall 1).

Evidence: documented 0, mapped 80, inferred 0, derived 0; heights documented 0, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9279947 historic=archaeological_site Q1916655 96 m from ledger point
- origin moved 99 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.3608/17.53576) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|ruins\|kongsgård; sitelinks=10; wikidata:Q835168 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 80 elements); data/traces/alsno-hus-q835168.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
