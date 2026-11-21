# Castillo San Pedro de Alcántara

> Chile · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-san-pedro-de-alcantara-q16490489` |
| Coordinates | -39.88944, -73.39444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-39.88944/-73.39444)) |
| Wikidata | [Q16490489](https://www.wikidata.org/wiki/Q16490489) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Corral |
| Designations | Historical Monument of Chile |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 41 elements (outline 1, marker 2, coastline 1, road 5, wall 1, zone 3, building 27, water 1).

Evidence: documented 0, mapped 41, inferred 0, derived 1; heights documented 0, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/84880193 historic=castle Q16490489 290 m from ledger point
- origin moved 291 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":916,"medianInside":0.4,"medianOutside":30}
- 21 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-39.88944/-73.39444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q16490489 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 41 elements); data/traces/castillo-san-pedro-de-alcantara-q16490489.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/chile.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
