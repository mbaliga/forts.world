# Svartholm Fortress

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `svartholm-fortress-q2628683` |
| Coordinates | 60.3794, 26.29969 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.3794/26.29969)) |
| Wikidata | [Q2628683](https://www.wikidata.org/wiki/Q2628683) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress island |
| Administrative area | Loviisa |
| Inception | 1764 |
| Designations | registered archaeological site in Finland\|Cultural Heritage Site of National Significance |
| Wikipedia language editions | 10 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 44 elements (outline 1, road 17, coastline 2, zone 9, retaining-wall 10, building 2, waterway 2, water 1).

Evidence: documented 0, mapped 44, inferred 0, derived 1; heights documented 1, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/302956564 historic=fort 20 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":247,"medianInside":-5,"medianOutside":0.6}
- 687 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.3794/26.29969) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress island; sitelinks=10; wikidata:Q2628683 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 44 elements); data/traces/svartholm-fortress-q2628683.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
