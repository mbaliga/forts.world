# Alte Burg (Bad Münstereifel)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alte-burg-bad-munstereifel-q435429` |
| Coordinates | 50.5585, 6.76948 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.5585/6.76948)) |
| Wikidata | [Q435429](https://www.wikidata.org/wiki/Q435429) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site\|deserted castle site\|circular rampart |
| Administrative area | Bad Münstereifel |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `heritage` | 8 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 325 elements (outline 1, marker 4, road 140, zone 22, building 275, wall 21, waterway 4, retaining-wall 12).

Evidence: documented 0, mapped 325, inferred 0, derived 0; heights documented 5, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/298746740 historic=citywalls 319 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 275 mapped (trace size budget); the rest of the town is not drawn
- origin moved 320 m from the ledger point to the centre of the mapped site
- 49 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.5585/6.76948) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site\|deserted castle site\|circular rampart; sitelinks=3; wikidata:Q435429 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 325 elements); data/traces/alte-burg-bad-munstereifel-q435429.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
