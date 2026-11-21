# Desmond Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `desmond-castle-q3752910` |
| Coordinates | 51.7075, -8.53056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.7075/-8.53056)) |
| Wikidata | [Q3752910](https://www.wikidata.org/wiki/Q3752910) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | County Cork |
| Inception | 1500 |
| Designations | national monument of Ireland |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `description` | French Prison |
| OSM `website` | https://www.heritageireland.ie/en/south-west/desmondcastle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 263 elements (outline 1, marker 4, road 130, building 354, coastline 1, zone 2, waterway 1, wall 4).

Evidence: documented 0, mapped 263, inferred 0, derived 0; heights documented 0, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/882121818 historic=castle Q3752910 398 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 354 mapped (trace size budget); the rest of the town is not drawn
- origin moved 397 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.7075/-8.53056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=7; wikidata:Q3752910 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 263 elements); data/traces/desmond-castle-q3752910.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
