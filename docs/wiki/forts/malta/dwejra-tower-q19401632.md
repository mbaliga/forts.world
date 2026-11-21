# Dwejra Tower

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dwejra-tower-q19401632` |
| Coordinates | 36.04944, 14.19222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.04944/14.19222)) |
| Wikidata | [Q19401632](https://www.wikidata.org/wiki/Q19401632) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | San Lawrenz |
| Inception | 1652 |
| Designations | Grade 1 |
| Wikipedia language editions | 25 |
| OSM `description` | Lascaris Tower |

## What the model contains

Tier **T1**, status `outline+walls`, 31 elements (outline 1, road 20, coastline 1, waterway 3, wall 2, zone 2, water 2).

Evidence: documented 0, mapped 31, inferred 0, derived 2; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/46929465 historic=(none; chosen by its Wikidata id) Q19401632 21 m from ledger point
- origin moved 20 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":26,"medianInside":0.3,"medianOutside":21}
- sea-1: DEM check ok {"cells":44,"medianInside":0.2,"medianOutside":22}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.04944/14.19222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=25; wikidata:Q19401632 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 32 elements); data/traces/dwejra-tower-q19401632.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 31 elements; outline osm:way/46929465 historic=(none; chosen by its Wikidata id) Q19401632 21 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
