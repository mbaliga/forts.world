# Fortezza Carceraria

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortezza-carceraria-q66831763` |
| Coordinates | 38.10985, 14.82769 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.10985/14.82769)) |
| Wikidata | [Q66831763](https://www.wikidata.org/wiki/Q66831763) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Ficarra |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 342 elements (outline 1, marker 1, road 118, retaining-wall 78, building 443, wall 203, zone 1).

Evidence: documented 0, mapped 342, inferred 0, derived 0; heights documented 0, inferred 0, unknown 259.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/678136913 historic=building Q66831773 72 m from ledger point
- pruned to the outline plus 150 m: 845 -> 643 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 337 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 104 mapped (trace size budget); minor lanes are not drawn
- origin moved 73 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.10985/14.82769) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=0; wikidata:Q66831763 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 342 elements); data/traces/fortezza-carceraria-q66831763.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
