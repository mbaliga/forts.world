# Grange Bateliere farm

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `grange-bateliere-farm-q16507914` |
| Coordinates | 48.8733, 2.34044 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.8733/2.34044)) |
| Wikidata | [Q16507914](https://www.wikidata.org/wiki/Q16507914) (CC0) |
| Wikidata class | fort |
| Types | fortified farm\|destroyed building or structure |
| Administrative area | 9th arrondissement of Paris |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 272 elements (outline 1, marker 1, road 505, building 215).

Evidence: documented 0, mapped 272, inferred 0, derived 0; heights documented 71, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/69221133 historic=building Q22924763 156 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 215 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 505 mapped (trace size budget); minor lanes are not drawn
- origin moved 156 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.8733/2.34044) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified farm\|destroyed building or structure; sitelinks=2; wikidata:Q16507914 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 272 elements); data/traces/grange-bateliere-farm-q16507914.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
