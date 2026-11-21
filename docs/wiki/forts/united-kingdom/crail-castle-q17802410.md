# Crail Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `crail-castle-q17802410` |
| Coordinates | 56.2582, -2.62589 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.2582/-2.62589)) |
| Wikidata | [Q17802410](https://www.wikidata.org/wiki/Q17802410) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Fife |
| Designations | category B listed building |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 186 elements (outline 1, road 37, building 140, waterway 4, wall 1, coastline 1, zone 1, water 1).

Evidence: documented 0, mapped 186, inferred 0, derived 1; heights documented 125, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/967258408 historic=building Q17576102 441 m from ledger point
- origin moved 441 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":99,"medianInside":3.2,"medianOutside":23.6}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.2582/-2.62589) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q17802410 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 186 elements); data/traces/crail-castle-q17802410.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
