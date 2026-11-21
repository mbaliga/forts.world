# Castell d'Empúries

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-d-empuries-q17595849` |
| Coordinates | 42.13958, 3.11832 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.13958/3.11832)) |
| Wikidata | [Q17595849](https://www.wikidata.org/wiki/Q17595849) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|castle |
| Administrative area | L'Escala |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 186 elements (outline 1, road 75, waterway 1, zone 16, building 69, coastline 3, wall 18, retaining-wall 1, water 2).

Evidence: documented 0, mapped 186, inferred 0, derived 2; heights documented 65, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/421270391 historic=ruins Q17595849 3 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":69,"medianInside":0,"medianOutside":4.2}
- sea-1: DEM check ok {"cells":39,"medianInside":0,"medianOutside":3.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.13958/3.11832) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|castle; sitelinks=2; wikidata:Q17595849 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 186 elements); data/traces/castell-d-empuries-q17595849.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
