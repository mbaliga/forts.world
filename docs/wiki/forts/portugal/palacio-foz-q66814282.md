# Palácio Foz

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-foz-q66814282` |
| Coordinates | 38.71579, -9.14256 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71579/-9.14256)) |
| Wikidata | [Q66814282](https://www.wikidata.org/wiki/Q66814282) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Santa Maria Maior |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Antiga propriedade do marquês de Castelo Melhor, este palácio, feito no fim do século XVIII, ao gosto neoclássico, segundo projecto do arquitecto italiano Fabri, foi adquirido em 1889 pelo marquês da Foz que o mandou modificar. |

## What the model contains

Tier **T1**, status `outline+walls`, 379 elements (outline 1, marker 16, road 256, building 239, retaining-wall 26, zone 16, wall 49, water 1).

Evidence: documented 0, mapped 379, inferred 0, derived 0; heights documented 51, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/96188746 historic=castle Q66814282 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 239 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 256 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71579/-9.14256) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=3; wikidata:Q66814282 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 379 elements); data/traces/palacio-foz-q66814282.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
