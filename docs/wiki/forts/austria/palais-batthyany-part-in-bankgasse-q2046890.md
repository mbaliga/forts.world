# Palais Batthyány (Part in Bankgasse)

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-batthyany-part-in-bankgasse-q2046890` |
| Coordinates | 48.21083, 16.36423 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.21083/16.36423)) |
| Wikidata | [Q2046890](https://www.wikidata.org/wiki/Q2046890) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|city palace |
| Administrative area | Innere Stadt |
| Inception | 1695 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 257 elements (outline 1, marker 21, road 361, building 52, wall 3, water 2, zone 23, retaining-wall 5).

Evidence: documented 0, mapped 257, inferred 0, derived 0; heights documented 40, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12512004 historic=castle Q2046890 6 m from ledger point
- roads capped: kept the 150 longest of 361 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.21083/16.36423) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|city palace; sitelinks=1; wikidata:Q2046890 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 257 elements); data/traces/palais-batthyany-part-in-bankgasse-q2046890.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
