# Airds Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `airds-castle-q4698641` |
| Coordinates | 55.5894, -5.46167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.5894/-5.46167)) |
| Wikidata | [Q4698641](https://www.wikidata.org/wiki/Q4698641) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Argyll and Bute |
| Designations | scheduled monument |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | https://portal.historicenvironment.scot/designation/SM3177 |

## What the model contains

Tier **T1**, status `outline+walls`, 21 elements (outline 1, road 7, wall 1, coastline 1, building 10, water 1).

Evidence: documented 0, mapped 21, inferred 0, derived 1; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1250459014 historic=archaeological_site Q4698641 115 m from ledger point
- origin moved 113 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":130,"medianInside":-18,"medianOutside":10.3}
- 515 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.5894/-5.46167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q4698641 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 21 elements); data/traces/airds-castle-q4698641.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
