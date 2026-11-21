# Château de Joyeuse Garde

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-joyeuse-garde-q2969446` |
| Coordinates | 48.4242, -4.3162 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.4242/-4.3162)) |
| Wikidata | [Q2969446](https://www.wikidata.org/wiki/Q2969446) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | La Forest-Landerneau |
| Inception | 1200 |
| Designations | classified historical monument |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, building 197, road 108, coastline 2, zone 11, waterway 1, water 1, retaining-wall 2, wall 1).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 2, inferred 0, unknown 198.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1429107428 historic=castle Q2969446 25 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 26 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.4242/-4.3162) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=6; wikidata:Q2969446 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/chateau-de-joyeuse-garde-q2969446.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
