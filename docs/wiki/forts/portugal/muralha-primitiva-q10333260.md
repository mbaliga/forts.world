# Muralha Primitiva

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralha-primitiva-q10333260` |
| Coordinates | 41.1431, -8.61047 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.1431/-8.61047)) |
| Wikidata | [Q10333260](https://www.wikidata.org/wiki/Q10333260) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|city walls |
| Administrative area | Cedofeita, Santo Ildefonso, Sé, Miragaia, São Nicolau e Vitória |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |
| OSM `website` | https://portodeantanho.blogspot.com/2016/11/5-muralhas.html |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 19, road 393, building 664, retaining-wall 65, wall 140, zone 31, water 4, cliff 16, waterway 2).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 34, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/696442374 historic=citywalls Q10333260 3 m from ledger point
- pruned to the outline plus 150 m: 1335 -> 652 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 271 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 227 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.1431/-8.61047) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|city walls; sitelinks=2; wikidata:Q10333260 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/muralha-primitiva-q10333260.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
