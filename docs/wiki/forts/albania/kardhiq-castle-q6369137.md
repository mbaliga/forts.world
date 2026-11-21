# Kardhiq Castle

> Albania · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kardhiq-castle-q6369137` |
| Coordinates | 40.1246, 20.0292 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.1246/20.0292)) |
| Wikidata | [Q6369137](https://www.wikidata.org/wiki/Q6369137) (CC0) |
| Wikidata class | ruin |
| Types | castle\|ruins\|historic site |
| Administrative area | Gjirokastër County |
| Designations | Cultural Monument of Albania |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 16 elements (marker 1, road 5, waterway 1, zone 1, wall 8).

Evidence: documented 0, mapped 16, inferred 0, derived 0; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- 451 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.1246/20.0292) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|ruins\|historic site; sitelinks=2; wikidata:Q6369137 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 16 elements); data/traces/kardhiq-castle-q6369137.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/albania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
