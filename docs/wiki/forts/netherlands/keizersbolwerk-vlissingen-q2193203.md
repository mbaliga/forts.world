# Keizersbolwerk, Vlissingen

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `keizersbolwerk-vlissingen-q2193203` |
| Coordinates | 51.43965, 3.57496 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.43965/3.57496)) |
| Wikidata | [Q2193203](https://www.wikidata.org/wiki/Q2193203) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|fortification |
| Administrative area | Vlissingen |
| Inception | 1811 |
| Designations | Rijksmonument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `description` | een stenen bastion met hoge gemetselde facen en flanken, waarvan de eerste steen gelegd is in 1548; in de linker flank drie geschutspoorten en twee embrasures |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, marker 13, road 99, coastline 4, water 4, waterway 7, building 150, wall 4, retaining-wall 8, zone 2).

Evidence: documented 0, mapped 292, inferred 0, derived 1; heights documented 8, inferred 0, unknown 154.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3682908 historic=castle Q2193203 2 m from ledger point
- sea-0: DEM check ok {"cells":210,"medianInside":-5,"medianOutside":4.1}
- 627 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.43965/3.57496) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|fortification; sitelinks=2; wikidata:Q2193203 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/keizersbolwerk-vlissingen-q2193203.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
