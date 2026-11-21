# Haapsalu Castle

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `haapsalu-castle-q866154` |
| Coordinates | 58.94722, 23.53861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.94722/23.53861)) |
| Wikidata | [Q866154](https://www.wikidata.org/wiki/Q866154) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Haapsalu City |
| Inception | 1201 |
| Designations | architectural monument |
| Wikipedia language editions | 31 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 330 elements (outline 1, marker 8, road 134, coastline 1, building 163, wall 7, waterway 1, zone 15).

Evidence: documented 0, mapped 330, inferred 0, derived 0; heights documented 127, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/112303709 historic=yes 34 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 34 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.94722/23.53861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=31; wikidata:Q866154 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 330 elements); data/traces/haapsalu-castle-q866154.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
