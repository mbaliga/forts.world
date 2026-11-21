# Opera Punta Tegge

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `opera-punta-tegge-q113577608` |
| Coordinates | 41.21089, 9.38313 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.21089/9.38313)) |
| Wikidata | [Q113577608](https://www.wikidata.org/wiki/Q113577608) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | La Maddalena |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 68 elements (outline 1, coastline 5, road 18, building 37, zone 4, water 3).

Evidence: documented 0, mapped 68, inferred 0, derived 3; heights documented 0, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/444884761 historic=ruins 331 m from ledger point
- origin moved 332 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":22,"medianInside":0,"medianOutside":10.1}
- sea-1: DEM check ok {"cells":74,"medianInside":0,"medianOutside":12.1}
- sea-2: DEM check ok {"cells":399,"medianInside":8.8,"medianOutside":15.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.21089/9.38313) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q113577608 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 68 elements); data/traces/opera-punta-tegge-q113577608.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
