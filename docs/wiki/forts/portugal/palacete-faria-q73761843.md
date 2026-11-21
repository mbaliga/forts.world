# Palacete Faria

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacete-faria-q73761843` |
| Coordinates | 38.71564, -9.1482 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71564/-9.1482)) |
| Wikidata | [Q73761843](https://www.wikidata.org/wiki/Q73761843) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|cultural heritage\|mansion |
| Administrative area | Misericórdia |
| Inception | C19 |
| Designations | Included in protected site |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |
| OSM `description` | Incluído na Zona de Proteção do Aqueduto das Águas Livres (v. IPA.00006811) |

## What the model contains

Tier **T1**, status `outline+walls`, 328 elements (outline 1, marker 4, road 278, building 498, wall 31, zone 4, retaining-wall 13, water 5).

Evidence: documented 0, mapped 328, inferred 0, derived 0; heights documented 19, inferred 0, unknown 145.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/96494536 historic=castle Q73761843 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 498 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 278 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71564/-9.1482) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|cultural heritage\|mansion; sitelinks=1; wikidata:Q73761843 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 328 elements); data/traces/palacete-faria-q73761843.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
