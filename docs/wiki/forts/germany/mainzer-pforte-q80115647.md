# Mainzer Pforte

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mainzer-pforte-q80115647` |
| Coordinates | 49.63952, 8.36486 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.63952/8.36486)) |
| Wikidata | [Q80115647](https://www.wikidata.org/wiki/Q80115647) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Worms |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 294 elements (outline 1, road 90, building 321, wall 68, zone 15).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 54, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1213287023 historic=citywalls 653 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 321 mapped (trace size budget); the rest of the town is not drawn
- origin moved 653 m from the ledger point to the centre of the mapped site
- 25 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.63952/8.36486) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q80115647 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/mainzer-pforte-q80115647.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
