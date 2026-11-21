# Armadale Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `armadale-castle-q676462` |
| Coordinates | 57.07256, -5.89485 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.07256/-5.89485)) |
| Wikidata | [Q676462](https://www.wikidata.org/wiki/Q676462) (CC0) |
| Wikidata class | castle |
| Types | castle\|country house |
| Administrative area | Highland |
| Inception | 1815 |
| Designations | category B listed building |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `ruins` | yes |
| OSM `website` | https://www.armadalecastle.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 47 elements (outline 1, coastline 1, road 28, building 3, waterway 4, zone 4, water 4, wall 1, retaining-wall 1).

Evidence: documented 0, mapped 47, inferred 0, derived 1; heights documented 2, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/354648861 historic=castle Q676462 8 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":173,"medianInside":11.2,"medianOutside":38.5}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.07256/-5.89485) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|country house; sitelinks=11; wikidata:Q676462 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 47 elements); data/traces/armadale-castle-q676462.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
