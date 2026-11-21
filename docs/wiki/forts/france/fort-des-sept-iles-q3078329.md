# Fort des Sept-Îles

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-des-sept-iles-q3078329` |
| Coordinates | 48.8791, -3.4934 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.8791/-3.4934)) |
| Wikidata | [Q3078329](https://www.wikidata.org/wiki/Q3078329) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Perros-Guirec |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 16 elements (outline 1, coastline 1, wall 6, building 1, road 5, zone 2).

Evidence: documented 0, mapped 16, inferred 0, derived 0; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/179813951 historic=fort Q3078329 62 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 63 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.8791/-3.4934) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q3078329 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 16 elements); data/traces/fort-des-sept-iles-q3078329.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
