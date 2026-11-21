# Ayton Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ayton-castle-q4831744` |
| Coordinates | 55.84557, -2.11504 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.84557/-2.11504)) |
| Wikidata | [Q4831744](https://www.wikidata.org/wiki/Q4831744) (CC0) |
| Wikidata class | fortification |
| Types | tower house\|country house |
| Administrative area | Scottish Borders |
| Designations | category A listed building |
| Wikipedia language editions | 5 |

## What the model contains

Tier **T1**, status `outline+walls`, 33 elements (outline 1, waterway 1, road 13, building 4, wall 4, zone 10).

Evidence: documented 0, mapped 33, inferred 0, derived 0; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/251610088 historic=(none; chosen by its Wikidata id) Q4831744 12 m from ledger point
- origin moved 13 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.84557/-2.11504) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house\|country house; sitelinks=5; wikidata:Q4831744 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 33 elements); data/traces/ayton-castle-q4831744.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 33 elements; outline osm:way/251610088 historic=(none; chosen by its Wikidata id) Q4831744 12 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
