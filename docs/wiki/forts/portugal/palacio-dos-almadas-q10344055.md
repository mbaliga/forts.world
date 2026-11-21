# Palácio dos Almadas

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-dos-almadas-q10344055` |
| Coordinates | 38.7091, -9.15117 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.7091/-9.15117)) |
| Wikidata | [Q10344055](https://www.wikidata.org/wiki/Q10344055) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Misericórdia |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | O Palácio Almada-Carvalhais,que pertenceu aos provedores da Casa da Índia,foi mandado construir no século XVI,(cerca de 1545),por Rui Fernandes de Almada,banqueiro e feitor da Flandres.Sofreu sucessivas fases construtivas e decorativas... |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 2, road 210, building 480, retaining-wall 3, wall 18, zone 2, water 4).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 48, inferred 0, unknown 93.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8319078 historic=castle Q10344055 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 480 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 210 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site
- 33 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.7091/-9.15117) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=2; wikidata:Q10344055 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/palacio-dos-almadas-q10344055.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
