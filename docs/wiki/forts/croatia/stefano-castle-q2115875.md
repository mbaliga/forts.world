# Štefano Castle

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stefano-castle-q2115875` |
| Coordinates | 44.0716, 15.1608 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.0716/15.1608)) |
| Wikidata | [Q2115875](https://www.wikidata.org/wiki/Q2115875) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Preko |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |
| OSM `ruins` | yes |
| OSM `website` | https://registar.kulturnadobra.hr/#/details/Z-1564 |

## What the model contains

Tier **T1**, status `outline+walls`, 26 elements (outline 1, marker 2, road 14, building 5, zone 3, wall 1).

Evidence: documented 0, mapped 26, inferred 0, derived 0; heights documented 5, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/391660667 historic=castle Q2115875 125 m from ledger point
- origin moved 125 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.0716/15.1608) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q2115875 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 26 elements); data/traces/stefano-castle-q2115875.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
