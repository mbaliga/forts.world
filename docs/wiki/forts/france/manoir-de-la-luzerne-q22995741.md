# manoir de la Luzerne

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manoir-de-la-luzerne-q22995741` |
| Coordinates | 49.33257, -0.41217 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.33257/-0.41217)) |
| Wikidata | [Q22995741](https://www.wikidata.org/wiki/Q22995741) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|manor estate |
| Administrative area | Bernières-sur-Mer |
| Inception | 1500 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 134 elements (outline 1, road 32, waterway 1, zone 15, building 83, retaining-wall 1, coastline 1).

Evidence: documented 0, mapped 134, inferred 0, derived 0; heights documented 0, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/262985862 historic=castle Q22995741 6 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.33257/-0.41217) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|manor estate; sitelinks=1; wikidata:Q22995741 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 134 elements); data/traces/manoir-de-la-luzerne-q22995741.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
