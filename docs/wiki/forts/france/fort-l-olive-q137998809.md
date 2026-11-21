# Fort L'Olive

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-l-olive-q137998809` |
| Coordinates | 15.94996, -61.70707 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.94996/-61.70707)) |
| Wikidata | [Q137998809](https://www.wikidata.org/wiki/Q137998809) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Vieux-Fort |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 163 elements (outline 1, road 25, coastline 1, building 128, cliff 1, zone 3, waterway 1, water 3).

Evidence: documented 0, mapped 163, inferred 0, derived 3; heights documented 0, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/293633363 historic=ruins 16 m from ledger point
- origin moved 15 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":400,"medianInside":14.3,"medianOutside":33.3}
- sea-1: DEM check ok {"cells":165,"medianInside":6.3,"medianOutside":31.3}
- sea-2: DEM check ok {"cells":32,"medianInside":8.4,"medianOutside":16.9}
- 16 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.94996/-61.70707) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q137998809 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 163 elements); data/traces/fort-l-olive-q137998809.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
