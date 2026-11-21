# Palácio Lavra

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-lavra-q135726307` |
| Coordinates | 38.71803, -9.14179 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71803/-9.14179)) |
| Wikidata | [Q135726307](https://www.wikidata.org/wiki/Q135726307) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Santo António |
| Designations | Immovable Cultural Heritage of Public Interest\|Included in protected site |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Este imóvel está integrado na classificação como Imóvel de Interesse Público do conjunto de três edifícios, de estrutura autónoma e distintos entre si, distribuídos ao longo da Rua de São José (10-42) até ao Elevador do Lavra... |

## What the model contains

Tier **T1**, status `outline+walls`, 382 elements (outline 1, marker 6, road 194, building 288, wall 61, retaining-wall 32, water 2, waterway 1, zone 9).

Evidence: documented 0, mapped 382, inferred 0, derived 0; heights documented 43, inferred 0, unknown 170.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/96766868 historic=castle Q135726307 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 288 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 194 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71803/-9.14179) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=1; wikidata:Q135726307 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 382 elements); data/traces/palacio-lavra-q135726307.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
