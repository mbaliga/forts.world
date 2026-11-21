# Dun Ringill

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dun-ringill-q1265223` |
| Coordinates | 57.17948, -6.03594 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.17948/-6.03594)) |
| Wikidata | [Q1265223](https://www.wikidata.org/wiki/Q1265223) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Highland |
| Designations | scheduled monument |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |
| OSM `castle_type` | defensive |
| OSM `fortification_type` | dun |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 7 elements (outline 1, coastline 1, road 1, cliff 1, zone 2, water 1).

Evidence: documented 0, mapped 7, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/524987530 historic=archaeological_site Q1265223 8 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":210,"medianInside":5.3,"medianOutside":21.9}
- 28 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.17948/-6.03594) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=5; wikidata:Q1265223 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 7 elements); data/traces/dun-ringill-q1265223.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
