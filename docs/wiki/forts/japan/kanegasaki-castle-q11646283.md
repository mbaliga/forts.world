# Kanegasaki Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kanegasaki-castle-q11646283` |
| Coordinates | 35.66608, 136.07417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.66608/136.07417)) |
| Wikidata | [Q11646283](https://www.wikidata.org/wiki/Q11646283) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Tsuruga |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |
| OSM `description` | 登録有形文化財 |

## What the model contains

Tier **T1**, status `outline+walls`, 77 elements (outline 1, marker 2, waterway 1, road 56, coastline 1, water 2, building 11, zone 2, wall 1).

Evidence: documented 0, mapped 77, inferred 0, derived 1; heights documented 3, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/129646265 historic=yes Q11499558 462 m from ledger point
- origin moved 462 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":11,"medianInside":0.8,"medianOutside":2.3}
- 35 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.66608/136.07417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=5; wikidata:Q11646283 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 77 elements); data/traces/kanegasaki-castle-q11646283.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
