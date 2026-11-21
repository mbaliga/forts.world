# Fort Fedderwardersiel

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-fedderwardersiel-q75332040` |
| Coordinates | 53.59889, 8.35056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.59889/8.35056)) |
| Wikidata | [Q75332040](https://www.wikidata.org/wiki/Q75332040) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Butjadingen |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 221 elements (outline 1, marker 1, road 103, building 85, zone 18, waterway 9, water 3, coastline 1).

Evidence: documented 0, mapped 221, inferred 0, derived 1; heights documented 16, inferred 0, unknown 69.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1499664627 historic=(none; chosen by its Wikidata id) Q75332040 370 m from ledger point
- origin moved 369 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":33,"medianInside":-1,"medianOutside":0.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.59889/8.35056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q75332040 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 101 elements); data/traces/fort-fedderwardersiel-q75332040.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 221 elements; outline osm:way/1499664627 historic=(none; chosen by its Wikidata id) Q75332040 370 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
