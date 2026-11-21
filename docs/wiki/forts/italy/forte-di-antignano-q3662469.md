# Forte di Antignano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-di-antignano-q3662469` |
| Coordinates | 43.49771, 10.32265 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.49771/10.32265)) |
| Wikidata | [Q3662469](https://www.wikidata.org/wiki/Q3662469) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Livorno |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 254 elements (outline 1, marker 6, road 83, building 317, wall 32, waterway 1, zone 7, coastline 1, water 3).

Evidence: documented 0, mapped 254, inferred 0, derived 3; heights documented 0, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/86572785 historic=(none; chosen by its Wikidata id) Q3662469 57 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 317 mapped (trace size budget); the rest of the town is not drawn
- origin moved 57 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":3,"medianInside":0.3,"medianOutside":11.4}
- sea-1: DEM check ok {"cells":2,"medianInside":0.9,"medianOutside":11.4}
- sea-2: DEM check ok {"cells":37,"medianInside":0,"medianOutside":12.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.49771/10.32265) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=3; wikidata:Q3662469 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 364 elements); data/traces/forte-di-antignano-q3662469.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 254 elements; outline osm:way/86572785 historic=(none; chosen by its Wikidata id) Q3662469 57 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
