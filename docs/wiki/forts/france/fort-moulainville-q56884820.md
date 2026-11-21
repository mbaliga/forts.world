# Fort Moulainville

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-moulainville-q56884820` |
| Coordinates | 49.16793, 5.48454 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.16793/5.48454)) |
| Wikidata | [Q56884820](https://www.wikidata.org/wiki/Q56884820) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Moulainville |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 31 elements (outline 1, road 23, zone 1, retaining-wall 6).

Evidence: documented 0, mapped 31, inferred 0, derived 0; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/417173510 historic=(none; chosen by its Wikidata id) Q56884820 30 m from ledger point
- origin moved 29 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.16793/5.48454) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=3; wikidata:Q56884820 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 23 elements); data/traces/fort-moulainville-q56884820.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 31 elements; outline osm:way/417173510 historic=(none; chosen by its Wikidata id) Q56884820 30 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
