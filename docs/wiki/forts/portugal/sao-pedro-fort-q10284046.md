# São Pedro Fort

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sao-pedro-fort-q10284046` |
| Coordinates | 38.80028, -27.26194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.80028/-27.26194)) |
| Wikidata | [Q10284046](https://www.wikidata.org/wiki/Q10284046) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Azores |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 57 elements (outline 1, road 8, zone 7, building 35, wall 1, coastline 4, water 1).

Evidence: documented 0, mapped 57, inferred 0, derived 1; heights documented 1, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1019381173 historic=castle Q10284046 184 m from ledger point
- origin moved 186 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":85,"medianInside":0.1,"medianOutside":16.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.80028/-27.26194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q10284046 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 57 elements); data/traces/sao-pedro-fort-q10284046.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
