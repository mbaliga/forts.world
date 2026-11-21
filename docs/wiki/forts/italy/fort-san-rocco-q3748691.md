# Fort San Rocco

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-san-rocco-q3748691` |
| Coordinates | 42.71582, 10.98675 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.71582/10.98675)) |
| Wikidata | [Q3748691](https://www.wikidata.org/wiki/Q3748691) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Grosseto |
| Inception | 1788 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 226 elements (outline 1, road 62, wall 1, building 155, waterway 1, coastline 3, zone 1, water 2).

Evidence: documented 0, mapped 226, inferred 0, derived 1; heights documented 154, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1163744891 historic=(none; chosen by its Wikidata id) Q3748691 4 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":37,"medianInside":0.1,"medianOutside":5.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.71582/10.98675) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q3748691 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 229 elements); data/traces/fort-san-rocco-q3748691.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 226 elements; outline osm:way/1163744891 historic=(none; chosen by its Wikidata id) Q3748691 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
