# Säumarktturm (Schwäbisch Hall)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `saumarktturm-schwabisch-hall-q137733003` |
| Coordinates | 49.11386, 9.73688 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.11386/9.73688)) |
| Wikidata | [Q137733003](https://www.wikidata.org/wiki/Q137733003) (CC0) |
| Wikidata class | fortification |
| Administrative area | Schwäbisch Hall |
| Designations | cultural heritage monument in Baden-Württemberg |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 6, road 188, waterway 2, wall 18, building 252, zone 1, retaining-wall 1).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 30, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/267683450 historic=citywalls 310 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 252 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 188 mapped (trace size budget); minor lanes are not drawn
- origin moved 310 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.11386/9.73688) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; ; sitelinks=1; wikidata:Q137733003 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/saumarktturm-schwabisch-hall-q137733003.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
