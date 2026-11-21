# Millom Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `millom-castle-q15979182` |
| Coordinates | 54.221, -3.27254 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.221/-3.27254)) |
| Wikidata | [Q15979182](https://www.wikidata.org/wiki/Q15979182) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Millom |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 7 |

## What the model contains

Tier **T1**, status `outline+walls`, 57 elements (outline 1, road 17, zone 6, building 13, waterway 9, wall 11).

Evidence: documented 0, mapped 57, inferred 0, derived 0; heights documented 1, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/314867182 historic=(none; chosen by its Wikidata id) Q15979182 15 m from ledger point
- origin moved 15 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.221/-3.27254) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q15979182 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 54 elements); data/traces/millom-castle-q15979182.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 57 elements; outline osm:way/314867182 historic=(none; chosen by its Wikidata id) Q15979182 15 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
