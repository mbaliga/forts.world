# Fichte-Bunker

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fichte-bunker-q1410915` |
| Coordinates | 52.4903, 13.4125 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.4903/13.4125)) |
| Wikidata | [Q1410915](https://www.wikidata.org/wiki/Q1410915) (CC0) |
| Wikidata class | fortification |
| Types | gas holder\|air-raid shelter |
| Administrative area | Friedrichshain-Kreuzberg |
| Inception | 1883 |
| Designations | architectural heritage monument |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 203 elements (outline 1, marker 2, wall 9, road 124, building 65, zone 2).

Evidence: documented 0, mapped 203, inferred 0, derived 0; heights documented 51, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/244038460 historic=yes 468 m from ledger point
- origin moved 468 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.4903/13.4125) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gas holder\|air-raid shelter; sitelinks=3; wikidata:Q1410915 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 203 elements); data/traces/fichte-bunker-q1410915.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
