# Itchan Kala gates and wall

> Uzbekistan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `itchan-kala-gates-and-wall-q63845371` |
| Coordinates | 41.3813, 60.36088 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.3813/60.36088)) |
| Wikidata | [Q63845371](https://www.wikidata.org/wiki/Q63845371) (CC0) |
| Wikidata class | fort |
| Types | city walls\|city fortifications |
| Administrative area | Xorazm Region |
| Designations | part of UNESCO World Heritage Site |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | https://whc.unesco.org/en/list/543 |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 10, road 282, wall 14, building 187, zone 12, retaining-wall 1, water 2, waterway 4).

Evidence: documented 0, mapped 314, inferred 0, derived 0; heights documented 104, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/185036984 historic=castle Q535577 333 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 187 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 282 mapped (trace size budget); minor lanes are not drawn
- origin moved 320 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.3813/60.36088) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; city walls\|city fortifications; sitelinks=3; wikidata:Q63845371 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/itchan-kala-gates-and-wall-q63845371.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/uzbekistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
