# Glannoventa

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `glannoventa-q16839208` |
| Coordinates | 54.3496, -3.40463 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.3496/-3.40463)) |
| Wikidata | [Q16839208](https://www.wikidata.org/wiki/Q16839208) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|archaeological site\|human settlement\|ancient Roman structure |
| Administrative area | Muncaster |
| Designations | part of UNESCO World Heritage Site\|scheduled monument |
| UNESCO WHC id | 430ter-113 |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 28 elements (outline 1, marker 1, coastline 3, road 14, building 2, wall 4, waterway 2, water 1).

Evidence: documented 0, mapped 28, inferred 0, derived 1; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/534028462 historic=archaeological_site Q3108515 132 m from ledger point
- origin moved 128 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":67,"medianInside":0.5,"medianOutside":15.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.3496/-3.40463) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|archaeological site\|human settlement\|ancient Roman structure; sitelinks=5; wikidata:Q16839208 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 28 elements); data/traces/glannoventa-q16839208.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
