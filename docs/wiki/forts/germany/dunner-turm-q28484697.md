# Dünner Turm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dunner-turm-q28484697` |
| Coordinates | 51.41828, 9.64995 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.41828/9.64995)) |
| Wikidata | [Q28484697](https://www.wikidata.org/wiki/Q28484697) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Hann. Münden |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `website` | https://hann.muenden-erlebnisregion.de/poi/wallanlagen |

## What the model contains

Tier **T1**, status `outline+walls`, 265 elements (outline 1, marker 2, road 123, zone 4, building 458, waterway 10, wall 3, retaining-wall 1, water 1).

Evidence: documented 0, mapped 265, inferred 0, derived 0; heights documented 5, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/207341293 historic=citywalls Q28873918 244 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 458 mapped (trace size budget); the rest of the town is not drawn
- origin moved 244 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.41828/9.64995) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q28484697 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 265 elements); data/traces/dunner-turm-q28484697.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
