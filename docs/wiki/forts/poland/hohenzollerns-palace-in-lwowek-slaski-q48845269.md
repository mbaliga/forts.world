# Hohenzollerns Palace in Lwówek Śląski

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hohenzollerns-palace-in-lwowek-slaski-q48845269` |
| Coordinates | 51.10928, 15.58107 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.10928/15.58107)) |
| Wikidata | [Q48845269](https://www.wikidata.org/wiki/Q48845269) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Lwówek Śląski |
| Inception | 1852 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 249 elements (outline 1, marker 15, road 523, building 262, wall 66, waterway 9, zone 75, retaining-wall 5).

Evidence: documented 0, mapped 249, inferred 0, derived 0; heights documented 50, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1225621444 historic=citywalls 79 m from ledger point
- pruned to the outline plus 150 m: 956 -> 548 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 155 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 285 mapped (trace size budget); minor lanes are not drawn
- origin moved 79 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.10928/15.58107) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=2; wikidata:Q48845269 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 249 elements); data/traces/hohenzollerns-palace-in-lwowek-slaski-q48845269.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
