# Edifício da Administração do Porto de Lisboa

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `edificio-da-administracao-do-porto-de-lisboa-q66814251` |
| Coordinates | 38.69934, -9.18662 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.69934/-9.18662)) |
| Wikidata | [Q66814251](https://www.wikidata.org/wiki/Q66814251) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage\|building |
| Administrative area | Alcântara |
| Designations | heritage without legal protection |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Palacete urbano, exemplar de arquitectura residencial, eclética, do final do séc. XVIII, à época propriedade de José da Silva Pessanha. Apresenta planta rectangular simples, desenvolvida em torno de um pequeno pátio central... |

## What the model contains

Tier **T1**, status `outline+walls`, 182 elements (outline 1, marker 2, road 97, building 53, zone 13, coastline 1, water 4, wall 7, retaining-wall 4).

Evidence: documented 0, mapped 182, inferred 0, derived 0; heights documented 47, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8316021 historic=castle 6 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 10 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.69934/-9.18662) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage\|building; sitelinks=2; wikidata:Q66814251 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 182 elements); data/traces/edificio-da-administracao-do-porto-de-lisboa-q66814251.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
