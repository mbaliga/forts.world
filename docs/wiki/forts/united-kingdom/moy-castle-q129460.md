# Moy Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `moy-castle-q129460` |
| Coordinates | 56.35475, -5.85909 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.35475/-5.85909)) |
| Wikidata | [Q129460](https://www.wikidata.org/wiki/Q129460) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Argyll and Bute |
| Designations | scheduled monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 30 elements (outline 1, coastline 1, building 8, waterway 2, road 14, water 2, wall 2).

Evidence: documented 0, mapped 30, inferred 0, derived 1; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/106559938 historic=castle Q129460 20 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":600,"medianInside":3.3,"medianOutside":7.4}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.35475/-5.85909) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=7; wikidata:Q129460 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 30 elements); data/traces/moy-castle-q129460.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
