# Fort of Alqueidão

> Portugal · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-alqueidao-q10284083` |
| Coordinates | 38.98719, -9.15116 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.98719/-9.15116)) |
| Wikidata | [Q10284083](https://www.wikidata.org/wiki/Q10284083) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Santo Quintino |
| Inception | 1809 |
| Designations | Included in protected site |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | sconce |
| OSM `description` | Obra Militar 14 - Linhas de Torres |

## What the model contains

Tier **T1**, status `location-only`, 61 elements (marker 5, road 43, zone 4, building 9).

Evidence: documented 0, mapped 61, inferred 0, derived 0; heights documented 1, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5736454 historic=archaeological_site Q10284083 25 m from ledger point
- site is a site relation of 16 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (369 x 283 m)
- origin moved 48 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.98719/-9.15116) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=4; wikidata:Q10284083 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 58 elements); data/traces/fort-of-alqueidao-q10284083.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
