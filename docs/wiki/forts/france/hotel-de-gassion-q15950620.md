# Hôtel de Gassion

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hotel-de-gassion-q15950620` |
| Coordinates | 43.29405, -0.37345 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.29405/-0.37345)) |
| Wikidata | [Q15950620](https://www.wikidata.org/wiki/Q15950620) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|private mansion |
| Administrative area | Pau |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 334 elements (outline 1, marker 9, road 235, water 3, waterway 14, building 215, retaining-wall 12, wall 14, zone 11).

Evidence: documented 0, mapped 334, inferred 0, derived 0; heights documented 14, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2898883 historic=castle Q15950620 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 215 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 235 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.29405/-0.37345) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|private mansion; sitelinks=2; wikidata:Q15950620 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 334 elements); data/traces/hotel-de-gassion-q15950620.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
