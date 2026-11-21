# Torri della Spiga

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torri-della-spiga-q30133635` |
| Coordinates | 40.12438, 16.21034 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.12438/16.21034)) |
| Wikidata | [Q30133635](https://www.wikidata.org/wiki/Q30133635) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Chiaromonte |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 360 elements (outline 1, marker 3, road 167, building 230, wall 25, zone 6, retaining-wall 55).

Evidence: documented 0, mapped 360, inferred 0, derived 0; heights documented 0, inferred 0, unknown 200.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/867090549 historic=castle 388 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 230 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 167 mapped (trace size budget); minor lanes are not drawn
- origin moved 387 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.12438/16.21034) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=1; wikidata:Q30133635 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 360 elements); data/traces/torri-della-spiga-q30133635.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
