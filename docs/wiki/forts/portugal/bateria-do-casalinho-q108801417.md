# Bateria do Casalinho

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bateria-do-casalinho-q108801417` |
| Coordinates | 38.51581, -8.91306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.51581/-8.91306)) |
| Wikidata | [Q108801417](https://www.wikidata.org/wiki/Q108801417) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage\|coastal battery |
| Administrative area | Setubal (São Julião, Nossa Senhora da Anunciada e Santa Maria da Graça) |
| Designations | heritage without legal protection |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 39 elements (outline 1, coastline 1, building 9, road 25, wall 2, water 1).

Evidence: documented 0, mapped 39, inferred 0, derived 1; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/461872026 historic=fort 405 m from ledger point
- origin moved 403 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":0.1,"medianOutside":82.1}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.51581/-8.91306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage\|coastal battery; sitelinks=0; wikidata:Q108801417 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 39 elements); data/traces/bateria-do-casalinho-q108801417.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
