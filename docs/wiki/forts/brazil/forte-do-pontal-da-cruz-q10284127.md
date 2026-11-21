# Forte do Pontal da Cruz

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-do-pontal-da-cruz-q10284127` |
| Coordinates | -23.78058, -45.39707 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-23.78058/-45.39707)) |
| Wikidata | [Q10284127](https://www.wikidata.org/wiki/Q10284127) (CC0) |
| Wikidata class | fort |
| Types | fort\|destroyed building or structure |
| Administrative area | São Paulo |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 16 elements (outline 1, road 11, coastline 1, building 2, water 1).

Evidence: documented 0, mapped 16, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1118199704 historic=yes 758 m from ledger point
- origin moved 764 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":46,"medianInside":22,"medianOutside":5}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-23.78058/-45.39707) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|destroyed building or structure; sitelinks=2; wikidata:Q10284127 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 16 elements); data/traces/forte-do-pontal-da-cruz-q10284127.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
