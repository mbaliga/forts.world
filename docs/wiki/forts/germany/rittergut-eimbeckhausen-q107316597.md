# Rittergut Eimbeckhausen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rittergut-eimbeckhausen-q107316597` |
| Coordinates | 52.23403, 9.42316 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.23403/9.42316)) |
| Wikidata | [Q107316597](https://www.wikidata.org/wiki/Q107316597) (CC0) |
| Wikidata class | castle |
| Types | water castle\|manor estate |
| Administrative area | Bad Münder am Deister |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 191 elements (outline 1, marker 1, road 52, building 394, waterway 11, zone 5, wall 1).

Evidence: documented 0, mapped 191, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1030853817 historic=(none; chosen by its Wikidata id) Q107316597 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 394 mapped (trace size budget); the rest of the town is not drawn
- origin moved 21 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.23403/9.42316) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; water castle\|manor estate; sitelinks=2; wikidata:Q107316597 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 243 elements); data/traces/rittergut-eimbeckhausen-q107316597.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 191 elements; outline osm:way/1030853817 historic=(none; chosen by its Wikidata id) Q107316597 21 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
