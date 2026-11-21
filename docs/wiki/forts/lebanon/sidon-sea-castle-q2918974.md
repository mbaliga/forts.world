# Sidon Sea Castle

> Lebanon · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sidon-sea-castle-q2918974` |
| Coordinates | 33.567, 35.3711 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.567/35.3711)) |
| Wikidata | [Q2918974](https://www.wikidata.org/wiki/Q2918974) (CC0) |
| Wikidata class | castle |
| Types | castle\|crusader castle |
| Administrative area | Sidon |
| Inception | 1228 |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `location-only`, 129 elements (road 55, building 65, zone 2, coastline 5, water 2).

Evidence: documented 0, mapped 129, inferred 0, derived 2; heights documented 10, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8118592 historic=castle Q2918974 13 m from ledger point
- site is a site relation of 14 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (91 x 156 m)
- island ring (3425 m2) cut out of sea-0
- origin moved 37 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":361,"medianInside":0,"medianOutside":6.3}
- sea-1: DEM check failed {"cells":497,"medianInside":0.3,"medianOutside":-0.4}
- 82 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.567/35.3711) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|crusader castle; sitelinks=20; wikidata:Q2918974 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 85 elements); data/traces/sidon-sea-castle-q2918974.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/lebanon.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
