# Tvrz Dolany

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tvrz-dolany-q33405649` |
| Coordinates | 49.44273, 13.25067 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.44273/13.25067)) |
| Wikidata | [Q33405649](https://www.wikidata.org/wiki/Q33405649) (CC0) |
| Wikidata class | fort |
| Types | fortified house |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | manor |

## What the model contains

Tier **T1**, status `outline-only`, 180 elements (outline 1, marker 1, road 31, waterway 7, building 128, zone 11, water 1).

Evidence: documented 0, mapped 180, inferred 0, derived 0; heights documented 50, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/141116286 historic=manor Q33405649 12 m from ledger point
- origin moved 13 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.44273/13.25067) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified house; sitelinks=2; wikidata:Q33405649 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 182 elements); data/traces/tvrz-dolany-q33405649.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 180 elements; outline osm:way/141116286 historic=manor Q33405649 12 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
