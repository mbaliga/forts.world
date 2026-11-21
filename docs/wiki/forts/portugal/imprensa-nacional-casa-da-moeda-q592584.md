# Imprensa Nacional-Casa da Moeda

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `imprensa-nacional-casa-da-moeda-q592584` |
| Coordinates | 38.71769, -9.15207 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71769/-9.15207)) |
| Wikidata | [Q592584](https://www.wikidata.org/wiki/Q592584) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|mint\|book publisher\|public limited company |
| Administrative area | Lisbon |
| Inception | 1300 |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Criada em 1769, a Impressão Régia, também conhecida por Régia Oficina Tipográfica, adquiriu, a partir de 1833, a designação definitiva de Imprensa Nacional. Em 1972 assistiu-se à sua fusão com a Casa da Moeda dando origem à Imprensa... |
| OSM `website` | https://www.incm.pt |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 1, road 168, waterway 2, building 347, wall 21, retaining-wall 7, zone 4).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 45, inferred 0, unknown 103.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/150216146 historic=castle Q592584 14 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 347 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 168 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the outline centroid
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71769/-9.15207) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|mint\|book publisher\|public limited company; sitelinks=8; wikidata:Q592584 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/imprensa-nacional-casa-da-moeda-q592584.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
