# Smederevo Fortress

> Serbia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `smederevo-fortress-q2588696` |
| Coordinates | 44.66861, 20.92917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.66861/20.92917)) |
| Wikidata | [Q2588696](https://www.wikidata.org/wiki/Q2588696) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Smederevo |
| Designations | Tentative World Heritage Site\|Immovable Cultural Heritage of Exceptional Importance |
| Wikipedia language editions | 28 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, marker 4, road 160, building 180, waterway 2, wall 42, zone 12).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 1, inferred 0, unknown 161.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/790521839 historic=castle Q2588696 144 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 180 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 160 mapped (trace size budget); minor lanes are not drawn
- origin moved 139 m from the ledger point to the outline centroid
- 24 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.66861/20.92917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=28; wikidata:Q2588696 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/smederevo-fortress-q2588696.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/serbia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
