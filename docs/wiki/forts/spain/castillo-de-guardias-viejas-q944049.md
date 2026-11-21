# Castillo de Guardias Viejas

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-guardias-viejas-q944049` |
| Coordinates | 36.7004, -2.85146 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.7004/-2.85146)) |
| Wikidata | [Q944049](https://www.wikidata.org/wiki/Q944049) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum |
| Administrative area | El Ejido |
| Designations | bien de interés cultural |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `website` | https://balerma.es/castillo-de-guardias-viejas |

## What the model contains

Tier **T1**, status `outline-only`, 39 elements (outline 1, coastline 1, road 28, building 8, water 1).

Evidence: documented 0, mapped 39, inferred 0, derived 1; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/182394027 historic=castle Q944049 12 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":8,"medianInside":-0.1,"medianOutside":17}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.7004/-2.85146) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum; sitelinks=7; wikidata:Q944049 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 39 elements); data/traces/castillo-de-guardias-viejas-q944049.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
