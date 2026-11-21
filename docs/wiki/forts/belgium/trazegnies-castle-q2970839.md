# Trazegnies Castle

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `trazegnies-castle-q2970839` |
| Coordinates | 50.46146, 4.32993 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.46146/4.32993)) |
| Wikidata | [Q2970839](https://www.wikidata.org/wiki/Q2970839) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Courcelles |
| Inception | C11;C |
| Designations | protected heritage property in Wallonia |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `heritage` | 4 |
| OSM `website` | https://www.chateaudetrazegnies.be |

## What the model contains

Tier **T1**, status `outline+walls`, 199 elements (outline 1, road 42, zone 6, wall 30, building 480).

Evidence: documented 0, mapped 199, inferred 0, derived 0; heights documented 0, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/220663325 historic=castle Q2970839 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 480 mapped (trace size budget); the rest of the town is not drawn
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.46146/4.32993) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=6; wikidata:Q2970839 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 199 elements); data/traces/trazegnies-castle-q2970839.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
