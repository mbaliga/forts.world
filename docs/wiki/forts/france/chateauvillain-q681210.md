# Châteauvillain

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateauvillain-q681210` |
| Coordinates | 48.03504, 4.91777 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.03504/4.91777)) |
| Wikidata | [Q681210](https://www.wikidata.org/wiki/Q681210) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|castle\|commune of France |
| Administrative area | arrondissement of Chaumont |
| Wikipedia language editions | 39 |
| OSM `historic` | building |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 276 elements (outline 1, marker 8, building 453, wall 45, waterway 8, road 79, zone 13, retaining-wall 2).

Evidence: documented 0, mapped 276, inferred 0, derived 0; heights documented 16, inferred 0, unknown 151.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/65183235 historic=building Q22985092 56 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 453 mapped (trace size budget); the rest of the town is not drawn
- origin moved 56 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.03504/4.91777) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|castle\|commune of France; sitelinks=39; wikidata:Q681210 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 276 elements); data/traces/chateauvillain-q681210.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
