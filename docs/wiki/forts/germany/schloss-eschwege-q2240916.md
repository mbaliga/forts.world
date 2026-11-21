# Schloss Eschwege

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-eschwege-q2240916` |
| Coordinates | 51.1886, 10.05303 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1886/10.05303)) |
| Wikidata | [Q2240916](https://www.wikidata.org/wiki/Q2240916) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château\|built structure |
| Administrative area | Eschwege |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 350 elements (outline 1, marker 53, road 162, waterway 15, building 212, water 5, wall 1, zone 5).

Evidence: documented 0, mapped 350, inferred 0, derived 0; heights documented 14, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7626829 historic=castle Q2240916 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 212 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 162 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1886/10.05303) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château\|built structure; sitelinks=2; wikidata:Q2240916 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 350 elements); data/traces/schloss-eschwege-q2240916.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
