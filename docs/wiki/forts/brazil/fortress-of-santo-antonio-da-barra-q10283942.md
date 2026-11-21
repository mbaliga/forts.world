# Fortress of Santo António da Barra

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortress-of-santo-antonio-da-barra-q10283942` |
| Coordinates | -2.50528, -44.31833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-2.50528/-44.31833)) |
| Wikidata | [Q10283942](https://www.wikidata.org/wiki/Q10283942) (CC0) |
| Wikidata class | fort |
| Types | fort\|historic site |
| Administrative area | São Luís |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 40 elements (outline 1, coastline 2, road 30, building 4, water 3).

Evidence: documented 0, mapped 40, inferred 0, derived 2; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/706440350 historic=fort Q10283942 50 m from ledger point
- origin moved 50 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":160,"medianInside":0.5,"medianOutside":4}
- sea-1: DEM check ok {"cells":8,"medianInside":1.4,"medianOutside":2.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-2.50528/-44.31833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|historic site; sitelinks=2; wikidata:Q10283942 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 40 elements); data/traces/fortress-of-santo-antonio-da-barra-q10283942.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
