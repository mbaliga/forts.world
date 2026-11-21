# Castle of Velica

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-velica-q108731825` |
| Coordinates | 39.75767, 22.85574 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.75767/22.85574)) |
| Wikidata | [Q108731825](https://www.wikidata.org/wiki/Q108731825) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Agia Municipality |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |

## What the model contains

Tier **T1**, status `outline+walls`, 23 elements (outline 1, marker 1, coastline 1, road 18, waterway 1, wall 1).

Evidence: documented 0, mapped 23, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1329827819 historic=archaeological_site 77 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 83 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.75767/22.85574) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q108731825 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 23 elements); data/traces/castle-of-velica-q108731825.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
