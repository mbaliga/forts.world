# Gamleborg

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gamleborg-q30108357` |
| Coordinates | 55.08508, 15.07943 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.08508/15.07943)) |
| Wikidata | [Q30108357](https://www.wikidata.org/wiki/Q30108357) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|hill_fort\|ancient monument |
| Administrative area | Bornholm regional municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |

## What the model contains

Tier **T1**, status `outline-only`, 37 elements (outline 1, road 10, building 5, zone 7, waterway 9, water 3, cliff 2).

Evidence: documented 0, mapped 37, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/456222211 historic=archaeological_site Q30108357 8 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.08508/15.07943) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|hill_fort\|ancient monument; sitelinks=1; wikidata:Q30108357 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 37 elements); data/traces/gamleborg-q30108357.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
