# Tvrdalj Castle

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tvrdalj-castle-q3407085` |
| Coordinates | 43.183, 16.595 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.183/16.595)) |
| Wikidata | [Q3407085](https://www.wikidata.org/wiki/Q3407085) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Stari Grad |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 388 elements (outline 1, marker 3, road 60, building 312, wall 5, water 2, zone 3, coastline 1).

Evidence: documented 0, mapped 388, inferred 0, derived 1; heights documented 1, inferred 0, unknown 317.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/91009454 historic=castle Q3407085 75 m from ledger point
- origin moved 78 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":28,"medianInside":0.1,"medianOutside":8.4}
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.183/16.595) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q3407085 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 388 elements); data/traces/tvrdalj-castle-q3407085.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
