# Manoir de Lossulien

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manoir-de-lossulien-q22926480` |
| Coordinates | 48.40055, -4.40098 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.40055/-4.40098)) |
| Wikidata | [Q22926480](https://www.wikidata.org/wiki/Q22926480) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|manor estate |
| Administrative area | Le Relecq-Kerhuon |
| Inception | C16 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 75 elements (outline 1, building 32, road 26, coastline 1, zone 12, water 1, wall 2).

Evidence: documented 0, mapped 75, inferred 0, derived 0; heights documented 4, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/42631287 historic=castle Q22926480 2 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.40055/-4.40098) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|manor estate; sitelinks=2; wikidata:Q22926480 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 75 elements); data/traces/manoir-de-lossulien-q22926480.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
