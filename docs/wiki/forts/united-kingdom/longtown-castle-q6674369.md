# Longtown Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `longtown-castle-q6674369` |
| Coordinates | 51.95695, -2.98992 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.95695/-2.98992)) |
| Wikidata | [Q6674369](https://www.wikidata.org/wiki/Q6674369) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Longtown |
| Designations | scheduled monument |
| Wikipedia language editions | 8 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 42 elements (outline 1, road 24, waterway 1, building 8, wall 5, zone 3).

Evidence: documented 0, mapped 42, inferred 0, derived 0; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/767954990 historic=ruins 33 m from ledger point
- origin moved 34 m from the ledger point to the outline centroid
- 40 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.95695/-2.98992) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q6674369 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 42 elements); data/traces/longtown-castle-q6674369.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
