# Escola Secundária Veiga Beirão

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `escola-secundaria-veiga-beirao-q10343979` |
| Coordinates | 38.71168, -9.14024 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71168/-9.14024)) |
| Wikidata | [Q10343979](https://www.wikidata.org/wiki/Q10343979) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|secondary school\|cultural heritage\|manor house |
| Administrative area | Santa Maria Maior |
| Designations | Included in protected site |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | O edifício apresenta um portal nobre emoldurado de cantaria, sobre o qual assenta uma larga varanda em contracurvas. Reconstruído no ínicio da década de 90 de Setecentos, foi destruído por um incêndio em 1798.. |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, marker 14, road 267, building 407, retaining-wall 19, water 2, zone 8, coastline 1, wall 11).

Evidence: documented 0, mapped 326, inferred 0, derived 0; heights documented 62, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8333591 historic=castle Q10343979 3 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 407 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 267 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71168/-9.14024) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|secondary school\|cultural heritage\|manor house; sitelinks=2; wikidata:Q10343979 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/escola-secundaria-veiga-beirao-q10343979.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
