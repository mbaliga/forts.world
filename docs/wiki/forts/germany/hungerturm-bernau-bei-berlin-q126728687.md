# Hungerturm (Bernau bei Berlin)

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hungerturm-bernau-bei-berlin-q126728687` |
| Coordinates | 52.67868, 13.59188 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.67868/13.59188)) |
| Wikidata | [Q126728687](https://www.wikidata.org/wiki/Q126728687) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|Rundturm |
| Administrative area | Bernau bei Berlin |
| Inception | 1500 |
| Designations | partial heritage site |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 315 elements (marker 11, road 586, zone 7, water 2, waterway 7, building 542, wall 17, retaining-wall 1).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 34, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7547995 historic=citywalls 255 m from ledger point
- site is a site relation of 6 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (506 x 478 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 542 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 586 mapped (trace size budget); minor lanes are not drawn
- origin moved 246 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.67868/13.59188) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|Rundturm; sitelinks=1; wikidata:Q126728687 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 315 elements); data/traces/hungerturm-bernau-bei-berlin-q126728687.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
