# Torre de Chilches

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-chilches-q23810827` |
| Coordinates | 36.71402, -4.22118 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.71402/-4.22118)) |
| Wikidata | [Q23810827](https://www.wikidata.org/wiki/Q23810827) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Vélez-Málaga |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 44 elements (outline 1, coastline 1, road 28, building 11, waterway 1, zone 1, water 1).

Evidence: documented 0, mapped 44, inferred 0, derived 1; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/461217166 historic=(none; chosen by its Wikidata id) Q23810827 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":135,"medianInside":0,"medianOutside":11.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.71402/-4.22118) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=3; wikidata:Q23810827 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 44 elements); data/traces/torre-de-chilches-q23810827.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 44 elements; outline osm:way/461217166 historic=(none; chosen by its Wikidata id) Q23810827 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
