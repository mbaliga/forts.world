# Palacete Mendonça

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacete-mendonca-q25439001` |
| Coordinates | 38.73245, -9.15592 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.73245/-9.15592)) |
| Wikidata | [Q25439001](https://www.wikidata.org/wiki/Q25439001) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|cultural heritage\|historic building\|mansion |
| Administrative area | Avenidas Novas |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Projetado entre 1900 e 1902 pelo arq. Ventura Terra para Henrique José Monteiro de Mendonça, roceiro em S. Tomé, o edifício construído, de gramática eclética, ficou terminado em 1909, data em que foi galardoado com o Prémio Valmor... |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, road 222, building 33, wall 13, retaining-wall 11, water 3, waterway 4, zone 11).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 21, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/196657471 historic=castle Q25439001 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.73245/-9.15592) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|cultural heritage\|historic building\|mansion; sitelinks=4; wikidata:Q25439001 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/palacete-mendonca-q25439001.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
