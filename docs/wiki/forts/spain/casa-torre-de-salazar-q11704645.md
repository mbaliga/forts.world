# Casa Torre de Salazar

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casa-torre-de-salazar-q11704645` |
| Coordinates | 43.32028, -3.01718 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.32028/-3.01718)) |
| Wikidata | [Q11704645](https://www.wikidata.org/wiki/Q11704645) (CC0) |
| Wikidata class | fortification |
| Types | tower\|tower house |
| Administrative area | Portugalete |
| Designations | Basque government heritage site |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 323 elements (outline 1, marker 3, road 451, coastline 2, building 200, zone 5, waterway 1, wall 38, water 3).

Evidence: documented 0, mapped 323, inferred 0, derived 3; heights documented 54, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/109862339 historic=(none; chosen by its Wikidata id) Q11704645 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 200 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 451 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":1,"medianInside":6,"medianOutside":16.7}
- sea-1: DEM check ok {"cells":67,"medianInside":0,"medianOutside":20.7}
- sea-2: DEM check failed {"cells":400,"medianInside":18.6,"medianOutside":1.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.32028/-3.01718) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|tower house; sitelinks=3; wikidata:Q11704645 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 322 elements); data/traces/casa-torre-de-salazar-q11704645.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 323 elements; outline osm:way/109862339 historic=(none; chosen by its Wikidata id) Q11704645 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
