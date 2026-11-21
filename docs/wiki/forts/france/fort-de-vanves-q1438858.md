# Fort de Vanves

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-vanves-q1438858` |
| Coordinates | 48.81167, 2.28944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.81167/2.28944)) |
| Wikidata | [Q1438858](https://www.wikidata.org/wiki/Q1438858) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Malakoff |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 280 elements (outline 1, marker 1, road 571, zone 2, building 869, wall 4, retaining-wall 2).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 9, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33472852 historic=(none; chosen by its Wikidata id) Q1438858 24 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 869 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 571 mapped (trace size budget); minor lanes are not drawn
- origin moved 30 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.81167/2.28944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q1438858 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 172 elements); data/traces/fort-de-vanves-q1438858.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 280 elements; outline osm:way/33472852 historic=(none; chosen by its Wikidata id) Q1438858 24 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
