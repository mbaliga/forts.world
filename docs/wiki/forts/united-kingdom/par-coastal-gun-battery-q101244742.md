# Par Coastal Gun Battery

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `par-coastal-gun-battery-q101244742` |
| Coordinates | 50.34444, -4.70556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.34444/-4.70556)) |
| Wikidata | [Q101244742](https://www.wikidata.org/wiki/Q101244742) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Cornwall |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 114 elements (outline 1, road 63, waterway 5, coastline 3, zone 6, water 3, wall 6, building 27).

Evidence: documented 0, mapped 114, inferred 0, derived 2; heights documented 2, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/603855036 historic=yes Q101244742 412 m from ledger point
- origin moved 419 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":941,"medianInside":24.6,"medianOutside":3.4}
- sea-1: DEM check ok {"cells":42,"medianInside":2.6,"medianOutside":25.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.34444/-4.70556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q101244742 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 114 elements); data/traces/par-coastal-gun-battery-q101244742.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
