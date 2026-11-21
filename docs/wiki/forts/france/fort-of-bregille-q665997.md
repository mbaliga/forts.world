# Fort of Bregille

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-bregille-q665997` |
| Coordinates | 47.23521, 6.04396 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.23521/6.04396)) |
| Wikidata | [Q665997](https://www.wikidata.org/wiki/Q665997) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Besançon |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 123 elements (outline 1, wall 1, road 52, zone 4, building 57, retaining-wall 7, water 1).

Evidence: documented 0, mapped 123, inferred 0, derived 0; heights documented 0, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1069941248 historic=castle Q665997 27 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.23521/6.04396) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q665997 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 123 elements); data/traces/fort-of-bregille-q665997.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
