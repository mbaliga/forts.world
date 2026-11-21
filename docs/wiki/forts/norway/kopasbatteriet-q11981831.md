# Kopåsbatteriet

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kopasbatteriet-q11981831` |
| Coordinates | 59.67222, 10.62306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.67222/10.62306)) |
| Wikidata | [Q11981831](https://www.wikidata.org/wiki/Q11981831) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Wikipedia language editions | 1 |
| OSM `description` | Ex-millitary battery |

## What the model contains

Tier **T1**, status `outline+walls`, 351 elements (outline 1, marker 1, coastline 2, road 103, wall 11, building 231, water 2).

Evidence: documented 0, mapped 351, inferred 0, derived 1; heights documented 30, inferred 0, unknown 212.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/520242521 historic=(none; chosen by its Wikidata id) Q11981831 44 m from ledger point
- origin moved 45 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":308,"medianInside":0,"medianOutside":25.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.67222/10.62306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=1; wikidata:Q11981831 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 179 elements); data/traces/kopasbatteriet-q11981831.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 351 elements; outline osm:way/520242521 historic=(none; chosen by its Wikidata id) Q11981831 44 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
