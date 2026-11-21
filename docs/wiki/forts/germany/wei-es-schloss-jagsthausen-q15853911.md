# Weißes Schloss Jagsthausen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wei-es-schloss-jagsthausen-q15853911` |
| Coordinates | 49.31067, 9.46761 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.31067/9.46761)) |
| Wikidata | [Q15853911](https://www.wikidata.org/wiki/Q15853911) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|built structure |
| Administrative area | Jagsthausen |
| Inception | 1792 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 335 elements (outline 1, marker 1, road 216, building 275, wall 17, zone 44, waterway 1, water 1).

Evidence: documented 0, mapped 335, inferred 0, derived 0; heights documented 54, inferred 0, unknown 83.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/405814320 historic=castle Q15853911 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 275 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 216 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.31067/9.46761) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|built structure; sitelinks=2; wikidata:Q15853911 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 335 elements); data/traces/wei-es-schloss-jagsthausen-q15853911.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
