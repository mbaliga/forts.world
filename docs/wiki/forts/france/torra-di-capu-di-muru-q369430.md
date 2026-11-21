# Torra di Capu di Muru

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torra-di-capu-di-muru-q369430` |
| Coordinates | 41.74986, 8.67655 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.74986/8.67655)) |
| Wikidata | [Q369430](https://www.wikidata.org/wiki/Q369430) (CC0) |
| Wikidata class | fort |
| Types | fort\|Genoese towers in Corsica |
| Administrative area | Coti-Chiavari |
| Inception | C16 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 12 elements (outline 1, road 5, coastline 1, cliff 1, zone 1, waterway 1, water 2).

Evidence: documented 0, mapped 12, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/66695696 historic=fort Q369430 1 m from ledger point
- sea-0: DEM check ok {"cells":30,"medianInside":0.1,"medianOutside":61.1}
- sea-1: DEM check ok {"cells":19,"medianInside":0.2,"medianOutside":59.3}
- 22 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.74986/8.67655) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|Genoese towers in Corsica; sitelinks=5; wikidata:Q369430 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 12 elements); data/traces/torra-di-capu-di-muru-q369430.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
