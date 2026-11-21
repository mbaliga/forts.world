# Palacete Ribeiro da Cunha

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacete-ribeiro-da-cunha-q74473872` |
| Coordinates | 38.71692, -9.14838 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71692/-9.14838)) |
| Wikidata | [Q74473872](https://www.wikidata.org/wiki/Q74473872) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|cultural heritage\|manor house\|mansion |
| Administrative area | Santo António |
| Designations | Monument of Public Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `description` | Palacete edificado na Praça do Príncipe Real, entre 1877 e 1879, por iniciativa do abastado capitalista José Ribeiro da Cunha, para sua residência. Trata-se de um volume muito marcante da referida praça, com projeto do arquiteto Henrique Carlos Afon |

## What the model contains

Tier **T1**, status `outline+walls`, 342 elements (outline 1, marker 4, road 350, building 334, retaining-wall 19, zone 5, wall 27, water 7, waterway 9).

Evidence: documented 0, mapped 342, inferred 0, derived 0; heights documented 56, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/96494535 historic=castle Q74473872 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 334 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 350 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71692/-9.14838) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|cultural heritage\|manor house\|mansion; sitelinks=3; wikidata:Q74473872 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 342 elements); data/traces/palacete-ribeiro-da-cunha-q74473872.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
