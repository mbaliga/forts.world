# Clifton Hall

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `clifton-hall-q3280172` |
| Coordinates | 54.6369, -2.72849 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.6369/-2.72849)) |
| Wikidata | [Q3280172](https://www.wikidata.org/wiki/Q3280172) (CC0) |
| Wikidata class | fortification |
| Types | manor house\|peel tower |
| Administrative area | Clifton |
| Designations | scheduled monument |
| Wikipedia language editions | 4 |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/clifton-hall/ |

## What the model contains

Tier **T1**, status `outline+walls`, 23 elements (outline 1, road 16, building 4, wall 1, waterway 1).

Evidence: documented 0, mapped 23, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/421502234 historic=(none; chosen by its Wikidata id) Q3280172 9 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.6369/-2.72849) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; manor house\|peel tower; sitelinks=4; wikidata:Q3280172 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 23 elements); data/traces/clifton-hall-q3280172.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 23 elements; outline osm:way/421502234 historic=(none; chosen by its Wikidata id) Q3280172 9 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
