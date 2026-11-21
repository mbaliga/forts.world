# Čečovice (castle)

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cecovice-castle-q16765428` |
| Coordinates | 49.58482, 13.02073 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.58482/13.02073)) |
| Wikidata | [Q16765428](https://www.wikidata.org/wiki/Q16765428) (CC0) |
| Wikidata class | castle |
| Types | château\|fortified house |
| Administrative area | Čečovice |
| Inception | 1400 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | manor |

## What the model contains

Tier **T1**, status `outline-only`, 110 elements (outline 1, marker 3, road 19, water 2, waterway 1, zone 8, building 76).

Evidence: documented 0, mapped 110, inferred 0, derived 0; heights documented 26, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/440338515 historic=manor Q16765428 14 m from ledger point
- origin moved 15 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.58482/13.02073) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; château\|fortified house; sitelinks=2; wikidata:Q16765428 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 113 elements); data/traces/cecovice-castle-q16765428.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 110 elements; outline osm:way/440338515 historic=manor Q16765428 14 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
