# Wachturm Untere Kaserngasse 5 in Neumarkt in der Oberpfalz

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wachturm-untere-kaserngasse-5-in-neumarkt-in-der-q98681854` |
| Coordinates | 49.28187, 11.45833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.28187/11.45833)) |
| Wikidata | [Q98681854](https://www.wikidata.org/wiki/Q98681854) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Neumarkt in der Oberpfalz |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 194 elements (outline 1, marker 13, road 703, building 270, waterway 22, water 5, wall 49, zone 46).

Evidence: documented 0, mapped 194, inferred 0, derived 0; heights documented 3, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/114152300 historic=citywalls Q98681854 1 m from ledger point
- pruned to the outline plus 150 m: 1109 -> 605 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 138 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 413 mapped (trace size budget); minor lanes are not drawn
- 17 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.28187/11.45833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=0; wikidata:Q98681854 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 194 elements); data/traces/wachturm-untere-kaserngasse-5-in-neumarkt-in-der-q98681854.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
