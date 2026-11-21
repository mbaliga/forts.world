# Battery Steele

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `battery-steele-q1486350` |
| Coordinates | 43.65889, -70.18056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.65889/-70.18056)) |
| Wikidata | [Q1486350](https://www.wikidata.org/wiki/Q1486350) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Portland |
| Inception | 1942 |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 1 |
| OSM `historic` | military |

## What the model contains

Tier **T1**, status `outline-only`, 32 elements (outline 1, road 27, coastline 1, water 2, waterway 1).

Evidence: documented 0, mapped 32, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/684283862 historic=military Q1486350 58 m from ledger point
- origin moved 54 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":13,"medianInside":-20,"medianOutside":10.2}
- 77 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.65889/-70.18056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=1; wikidata:Q1486350 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 30 elements); data/traces/battery-steele-q1486350.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 32 elements; outline osm:way/684283862 historic=military Q1486350 58 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
