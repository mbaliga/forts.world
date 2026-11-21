# Kalisz City Walls

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kalisz-city-walls-q30906049` |
| Coordinates | 51.76461, 18.08898 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.76461/18.08898)) |
| Wikidata | [Q30906049](https://www.wikidata.org/wiki/Q30906049) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Kalisz |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, marker 48, road 300, waterway 3, building 216, zone 41, water 3, wall 49, retaining-wall 97).

Evidence: documented 0, mapped 292, inferred 0, derived 0; heights documented 1, inferred 0, unknown 175.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18234489 historic=castle Q9386531 218 m from ledger point
- pruned to the outline plus 150 m: 758 -> 450 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 118 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 181 mapped (trace size budget); minor lanes are not drawn
- origin moved 214 m from the ledger point to the outline centroid
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.76461/18.08898) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q30906049 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/kalisz-city-walls-q30906049.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
