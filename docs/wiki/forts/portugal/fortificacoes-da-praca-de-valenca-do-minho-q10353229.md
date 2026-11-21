# Fortificações da Praça de Valença do Minho

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortificacoes-da-praca-de-valenca-do-minho-q10353229` |
| Coordinates | 42.03255, -8.64514 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.03255/-8.64514)) |
| Wikidata | [Q10353229](https://www.wikidata.org/wiki/Q10353229) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Valença, Cristelo Covo e Arão |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |
| OSM `heritage` | https://servicos.dgpc.gov.pt/pesquisapatrimonioimovel/detalhes.php?code=70235 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 343 elements (outline 1, marker 13, waterway 1, road 242, building 115, wall 35, zone 23, retaining-wall 4).

Evidence: documented 0, mapped 343, inferred 0, derived 0; heights documented 5, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/110154942 historic=yes Q10353229 250 m from ledger point
- roads capped: kept the 150 longest of 242 mapped (trace size budget); minor lanes are not drawn
- origin moved 246 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.03255/-8.64514) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=5; wikidata:Q10353229 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 343 elements); data/traces/fortificacoes-da-praca-de-valenca-do-minho-q10353229.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
