# Najima Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `najima-castle-q2970111` |
| Coordinates | 33.64584, 130.42314 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.64584/130.42314)) |
| Wikidata | [Q2970111](https://www.wikidata.org/wiki/Q2970111) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle\|umijiro |
| Administrative area | Higashi-ku |
| Inception | 1600 |
| Wikipedia language editions | 5 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 245 elements (outline 1, marker 4, road 50, coastline 1, building 182, zone 2, retaining-wall 3, water 2).

Evidence: documented 0, mapped 245, inferred 0, derived 2; heights documented 144, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/285556625 historic=ruins 152 m from ledger point
- origin moved 152 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":40,"medianInside":3,"medianOutside":6}
- sea-1: DEM check failed {"cells":398,"medianInside":5.9,"medianOutside":5.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.64584/130.42314) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle\|umijiro; sitelinks=5; wikidata:Q2970111 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 245 elements); data/traces/najima-castle-q2970111.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
