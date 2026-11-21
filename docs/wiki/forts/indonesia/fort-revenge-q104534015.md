# Fort Revenge

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-revenge-q104534015` |
| Coordinates | -4.51896, 129.774 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-4.51896/129.774)) |
| Wikidata | [Q104534015](https://www.wikidata.org/wiki/Q104534015) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Pulau Ay |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 238 elements (outline 1, road 21, coastline 1, building 212, wall 1, zone 1, water 1).

Evidence: documented 0, mapped 238, inferred 0, derived 1; heights documented 0, inferred 0, unknown 213.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13641971 historic=fort 33 m from ledger point
- origin moved 33 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":114,"medianInside":3.8,"medianOutside":14.7}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-4.51896/129.774) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q104534015 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 238 elements); data/traces/fort-revenge-q104534015.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
