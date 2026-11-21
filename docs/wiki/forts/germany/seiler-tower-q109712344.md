# Seiler Tower

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `seiler-tower-q109712344` |
| Coordinates | 47.56908, 10.70149 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.56908/10.70149)) |
| Wikidata | [Q109712344](https://www.wikidata.org/wiki/Q109712344) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Füssen |
| Inception | 1503 |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, marker 19, road 155, zone 12, building 443, wall 19, waterway 1, cliff 3).

Evidence: documented 0, mapped 326, inferred 0, derived 0; heights documented 69, inferred 0, unknown 71.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/216878188 historic=citywalls 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 443 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 155 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site
- 26 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.56908/10.70149) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=1; wikidata:Q109712344 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/seiler-tower-q109712344.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
