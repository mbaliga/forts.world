# Bastion Cornaro in Split

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastion-cornaro-in-split-q65152489` |
| Coordinates | 43.5104, 16.44054 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.5104/16.44054)) |
| Wikidata | [Q65152489](https://www.wikidata.org/wiki/Q65152489) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|bastion\|bastion |
| Administrative area | Split |
| Inception | 1664 |
| Designations | Register of Cultural Goods of Croatia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 226 elements (outline 1, marker 12, road 308, building 229, zone 91, wall 18, coastline 2, retaining-wall 9, water 1).

Evidence: documented 0, mapped 226, inferred 0, derived 0; heights documented 25, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/124199047 historic=castle Q65141858 203 m from ledger point
- pruned to the outline plus 150 m: 671 -> 455 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 168 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 201 mapped (trace size budget); minor lanes are not drawn
- origin moved 203 m from the ledger point to the centre of the mapped site
- 18 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.5104/16.44054) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|bastion\|bastion; sitelinks=2; wikidata:Q65152489 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 226 elements); data/traces/bastion-cornaro-in-split-q65152489.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
