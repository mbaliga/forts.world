# Portus Adurni

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portus-adurni-q762664` |
| Coordinates | 50.8381, -1.115 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8381/-1.115)) |
| Wikidata | [Q762664](https://www.wikidata.org/wiki/Q762664) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|castrum\|ancient Roman structure |
| Administrative area | Portsmouth |
| Inception | 0300 |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/portchester-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 141 elements (outline 1, marker 2, road 41, waterway 2, coastline 2, zone 5, building 49, wall 37, water 2).

Evidence: documented 0, mapped 141, inferred 0, derived 1; heights documented 0, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29846121 historic=castle Q732249 87 m from ledger point
- origin moved 87 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":317,"medianInside":-0.3,"medianOutside":4}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8381/-1.115) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|castrum\|ancient Roman structure; sitelinks=6; wikidata:Q762664 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 141 elements); data/traces/portus-adurni-q762664.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
