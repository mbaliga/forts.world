# Fort Batenstein

> Ghana · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-batenstein-q472588` |
| Coordinates | 4.82429, -1.91724 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/4.82429/-1.91724)) |
| Wikidata | [Q472588](https://www.wikidata.org/wiki/Q472588) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Western Region |
| Inception | 1656 |
| Designations | Ghana’s material cultural heritage\|part of UNESCO World Heritage Site |
| UNESCO WHC id | 34-006 |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 23 elements (outline 1, coastline 1, waterway 1, road 6, building 12, water 2).

Evidence: documented 0, mapped 23, inferred 0, derived 1; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/487662760 historic=castle Q472588 6 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":71,"medianInside":0.5,"medianOutside":13.9}
- 12 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/4.82429/-1.91724) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=11; wikidata:Q472588 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 23 elements); data/traces/fort-batenstein-q472588.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ghana.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
