# Torra di Campomoru

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torra-di-campomoru-q3379510` |
| Coordinates | 41.6389, 8.80722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.6389/8.80722)) |
| Wikidata | [Q3379510](https://www.wikidata.org/wiki/Q3379510) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|Genoese towers in Corsica |
| Administrative area | Belvédère-Campomoro |
| Designations | monument historique inscrit |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | retaining_wall |

## What the model contains

Tier **T1**, status `outline-only`, 25 elements (outline 1, road 18, building 4, coastline 1, water 1).

Evidence: documented 0, mapped 25, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/193803350 historic=castle Q22949721 20 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":19,"medianInside":0,"medianOutside":19.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.6389/8.80722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|Genoese towers in Corsica; sitelinks=8; wikidata:Q3379510 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 25 elements); data/traces/torra-di-campomoru-q3379510.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
