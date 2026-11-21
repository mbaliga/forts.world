# Wulff Castle

> Chile · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wulff-castle-q8039164` |
| Coordinates | -33.0191, -71.5652 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-33.0191/-71.5652)) |
| Wikidata | [Q8039164](https://www.wikidata.org/wiki/Q8039164) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Viña del Mar |
| Inception | 1906 |
| Designations | Historical Monument of Chile |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 43 elements (outline 1, marker 1, road 18, zone 9, coastline 1, building 10, cliff 2, water 1).

Evidence: documented 0, mapped 43, inferred 0, derived 1; heights documented 6, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/332702279 historic=castle Q8039164 36 m from ledger point
- origin moved 37 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":254,"medianInside":7.3,"medianOutside":21.3}
- 99 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-33.0191/-71.5652) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q8039164 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 43 elements); data/traces/wulff-castle-q8039164.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/chile.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
