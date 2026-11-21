# Vesterport

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vesterport-q31193566` |
| Coordinates | 55.09664, 10.24026 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.09664/10.24026)) |
| Wikidata | [Q31193566](https://www.wikidata.org/wiki/Q31193566) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Faaborg-Midtfyn Municipality |
| Inception | 1470 |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |
| OSM `heritage` | 2 |
| OSM `description` | Byport fra 1400-tallet |

## What the model contains

Tier **T1**, status `outline-only`, 264 elements (outline 1, coastline 1, road 120, building 141, water 1).

Evidence: documented 0, mapped 264, inferred 0, derived 1; heights documented 3, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/609414199 historic=city_gate Q31193566 1 m from ledger point
- sea-0: DEM check ok {"cells":17,"medianInside":0.8,"medianOutside":3.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.09664/10.24026) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q31193566 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 264 elements); data/traces/vesterport-q31193566.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 264 elements; outline osm:way/609414199 historic=city_gate Q31193566 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
