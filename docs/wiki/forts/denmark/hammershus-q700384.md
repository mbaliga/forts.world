# Hammershus

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hammershus-q700384` |
| Coordinates | 55.27115, 14.75581 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.27115/14.75581)) |
| Wikidata | [Q700384](https://www.wikidata.org/wiki/Q700384) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Bornholm regional municipality |
| Inception | 1200 |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 21 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Nordeuropas største borgruin, opført i 1200-tallet på klippen over Østersøen; Danmarks mest besøgte ruin og Bornholms vartegn. |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 236 elements (outline 1, marker 1, coastline 1, road 79, water 5, zone 21, wall 28, building 31, waterway 9, cliff 53, retaining-wall 7).

Evidence: documented 0, mapped 236, inferred 0, derived 1; heights documented 0, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/378890205 historic=castle Q700384 28 m from ledger point
- origin moved 30 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":295,"medianInside":7.4,"medianOutside":36.5}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.27115/14.75581) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=21; wikidata:Q700384 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 236 elements); data/traces/hammershus-q700384.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
