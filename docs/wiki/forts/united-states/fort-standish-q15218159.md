# Fort Standish

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-standish-q15218159` |
| Coordinates | 42.32935, -70.92786 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.32935/-70.92786)) |
| Wikidata | [Q15218159](https://www.wikidata.org/wiki/Q15218159) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Inception | 1899 |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `location-only`, 42 elements (road 19, coastline 2, building 15, waterway 2, zone 2, water 2).

Evidence: documented 0, mapped 42, inferred 0, derived 2; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20228132 historic=fort Q15218159 46 m from ledger point
- site is a site relation of 13 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (621 x 810 m)
- origin moved 27 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":2024,"medianInside":0.9,"medianOutside":0}
- sea-1: DEM check ok {"cells":718,"medianInside":0.1,"medianOutside":1.2}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.32935/-70.92786) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q15218159 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 42 elements); data/traces/fort-standish-q15218159.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
