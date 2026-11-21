# Castillo San José

> Chile · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-san-jose-q16490494` |
| Coordinates | -33.03867, -71.63018 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-33.03867/-71.63018)) |
| Wikidata | [Q16490494](https://www.wikidata.org/wiki/Q16490494) (CC0) |
| Wikidata class | fort |
| Types | museum\|fort\|monument |
| Administrative area | Valparaíso |
| Designations | Historical Monument of Chile |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 266 elements (outline 1, road 145, building 108, wall 2, cliff 5, waterway 3, coastline 1, zone 1).

Evidence: documented 0, mapped 266, inferred 0, derived 0; heights documented 18, inferred 0, unknown 92.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/334756681 historic=castle Q6057588 214 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 213 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-33.03867/-71.63018) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|fort\|monument; sitelinks=2; wikidata:Q16490494 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 266 elements); data/traces/castillo-san-jose-q16490494.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/chile.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
