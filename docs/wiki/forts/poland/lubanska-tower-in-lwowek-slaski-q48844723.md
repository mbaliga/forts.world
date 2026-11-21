# Lubańska Tower in Lwówek Śląski

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lubanska-tower-in-lwowek-slaski-q48844723` |
| Coordinates | 51.10996, 15.58163 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.10996/15.58163)) |
| Wikidata | [Q48844723](https://www.wikidata.org/wiki/Q48844723) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Lwówek Śląski |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 241 elements (outline 1, marker 12, road 506, building 269, wall 63, waterway 9, zone 72, retaining-wall 4).

Evidence: documented 0, mapped 241, inferred 0, derived 0; heights documented 51, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/394375858 historic=citywalls 1 m from ledger point
- pruned to the outline plus 150 m: 936 -> 542 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 151 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 290 mapped (trace size budget); minor lanes are not drawn
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.10996/15.58163) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q48844723 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 241 elements); data/traces/lubanska-tower-in-lwowek-slaski-q48844723.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
