# Palácio dos Condes de Figueira

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-dos-condes-de-figueira-q54153246` |
| Coordinates | 38.7147, -9.13109 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.7147/-9.13109)) |
| Wikidata | [Q54153246](https://www.wikidata.org/wiki/Q54153246) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | São Vicente |
| Inception | 1490 |
| Designations | Monument of Public Interest |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `description` | A origem deste imóvel remonta ao séc. XV,quando em 1490 D. João II autorizou o nobre D. João de Mendonça a construír uma casa de habitação junto da muralha.Objecto de sucessivas fases de construção ao longo dos séculos XV,XVII e XVIII... |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 2, road 180, wall 29, building 423, water 1, zone 5, retaining-wall 11, coastline 1, waterway 1).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 7, inferred 0, unknown 153.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/245064063 historic=castle Q54153246 8 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 423 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 180 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site
- 22 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.7147/-9.13109) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=1; wikidata:Q54153246 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/palacio-dos-condes-de-figueira-q54153246.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
