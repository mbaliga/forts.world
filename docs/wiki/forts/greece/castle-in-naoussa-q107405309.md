# Castle in Naoussa

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-in-naoussa-q107405309` |
| Coordinates | 37.12574, 25.23742 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.12574/25.23742)) |
| Wikidata | [Q107405309](https://www.wikidata.org/wiki/Q107405309) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Paros Municipality |
| Designations | protected building in Greece |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 160 elements (outline 1, marker 1, road 53, coastline 2, water 4, waterway 3, building 95, zone 1).

Evidence: documented 0, mapped 160, inferred 0, derived 2; heights documented 0, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/516603778 historic=castle Q107405309 1 m from ledger point
- sea-0: DEM check ok {"cells":301,"medianInside":0,"medianOutside":5}
- sea-1: DEM check failed {"cells":400,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.12574/25.23742) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=1; wikidata:Q107405309 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 160 elements); data/traces/castle-in-naoussa-q107405309.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
