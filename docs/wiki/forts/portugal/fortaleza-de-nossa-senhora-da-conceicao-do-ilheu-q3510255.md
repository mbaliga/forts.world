# Fortaleza de Nossa Senhora da Conceição do Ilhéu

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortaleza-de-nossa-senhora-da-conceicao-do-ilheu-q3510255` |
| Coordinates | 32.64111, -16.91528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.64111/-16.91528)) |
| Wikidata | [Q3510255](https://www.wikidata.org/wiki/Q3510255) (CC0) |
| Wikidata class | fort |
| Types | fortress\|cultural heritage |
| Administrative area | Sé |
| Inception | 1700 |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `barrier` | wall |
| OSM `website` | https://cultura.madeira.gov.pt/olhares-sobre-o-passado/3676-pontinha.html |

## What the model contains

Tier **T1**, status `outline+walls`, 60 elements (outline 1, road 41, cliff 1, building 6, wall 1, coastline 6, retaining-wall 1, water 2).

Evidence: documented 0, mapped 60, inferred 0, derived 2; heights documented 5, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/746954604 historic=fort Q3510255 1 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":195,"medianInside":0,"medianOutside":3.2}
- sea-1: DEM check failed {"cells":117,"medianInside":0.1,"medianOutside":0}
- 13 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.64111/-16.91528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|cultural heritage; sitelinks=4; wikidata:Q3510255 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 60 elements); data/traces/fortaleza-de-nossa-senhora-da-conceicao-do-ilheu-q3510255.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
