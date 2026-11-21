# Fort Napoléon des Saintes

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-napoleon-des-saintes-q3077957` |
| Coordinates | 15.875, -61.5825 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.875/-61.5825)) |
| Wikidata | [Q3077957](https://www.wikidata.org/wiki/Q3077957) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Terre-de-Haut |
| Designations | classified historical monument |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 83 elements (outline 1, coastline 1, building 73, road 6, water 2).

Evidence: documented 0, mapped 83, inferred 0, derived 2; heights documented 0, inferred 0, unknown 73.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/42101783 historic=fort Q3077957 37 m from ledger point
- origin moved 37 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":22,"medianInside":6.5,"medianOutside":53.4}
- sea-1: DEM check ok {"cells":8,"medianInside":5.7,"medianOutside":52.9}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.875/-61.5825) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q3077957 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 83 elements); data/traces/fort-napoleon-des-saintes-q3077957.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
