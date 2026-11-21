# Castillo de Bil Bil

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-bil-bil-q5757169` |
| Coordinates | 36.5892, -4.5282 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.5892/-4.5282)) |
| Wikidata | [Q5757169](https://www.wikidata.org/wiki/Q5757169) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural center |
| Administrative area | Benalmádena |
| Inception | 1927 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 55 elements (outline 1, road 38, coastline 1, building 10, water 5).

Evidence: documented 0, mapped 55, inferred 0, derived 1; heights documented 2, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/437869025 historic=castle Q5757169 6 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":175,"medianInside":0,"medianOutside":11.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.5892/-4.5282) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural center; sitelinks=3; wikidata:Q5757169 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 55 elements); data/traces/castillo-de-bil-bil-q5757169.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
