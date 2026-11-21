# Saint-Vincent Gate

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `saint-vincent-gate-q3398975` |
| Coordinates | 47.6545, -2.75804 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.6545/-2.75804)) |
| Wikidata | [Q3398975](https://www.wikidata.org/wiki/Q3398975) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Vannes |
| Designations | monument historique inscrit\|classified historical monument |
| Wikipedia language editions | 5 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 359 elements (outline 1, marker 4, road 340, waterway 3, building 411, wall 27, water 3, zone 16, coastline 2, retaining-wall 33).

Evidence: documented 0, mapped 359, inferred 0, derived 1; heights documented 25, inferred 0, unknown 155.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/79896657 historic=citywalls 28 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 411 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 340 mapped (trace size budget); minor lanes are not drawn
- origin moved 28 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":14,"medianInside":4,"medianOutside":11.4}
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.6545/-2.75804) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=5; wikidata:Q3398975 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 359 elements); data/traces/saint-vincent-gate-q3398975.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
