# Prison Gate

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `prison-gate-q98438109` |
| Coordinates | 47.6584, -2.75534 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.6584/-2.75534)) |
| Wikidata | [Q98438109](https://www.wikidata.org/wiki/Q98438109) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Vannes |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 246 elements (outline 1, marker 12, road 360, waterway 8, zone 51, building 407, wall 29, water 2, retaining-wall 39).

Evidence: documented 0, mapped 246, inferred 0, derived 0; heights documented 9, inferred 0, unknown 111.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/145187201 historic=citywalls 181 m from ledger point
- pruned to the outline plus 150 m: 909 -> 624 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 243 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 276 mapped (trace size budget); minor lanes are not drawn
- origin moved 177 m from the ledger point to the centre of the mapped site
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.6584/-2.75534) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q98438109 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 246 elements); data/traces/prison-gate-q98438109.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
