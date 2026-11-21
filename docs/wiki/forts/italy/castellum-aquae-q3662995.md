# Castellum aquae

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castellum-aquae-q3662995` |
| Coordinates | 40.75322, 14.48417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.75322/14.48417)) |
| Wikidata | [Q3662995](https://www.wikidata.org/wiki/Q3662995) (CC0) |
| Wikidata class | fortification |
| Types | castellum aquae |
| Administrative area | Pompei |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 156 elements (outline 1, marker 56, zone 78, road 49, building 73, wall 1355).

Evidence: documented 0, mapped 156, inferred 0, derived 0; heights documented 0, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/240720603 historic=archaeological_site Q3662995 1 m from ledger point
- pruned to the outline plus 60 m: 1612 -> 156 elements
- origin moved 1 m from the ledger point to the outline centroid
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.75322/14.48417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castellum aquae; sitelinks=4; wikidata:Q3662995 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 156 elements); data/traces/castellum-aquae-q3662995.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
