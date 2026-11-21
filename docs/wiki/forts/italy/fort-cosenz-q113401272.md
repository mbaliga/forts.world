# Fort Cosenz

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-cosenz-q113401272` |
| Coordinates | 45.52539, 12.28513 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.52539/12.28513)) |
| Wikidata | [Q113401272](https://www.wikidata.org/wiki/Q113401272) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Venice |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `outline-only`, 27 elements (outline 1, road 16, zone 3, building 2, waterway 4, water 1).

Evidence: documented 0, mapped 27, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/55693993 historic=(none; chosen by its Wikidata id) Q113401272 11 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site
- 28 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.52539/12.28513) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=0; wikidata:Q113401272 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 28 elements); data/traces/fort-cosenz-q113401272.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 27 elements; outline osm:way/55693993 historic=(none; chosen by its Wikidata id) Q113401272 11 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
