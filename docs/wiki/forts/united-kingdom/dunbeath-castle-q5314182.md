# Dunbeath Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dunbeath-castle-q5314182` |
| Coordinates | 58.235, -3.43559 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.235/-3.43559)) |
| Wikidata | [Q5314182](https://www.wikidata.org/wiki/Q5314182) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Highland |
| Designations | category A listed building |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 5 elements (outline 1, road 2, coastline 1, water 1).

Evidence: documented 0, mapped 5, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/506478633 historic=castle Q5314182 7 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":629,"medianInside":10.3,"medianOutside":41.2}
- 11 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.235/-3.43559) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q5314182 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 5 elements); data/traces/dunbeath-castle-q5314182.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
