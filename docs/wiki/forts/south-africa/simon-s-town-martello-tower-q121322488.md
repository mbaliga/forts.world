# Simon's Town Martello Tower

> South Africa · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `simon-s-town-martello-tower-q121322488` |
| Coordinates | -34.19303, 18.44296 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-34.19303/18.44296)) |
| Wikidata | [Q121322488](https://www.wikidata.org/wiki/Q121322488) (CC0) |
| Wikidata class | fortification |
| Types | Martello tower |
| Administrative area | Naval Base Simon's Town |
| Designations | provincial heritage site |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 93 elements (outline 1, marker 1, road 25, coastline 2, building 59, zone 3, wall 1, water 1).

Evidence: documented 0, mapped 93, inferred 0, derived 1; heights documented 0, inferred 0, unknown 60.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/433328002 historic=building Q121322488 0 m from ledger point
- sea-0: DEM check ok {"cells":23,"medianInside":4.3,"medianOutside":12.1}
- 28 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-34.19303/18.44296) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Martello tower; sitelinks=1; wikidata:Q121322488 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 93 elements); data/traces/simon-s-town-martello-tower-q121322488.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-africa.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
