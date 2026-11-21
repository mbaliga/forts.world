# Skåre skansar

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `skare-skansar-q29477096` |
| Coordinates | 55.37575, 13.05962 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.37575/13.05962)) |
| Wikidata | [Q29477096](https://www.wikidata.org/wiki/Q29477096) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Trelleborg Municipality |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 33 elements (outline 1, coastline 2, road 7, building 19, zone 3, water 1).

Evidence: documented 0, mapped 33, inferred 0, derived 1; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/487501468 historic=castle 79 m from ledger point
- origin moved 93 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":585,"medianInside":0,"medianOutside":0}
- 501 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.37575/13.05962) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=1; wikidata:Q29477096 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 33 elements); data/traces/skare-skansar-q29477096.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
