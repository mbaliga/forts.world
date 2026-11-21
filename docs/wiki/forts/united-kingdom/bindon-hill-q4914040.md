# Bindon Hill

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bindon-hill-q4914040` |
| Coordinates | 50.6202, -2.2336 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.6202/-2.2336)) |
| Wikidata | [Q4914040](https://www.wikidata.org/wiki/Q4914040) (CC0) |
| Wikidata class | fort |
| Types | contour fort |
| Administrative area | West Lulworth |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |

## What the model contains

Tier **T1**, status `outline-only`, 29 elements (outline 1, road 18, building 4, zone 4, cliff 1, coastline 1).

Evidence: documented 0, mapped 29, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1021731726 historic=archaeological_site Q4914040 226 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 213 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.6202/-2.2336) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; contour fort; sitelinks=2; wikidata:Q4914040 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 29 elements); data/traces/bindon-hill-q4914040.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
