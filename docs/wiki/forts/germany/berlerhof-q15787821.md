# Berlerhof

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `berlerhof-q15787821` |
| Coordinates | 49.1121, 9.73855 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.1121/9.73855)) |
| Wikidata | [Q15787821](https://www.wikidata.org/wiki/Q15787821) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, marker 6, road 209, waterway 2, wall 20, building 304, zone 1, retaining-wall 1).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 40, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/560388033 historic=building Q15787821 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 304 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 209 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.1121/9.73855) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=1; wikidata:Q15787821 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/berlerhof-q15787821.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
