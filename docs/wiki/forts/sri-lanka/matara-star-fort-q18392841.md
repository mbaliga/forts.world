# Matara Star Fort

> Sri Lanka · Matara · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `matara-star-fort-q18392841` |
| Coordinates | 5.94806, 80.5483 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/5.94806/80.5483)) |
| Wikidata | [Q18392841](https://www.wikidata.org/wiki/Q18392841) (CC0) |
| Wikidata class | fort |
| Types | star fort |
| Administrative area | Matara |
| Inception | 1763 |
| Wikipedia language editions | 6 |
| Programme catalogue | confidence medium, significance rank 3297; sources wikidata:Q18392841;wikidata:Q55612779 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 183 elements (outline 1, marker 2, road 63, coastline 1, building 113, waterway 1, wall 2).

Evidence: documented 0, mapped 183, inferred 0, derived 0; heights documented 4, inferred 0, unknown 111.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5391832 historic=fort Q18392841 30 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 31 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/5.94806/80.5483) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=3297; sources=2 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 183 elements); data/traces/matara-star-fort-q18392841.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sri-lanka.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
