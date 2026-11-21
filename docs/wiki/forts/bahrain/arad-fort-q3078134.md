# Arad Fort

> Bahrain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arad-fort-q3078134` |
| Coordinates | 26.2525, 50.62694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.2525/50.62694)) |
| Wikidata | [Q3078134](https://www.wikidata.org/wiki/Q3078134) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Inception | 1500 |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `description` | 15th-century fort. Access permitted, fee payable |

## What the model contains

Tier **T1**, status `outline+walls`, 103 elements (outline 1, road 65, building 12, zone 20, wall 3, coastline 1, water 1).

Evidence: documented 0, mapped 103, inferred 0, derived 1; heights documented 1, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28657641 historic=castle Q3078134 25 m from ledger point
- origin moved 26 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":280,"medianInside":0.2,"medianOutside":3.1}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.2525/50.62694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=13; wikidata:Q3078134 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 103 elements); data/traces/arad-fort-q3078134.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bahrain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
