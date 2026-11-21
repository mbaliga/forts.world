# São Marcelo Fort

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sao-marcelo-fort-q3078258` |
| Coordinates | -12.96992, -38.51785 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-12.96992/-38.51785)) |
| Wikidata | [Q3078258](https://www.wikidata.org/wiki/Q3078258) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|museum\|historic site\|sea fort |
| Administrative area | Salvador |
| Inception | 2006 |
| Designations | heritage asset listed by IPHAN\|Heritage of Portuguese Influence |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 5 elements (outline 1, coastline 1, zone 1, building 1, road 1).

Evidence: documented 0, mapped 5, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18051816 historic=castle Q3078258 8 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 6 m from the ledger point to the outline centroid
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-12.96992/-38.51785) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|museum\|historic site\|sea fort; sitelinks=8; wikidata:Q3078258 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 5 elements); data/traces/sao-marcelo-fort-q3078258.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
