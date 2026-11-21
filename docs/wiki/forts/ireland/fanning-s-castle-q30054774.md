# Fanning's Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fanning-s-castle-q30054774` |
| Coordinates | 52.66728, -8.62205 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.66728/-8.62205)) |
| Wikidata | [Q30054774](https://www.wikidata.org/wiki/Q30054774) (CC0) |
| Wikidata class | fortification |
| Types | tower house\|national monument of Ireland |
| Administrative area | Limerick |
| Inception | 1641 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | tower |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 353 elements (outline 1, marker 3, road 186, building 296, waterway 7, zone 15, wall 57).

Evidence: documented 0, mapped 353, inferred 0, derived 0; heights documented 14, inferred 0, unknown 163.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1145221566 historic=castle Q30054774 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 296 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 186 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid
- 26 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.66728/-8.62205) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house\|national monument of Ireland; sitelinks=3; wikidata:Q30054774 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 353 elements); data/traces/fanning-s-castle-q30054774.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
