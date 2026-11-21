# Stortårnet

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stortarnet-q31288852` |
| Coordinates | 59.11722, 11.39948 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.11722/11.39948)) |
| Wikidata | [Q31288852](https://www.wikidata.org/wiki/Q31288852) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Halden |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | Forward fortification of Fredriksten |

## What the model contains

Tier **T1**, status `outline+walls`, 142 elements (outline 1, marker 1, road 63, water 1, wall 4, retaining-wall 7, building 19, zone 44, cliff 1, waterway 1).

Evidence: documented 0, mapped 142, inferred 0, derived 0; heights documented 0, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/636728337 historic=castle Q31288852 6 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.11722/11.39948) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=2; wikidata:Q31288852 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 142 elements); data/traces/stortarnet-q31288852.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
