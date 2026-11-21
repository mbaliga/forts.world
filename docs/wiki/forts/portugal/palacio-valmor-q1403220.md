# Palácio Valmor

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-valmor-q1403220` |
| Coordinates | 38.72131, -9.14077 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.72131/-9.14077)) |
| Wikidata | [Q1403220](https://www.wikidata.org/wiki/Q1403220) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Lisbon |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Palácio edificado no séc. XVIII, traduzindo um exemplar de arquitectura residencial setecentista, integra o conjunto do Campo dos Mártires da Pátria, que está classificado como Imóvel de Interesse Público... |
| OSM `website` | https://lissabon.diplo.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, marker 7, road 174, building 304, retaining-wall 16, wall 7, zone 4, water 2, waterway 1).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 5, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/96637918 historic=castle Q1403220 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 304 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 174 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.72131/-9.14077) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=2; wikidata:Q1403220 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/palacio-valmor-q1403220.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
