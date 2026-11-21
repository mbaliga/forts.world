# Colonia Iulia Urbs Triumphalis Tarraco

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `colonia-iulia-urbs-triumphalis-tarraco-q1501940` |
| Coordinates | 41.11648, 1.25523 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.11648/1.25523)) |
| Wikidata | [Q1501940](https://www.wikidata.org/wiki/Q1501940) (CC0) |
| Wikidata class | fort |
| Types | fortified town\|port city\|Roman colony\|archaeological site\|ancient city |
| Administrative area | Tarragona |
| Designations | World Heritage Site |
| UNESCO WHC id | 875 |
| Wikipedia language editions | 32 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 310 elements (marker 25, coastline 1, road 604, zone 12, building 793, wall 119, water 3, retaining-wall 10).

Evidence: documented 0, mapped 310, inferred 0, derived 0; heights documented 0, inferred 0, unknown 189.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20325373 historic=citywalls Q3121589 293 m from ledger point
- site is a site relation of 17 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (692 x 556 m)
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 60 nearest the outline centre of 793 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 604 mapped (trace size budget); minor lanes are not drawn
- origin moved 258 m from the ledger point to the centre of the mapped site
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.11648/1.25523) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified town\|port city\|Roman colony\|archaeological site\|ancient city; sitelinks=32; wikidata:Q1501940 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 382 elements); data/traces/colonia-iulia-urbs-triumphalis-tarraco-q1501940.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
