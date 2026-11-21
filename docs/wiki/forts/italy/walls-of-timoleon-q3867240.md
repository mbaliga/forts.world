# Walls of Timoleon

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walls-of-timoleon-q3867240` |
| Coordinates | 37.07118, 14.22371 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.07118/14.22371)) |
| Wikidata | [Q3867240](https://www.wikidata.org/wiki/Q3867240) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|geographical feature\|archaeological site |
| Administrative area | Gela |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 328 elements (outline 1, road 135, building 238, wall 43, zone 4, retaining-wall 23, coastline 1, water 1).

Evidence: documented 0, mapped 328, inferred 0, derived 1; heights documented 65, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2449945 historic=archaeological_site Q3867240 55 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 238 mapped (trace size budget); the rest of the town is not drawn
- origin moved 66 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":170,"medianInside":0,"medianOutside":34.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.07118/14.22371) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|geographical feature\|archaeological site; sitelinks=2; wikidata:Q3867240 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 328 elements); data/traces/walls-of-timoleon-q3867240.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
