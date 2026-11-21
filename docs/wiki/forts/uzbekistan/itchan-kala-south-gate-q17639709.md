# Itchan Kala south gate

> Uzbekistan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `itchan-kala-south-gate-q17639709` |
| Coordinates | 41.37486, 60.35969 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.37486/60.35969)) |
| Wikidata | [Q17639709](https://www.wikidata.org/wiki/Q17639709) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|architectural landmark |
| Administrative area | Khiva |
| Designations | object of tangible cultural heritage of Uzbekistan |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `heritage` | https://whc.unesco.org/en/list/543 |

## What the model contains

Tier **T1**, status `outline+walls`, 310 elements (outline 1, marker 9, road 234, wall 20, building 183, zone 6, waterway 1, retaining-wall 1, water 2).

Evidence: documented 0, mapped 310, inferred 0, derived 0; heights documented 105, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/185036984 historic=castle Q535577 395 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 183 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 234 mapped (trace size budget); minor lanes are not drawn
- origin moved 407 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.37486/60.35969) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|architectural landmark; sitelinks=9; wikidata:Q17639709 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/itchan-kala-south-gate-q17639709.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/uzbekistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
