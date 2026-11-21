# Palácio dos Condes dos Arcos

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-dos-condes-dos-arcos-q53865530` |
| Coordinates | 38.71227, -9.1298 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71227/-9.1298)) |
| Wikidata | [Q53865530](https://www.wikidata.org/wiki/Q53865530) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Santa Maria Maior |
| Inception | 1760 |
| Designations | Monument of Public Interest |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | O Palácio do Salvador foi objecto de várias e profundas modificações na sua estrutura arquitectónica, ao longo dos séculos. Tendo o núcleo inicial do imóvel desaparecido por completo... |

## What the model contains

Tier **T1**, status `outline+walls`, 346 elements (outline 1, marker 20, road 344, wall 31, building 728, retaining-wall 14, water 2, zone 6, coastline 1, waterway 1).

Evidence: documented 0, mapped 346, inferred 0, derived 0; heights documented 9, inferred 0, unknown 156.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3312222 historic=castle Q53865530 3 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 728 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 344 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71227/-9.1298) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=1; wikidata:Q53865530 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 346 elements); data/traces/palacio-dos-condes-dos-arcos-q53865530.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
