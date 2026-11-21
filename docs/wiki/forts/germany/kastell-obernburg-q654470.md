# Kastell Obernburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kastell-obernburg-q654470` |
| Coordinates | 49.8411, 9.14597 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.8411/9.14597)) |
| Wikidata | [Q654470](https://www.wikidata.org/wiki/Q654470) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|castrum\|ancient Roman structure |
| Administrative area | Obernburg am Main |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |
| OSM `heritage` | yes |
| OSM `description` | Runder Turm Teil der Stadtbefestigung in Obernburg am Main |
| OSM `website` | https://www.hvv-obernburg.de/html/stadtbefestigung.html#RunderTurm |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 7, road 158, water 1, building 539, wall 13, waterway 1, retaining-wall 1, zone 3).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 0, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/458483013 historic=yes 78 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 539 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 158 mapped (trace size budget); minor lanes are not drawn
- origin moved 78 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.8411/9.14597) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|castrum\|ancient Roman structure; sitelinks=4; wikidata:Q654470 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/kastell-obernburg-q654470.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
