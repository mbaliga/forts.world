# Großsches Haus

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gro-sches-haus-q41297986` |
| Coordinates | 49.59501, 11.00457 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.59501/11.00457)) |
| Wikidata | [Q41297986](https://www.wikidata.org/wiki/Q41297986) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|house |
| Administrative area | Erlangen |
| Inception | 1705 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 4 |
| OSM `description` | Ehemaliges Adelspalais der Groß von Trockau. Vornehmer zweigeschossiger, giebelständiger Satteldachbau aus Sandsteinquadern, Zwerchhaus mit Schweifgiebel und Voluten. 1705 erbaut, 1962 stark modernisiert, 1991 aufwendig restauriert. |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, marker 26, road 334, building 309, wall 26, zone 4, retaining-wall 2).

Evidence: documented 0, mapped 329, inferred 0, derived 0; heights documented 52, inferred 0, unknown 96.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/280186212 historic=castle Q41297986 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 309 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 334 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.59501/11.00457) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|house; sitelinks=1; wikidata:Q41297986 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/gro-sches-haus-q41297986.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
