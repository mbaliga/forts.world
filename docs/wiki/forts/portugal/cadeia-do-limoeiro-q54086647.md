# Cadeia do Limoeiro

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cadeia-do-limoeiro-q54086647` |
| Coordinates | 38.71053, -9.13084 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71053/-9.13084)) |
| Wikidata | [Q54086647](https://www.wikidata.org/wiki/Q54086647) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage\|prison |
| Administrative area | Santa Maria Maior |
| Inception | 1367 |
| Designations | Bem Cultural Imóvel\|Included in protected site |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Palácio mandado construir por D. Fernando I, em 1367, numa posição fronteira à Igreja de São Martinho (demolida em 1838), daí a designação de Paço a-par-de-São Martinho. Neste local ocorreu a morte do conde Andeiro às mãos do futuro D. João |

## What the model contains

Tier **T1**, status `outline+walls`, 352 elements (outline 1, marker 23, road 337, wall 23, building 520, retaining-wall 22, water 1, zone 10, coastline 1, waterway 1).

Evidence: documented 0, mapped 352, inferred 0, derived 0; heights documented 40, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/98618192 historic=castle Q54086647 5 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 520 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 337 mapped (trace size budget); minor lanes are not drawn
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71053/-9.13084) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage\|prison; sitelinks=2; wikidata:Q54086647 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 352 elements); data/traces/cadeia-do-limoeiro-q54086647.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
