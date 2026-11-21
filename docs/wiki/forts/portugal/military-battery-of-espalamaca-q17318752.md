# Military Battery of Espalamaca

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `military-battery-of-espalamaca-q17318752` |
| Coordinates | 38.55, -28.61 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.55/-28.61)) |
| Wikidata | [Q17318752](https://www.wikidata.org/wiki/Q17318752) (CC0) |
| Wikidata class | fortification |
| Types | coastal battery |
| Administrative area | Azores |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 31 elements (outline 1, marker 2, cliff 1, road 10, waterway 2, building 2, retaining-wall 4, zone 8, coastline 1).

Evidence: documented 0, mapped 31, inferred 0, derived 0; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/688971955 historic=yes Q17318752 655 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 658 m from the ledger point to the outline centroid
- 64 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.55/-28.61) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal battery; sitelinks=3; wikidata:Q17318752 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 31 elements); data/traces/military-battery-of-espalamaca-q17318752.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
