# Del Fango Redoubt

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `del-fango-redoubt-q20639027` |
| Coordinates | 35.8415, 14.54558 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.8415/14.54558)) |
| Wikidata | [Q20639027](https://www.wikidata.org/wiki/Q20639027) (CC0) |
| Wikidata class | fort |
| Types | redoubt |
| Administrative area | Marsaxlokk |
| Inception | 1715 |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 2 |
| OSM `description` | Megalithic Site which was later used as a Punic Temple, and later used as a Christian basilica. |

## What the model contains

Tier **T1**, status `outline+walls`, 39 elements (outline 1, coastline 1, road 16, wall 7, building 10, zone 3, water 1).

Evidence: documented 0, mapped 39, inferred 0, derived 0; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/386959624 historic=archaeological_site Q7687070 752 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 750 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.8415/14.54558) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt; sitelinks=2; wikidata:Q20639027 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 39 elements); data/traces/del-fango-redoubt-q20639027.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
