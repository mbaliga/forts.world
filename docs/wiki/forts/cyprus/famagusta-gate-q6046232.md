# Famagusta Gate

> Cyprus · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `famagusta-gate-q6046232` |
| Coordinates | 35.1743, 33.3712 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.1743/33.3712)) |
| Wikidata | [Q6046232](https://www.wikidata.org/wiki/Q6046232) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Taht-el-kale, Nicosia |
| Wikipedia language editions | 12 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 8, road 307, building 758, zone 4, wall 30).

Evidence: documented 0, mapped 314, inferred 0, derived 0; heights documented 15, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17704543 historic=citywalls Q7919752 690 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 758 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 307 mapped (trace size budget); minor lanes are not drawn
- origin moved 686 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.1743/33.3712) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=12; wikidata:Q6046232 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/famagusta-gate-q6046232.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cyprus.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
