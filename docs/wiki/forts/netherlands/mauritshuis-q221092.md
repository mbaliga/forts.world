# Mauritshuis

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mauritshuis-q221092` |
| Coordinates | 52.0804, 4.3143 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.0804/4.3143)) |
| Wikidata | [Q221092](https://www.wikidata.org/wiki/Q221092) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|art museum\|national museum |
| Administrative area | The Hague |
| Inception | 1822 |
| Wikipedia language editions | 49 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 19, road 118, building 171, zone 9, wall 5, water 1).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 24, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/58616683 historic=castle Q221092 5 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.0804/4.3143) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|art museum\|national museum; sitelinks=49; wikidata:Q221092 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/mauritshuis-q221092.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
