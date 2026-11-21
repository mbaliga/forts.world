# Pontikokastro

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pontikokastro-q19826720` |
| Coordinates | 37.6639, 21.3139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.6639/21.3139)) |
| Wikidata | [Q19826720](https://www.wikidata.org/wiki/Q19826720) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Pyrgos Municipality |
| Wikipedia language editions | 6 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 35 elements (outline 1, marker 3, coastline 1, road 13, building 11, zone 5, wall 1).

Evidence: documented 0, mapped 35, inferred 0, derived 0; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/630589907 historic=ruins 21 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 22 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.6639/21.3139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=6; wikidata:Q19826720 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 35 elements); data/traces/pontikokastro-q19826720.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
