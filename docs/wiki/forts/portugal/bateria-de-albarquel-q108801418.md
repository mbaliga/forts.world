# Bateria de Albarquel

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bateria-de-albarquel-q108801418` |
| Coordinates | 38.5119, -8.91296 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.5119/-8.91296)) |
| Wikidata | [Q108801418](https://www.wikidata.org/wiki/Q108801418) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage\|command post\|coastal battery |
| Administrative area | Setubal (São Julião, Nossa Senhora da Anunciada e Santa Maria da Graça) |
| Designations | heritage without legal protection |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |
| OSM `fortification_type` | sea_fort |

## What the model contains

Tier **T1**, status `outline+walls`, 55 elements (outline 1, marker 5, coastline 1, road 29, building 11, wall 5, zone 1, cliff 1, water 1).

Evidence: documented 0, mapped 55, inferred 0, derived 1; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/400463292 historic=fort Q10283772 103 m from ledger point
- origin moved 103 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":188,"medianInside":0,"medianOutside":19}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.5119/-8.91296) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage\|command post\|coastal battery; sitelinks=0; wikidata:Q108801418 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 55 elements); data/traces/bateria-de-albarquel-q108801418.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
