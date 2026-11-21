# Dun an Sticir

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dun-an-sticir-q1265220` |
| Coordinates | 57.68156, -7.20767 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.68156/-7.20767)) |
| Wikidata | [Q1265220](https://www.wikidata.org/wiki/Q1265220) (CC0) |
| Wikidata class | fortification |
| Types | broch\|archaeological site |
| Administrative area | Outer Hebrides |
| Designations | scheduled monument |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 20 elements (outline 1, road 11, coastline 1, waterway 4, retaining-wall 2, water 1).

Evidence: documented 0, mapped 20, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1385843233 historic=archaeological_site Q1265220 11 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":2,"medianInside":2.2,"medianOutside":1.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.68156/-7.20767) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch\|archaeological site; sitelinks=5; wikidata:Q1265220 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 20 elements); data/traces/dun-an-sticir-q1265220.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
