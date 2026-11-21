# Maya Ruins of Tulum

> Mexico · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `maya-ruins-of-tulum-q725883` |
| Coordinates | 20.21468, -87.42937 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/20.21468/-87.42937)) |
| Wikidata | [Q725883](https://www.wikidata.org/wiki/Q725883) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|archaeological site |
| Administrative area | Tulum Municipality |
| Inception | 564 |
| Wikipedia language editions | 46 |
| OSM `historic` | ruins |
| OSM `ruins` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 82 elements (outline 1, marker 1, road 39, wall 4, building 24, cliff 6, coastline 6, water 1).

Evidence: documented 0, mapped 82, inferred 0, derived 1; heights documented 0, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/160485982 historic=ruins 15 m from ledger point
- origin moved 14 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":84,"medianInside":2.7,"medianOutside":6.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/20.21468/-87.42937) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|archaeological site; sitelinks=46; wikidata:Q725883 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 82 elements); data/traces/maya-ruins-of-tulum-q725883.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/mexico.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
