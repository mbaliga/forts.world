# İzmir Port Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `izmir-port-castle-q6035023` |
| Coordinates | 38.42194, 27.13306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.42194/27.13306)) |
| Wikidata | [Q6035023](https://www.wikidata.org/wiki/Q6035023) (CC0) |
| Wikidata class | fort |
| Types | fortress\|destroyed building or structure |
| Administrative area | Konak |
| Inception | 1200 |
| Wikipedia language editions | 3 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline-only`, 236 elements (outline 1, road 113, building 804, coastline 1, zone 1).

Evidence: documented 0, mapped 236, inferred 0, derived 0; heights documented 1, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15607096 historic=building Q6091380 75 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 804 mapped (trace size budget); the rest of the town is not drawn
- origin moved 78 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.42194/27.13306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|destroyed building or structure; sitelinks=3; wikidata:Q6035023 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 236 elements); data/traces/izmir-port-castle-q6035023.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
