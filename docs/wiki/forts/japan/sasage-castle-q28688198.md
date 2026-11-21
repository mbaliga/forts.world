# Sasage Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sasage-castle-q28688198` |
| Coordinates | 35.38803, 139.59736 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.38803/139.59736)) |
| Wikidata | [Q28688198](https://www.wikidata.org/wiki/Q28688198) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 215 elements (outline 1, road 83, waterway 3, building 537, retaining-wall 2, water 4, zone 2).

Evidence: documented 0, mapped 215, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1263454942 historic=archaeological_site 348 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 537 mapped (trace size budget); the rest of the town is not drawn
- origin moved 346 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.38803/139.59736) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=1; wikidata:Q28688198 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 215 elements); data/traces/sasage-castle-q28688198.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
