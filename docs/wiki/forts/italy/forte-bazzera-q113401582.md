# Forte Bazzera

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-bazzera-q113401582` |
| Coordinates | 45.49796, 12.33053 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.49796/12.33053)) |
| Wikidata | [Q113401582](https://www.wikidata.org/wiki/Q113401582) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Venice |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 75 elements (outline 1, marker 1, water 2, road 25, building 14, zone 9, waterway 23).

Evidence: documented 0, mapped 75, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1298217574 historic=fort Q113401582 31 m from ledger point
- origin moved 34 m from the ledger point to the centre of the mapped site
- 596 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.49796/12.33053) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q113401582 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 75 elements); data/traces/forte-bazzera-q113401582.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
