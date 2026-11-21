# Einmannbunker Wesseling

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `einmannbunker-wesseling-q19962272` |
| Coordinates | 50.82641, 6.98402 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.82641/6.98402)) |
| Wikidata | [Q19962272](https://www.wikidata.org/wiki/Q19962272) (CC0) |
| Wikidata class | fortification |
| Types | single person bunker |
| Administrative area | Wesseling |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 9, road 166, building 203, zone 7, waterway 2, retaining-wall 10, wall 2, water 1).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 45, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/223520126 historic=building Q1663733 72 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 203 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 166 mapped (trace size budget); minor lanes are not drawn
- origin moved 73 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.82641/6.98402) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; single person bunker; sitelinks=1; wikidata:Q19962272 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/einmannbunker-wesseling-q19962272.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
