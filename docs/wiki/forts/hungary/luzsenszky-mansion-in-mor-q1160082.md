# Luzsénszky Mansion in Mór

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `luzsenszky-mansion-in-mor-q1160082` |
| Coordinates | 47.37222, 18.20838 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.37222/18.20838)) |
| Wikidata | [Q1160082](https://www.wikidata.org/wiki/Q1160082) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Mór |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 4, road 280, building 144, waterway 13, wall 1).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 5, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/290529710 historic=castle Q1160082 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 144 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 280 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.37222/18.20838) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=3; wikidata:Q1160082 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/luzsenszky-mansion-in-mor-q1160082.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
