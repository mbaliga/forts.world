# Castillo de Matagorda

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-matagorda-q28065814` |
| Coordinates | 36.51438, -6.24976 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.51438/-6.24976)) |
| Wikidata | [Q28065814](https://www.wikidata.org/wiki/Q28065814) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|castle\|fort\|monument |
| Administrative area | Puerto Real |
| Inception | 1691 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 67 elements (marker 3, coastline 1, building 9, wall 41, road 11, water 2).

Evidence: documented 0, mapped 67, inferred 0, derived 2; heights documented 4, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":291,"medianInside":0,"medianOutside":3.3}
- sea-1: DEM check ok {"cells":366,"medianInside":0,"medianOutside":1.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.51438/-6.24976) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|castle\|fort\|monument; sitelinks=2; wikidata:Q28065814 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 67 elements); data/traces/castillo-de-matagorda-q28065814.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
