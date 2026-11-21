# broch beside Geo of the Brough, Balta

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `broch-beside-geo-of-the-brough-balta-q56667319` |
| Coordinates | 60.75811, -0.79058 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.75811/-0.79058)) |
| Wikidata | [Q56667319](https://www.wikidata.org/wiki/Q56667319) (CC0) |
| Wikidata class | fortification |
| Types | broch |
| Administrative area | Shetland Islands |
| Designations | scheduled monument |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 11 elements (outline 1, coastline 3, water 5, waterway 2).

Evidence: documented 0, mapped 11, inferred 0, derived 4; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/386209161 historic=archaeological_site Q56667319 4 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":150,"medianInside":-21,"medianOutside":7.1}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":3.3}
- sea-2: DEM check failed {"cells":1,"medianInside":3.5,"medianOutside":3.3}
- sea-3: DEM check ok {"cells":3,"medianInside":-11,"medianOutside":3.3}
- 486 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.75811/-0.79058) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch; sitelinks=0; wikidata:Q56667319 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 11 elements); data/traces/broch-beside-geo-of-the-brough-balta-q56667319.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
