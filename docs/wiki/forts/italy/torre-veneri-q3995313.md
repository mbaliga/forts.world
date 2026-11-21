# Torre Veneri

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-veneri-q3995313` |
| Coordinates | 40.41861, 18.26917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.41861/18.26917)) |
| Wikidata | [Q3995313](https://www.wikidata.org/wiki/Q3995313) (CC0) |
| Wikidata class | fortification |
| Types | tower\|coastal tower |
| Administrative area | Lecce |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 13 elements (outline 1, road 6, building 2, coastline 1, water 2, zone 1).

Evidence: documented 0, mapped 13, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/299998367 historic=(none; chosen by its Wikidata id) Q3995313 18 m from ledger point
- origin moved 20 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":207,"medianInside":0,"medianOutside":1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.41861/18.26917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|coastal tower; sitelinks=2; wikidata:Q3995313 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 14 elements); data/traces/torre-veneri-q3995313.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 13 elements; outline osm:way/299998367 historic=(none; chosen by its Wikidata id) Q3995313 18 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
