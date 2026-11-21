# Palácio da Mitra

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-da-mitra-q74474222` |
| Coordinates | 38.73968, -9.10311 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.73968/-9.10311)) |
| Wikidata | [Q74474222](https://www.wikidata.org/wiki/Q74474222) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Marvila |
| Designations | Monument of Public Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | As origens do Palácio da Mitra Lisbonense remontam pelo menos ao início do séc. XVII, embora da traça primitiva de casa de campo já não existam vestígios. Sabe-se que foi restaurado e ampliado em 1676. Em 1716-1754, voltou a ser restaurada... |

## What the model contains

Tier **T1**, status `outline+walls`, 201 elements (outline 1, road 79, building 101, wall 13, coastline 1, retaining-wall 3, waterway 1, water 2).

Evidence: documented 0, mapped 201, inferred 0, derived 1; heights documented 0, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/241096929 historic=castle Q74474222 4 m from ledger point
- sea-0: DEM check ok {"cells":7,"medianInside":-0.3,"medianOutside":13.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.73968/-9.10311) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=2; wikidata:Q74474222 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 201 elements); data/traces/palacio-da-mitra-q74474222.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
