# Fort Neuf de Vincennes

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-neuf-de-vincennes-q3078275` |
| Coordinates | 48.84221, 2.44208 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.84221/2.44208)) |
| Wikidata | [Q3078275](https://www.wikidata.org/wiki/Q3078275) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | 12th arrondissement of Paris |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `description` | Plus haut donjon d'Europe |
| OSM `website` | http://www.chateau-vincennes.fr |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 11, road 551, zone 115, building 305, wall 72, water 3, retaining-wall 5, waterway 6).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 32, inferred 0, unknown 75.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23032971 historic=castle Q663673 466 m from ledger point
- pruned to the outline plus 150 m: 1069 -> 871 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 244 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 470 mapped (trace size budget); minor lanes are not drawn
- origin moved 463 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.84221/2.44208) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q3078275 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/fort-neuf-de-vincennes-q3078275.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
