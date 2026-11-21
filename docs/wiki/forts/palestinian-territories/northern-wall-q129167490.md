# Northern Wall

> Palestinian Territories · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `northern-wall-q129167490` |
| Coordinates | 31.78007, 35.23516 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/31.78007/35.23516)) |
| Wikidata | [Q129167490](https://www.wikidata.org/wiki/Q129167490) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|fixed construction\|city walls |
| Administrative area | Jerusalem |
| Inception | -0018 |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 365 elements (outline 1, marker 63, building 1949, road 643, wall 86, zone 55, retaining-wall 18, water 2, waterway 1).

Evidence: documented 0, mapped 365, inferred 0, derived 0; heights documented 0, inferred 0, unknown 164.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5862586 historic=citywalls Q213274 323 m from ledger point
- pruned to the outline plus 150 m: 2818 -> 2802 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 1935 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 642 mapped (trace size budget); minor lanes are not drawn
- origin moved 319 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/31.78007/35.23516) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|fixed construction\|city walls; sitelinks=1; wikidata:Q129167490 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 365 elements); data/traces/northern-wall-q129167490.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/palestinian-territories.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
