# City Walls of Hvar

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-hvar-q31871291` |
| Coordinates | 43.17321, 16.4436 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.17321/16.4436)) |
| Wikidata | [Q31871291](https://www.wikidata.org/wiki/Q31871291) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Hvar |
| Inception | 1500 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, road 77, building 267, zone 3, wall 6, coastline 1).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 1, inferred 0, unknown 272.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/164912693 historic=castle Q42020849 212 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 212 m from the ledger point to the outline centroid
- 22 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.17321/16.4436) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q31871291 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/city-walls-of-hvar-q31871291.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
