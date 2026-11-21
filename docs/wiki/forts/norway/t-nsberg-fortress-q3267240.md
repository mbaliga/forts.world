# Tønsberg Fortress

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `t-nsberg-fortress-q3267240` |
| Coordinates | 59.27176, 10.40364 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.27176/10.40364)) |
| Wikidata | [Q3267240](https://www.wikidata.org/wiki/Q3267240) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural property |
| Administrative area | Tønsberg |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 9 |
| OSM `historic` | ruins |
| OSM `ruins` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 273 elements (outline 1, marker 2, coastline 1, road 55, wall 13, zone 4, building 196, water 1).

Evidence: documented 0, mapped 273, inferred 0, derived 1; heights documented 37, inferred 0, unknown 172.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/132344922 historic=ruins 14 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":94,"medianInside":0,"medianOutside":29.6}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.27176/10.40364) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural property; sitelinks=9; wikidata:Q3267240 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 273 elements); data/traces/t-nsberg-fortress-q3267240.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
