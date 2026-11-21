# Portrane Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portrane-castle-q29052252` |
| Coordinates | 53.49521, -6.11469 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.49521/-6.11469)) |
| Wikidata | [Q29052252](https://www.wikidata.org/wiki/Q29052252) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |
| OSM `ruins` | house |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 148 elements (outline 1, marker 1, road 30, zone 6, coastline 1, building 108).

Evidence: documented 0, mapped 148, inferred 0, derived 0; heights documented 50, inferred 0, unknown 59.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1344821950 historic=ruins 213 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 213 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.49521/-6.11469) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q29052252 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 148 elements); data/traces/portrane-castle-q29052252.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
