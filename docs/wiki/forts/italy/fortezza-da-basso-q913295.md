# Fortezza da Basso

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortezza-da-basso-q913295` |
| Coordinates | 43.78163, 11.24885 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.78163/11.24885)) |
| Wikidata | [Q913295](https://www.wikidata.org/wiki/Q913295) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Florence |
| Inception | 1534 |
| Designations | Italian national heritage |
| Wikipedia language editions | 11 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, marker 13, road 644, zone 46, building 331, wall 25, waterway 3, water 3).

Evidence: documented 0, mapped 361, inferred 0, derived 0; heights documented 4, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/24735341 historic=fort Q913295 15 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 331 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 644 mapped (trace size budget); minor lanes are not drawn
- origin moved 18 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.78163/11.24885) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=11; wikidata:Q913295 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/fortezza-da-basso-q913295.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
