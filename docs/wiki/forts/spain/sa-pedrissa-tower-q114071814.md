# Sa Pedrissa Tower

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sa-pedrissa-tower-q114071814` |
| Coordinates | 39.76458, 2.63557 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.76458/2.63557)) |
| Wikidata | [Q114071814](https://www.wikidata.org/wiki/Q114071814) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Deià |
| Inception | 1613 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 9 elements (outline 1, zone 2, road 1, wall 1, coastline 1, cliff 1, building 1, water 1).

Evidence: documented 0, mapped 9, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/148347408 historic=yes 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":217,"medianInside":0,"medianOutside":24.5}
- 28 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.76458/2.63557) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q114071814 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 9 elements); data/traces/sa-pedrissa-tower-q114071814.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
