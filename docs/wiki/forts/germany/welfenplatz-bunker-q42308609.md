# Welfenplatz bunker

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `welfenplatz-bunker-q42308609` |
| Coordinates | 52.38444, 9.74167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.38444/9.74167)) |
| Wikidata | [Q42308609](https://www.wikidata.org/wiki/Q42308609) (CC0) |
| Wikidata class | fortification |
| Types | high-rise bunker |
| Administrative area | Vahrenwald-List |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 386 elements (outline 1, marker 4, road 246, building 277, wall 87, zone 24).

Evidence: documented 0, mapped 386, inferred 0, derived 0; heights documented 122, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/262386072 historic=yes 540 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 277 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 246 mapped (trace size budget); minor lanes are not drawn
- origin moved 538 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.38444/9.74167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; high-rise bunker; sitelinks=1; wikidata:Q42308609 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 386 elements); data/traces/welfenplatz-bunker-q42308609.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
