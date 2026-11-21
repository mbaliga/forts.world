# Burg Kempen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-kempen-q1012638` |
| Coordinates | 51.3668, 6.42142 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.3668/6.42142)) |
| Wikidata | [Q1012638](https://www.wikidata.org/wiki/Q1012638) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Kempen |
| Inception | 1396 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `heritage` | 8 |
| OSM `description` | Rechtwinklige, zweiflügelige ehemalige Wasserburganlage aus Backstein; zweigeschossig mit Spitzbogenfriesen und drei runden Ecktürmen mit Zinnenkranz; |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, marker 18, road 215, zone 3, building 592, wall 37, water 1, retaining-wall 1).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 51, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33855164 historic=castle Q1012638 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 592 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 215 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.3668/6.42142) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q1012638 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/burg-kempen-q1012638.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
