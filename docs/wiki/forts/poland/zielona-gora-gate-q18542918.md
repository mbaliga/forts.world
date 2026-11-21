# Zielona Góra Gate

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zielona-gora-gate-q18542918` |
| Coordinates | 52.08367, 15.62544 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.08367/15.62544)) |
| Wikidata | [Q18542918](https://www.wikidata.org/wiki/Q18542918) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Sulechów |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | https://fotopolska.eu/7397,obiekt.html?map_z=19 |

## What the model contains

Tier **T1**, status `outline+walls`, 333 elements (outline 1, marker 7, road 135, building 184, wall 2, zone 4).

Evidence: documented 0, mapped 333, inferred 0, derived 0; heights documented 5, inferred 0, unknown 181.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/381933075 historic=castle Q30136945 397 m from ledger point
- origin moved 396 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.08367/15.62544) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q18542918 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 333 elements); data/traces/zielona-gora-gate-q18542918.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
