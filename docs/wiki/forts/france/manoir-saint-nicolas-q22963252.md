# Manoir Saint-Nicolas

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manoir-saint-nicolas-q22963252` |
| Coordinates | 48.83037, -1.57404 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.83037/-1.57404)) |
| Wikidata | [Q22963252](https://www.wikidata.org/wiki/Q22963252) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|manor estate |
| Administrative area | Granville |
| Inception | C18 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline-only`, 55 elements (outline 1, building 20, cliff 1, road 29, coastline 1, zone 2, water 1).

Evidence: documented 0, mapped 55, inferred 0, derived 1; heights documented 0, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/135520067 historic=castle 658 m from ledger point
- origin moved 658 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":115,"medianInside":0,"medianOutside":21.2}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.83037/-1.57404) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|manor estate; sitelinks=2; wikidata:Q22963252 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 55 elements); data/traces/manoir-saint-nicolas-q22963252.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
