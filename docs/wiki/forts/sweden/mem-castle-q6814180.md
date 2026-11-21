# Mem Castle

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mem-castle-q6814180` |
| Coordinates | 58.48156, 16.41119 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.48156/16.41119)) |
| Wikidata | [Q6814180](https://www.wikidata.org/wiki/Q6814180) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Norrköping Municipality |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 28 elements (outline 1, waterway 1, water 1, coastline 1, zone 5, road 9, building 10).

Evidence: documented 0, mapped 28, inferred 0, derived 0; heights documented 3, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1381597511 historic=castle Q6814180 3 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.48156/16.41119) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=4; wikidata:Q6814180 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 28 elements); data/traces/mem-castle-q6814180.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
