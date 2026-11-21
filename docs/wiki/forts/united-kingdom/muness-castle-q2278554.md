# Muness Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muness-castle-q2278554` |
| Coordinates | 60.6895, -0.84918 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.6895/-0.84918)) |
| Wikidata | [Q2278554](https://www.wikidata.org/wiki/Q2278554) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Shetland Islands |
| Inception | 1598 |
| Designations | scheduled monument |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 49 elements (outline 1, road 13, building 13, wall 19, coastline 2, zone 1).

Evidence: documented 0, mapped 49, inferred 0, derived 0; heights documented 0, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/170379299 historic=castle Q2278554 84 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 85 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.6895/-0.84918) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=15; wikidata:Q2278554 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 49 elements); data/traces/muness-castle-q2278554.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
