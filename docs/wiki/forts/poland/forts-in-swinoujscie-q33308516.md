# Forts in Świnoujście

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forts-in-swinoujscie-q33308516` |
| Coordinates | 53.91866, 14.27481 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.91866/14.27481)) |
| Wikidata | [Q33308516](https://www.wikidata.org/wiki/Q33308516) (CC0) |
| Wikidata class | fort |
| Types | fortification\|building complex |
| Administrative area | Świnoujście |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `website` | https://fortaniola.pl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 71 elements (outline 1, road 44, waterway 3, coastline 2, zone 4, building 11, wall 4, water 2).

Evidence: documented 0, mapped 71, inferred 0, derived 2; heights documented 8, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/293801287 historic=fort 436 m from ledger point
- origin moved 436 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":397,"medianInside":4.6,"medianOutside":2.7}
- sea-1: DEM check ok {"cells":127,"medianInside":-4,"medianOutside":7.1}
- 420 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.91866/14.27481) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|building complex; sitelinks=1; wikidata:Q33308516 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 71 elements); data/traces/forts-in-swinoujscie-q33308516.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
