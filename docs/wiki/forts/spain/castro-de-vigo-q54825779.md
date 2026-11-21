# Castro de Vigo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castro-de-vigo-q54825779` |
| Coordinates | 42.23223, -8.72777 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.23223/-8.72777)) |
| Wikidata | [Q54825779](https://www.wikidata.org/wiki/Q54825779) (CC0) |
| Wikidata class | fort |
| Types | archaeological site\|hillfort |
| Administrative area | Vigo |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 386 elements (outline 1, marker 11, coastline 1, road 269, building 82, zone 8, wall 10, water 4).

Evidence: documented 0, mapped 386, inferred 0, derived 0; heights documented 8, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/302242173 historic=castle Q20547833 126 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 127 m from the ledger point to the outline centroid
- 18 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.23223/-8.72777) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; archaeological site\|hillfort; sitelinks=4; wikidata:Q54825779 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 386 elements); data/traces/castro-de-vigo-q54825779.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
