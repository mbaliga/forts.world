# Walton Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walton-castle-q646351` |
| Coordinates | 51.4518, -2.84248 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.4518/-2.84248)) |
| Wikidata | [Q646351](https://www.wikidata.org/wiki/Q646351) (CC0) |
| Wikidata class | fort |
| Types | hillfort |
| Administrative area | Clevedon |
| Designations | Grade II listed building |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 52 elements (outline 1, coastline 1, road 25, building 18, wall 5, zone 2).

Evidence: documented 0, mapped 52, inferred 0, derived 0; heights documented 0, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/178368893 historic=(none; chosen by its Wikidata id) Q646351 16 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 17 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.4518/-2.84248) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort; sitelinks=3; wikidata:Q646351 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 53 elements); data/traces/walton-castle-q646351.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 52 elements; outline osm:way/178368893 historic=(none; chosen by its Wikidata id) Q646351 16 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
