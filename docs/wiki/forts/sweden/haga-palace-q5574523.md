# Haga Palace

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `haga-palace-q5574523` |
| Coordinates | 59.36338, 18.03969 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.36338/18.03969)) |
| Wikidata | [Q5574523](https://www.wikidata.org/wiki/Q5574523) (CC0) |
| Wikidata class | castle |
| Types | castle\|royal palace |
| Administrative area | Solna Municipality |
| Inception | 1805 |
| Wikipedia language editions | 26 |
| OSM `historic` | castle |
| OSM `website` | https://www.sfv.se/sv/fastigheter/sverige/stockholms-lan-ab/slott/haga-slott/ |

## What the model contains

Tier **T1**, status `outline-only`, 55 elements (outline 1, road 39, building 4, cliff 1, zone 8, waterway 2).

Evidence: documented 0, mapped 55, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/551226 historic=castle Q5574523 12 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.36338/18.03969) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|royal palace; sitelinks=26; wikidata:Q5574523 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 55 elements); data/traces/haga-palace-q5574523.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
