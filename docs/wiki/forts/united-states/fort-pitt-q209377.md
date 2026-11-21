# Fort Pitt

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-pitt-q209377` |
| Coordinates | 40.4411, -80.009 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.4411/-80.009)) |
| Wikidata | [Q209377](https://www.wikidata.org/wiki/Q209377) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Pittsburgh |
| Inception | 1759 |
| Wikipedia language editions | 8 |
| OSM `historic` | building |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 194 elements (outline 1, marker 2, road 139, building 6, zone 16, retaining-wall 22, water 1, waterway 1, wall 6).

Evidence: documented 0, mapped 194, inferred 0, derived 0; heights documented 1, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/109499956 historic=building Q5471838 70 m from ledger point
- origin moved 71 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.4411/-80.009) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=8; wikidata:Q209377 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 194 elements); data/traces/fort-pitt-q209377.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
