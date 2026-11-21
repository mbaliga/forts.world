# Baluardo di Santa Maria

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `baluardo-di-santa-maria-q66481266` |
| Coordinates | 43.83843, 10.50165 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.83843/10.50165)) |
| Wikidata | [Q66481266](https://www.wikidata.org/wiki/Q66481266) (CC0) |
| Wikidata class | fort |
| Types | fort\|bastion\|historic building |
| Administrative area | Lucca |
| Inception | 1557 |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 1, road 153, wall 26, building 209, waterway 4, zone 15, water 1, retaining-wall 6).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 2, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20511804 historic=fort Q66481266 25 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 209 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 153 mapped (trace size budget); minor lanes are not drawn
- origin moved 24 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.83843/10.50165) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|bastion\|historic building; sitelinks=1; wikidata:Q66481266 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/baluardo-di-santa-maria-q66481266.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
