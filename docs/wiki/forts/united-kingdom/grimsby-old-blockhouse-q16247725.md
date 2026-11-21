# Grimsby Old Blockhouse

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `grimsby-old-blockhouse-q16247725` |
| Coordinates | 49.95852, -6.32752 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.95852/-6.32752)) |
| Wikidata | [Q16247725](https://www.wikidata.org/wiki/Q16247725) (CC0) |
| Wikidata class | fort |
| Types | blockhouse |
| Administrative area | Tresco |
| Designations | Grade II listed building |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 28 elements (outline 1, marker 1, road 16, zone 2, wall 3, building 2, coastline 2, water 1).

Evidence: documented 0, mapped 28, inferred 0, derived 1; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/232670316 historic=(none; chosen by its Wikidata id) Q16247725 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":189,"medianInside":-1.4,"medianOutside":8.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.95852/-6.32752) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; blockhouse; sitelinks=2; wikidata:Q16247725 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 28 elements); data/traces/grimsby-old-blockhouse-q16247725.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 28 elements; outline osm:way/232670316 historic=(none; chosen by its Wikidata id) Q16247725 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
