# City walls of Saint-Valery-sur-Somme

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-saint-valery-sur-somme-q86465276` |
| Coordinates | 50.1888, 1.62999 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.1888/1.62999)) |
| Wikidata | [Q86465276](https://www.wikidata.org/wiki/Q86465276) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Saint-Valery-sur-Somme |
| Wikipedia language editions | 2 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 187 elements (outline 1, marker 1, road 51, wall 6, zone 6, building 397, coastline 1, water 1).

Evidence: documented 0, mapped 187, inferred 0, derived 1; heights documented 3, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/291690142 historic=monument 265 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 397 mapped (trace size budget); the rest of the town is not drawn
- origin moved 264 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":92,"medianInside":6.2,"medianOutside":23.8}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.1888/1.62999) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=2; wikidata:Q86465276 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 187 elements); data/traces/city-walls-of-saint-valery-sur-somme-q86465276.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
