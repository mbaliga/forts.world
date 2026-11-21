# Manoir de Vauville

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manoir-de-vauville-q3286295` |
| Coordinates | 49.6356, -1.84514 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.6356/-1.84514)) |
| Wikidata | [Q3286295](https://www.wikidata.org/wiki/Q3286295) (CC0) |
| Wikidata class | fort |
| Types | fortified house |
| Administrative area | Vauville |
| Inception | 1200 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 211 elements (outline 1, marker 1, road 45, zone 1, building 155, coastline 1, waterway 3, wall 1, water 3).

Evidence: documented 0, mapped 211, inferred 0, derived 0; heights documented 0, inferred 0, unknown 156.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/153752277 historic=castle Q3286295 7 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.6356/-1.84514) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified house; sitelinks=2; wikidata:Q3286295 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 211 elements); data/traces/manoir-de-vauville-q3286295.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
