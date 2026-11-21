# Borschengrün

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `borschengrun-q1011128` |
| Coordinates | 50.02706, 12.56074 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.02706/12.56074)) |
| Wikidata | [Q1011128](https://www.wikidata.org/wiki/Q1011128) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Úbočí |
| Inception | 1400 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |
| OSM `website` | https://www.slavkovsky-les.cz/zajimava-mista-slavkovskeho-lesa/zidovsky-hrbitov-v-uboci/ |

## What the model contains

Tier **T1**, status `outline+walls`, 33 elements (outline 1, marker 2, water 1, waterway 5, road 5, building 13, zone 5, wall 1).

Evidence: documented 0, mapped 33, inferred 0, derived 0; heights documented 2, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/98282542 historic=ruins Q14807107 127 m from ledger point
- origin moved 131 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.02706/12.56074) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q1011128 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 33 elements); data/traces/borschengrun-q1011128.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
