# Manoir du Grand-Pontébar

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manoir-du-grand-pontebar-q22925141` |
| Coordinates | 48.7879, -3.08659 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.7879/-3.08659)) |
| Wikidata | [Q22925141](https://www.wikidata.org/wiki/Q22925141) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|manor estate |
| Administrative area | Paimpol |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 45 elements (outline 1, marker 1, zone 2, road 8, coastline 1, building 31, waterway 1).

Evidence: documented 0, mapped 45, inferred 0, derived 0; heights documented 0, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/194162613 historic=castle Q22925141 3 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.7879/-3.08659) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|manor estate; sitelinks=2; wikidata:Q22925141 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 45 elements); data/traces/manoir-du-grand-pontebar-q22925141.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
