# Aggersborg

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aggersborg-q393191` |
| Coordinates | 56.99561, 9.2549 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.99561/9.2549)) |
| Wikidata | [Q393191](https://www.wikidata.org/wiki/Q393191) (CC0) |
| Wikidata class | fort |
| Types | circular rampart\|Viking ring fortress |
| Administrative area | Vesthimmerland Municipality |
| Inception | 0980 |
| Designations | part of UNESCO World Heritage Site\|protected ancient monument in Denmark |
| UNESCO WHC id | 1660-001 |
| Wikipedia language editions | 16 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | ringfort |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 110 elements (outline 1, zone 5, wall 2, road 82, building 16, water 3, coastline 1).

Evidence: documented 0, mapped 110, inferred 0, derived 0; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/77767709 historic=archaeological_site Q393191 11 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 10 m from the ledger point to the outline centroid
- 27 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.99561/9.2549) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; circular rampart\|Viking ring fortress; sitelinks=16; wikidata:Q393191 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 110 elements); data/traces/aggersborg-q393191.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
