# Zwinger Nähe Klingenschütt in Rothenburg ob der Tauber

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zwinger-nahe-klingenschutt-in-rothenburg-ob-der--q98632647` |
| Coordinates | 49.37995, 10.18366 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.37995/10.18366)) |
| Wikidata | [Q98632647](https://www.wikidata.org/wiki/Q98632647) (CC0) |
| Wikidata class | fortification |
| Types | zwinger |
| Administrative area | Rothenburg ob der Tauber |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 387 elements (outline 1, marker 5, road 217, building 346, wall 70, retaining-wall 6, zone 34).

Evidence: documented 0, mapped 387, inferred 0, derived 0; heights documented 89, inferred 0, unknown 108.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/195741740 historic=citywalls 13 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 346 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 217 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the centre of the mapped site
- 31 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.37995/10.18366) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; zwinger; sitelinks=0; wikidata:Q98632647 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 387 elements); data/traces/zwinger-nahe-klingenschutt-in-rothenburg-ob-der--q98632647.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
