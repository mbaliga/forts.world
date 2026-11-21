# Bo'ness

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bo-ness-q896424` |
| Coordinates | 56.01681, -3.60891 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.01681/-3.60891)) |
| Wikidata | [Q896424](https://www.wikidata.org/wiki/Q896424) (CC0) |
| Wikidata class | fortification |
| Types | town\|small burgh |
| Administrative area | Falkirk |
| Wikipedia language editions | 25 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 430 |
| OSM `description` | A turf fortification on stone foundations, built by the Romans and representing the northernmost frontier barrier of the Roman Empire at the time. |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `location-only`, 309 elements (marker 5, coastline 2, road 272, building 538, wall 19, zone 10, retaining-wall 2, water 1).

Evidence: documented 0, mapped 309, inferred 0, derived 1; heights documented 0, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3156625 historic=archaeological_site Q210957 25595 m from ledger point
- site is a site relation of 40 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (55005 x 10955 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 538 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 272 mapped (trace size budget); minor lanes are not drawn
- sea-0: DEM check failed {"cells":524,"medianInside":22,"medianOutside":15.9}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.01681/-3.60891) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; town\|small burgh; sitelinks=25; wikidata:Q896424 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 1 elements); data/traces/bo-ness-q896424.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
