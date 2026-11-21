# Ajman Castle

> Slovenia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ajman-castle-q3408965` |
| Coordinates | 46.18811, 14.32734 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.18811/14.32734)) |
| Wikidata | [Q3408965](https://www.wikidata.org/wiki/Q3408965) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Municipality of Škofja Loka |
| Designations | monument of local significance |
| Wikipedia language editions | 5 |

## What the model contains

Tier **T1**, status `outline-only`, 127 elements (outline 1, marker 1, road 20, zone 14, building 91).

Evidence: documented 0, mapped 127, inferred 0, derived 0; heights documented 0, inferred 0, unknown 91.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/483232327 historic=(none; chosen by its Wikidata id) Q3408965 21 m from ledger point
- origin moved 20 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.18811/14.32734) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q3408965 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 132 elements); data/traces/ajman-castle-q3408965.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 127 elements; outline osm:way/483232327 historic=(none; chosen by its Wikidata id) Q3408965 21 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovenia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
