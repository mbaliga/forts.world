# Fort du Moulin

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-du-moulin-q3078357` |
| Coordinates | 43.0106, 6.38111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.0106/6.38111)) |
| Wikidata | [Q3078357](https://www.wikidata.org/wiki/Q3078357) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Hyères |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 64 elements (outline 1, coastline 2, road 23, building 24, cliff 7, wall 4, zone 1, retaining-wall 2).

Evidence: documented 0, mapped 64, inferred 0, derived 0; heights documented 2, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/37711835 historic=castle Q3078357 10 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 11 m from the ledger point to the centre of the mapped site
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.0106/6.38111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q3078357 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 64 elements); data/traces/fort-du-moulin-q3078357.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
