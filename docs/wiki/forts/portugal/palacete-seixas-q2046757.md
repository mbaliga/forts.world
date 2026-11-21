# Palacete Seixas

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacete-seixas-q2046757` |
| Coordinates | 38.72485, -9.14886 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.72485/-9.14886)) |
| Wikidata | [Q2046757](https://www.wikidata.org/wiki/Q2046757) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|cultural heritage\|mansion |
| Administrative area | Santo António |
| Designations | Included in protected site |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Antiga residência unifamiliar do início do século XX, de gosto "Beaux-Arts", composta por dois pisos e uma mansarda. Hoje propriedade do Ministério dos Negócios Estrangeiros, alberga o Instituto Camões. Integra a Zona da Avenida da Liberdade que se |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, marker 5, road 359, building 146, zone 31, retaining-wall 8, wall 9, waterway 1, water 1).

Evidence: documented 0, mapped 326, inferred 0, derived 0; heights documented 79, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/96638893 historic=castle Q2046757 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 146 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 359 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.72485/-9.14886) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|cultural heritage\|mansion; sitelinks=2; wikidata:Q2046757 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/palacete-seixas-q2046757.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
