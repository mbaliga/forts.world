# Besoldsches Haus

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `besoldsches-haus-q41298006` |
| Coordinates | 49.59704, 11.00437 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.59704/11.00437)) |
| Wikidata | [Q41298006](https://www.wikidata.org/wiki/Q41298006) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|house |
| Administrative area | Erlangen |
| Inception | 1733 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 4 |
| OSM `description` | Barockes Adelspalais. Dreigeschossiger Sandsteinbau mit Mansardwalmdach und reich gestalteter Fassade, Erdgeschoss überformt, bez. 1733 und 1746; siehe auch Rückgebäude Halbmondstraße 5. |

## What the model contains

Tier **T1**, status `outline+walls`, 354 elements (outline 1, marker 35, road 281, building 316, water 1, zone 29, wall 18).

Evidence: documented 0, mapped 354, inferred 0, derived 0; heights documented 48, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/568520591 historic=castle Q41298006 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 316 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 281 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.59704/11.00437) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|house; sitelinks=2; wikidata:Q41298006 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 354 elements); data/traces/besoldsches-haus-q41298006.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
