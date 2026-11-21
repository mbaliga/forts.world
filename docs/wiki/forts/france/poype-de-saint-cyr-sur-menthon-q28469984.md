# Poype de Saint-Cyr-sur-Menthon

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `poype-de-saint-cyr-sur-menthon-q28469984` |
| Coordinates | 46.27717, 4.97449 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.27717/4.97449)) |
| Wikidata | [Q28469984](https://www.wikidata.org/wiki/Q28469984) (CC0) |
| Wikidata class | castle |
| Types | motte-and-bailey castle |
| Administrative area | Saint-Cyr-sur-Menthon |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 180 elements (outline 1, marker 2, road 54, building 104, water 2, zone 17).

Evidence: documented 0, mapped 180, inferred 0, derived 0; heights documented 0, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/218708052 historic=ruins Q28469984 4 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- 123 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.27717/4.97449) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; motte-and-bailey castle; sitelinks=2; wikidata:Q28469984 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 180 elements); data/traces/poype-de-saint-cyr-sur-menthon-q28469984.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
