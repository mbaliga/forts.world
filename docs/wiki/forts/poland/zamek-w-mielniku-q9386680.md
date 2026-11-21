# Zamek w Mielniku

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zamek-w-mielniku-q9386680` |
| Coordinates | 52.3306, 23.0406 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.3306/23.0406)) |
| Wikidata | [Q9386680](https://www.wikidata.org/wiki/Q9386680) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Mielnik |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 130 elements (outline 1, marker 1, road 38, waterway 1, building 85, wall 1, zone 3).

Evidence: documented 0, mapped 130, inferred 0, derived 0; heights documented 10, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1565250473 historic=ruins Q9386680 113 m from ledger point
- origin moved 115 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.3306/23.0406) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q9386680 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 130 elements); data/traces/zamek-w-mielniku-q9386680.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
