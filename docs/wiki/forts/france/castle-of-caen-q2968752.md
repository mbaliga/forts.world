# Castle of Caen

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-caen-q2968752` |
| Coordinates | 49.18639, -0.36278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.18639/-0.36278)) |
| Wikidata | [Q2968752](https://www.wikidata.org/wiki/Q2968752) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Caen |
| Inception | 1060 |
| Designations | classified historical monument\|site naturel classé |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 14, road 1284, wall 105, building 666, zone 96, retaining-wall 16, cliff 6, waterway 1, water 1).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 7, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/205610830 historic=castle Q2968752 8 m from ledger point
- pruned to the outline plus 150 m: 2190 -> 1417 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 354 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 890 mapped (trace size budget); minor lanes are not drawn
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.18639/-0.36278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=17; wikidata:Q2968752 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/castle-of-caen-q2968752.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
