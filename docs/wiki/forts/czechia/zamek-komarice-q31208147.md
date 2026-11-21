# Zámek Komařice

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zamek-komarice-q31208147` |
| Coordinates | 48.87785, 14.54519 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.87785/14.54519)) |
| Wikidata | [Q31208147](https://www.wikidata.org/wiki/Q31208147) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Komařice |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 100 elements (outline 1, marker 6, road 19, waterway 3, building 65, zone 2, wall 4).

Evidence: documented 0, mapped 100, inferred 0, derived 0; heights documented 5, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/285895376 historic=(none; chosen by its Wikidata id) Q31208147 11 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.87785/14.54519) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=2; wikidata:Q31208147 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 96 elements); data/traces/zamek-komarice-q31208147.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 100 elements; outline osm:way/285895376 historic=(none; chosen by its Wikidata id) Q31208147 11 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
