# Panopeus

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `panopeus-q2002148` |
| Coordinates | 38.4949, 22.794 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.4949/22.794)) |
| Wikidata | [Q2002148](https://www.wikidata.org/wiki/Q2002148) (CC0) |
| Wikidata class | fort |
| Types | polis\|citadel\|archaeological site |
| Administrative area | Livadia Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 10 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 14 elements (outline 1, marker 2, road 8, zone 2, wall 1).

Evidence: documented 0, mapped 14, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/281021474 historic=archaeological_site Q2002148 80 m from ledger point
- origin moved 65 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.4949/22.794) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; polis\|citadel\|archaeological site; sitelinks=10; wikidata:Q2002148 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 14 elements); data/traces/panopeus-q2002148.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
