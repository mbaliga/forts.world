# Fort bij Abcoude

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-bij-abcoude-q2166734` |
| Coordinates | 52.26985, 4.98067 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.26985/4.98067)) |
| Wikidata | [Q2166734](https://www.wikidata.org/wiki/Q2166734) (CC0) |
| Wikidata class | fort |
| Types | fort\|fort |
| Administrative area | De Ronde Venen |
| Inception | 1885 |
| Designations | part of UNESCO World Heritage Site\|Rijksmonument |
| UNESCO WHC id | 759-017 |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 220 elements (outline 1, marker 12, road 157, waterway 22, building 429, water 35, zone 72, retaining-wall 5).

Evidence: documented 0, mapped 220, inferred 0, derived 0; heights documented 1, inferred 0, unknown 60.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/863421145 historic=fort Q2166734 69 m from ledger point
- pruned to the outline plus 150 m: 733 -> 482 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 286 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 116 mapped (trace size budget); minor lanes are not drawn
- origin moved 57 m from the ledger point to the centre of the mapped site
- 0 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.26985/4.98067) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fort; sitelinks=2; wikidata:Q2166734 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 220 elements); data/traces/fort-bij-abcoude-q2166734.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
