# Búnquer del Torrent d'en Gayo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunquer-del-torrent-d-en-gayo-q132259498` |
| Coordinates | 41.48144, 2.33067 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.48144/2.33067)) |
| Wikidata | [Q132259498](https://www.wikidata.org/wiki/Q132259498) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | El Masnou |
| Inception | 1936 |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 352 elements (outline 1, marker 1, road 173, building 338, coastline 1, zone 5, waterway 1, wall 73).

Evidence: documented 0, mapped 352, inferred 0, derived 0; heights documented 120, inferred 0, unknown 73.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1131763838 historic=archaeological_site Q65204247 473 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 338 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 173 mapped (trace size budget); minor lanes are not drawn
- origin moved 471 m from the ledger point to the outline centroid
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.48144/2.33067) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=1; wikidata:Q132259498 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 352 elements); data/traces/bunquer-del-torrent-d-en-gayo-q132259498.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
