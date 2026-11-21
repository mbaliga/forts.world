# Citywalls

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citywalls-q117765425` |
| Coordinates | 51.8316, 10.79107 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.8316/10.79107)) |
| Wikidata | [Q117765425](https://www.wikidata.org/wiki/Q117765425) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Wernigerode |
| Designations | heritage monument in Saxony-Anhalt |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 244 elements (outline 1, marker 7, road 106, wall 6, building 393, zone 3, waterway 1).

Evidence: documented 0, mapped 244, inferred 0, derived 0; heights documented 5, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/83341902 historic=citywalls 153 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 393 mapped (trace size budget); the rest of the town is not drawn
- origin moved 153 m from the ledger point to the centre of the mapped site
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.8316/10.79107) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q117765425 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 244 elements); data/traces/citywalls-q117765425.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
