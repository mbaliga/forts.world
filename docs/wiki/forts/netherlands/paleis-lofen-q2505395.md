# Paleis Lofen

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `paleis-lofen-q2505395` |
| Coordinates | 52.09082, 5.12049 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.09082/5.12049)) |
| Wikidata | [Q2505395](https://www.wikidata.org/wiki/Q2505395) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|kaiserpfalz |
| Administrative area | Utrecht |
| Inception | 1020 |
| Designations | Rijksmonument |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `website` | https://domtoren.nl |

## What the model contains

Tier **T1**, status `outline+walls`, 325 elements (outline 1, marker 15, road 191, building 696, waterway 9, water 9, retaining-wall 17, wall 4).

Evidence: documented 0, mapped 325, inferred 0, derived 0; heights documented 14, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/262779230 historic=yes Q3368242 61 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 696 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 191 mapped (trace size budget); minor lanes are not drawn
- origin moved 61 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.09082/5.12049) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|kaiserpfalz; sitelinks=2; wikidata:Q2505395 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 325 elements); data/traces/paleis-lofen-q2505395.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
