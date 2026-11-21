# Spyker Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spyker-castle-q458600` |
| Coordinates | 54.55709, 13.51344 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.55709/13.51344)) |
| Wikidata | [Q458600](https://www.wikidata.org/wiki/Q458600) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|château |
| Administrative area | Glowe |
| Designations | architectural heritage monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 73 elements (outline 1, water 1, road 35, zone 9, building 20, waterway 7).

Evidence: documented 0, mapped 73, inferred 0, derived 0; heights documented 0, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/256202841 historic=castle Q458600 1 m from ledger point
- 118 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.55709/13.51344) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|château; sitelinks=7; wikidata:Q458600 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 73 elements); data/traces/spyker-castle-q458600.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
