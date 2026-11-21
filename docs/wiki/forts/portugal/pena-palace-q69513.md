# Pena Palace

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pena-palace-q69513` |
| Coordinates | 38.78757, -9.39049 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.78757/-9.39049)) |
| Wikidata | [Q69513](https://www.wikidata.org/wiki/Q69513) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|cultural heritage\|convent |
| Administrative area | Sintra (Santa Maria e São Miguel, São Martinho e São Pedro de Penaferrim) |
| Inception | 1838 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 41 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `website` | https://www.parquesdesintra.pt/parques-jardins-e-monumentos/parque-e-palacio-nacional-da-pena/ |

## What the model contains

Tier **T1**, status `outline+walls`, 197 elements (outline 1, road 139, building 33, zone 3, wall 13, retaining-wall 5, water 3).

Evidence: documented 0, mapped 197, inferred 0, derived 0; heights documented 21, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/612095421 historic=castle Q69513 12 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.78757/-9.39049) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|cultural heritage\|convent; sitelinks=41; wikidata:Q69513 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 197 elements); data/traces/pena-palace-q69513.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
