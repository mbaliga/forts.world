# Raigad

> India · Maharashtra · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `raigad` |
| Coordinates | 18.235352, 73.445463 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.235352/73.445463)) |
| Wikidata | [Q3626515](https://www.wikidata.org/wiki/Q3626515) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Raigad district |
| Designations | Water Heritage Site\|part of UNESCO World Heritage Site\|Monument of National Importance |
| Wikipedia language editions | 26 |
| Programme catalogue | confidence high, significance rank 185; sources catalogue:raigad;wikidata:Q3626515;smith-newton:r62 |
| OSM `historic` | fort |
| OSM `heritage` | https://whc.unesco.org/en/list/1739 |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 29 elements (outline 1, marker 2, zone 4, road 10, water 6, building 5).

Evidence: documented 0, mapped 29, inferred 0, derived 0; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/604528475 historic=fort Q3626515 277 m from ledger point
- origin moved 282 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.235352/73.445463) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Ledger note

Alpha-D batch (2026-11-14): 10 forts spread across A-Z starting at D (batch-alpha-D.csv). coords from wikidata (was 18.234,73.44) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 29 elements); data/traces/raigad.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
