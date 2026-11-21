# Palácio do Mitelo

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-do-mitelo-q123035843` |
| Coordinates | 38.72206, -9.13872 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.72206/-9.13872)) |
| Wikidata | [Q123035843](https://www.wikidata.org/wiki/Q123035843) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Arroios |
| Inception | 1700 |
| Designations | Included in protected site |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Exemplar de arquitectura residencial, barroca, este palácio tem a sua génese numas casas nobres da primeira metade do séc. XVII, existentes no então denominado Campo do Curral. Após a sua compra, em 1672, por Manuel Francisco Mendes... |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 5, road 170, building 356, retaining-wall 8, zone 6, water 2, waterway 1, wall 13).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 6, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/98125368 historic=castle Q123035843 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 356 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 170 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.72206/-9.13872) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=1; wikidata:Q123035843 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/palacio-do-mitelo-q123035843.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
