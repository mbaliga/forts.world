# Wachturm Nähe Falterstraße in Dettelbach

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wachturm-nahe-falterstra-e-in-dettelbach-q98495874` |
| Coordinates | 49.8032, 10.1635 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.8032/10.1635)) |
| Wikidata | [Q98495874](https://www.wikidata.org/wiki/Q98495874) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Dettelbach |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 336 elements (outline 1, marker 3, road 156, waterway 4, wall 53, building 282, zone 5).

Evidence: documented 0, mapped 336, inferred 0, derived 0; heights documented 34, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/114947710 historic=citywalls Q98495874 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 282 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 156 mapped (trace size budget); minor lanes are not drawn
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.8032/10.1635) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q98495874 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 336 elements); data/traces/wachturm-nahe-falterstra-e-in-dettelbach-q98495874.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
