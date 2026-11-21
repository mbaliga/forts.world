# Barenborg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `barenborg-q808071` |
| Coordinates | 52.0095, 7.05563 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.0095/7.05563)) |
| Wikidata | [Q808071](https://www.wikidata.org/wiki/Q808071) (CC0) |
| Wikidata class | castle |
| Types | motte-and-bailey castle |
| Administrative area | Rosendahl |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |

## What the model contains

Tier **T1**, status `outline-only`, 77 elements (outline 1, road 18, zone 32, building 5, water 3, waterway 14, retaining-wall 4).

Evidence: documented 0, mapped 77, inferred 0, derived 0; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/247093906 historic=archaeological_site Q808071 15 m from ledger point
- origin moved 17 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.0095/7.05563) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; motte-and-bailey castle; sitelinks=2; wikidata:Q808071 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 77 elements); data/traces/barenborg-q808071.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
