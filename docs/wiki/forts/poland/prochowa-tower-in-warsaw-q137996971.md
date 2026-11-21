# Prochowa Tower in Warsaw

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `prochowa-tower-in-warsaw-q137996971` |
| Coordinates | 52.25025, 21.01001 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.25025/21.01001)) |
| Wikidata | [Q137996971](https://www.wikidata.org/wiki/Q137996971) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Śródmieście |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 260 elements (outline 1, marker 43, waterway 1, road 399, building 234, wall 73, zone 64, retaining-wall 8).

Evidence: documented 0, mapped 260, inferred 0, derived 0; heights documented 64, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/135770018 historic=citywalls 1 m from ledger point
- pruned to the outline plus 150 m: 823 -> 540 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 143 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 278 mapped (trace size budget); minor lanes are not drawn
- 17 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.25025/21.01001) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q137996971 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 260 elements); data/traces/prochowa-tower-in-warsaw-q137996971.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
