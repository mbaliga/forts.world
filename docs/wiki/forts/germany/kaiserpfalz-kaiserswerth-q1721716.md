# Kaiserpfalz Kaiserswerth

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kaiserpfalz-kaiserswerth-q1721716` |
| Coordinates | 51.29956, 6.73139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.29956/6.73139)) |
| Wikidata | [Q1721716](https://www.wikidata.org/wiki/Q1721716) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Düsseldorf |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, marker 1, road 110, waterway 2, building 219, zone 9, wall 13).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 37, inferred 0, unknown 195.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/151939905 historic=castle Q1721716 34 m from ledger point
- origin moved 32 m from the ledger point to the outline centroid
- 30 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.29956/6.73139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q1721716 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/kaiserpfalz-kaiserswerth-q1721716.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
