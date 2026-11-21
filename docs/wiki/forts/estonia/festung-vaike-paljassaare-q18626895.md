# Festung Väike-Paljassaare

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `festung-vaike-paljassaare-q18626895` |
| Coordinates | 59.47194, 24.7203 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.47194/24.7203)) |
| Wikidata | [Q18626895](https://www.wikidata.org/wiki/Q18626895) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Tallinn |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `ruins` | barge |

## What the model contains

Tier **T1**, status `outline-only`, 26 elements (outline 1, marker 2, road 12, coastline 1, zone 3, retaining-wall 1, building 3, water 3).

Evidence: documented 0, mapped 26, inferred 0, derived 2; heights documented 1, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/817309867 historic=ruins 292 m from ledger point
- origin moved 291 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":185,"medianInside":1.3,"medianOutside":2.5}
- sea-1: DEM check ok {"cells":94,"medianInside":1,"medianOutside":2.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.47194/24.7203) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=1; wikidata:Q18626895 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 26 elements); data/traces/festung-vaike-paljassaare-q18626895.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
