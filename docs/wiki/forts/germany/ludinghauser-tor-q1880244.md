# Lüdinghauser Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ludinghauser-tor-q1880244` |
| Coordinates | 51.8283, 7.28014 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.8283/7.28014)) |
| Wikidata | [Q1880244](https://www.wikidata.org/wiki/Q1880244) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|building |
| Administrative area | Dülmen |
| Inception | 1500 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |
| OSM `website` | https://www.hineinschauen.org |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 28, road 156, building 423, wall 1, zone 3, retaining-wall 10).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 3, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1110697082 historic=archaeological_site 135 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 423 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 156 mapped (trace size budget); minor lanes are not drawn
- origin moved 134 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.8283/7.28014) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|building; sitelinks=3; wikidata:Q1880244 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/ludinghauser-tor-q1880244.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
