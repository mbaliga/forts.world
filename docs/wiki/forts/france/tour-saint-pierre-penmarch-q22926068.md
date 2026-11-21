# Tour Saint-Pierre (Penmarch)

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-saint-pierre-penmarch-q22926068` |
| Coordinates | 47.79761, -4.37457 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.79761/-4.37457)) |
| Wikidata | [Q22926068](https://www.wikidata.org/wiki/Q22926068) (CC0) |
| Wikidata class | fort |
| Types | lighthouse\|fortified tower\|semaphore line |
| Administrative area | Penmarch |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 95 elements (outline 1, coastline 2, road 25, building 42, wall 15, zone 8, water 2).

Evidence: documented 0, mapped 95, inferred 0, derived 2; heights documented 5, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33779858 historic=(none; chosen by its Wikidata id) Q22926068 4 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":133,"medianInside":0,"medianOutside":0.1}
- sea-1: DEM check failed {"cells":89,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.79761/-4.37457) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; lighthouse\|fortified tower\|semaphore line; sitelinks=2; wikidata:Q22926068 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 100 elements); data/traces/tour-saint-pierre-penmarch-q22926068.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 95 elements; outline osm:way/33779858 historic=(none; chosen by its Wikidata id) Q22926068 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
