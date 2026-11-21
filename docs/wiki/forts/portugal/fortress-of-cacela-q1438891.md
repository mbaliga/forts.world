# Fortress of Cacela

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortress-of-cacela-q1438891` |
| Coordinates | 37.15718, -7.54563 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.15718/-7.54563)) |
| Wikidata | [Q1438891](https://www.wikidata.org/wiki/Q1438891) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage\|fort |
| Administrative area | Vila Nova de Cacela |
| Inception | 1794 |
| Designations | Included in protected site |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 107 elements (outline 1, coastline 2, road 40, zone 3, waterway 2, building 42, wall 14, retaining-wall 1, water 1).

Evidence: documented 0, mapped 107, inferred 0, derived 1; heights documented 26, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/132676392 historic=castle Q1438891 5 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":109,"medianInside":0,"medianOutside":16}
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.15718/-7.54563) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage\|fort; sitelinks=6; wikidata:Q1438891 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 107 elements); data/traces/fortress-of-cacela-q1438891.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
