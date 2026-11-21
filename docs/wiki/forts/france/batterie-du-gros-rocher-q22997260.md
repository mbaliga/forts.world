# Batterie du Gros Rocher

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `batterie-du-gros-rocher-q22997260` |
| Coordinates | 47.32819, -3.12547 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.32819/-3.12547)) |
| Wikidata | [Q22997260](https://www.wikidata.org/wiki/Q22997260) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Le Palais |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 28 elements (outline 1, building 2, road 7, wall 4, coastline 1, zone 11, water 2).

Evidence: documented 0, mapped 28, inferred 0, derived 2; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/431765770 historic=fort Q22997260 2 m from ledger point
- sea-0: DEM check failed {"cells":92,"medianInside":0,"medianOutside":0}
- sea-1: DEM check failed {"cells":78,"medianInside":0,"medianOutside":0}
- 20 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.32819/-3.12547) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q22997260 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 28 elements); data/traces/batterie-du-gros-rocher-q22997260.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
