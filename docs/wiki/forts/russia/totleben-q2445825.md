# Totleben

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `totleben-q2445825` |
| Coordinates | 60.08528, 29.84861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.08528/29.84861)) |
| Wikidata | [Q2445825](https://www.wikidata.org/wiki/Q2445825) (CC0) |
| Wikidata class | fort |
| Types | architectural landmark\|fort |
| Administrative area | Kronstadt |
| Inception | 1896 |
| Designations | part of UNESCO World Heritage Site\|federal cultural heritage site in Russia |
| UNESCO WHC id | 540-003b 2 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 5 elements (outline 1, marker 3, coastline 1).

Evidence: documented 0, mapped 5, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10284228 historic=castle Q2445825 53 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 50 m from the ledger point to the centre of the mapped site
- 1650 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.08528/29.84861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; architectural landmark\|fort; sitelinks=3; wikidata:Q2445825 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 5 elements); data/traces/totleben-q2445825.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
