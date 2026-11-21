# Walled town of Trebinje

> Bosnia & Herzegovina · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walled-town-of-trebinje-q139715556` |
| Coordinates | 42.71094, 18.34699 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.71094/18.34699)) |
| Wikidata | [Q139715556](https://www.wikidata.org/wiki/Q139715556) (CC0) |
| Wikidata class | fort |
| Types | fortified town\|town centre |
| Administrative area | City of Trebinje |
| Designations | National Monuments of Bosnia and Herzegovina |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 5, road 146, waterway 1, building 244, wall 8, zone 14).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 5, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/849819599 historic=yes 74 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 244 mapped (trace size budget); the rest of the town is not drawn
- origin moved 75 m from the ledger point to the centre of the mapped site
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.71094/18.34699) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified town\|town centre; sitelinks=1; wikidata:Q139715556 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/walled-town-of-trebinje-q139715556.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bosnia-herzegovina.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
