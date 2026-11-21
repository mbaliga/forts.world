# Färbertor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `farbertor-q1272678` |
| Coordinates | 49.4474, 11.0718 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.4474/11.0718)) |
| Wikidata | [Q1272678](https://www.wikidata.org/wiki/Q1272678) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Nuremberg |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 319 elements (outline 1, marker 6, road 155, building 260, wall 32, zone 10).

Evidence: documented 0, mapped 319, inferred 0, derived 0; heights documented 105, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/212488939 historic=citywalls 15 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 260 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 155 mapped (trace size budget); minor lanes are not drawn
- origin moved 15 m from the ledger point to the centre of the mapped site
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.4474/11.0718) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q1272678 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 319 elements); data/traces/farbertor-q1272678.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
