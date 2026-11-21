# Castillo de Santa Cruz

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-santa-cruz-q10283898` |
| Coordinates | 43.3483, -8.35 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.3483/-8.35)) |
| Wikidata | [Q10283898](https://www.wikidata.org/wiki/Q10283898) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Liáns, Oleiros |
| Designations | bien de interés cultural |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | Lugar do CEIDA: Centro de Extensión Universitaria e Divulgación Ambiental de Galicia |
| OSM `website` | https://www.ceida.org/castillo-santa-cruz.html |

## What the model contains

Tier **T1**, status `outline+walls`, 71 elements (outline 1, marker 2, road 37, building 9, coastline 3, zone 7, wall 6, retaining-wall 2, water 4).

Evidence: documented 0, mapped 71, inferred 0, derived 3; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/158406737 historic=castle 9 m from ledger point
- island ring (19846 m2) cut out of sea-0
- island ring (1570 m2) cut out of sea-0
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1362,"medianInside":0,"medianOutside":0.1}
- sea-1: DEM check ok {"cells":1427,"medianInside":0,"medianOutside":1.5}
- sea-2: DEM check failed {"cells":1595,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.3483/-8.35) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=7; wikidata:Q10283898 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 71 elements); data/traces/castillo-de-santa-cruz-q10283898.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
