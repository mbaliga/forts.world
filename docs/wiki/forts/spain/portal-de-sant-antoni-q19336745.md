# Portal de Sant Antoni

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portal-de-sant-antoni-q19336745` |
| Coordinates | 41.37901, 1.16169 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.37901/1.16169)) |
| Wikidata | [Q19336745](https://www.wikidata.org/wiki/Q19336745) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Montblanc |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, marker 2, road 175, waterway 2, building 653, zone 8, wall 72).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 2, inferred 0, unknown 190.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/210938139 historic=castle 156 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 653 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 175 mapped (trace size budget); minor lanes are not drawn
- origin moved 156 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.37901/1.16169) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q19336745 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/portal-de-sant-antoni-q19336745.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
