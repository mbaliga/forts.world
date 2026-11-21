# Ireland's Eye Martello Tower

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ireland-s-eye-martello-tower-q55049742` |
| Coordinates | 53.40824, -6.06955 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.40824/-6.06955)) |
| Wikidata | [Q55049742](https://www.wikidata.org/wiki/Q55049742) (CC0) |
| Wikidata class | fortification |
| Types | Martello tower |
| Administrative area | County Dublin |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 18 elements (outline 1, coastline 3, cliff 1, road 5, zone 4, water 3).

Evidence: documented 0, mapped 18, inferred 0, derived 3; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/233560667 historic=ruins 483 m from ledger point
- origin moved 483 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":88,"medianInside":3.3,"medianOutside":9.6}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":7.4}
- sea-2: DEM check failed {"cells":2,"medianInside":17,"medianOutside":7.4}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.40824/-6.06955) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Martello tower; sitelinks=1; wikidata:Q55049742 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 18 elements); data/traces/ireland-s-eye-martello-tower-q55049742.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
