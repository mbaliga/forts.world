# Karaka fort

> Tunisia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `karaka-fort-q42599356` |
| Coordinates | 36.81444, 10.30364 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.81444/10.30364)) |
| Wikidata | [Q42599356](https://www.wikidata.org/wiki/Q42599356) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|military base\|bagno |
| Administrative area | La Goulette |
| Inception | 1535 |
| Designations | listed monument of Tunisia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 262 elements (outline 1, road 109, building 129, zone 17, wall 4, coastline 1, water 1).

Evidence: documented 0, mapped 262, inferred 0, derived 1; heights documented 9, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1354798 historic=castle Q42599356 12 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":16,"medianInside":0.5,"medianOutside":3.2}
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.81444/10.30364) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|military base\|bagno; sitelinks=3; wikidata:Q42599356 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 262 elements); data/traces/karaka-fort-q42599356.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
