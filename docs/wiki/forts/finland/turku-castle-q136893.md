# Turku Castle

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `turku-castle-q136893` |
| Coordinates | 60.43528, 22.22764 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.43528/22.22764)) |
| Wikidata | [Q136893](https://www.wikidata.org/wiki/Q136893) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum |
| Administrative area | Turku |
| Inception | 1300 |
| Designations | Cultural Heritage Site of National Significance\|building protected by Decree 480/85 in Finland |
| Wikipedia language editions | 31 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.turunlinna.fi |

## What the model contains

Tier **T1**, status `outline+walls`, 356 elements (outline 1, marker 1, road 231, building 53, cliff 1, zone 57, coastline 1, waterway 2, water 1, retaining-wall 7, wall 1).

Evidence: documented 0, mapped 356, inferred 0, derived 0; heights documented 29, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/466736288 historic=castle Q136893 69 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 68 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.43528/22.22764) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum; sitelinks=31; wikidata:Q136893 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 356 elements); data/traces/turku-castle-q136893.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
