# Duino Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `duino-castle-q2276731` |
| Coordinates | 45.77178, 13.60392 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.77178/13.60392)) |
| Wikidata | [Q2276731](https://www.wikidata.org/wiki/Q2276731) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Duino-Aurisina |
| Designations | Italian national heritage |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.castellodiduino.it |

## What the model contains

Tier **T1**, status `outline+walls`, 133 elements (outline 1, marker 2, road 43, building 64, zone 5, water 2, retaining-wall 6, cliff 4, wall 4, coastline 2).

Evidence: documented 0, mapped 133, inferred 0, derived 1; heights documented 63, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7353424 historic=castle Q2276731 12 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":198,"medianInside":0,"medianOutside":31.5}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.77178/13.60392) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=12; wikidata:Q2276731 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 133 elements); data/traces/duino-castle-q2276731.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
