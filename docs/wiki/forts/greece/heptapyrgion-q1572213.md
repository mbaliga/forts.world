# Heptapyrgion

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `heptapyrgion-q1572213` |
| Coordinates | 40.64417, 22.96194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.64417/22.96194)) |
| Wikidata | [Q1572213](https://www.wikidata.org/wiki/Q1572213) (CC0) |
| Wikidata class | fort |
| Types | prison\|fortress |
| Administrative area | Thessaloniki Municipality |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 254 elements (outline 1, marker 3, road 90, wall 30, building 300, zone 10).

Evidence: documented 0, mapped 254, inferred 0, derived 0; heights documented 2, inferred 0, unknown 148.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/978511541 historic=castle Q1572213 14 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 300 mapped (trace size budget); the rest of the town is not drawn
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.64417/22.96194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; prison\|fortress; sitelinks=12; wikidata:Q1572213 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 254 elements); data/traces/heptapyrgion-q1572213.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
