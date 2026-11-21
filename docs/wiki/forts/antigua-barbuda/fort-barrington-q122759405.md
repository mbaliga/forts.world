# Fort Barrington

> Antigua & Barbuda · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-barrington-q122759405` |
| Coordinates | 17.12985, -61.88626 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/17.12985/-61.88626)) |
| Wikidata | [Q122759405](https://www.wikidata.org/wiki/Q122759405) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 13 elements (outline 1, water 3, road 7, coastline 1, zone 1).

Evidence: documented 0, mapped 13, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/345312485 historic=fort 22 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":154,"medianInside":5.2,"medianOutside":4.8}
- sea-1: DEM check ok {"cells":87,"medianInside":2.5,"medianOutside":5.4}
- 35 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/17.12985/-61.88626) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q122759405 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 13 elements); data/traces/fort-barrington-q122759405.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/antigua-barbuda.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
