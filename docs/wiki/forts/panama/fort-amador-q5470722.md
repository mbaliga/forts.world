# Fort Amador

> Panama · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-amador-q5470722` |
| Coordinates | 8.93806, -79.54778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/8.93806/-79.54778)) |
| Wikidata | [Q5470722](https://www.wikidata.org/wiki/Q5470722) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Panama |
| Wikipedia language editions | 3 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline-only`, 29 elements (outline 1, marker 1, road 17, coastline 2, building 5, zone 2, water 1).

Evidence: documented 0, mapped 29, inferred 0, derived 1; heights documented 1, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1487414070 historic=monument 312 m from ledger point
- origin moved 312 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":179,"medianInside":6.2,"medianOutside":13.3}
- 20 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/8.93806/-79.54778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q5470722 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 29 elements); data/traces/fort-amador-q5470722.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/panama.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
