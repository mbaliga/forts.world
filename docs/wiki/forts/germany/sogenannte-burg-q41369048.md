# Sogenannte Burg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sogenannte-burg-q41369048` |
| Coordinates | 49.17634, 10.65479 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.17634/10.65479)) |
| Wikidata | [Q41369048](https://www.wikidata.org/wiki/Q41369048) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Ornbau |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 213 elements (outline 1, marker 1, road 65, building 220, wall 12, zone 3, retaining-wall 11).

Evidence: documented 0, mapped 213, inferred 0, derived 0; heights documented 6, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/626845837 historic=building Q41369048 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 220 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.17634/10.65479) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q41369048 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 266 elements); data/traces/sogenannte-burg-q41369048.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 213 elements; outline osm:way/626845837 historic=building Q41369048 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
